import { NgModule } from '@angular/core';
import { ToastComponent } from './components/toast/toast.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InputModalComponent } from './components/input-modal/input-modal.component';


@NgModule({
    declarations: [
        ToastComponent,
        InputModalComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    exports: [
        HttpClientModule,
        ReactiveFormsModule,
        ToastComponent,
        InputModalComponent
    ],
    providers: [],
})
export class SharedModule { }
