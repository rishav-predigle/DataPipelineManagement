import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMinerComponent } from './edit-miner.component';

describe('EditMinerComponent', () => {
  let component: EditMinerComponent;
  let fixture: ComponentFixture<EditMinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
