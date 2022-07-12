import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWizkidComponent } from './new-wizkid.component';

describe('NewWizkidComponent', () => {
  let component: NewWizkidComponent;
  let fixture: ComponentFixture<NewWizkidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWizkidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWizkidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
