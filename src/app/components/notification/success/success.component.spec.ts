import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {SuccessComponent} from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [SuccessComponent],
        providers: [
          {
            provide: MAT_SNACK_BAR_DATA,
            useValue: 'testSuccessMessage'
          }
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});