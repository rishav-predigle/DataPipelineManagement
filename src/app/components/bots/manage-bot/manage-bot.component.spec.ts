import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBotComponent } from './manage-bot.component';

describe('ManageBotComponent', () => {
  let component: ManageBotComponent;
  let fixture: ComponentFixture<ManageBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
