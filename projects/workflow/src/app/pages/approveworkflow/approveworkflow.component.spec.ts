import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveworkflowComponent } from './approveworkflow.component';

describe('ApproveworkflowComponent', () => {
  let component: ApproveworkflowComponent;
  let fixture: ComponentFixture<ApproveworkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveworkflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveworkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
