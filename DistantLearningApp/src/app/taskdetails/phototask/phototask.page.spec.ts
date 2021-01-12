import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhototaskPage } from './phototask.page';

describe('PhototaskPage', () => {
  let component: PhototaskPage;
  let fixture: ComponentFixture<PhototaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhototaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhototaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
