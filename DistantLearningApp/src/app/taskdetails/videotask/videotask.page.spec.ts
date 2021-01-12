import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideotaskPage } from './videotask.page';

describe('VideotaskPage', () => {
  let component: VideotaskPage;
  let fixture: ComponentFixture<VideotaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideotaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideotaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
