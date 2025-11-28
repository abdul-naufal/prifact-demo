import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSyllabusComponent } from './manage-syllabus.component';

describe('ManageSyllabusComponent', () => {
  let component: ManageSyllabusComponent;
  let fixture: ComponentFixture<ManageSyllabusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageSyllabusComponent]
    });
    fixture = TestBed.createComponent(ManageSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
