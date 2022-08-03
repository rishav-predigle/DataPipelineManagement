import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParamComponent } from './create-param.component';

describe('CreateParamComponent', () => {
  let component: CreateParamComponent;
  let fixture: ComponentFixture<CreateParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
