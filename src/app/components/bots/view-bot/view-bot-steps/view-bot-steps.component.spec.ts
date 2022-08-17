import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBotStepsComponent } from './view-bot-steps.component';

describe('ViewBotStepsComponent', () => {
  let component: ViewBotStepsComponent;
  let fixture: ComponentFixture<ViewBotStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBotStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBotStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
