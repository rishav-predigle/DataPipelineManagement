import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarDataStageComponent } from './top-bar-data-stage.component';

describe('TopBarDataStageComponent', () => {
  let component: TopBarDataStageComponent;
  let fixture: ComponentFixture<TopBarDataStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarDataStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarDataStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
