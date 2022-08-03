import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStageComponent } from './data-stage.component';

describe('DataStageComponent', () => {
  let component: DataStageComponent;
  let fixture: ComponentFixture<DataStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
