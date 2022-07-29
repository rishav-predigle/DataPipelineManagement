import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMinerComponent } from './view-miner.component';

describe('ViewMinerComponent', () => {
  let component: ViewMinerComponent;
  let fixture: ComponentFixture<ViewMinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
