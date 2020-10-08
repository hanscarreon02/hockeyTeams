import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewnComponent } from './viewn.component';

describe('ViewnComponent', () => {
  let component: ViewnComponent;
  let fixture: ComponentFixture<ViewnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
