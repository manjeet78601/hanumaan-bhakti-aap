import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BajrangBaanComponent } from './bajrang-baan.component';

describe('BajrangBaanComponent', () => {
  let component: BajrangBaanComponent;
  let fixture: ComponentFixture<BajrangBaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajrangBaanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BajrangBaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
