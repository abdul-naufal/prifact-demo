import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSyllabusDetailComponent } from './manage-syllabus-detail.component';

describe('ManageSyllabusDetailComponent', () => {
  let component: ManageSyllabusDetailComponent;
  let fixture: ComponentFixture<ManageSyllabusDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSyllabusDetailComponent]
    });
    fixture = TestBed.createComponent(ManageSyllabusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
