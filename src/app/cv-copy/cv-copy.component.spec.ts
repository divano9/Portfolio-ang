import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCopyComponent } from './cv-copy.component';

describe('CvCopyComponent', () => {
  let component: CvCopyComponent;
  let fixture: ComponentFixture<CvCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
