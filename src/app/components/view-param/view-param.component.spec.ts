import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewParamComponent } from './view-param.component';

describe('ViewParamComponent', () => {
  let component: ViewParamComponent;
  let fixture: ComponentFixture<ViewParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewParamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
