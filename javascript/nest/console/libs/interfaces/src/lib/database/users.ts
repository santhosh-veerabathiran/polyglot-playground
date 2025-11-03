export interface IAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}

export interface IUser {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: IAddress;
}

export interface IGetUsers {
    page: number;
    pageSize: number;
}
