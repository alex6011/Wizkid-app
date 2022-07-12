import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizkidItemComponent } from './wizkid-item.component';

describe('WizkidItemComponent', () => {
  let component: WizkidItemComponent;
  let fixture: ComponentFixture<WizkidItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizkidItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizkidItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
