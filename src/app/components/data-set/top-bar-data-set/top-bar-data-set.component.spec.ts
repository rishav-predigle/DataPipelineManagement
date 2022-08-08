import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarDataSetComponent } from './top-bar-data-set.component';

describe('TopBarDataSetComponent', () => {
  let component: TopBarDataSetComponent;
  let fixture: ComponentFixture<TopBarDataSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarDataSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
