import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBotComponent } from './view-bot.component';

describe('ViewBotComponent', () => {
  let component: ViewBotComponent;
  let fixture: ComponentFixture<ViewBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
