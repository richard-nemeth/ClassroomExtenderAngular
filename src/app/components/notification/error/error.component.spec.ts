import {ComponentFixture, getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {ErrorComponent} from "./error.component";

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [ErrorComponent],
        providers: [
          {
            provide: MAT_SNACK_BAR_DATA,
            useValue: 'testErrorMessage'
          }
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});