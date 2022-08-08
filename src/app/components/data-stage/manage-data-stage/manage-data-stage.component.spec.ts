import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataStageComponent } from './manage-data-stage.component';

describe('ManageDataStageComponent', () => {
  let component: ManageDataStageComponent;
  let fixture: ComponentFixture<ManageDataStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDataStageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDataStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
