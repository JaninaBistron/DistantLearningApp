import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TexttaskPage } from './texttask.page';

describe('TexttaskPage', () => {
  let component: TexttaskPage;
  let fixture: ComponentFixture<TexttaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexttaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TexttaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
