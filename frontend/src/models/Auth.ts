export interface IRegisterModel {
  fullName: string;
  email: string;
  password: string;
  phonenumber: string;
}

export interface ILoginModel extends IRegisterModel {
  email: string;
  password: string;
}
