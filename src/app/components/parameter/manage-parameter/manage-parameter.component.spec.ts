import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageParameterComponent } from './manage-parameter.component';

describe('ManageParameterComponent', () => {
  let component: ManageParameterComponent;
  let fixture: ComponentFixture<ManageParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
