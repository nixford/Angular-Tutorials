import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplateDrivenComponent } from './forms-template-driven.component';

describe('FormsTemplateDrivenComponent', () => {
  let component: FormsTemplateDrivenComponent;
  let fixture: ComponentFixture<FormsTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
