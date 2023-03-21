import axios from "axios";
import { action, makeAutoObservable, observable } from "mobx";
import { IRegisterModel, ILoginModel } from "models";

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable isRegisterSuccess: boolean = false;
  @action register = async (datas: IRegisterModel) => {
    const registerFormData: IRegisterModel = {
      fullName: datas.fullName,
      email: datas.email,
      password: datas.password,
      phoneNumber: datas.phoneNumber,
      jwtToken: datas.jwtToken,
    };

    try {
      const res = await axios.post("/api/auth", registerFormData);
      if (res.status === 200) {
        window.location.href = "/login";
      }
    } catch (error) {
      this.isRegisterSuccess = false;
      console.log("Registration has occur an error!");
    }
  };

  @observable isLoginSuccess: boolean = false;
  @action login = async (datas: ILoginModel) => {
    const loginFormData: ILoginModel = {
      emailorphone: datas.emailorphone,
      password: datas.password,
    };
    try {
      const res = await axios.post("/api/auth/login", loginFormData);
      if (res.data) {
        this.isLoginSuccess = true;
      }
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
}

export const authStore = new AuthStore();
