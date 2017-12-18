import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {MenuItem} from 'primeng/components/common/api';
import {QueryService} from '../../services/query.service';

@Component({
  selector: 'gb-nav-bar',
  templateUrl: './gb-nav-bar.component.html',
  styleUrls: ['./gb-nav-bar.component.css']
})
export class GbNavBarComponent implements OnInit {

  private _items: MenuItem[];
  private _activeItem: MenuItem;

  public isDashboard = true;
  public isDataSelection = false;
  public isAnalysis = false;

  public queryName: string;
  private isUploadListenerNotAdded: boolean;

  constructor(private router: Router,
              public queryService: QueryService) {
    this.queryName = '';
    this.isUploadListenerNotAdded = true;
  }

  ngOnInit() {
    this._items = [
      {label: 'Dashboard', routerLink: '/dashboard'},
      {label: 'Data Selection', routerLink: '/data-selection'},
      {label: 'Analysis', routerLink: '/analysis'}
    ];
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let whichStep = event.urlAfterRedirects.split('/')[1].split('#')[0];
        this.updateNavbar(whichStep);
      }
    });
  }

  updateNavbar(whichStep: string) {
    this.isDashboard = (whichStep === 'dashboard' || whichStep === '');
    this.isDataSelection = (whichStep === 'data-selection');
    this.isAnalysis = (whichStep === 'analysis');

    if (this.isDashboard) {
      this._activeItem = this._items[0];
    } else if (this.isDataSelection) {
      this._activeItem = this._items[1];
    } else if (this.isAnalysis) {
      this._activeItem = this._items[2];
    }
  }

  get items(): MenuItem[] {
    return this._items;
  }

  set items(value: MenuItem[]) {
    this._items = value;
  }

  get activeItem(): MenuItem {
    return this._activeItem;
  }

  set activeItem(value: MenuItem) {
    this._activeItem = value;
  }

  /**
   * Prevent the default behavior of node drop
   * @param event
   */
  preventNodeDrop(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  importQuery() {
    let uploadElm = document.getElementById('queryFileUpload');
    if (this.isUploadListenerNotAdded) {
      uploadElm
        .addEventListener('change', this.queryFileUpload.bind(this), false);
      this.isUploadListenerNotAdded = false;
    }
    uploadElm.click();
  }

  saveQuery() {
    let name = this.queryName ? this.queryName.trim() : '';
    let queryNameIsValid = name !== '';
    if (queryNameIsValid) {
      this.queryService.saveQuery(name);
      this.queryName = '';
    } else {
      const summary = 'Please specify the query name.';
      this.queryService.alertMessages.length = 0;
      this.queryService.alertMessages.push({severity: 'warn', summary: summary, detail: ''});
    }
  }

  updateQuery() {
    // console.log(this.queryService);
    this.queryService.updateCounts_1(true);
  }

  queryFileUpload(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onload = (function (e) {
      if (file.type === 'application/json') {
        let json = JSON.parse(e.target['result']);
        let pathArray = null;
        // If the json is of standard format
        if (json['patientsQuery'] || json['observationsQuery']) {
          this.constraintService.putQuery(json);
        } else if (json['paths']) {
          pathArray = json['paths'];
        } else if (json.constructor === Array) {
          pathArray = json;
        }

        if (pathArray) {
          let query = {
            'name': 'imported temporary query',
            'patientsQuery': {'type': 'true'},
            'observationsQuery': {
              data: pathArray
            }
          };
          this.constraintService.putQuery(query);
          this.constraintService.alert('Imported concept selection in Step 2.', '', 'info');
        }
      } else if (file.type === 'text/plain' ||
        file.type === 'text/tab-separated-values' ||
        file.type === 'text/csv' ||
        file.type === '') {
        // we assume the text contains a list of subject Ids
        let query = {
          'name': 'imported temporary query',
          'patientsQuery': {
            'type': 'patient_set',
            'subjectIds': e.target['result'].split('\n')
          },
          'observationsQuery': {}
        };
        this.constraintService.putQuery(query);
        this.constraintService.alert('Imported subject selection in Step 1.', '', 'info');
      }

      // reset the input path so that it will take the same file again
      document.getElementById('queryFileUpload')['value'] = '';
    }).bind(this);
    reader.readAsText(file);
  }
}

