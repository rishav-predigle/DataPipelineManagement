import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntityComponent } from './data-entity.component';

describe('DataEntityComponent', () => {
  let component: DataEntityComponent;
  let fixture: ComponentFixture<DataEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEntityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
