import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarMinerComponent } from './top-bar-miner.component';

describe('TopBarMinerComponent', () => {
  let component: TopBarMinerComponent;
  let fixture: ComponentFixture<TopBarMinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarMinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
