export interface IRegisterModel {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface ILoginModel extends IRegisterModel {
  email: string;
  password: string;
}
