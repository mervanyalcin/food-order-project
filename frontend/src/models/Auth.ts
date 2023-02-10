export interface IRegisterModel {
  fullName?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  jwtToken?: string;
}

export interface ILoginModel extends IRegisterModel {
  emailorphone: string;
  password: string; 
}