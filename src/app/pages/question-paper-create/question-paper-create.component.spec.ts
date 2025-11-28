import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperCreateComponent } from './question-paper-create.component';

describe('QuestionPaperCreateComponent', () => {
  let component: QuestionPaperCreateComponent;
  let fixture: ComponentFixture<QuestionPaperCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionPaperCreateComponent]
    });
    fixture = TestBed.createComponent(QuestionPaperCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
