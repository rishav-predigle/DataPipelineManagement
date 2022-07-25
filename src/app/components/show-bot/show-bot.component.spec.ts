import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBotComponent } from './show-bot.component';

describe('ShowBotComponent', () => {
  let component: ShowBotComponent;
  let fixture: ComponentFixture<ShowBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
