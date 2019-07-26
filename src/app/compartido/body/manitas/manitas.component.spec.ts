import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManitasComponent } from './manitas.component';

describe('ManitasComponent', () => {
  let component: ManitasComponent;
  let fixture: ComponentFixture<ManitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
