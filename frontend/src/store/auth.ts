import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IRegisterModel, ILoginModel } from "models";

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  isRegisterSuccess: boolean = false;
  register = async (datas: IRegisterModel) => {
    const registerFormData: IRegisterModel = {
      fullName: datas.fullName,
      email: datas.email,
      password: datas.password,
      phoneNumber: datas.phoneNumber,
      jwtToken: datas.jwtToken,
    };

    try {
      const res = await axios.post("/auth", registerFormData);
      if (res.status === 200) {
        window.location.href = "/login";
      }
    } catch (error) {
      this.isRegisterSuccess = false;
      console.log("Registration has occur an error!");
    }
  };


  isLoginSuccess: boolean = false;
  login = async (datas: ILoginModel) => {
    const loginFormData: ILoginModel = {
      emailorphone: datas.emailorphone, 
      password: datas.password
    };

    try {
      const res = await axios.post("/auth/login", loginFormData);

      console.log(res);
      
      if (res.status === 200) {
        this.isLoginSuccess = true
        return res.data
      }
    } catch (error) {
      console.log(error);
      return false
    }
  };



}

export const authStore = new AuthStore();
