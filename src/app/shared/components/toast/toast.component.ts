import { Component } from '@angular/core';
import { ToastService } from './toast.service';
import { IToast, ToastTypes } from '../../../models/toast.model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  data: IToast;
  toastTypes = ToastTypes;

  constructor(
    private toastService: ToastService
  ) {
    this.toastService.toast$.subscribe(data => {
      this.data = data;
      setTimeout(() => { this.data.show = false; }, 3000);
    });
  }

}
