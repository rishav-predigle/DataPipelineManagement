import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarBotComponent } from './top-bar-bot.component';

describe('TopBarBotComponent', () => {
  let component: TopBarBotComponent;
  let fixture: ComponentFixture<TopBarBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
