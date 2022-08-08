import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMinerComponent } from './manage-miner.component';

describe('ManageMinerComponent', () => {
  let component: ManageMinerComponent;
  let fixture: ComponentFixture<ManageMinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageMinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
