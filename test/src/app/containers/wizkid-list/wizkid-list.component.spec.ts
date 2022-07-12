import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizkidListComponent } from './wizkid-list.component';

describe('WizkidListComponent', () => {
  let component: WizkidListComponent;
  let fixture: ComponentFixture<WizkidListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizkidListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizkidListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
