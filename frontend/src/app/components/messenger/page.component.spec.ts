import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerPageComponent } from './page.component';

describe('MessengerPageComponent', () => {
  let component: MessengerPageComponent;
  let fixture: ComponentFixture<MessengerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerPageComponent]
    });
    fixture = TestBed.createComponent(MessengerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
