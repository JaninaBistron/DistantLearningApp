import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudiotaskPage } from './audiotask.page';

describe('AudiotaskPage', () => {
  let component: AudiotaskPage;
  let fixture: ComponentFixture<AudiotaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiotaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiotaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
