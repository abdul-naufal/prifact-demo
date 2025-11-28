import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperDesignComponent } from './question-paper-design.component';

describe('QuestionPaperDesignComponent', () => {
  let component: QuestionPaperDesignComponent;
  let fixture: ComponentFixture<QuestionPaperDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionPaperDesignComponent]
    });
    fixture = TestBed.createComponent(QuestionPaperDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
