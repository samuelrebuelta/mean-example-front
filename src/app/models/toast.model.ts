export interface IToast {
    type: number;
    message: string;
    show?: boolean;
}

export enum ToastTypes { SUCCESS, ERROR }
