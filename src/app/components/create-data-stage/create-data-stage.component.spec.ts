import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataStageComponent } from './create-data-stage.component';

describe('CreateDataStageComponent', () => {
  let component: CreateDataStageComponent;
  let fixture: ComponentFixture<CreateDataStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDataStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDataStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
