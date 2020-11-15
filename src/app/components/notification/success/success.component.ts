import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-success',
  templateUrl: 'success.component.html'
})
export class SuccessComponent {

  public constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
  }
}