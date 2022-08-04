import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarDataSourceComponent } from './top-bar-data-source.component';

describe('TopBarDataSourceComponent', () => {
  let component: TopBarDataSourceComponent;
  let fixture: ComponentFixture<TopBarDataSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarDataSourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
