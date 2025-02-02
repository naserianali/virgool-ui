export enum AuthTypeEnum {
    Login = 'login',
    Register = 'register',
}

export enum AuthMethodEnum {
    Phone = "phone",
    Email = "email",
    Username = "username"
}

export interface IDate {
    title: string;
    link: {
        text: string;
        to: string;
    },
    type: AuthTypeEnum;
}

export interface IProps<T> {
    data: T;
}

export interface IPayload {
    username: string;
    type: AuthTypeEnum,
    method: AuthMethodEnum,
}