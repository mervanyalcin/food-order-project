import axios from "axios";
import { makeAutoObservable } from "mobx";
import { IRegisterModel } from "models";

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  isRegisterSucces: Boolean = false;
  register = async (datas: IRegisterModel) => {
    const registerFormData: IRegisterModel = {
      fullName: datas.fullName,
      email: datas.email,
      password: datas.password,
      phoneNumber: datas.phoneNumber,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register/",
        registerFormData
      );

      this.isRegisterSucces = false;

      if (res.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: res.data.email,
            fullName: res.data.fullName,
            phoneNumber: res.data.phoneNumber,
            profilePicture: res.data.profilePicture,
            userRole: res.data.userRole,
            jwtToken: "Ebenin tokeni",
          })
        );
        window.location.href = "/login"
      }
    } catch (error) {
      console.log("Registration has occur an error!");
    }
  };
}

export const authStore = new AuthStore();