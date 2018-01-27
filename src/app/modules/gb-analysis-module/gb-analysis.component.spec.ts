import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GbAnalysisComponent} from './gb-analysis.component';
import {TableModule} from 'primeng/table';
import {MockComponent} from 'ng2-mock-component';

describe('GbAnalysisComponent', () => {
  let component: GbAnalysisComponent;
  let fixture: ComponentFixture<GbAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GbAnalysisComponent,
        MockComponent({selector: 'gb-cross-table'}),
      ],
      imports: [
        TableModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GbAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GbAnalysisComponent', () => {
    expect(component).toBeTruthy();
  });
});
