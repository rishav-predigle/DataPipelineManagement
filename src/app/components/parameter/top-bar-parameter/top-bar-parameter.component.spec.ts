import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarParameterComponent } from './top-bar-parameter.component';

describe('TopBarParameterComponent', () => {
  let component: TopBarParameterComponent;
  let fixture: ComponentFixture<TopBarParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarParameterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
