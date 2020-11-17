import {getTestBed, TestBed, waitForAsync} from '@angular/core/testing';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import {ErrorComponent} from '../components/notification/error/error.component';
import {LoadingComponent} from '../components/notification/loading/loading.component';
import {SuccessComponent} from '../components/notification/success/success.component';
import {SnackBarConstants} from '../constants/snackbar.constants';

import {NotificationService} from "./notification.service";

describe('NotificationService', () => {
  let notificationService: NotificationService;
  let matSnackBar: MatSnackBar;
  let injector: TestBed;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [
        NotificationService,
        MatSnackBar,
      ],
      imports: [MatSnackBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    notificationService = injector.inject(NotificationService);
    matSnackBar = injector.inject(MatSnackBar);
  });

  it('should open a component for error', () => {
    const spy = spyOn(matSnackBar, 'openFromComponent');

    notificationService.showErrorMessage('message');

    expect(spy).toHaveBeenCalledWith(
      ErrorComponent,
      {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
        data: 'message'
      }
    );
  });

  it('should open a component for showSuccessMessage', () => {
    const spy = spyOn(matSnackBar, 'openFromComponent');

    notificationService.showSuccessMessage('message');

    expect(spy).toHaveBeenCalledWith(
      SuccessComponent,
      {
        duration: 5000,
        horizontalPosition: "center",
        verticalPosition: "bottom",
        data: 'message'
      }
    );
  });

  it('should open a component for showLoadingSnackbar', () => {
    const spy = spyOn(matSnackBar, 'openFromComponent');

    notificationService.showLoadingSnackbar();

    expect(spy).toHaveBeenCalledWith(
      LoadingComponent, SnackBarConstants.LOADING_CONFIG
    );
  });
});