import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataSetComponent } from './manage-data-set.component';

describe('ManageDataSetComponent', () => {
  let component: ManageDataSetComponent;
  let fixture: ComponentFixture<ManageDataSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDataSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
