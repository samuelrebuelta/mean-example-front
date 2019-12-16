import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IToast } from '../../../models/toast.model';

@Injectable()
export class ToastService {
    private toastSource = new Subject<IToast>();
    toast$ = this.toastSource.asObservable();

    sendMessage(toast: IToast) { toast.show = true; this.toastSource.next(toast); }
}
