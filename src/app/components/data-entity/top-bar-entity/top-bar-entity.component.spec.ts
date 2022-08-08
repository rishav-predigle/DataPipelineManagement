import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarEntityComponent } from './top-bar-entity.component';

describe('TopBarEntityComponent', () => {
  let component: TopBarEntityComponent;
  let fixture: ComponentFixture<TopBarEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
