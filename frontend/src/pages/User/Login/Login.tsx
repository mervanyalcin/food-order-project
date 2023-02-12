import axios from "axios";
import { SuccessModal } from "components/Modal";
import { observer } from "mobx-react-lite";
import { AdminStore } from "pages/Owner/store";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authStore } from "../../../store/auth";

interface ILoginProps {}
export const Login: React.FC<ILoginProps> = observer(() => {
  // const [scs, setScs] = React.useState(false); // Success modalın açılma durumunun kontrolü.
  // const [scsTitle, setScsTitle] = React.useState(""); // Success modalın başlığının kontrolü.
  // const [scsText, setScsText] = React.useState(""); // Success modalın içeriğindeki yazının kontrolü.
  // const [scsSuccess, setScsSuccess] = React.useState(false); // Success modalın true yada false olma durumu. (Başarılı / Başarısız işlem.)
  const navigate = useNavigate();

  // Hook Form
  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      emailorphone: "",
      password: "",
    },
  });
  const watcher = watch();
  const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));

  const onSubmit = async ({
    emailorphone,
    password,
  }: {
    emailorphone: string;
    password: string;
  }) => {
    try {
      const result = await authStore.login({
        emailorphone: emailorphone,
        password: password,
      });

      if (authStore.isLoginSuccess) {
        AdminStore.isModalOpen = true;
        AdminStore.isSuccessOrNot = true;
        AdminStore.successText = "Giriş İşlemi Başarılı Yönlendiriliyorsunuz";
        AdminStore.successTitle = "Başarılı";

        await sleep(1000);

        if (result.role === "3") {
          navigate("/");
        } else if (result.role === "1") {
          navigate("/admin");
        }
      } else {
        AdminStore.isModalOpen = true;
        AdminStore.isSuccessOrNot = false;
        AdminStore.successText =
          "Kullanızı adı veya şifreniz hatalı gibi gözüküyor";
        AdminStore.successTitle = "Başarısız";
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      AdminStore.isModalOpen = true;
      AdminStore.isSuccessOrNot = false;
      AdminStore.successText = `${err}`;
      AdminStore.successTitle = "Bir sorun çıktı;";
    }
  };


  return (
    <div className="flex h-screen min-h-full flex-col justify-center bg-gray-100">
      <div className="mx-auto w-full max-w-xl lg:py-12 lg:px-8">
        <div className=" px-4 py-6 sm:p-6">
          <div
            id="authentication-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-md md:h-auto">
              <div className="relative bg-theme-color rounded-lg shadow dark:bg-theme-color">
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-10 text-xl font-medium text-theme-text-color dark:text-theme-text-color">
                    Habil Pizza'ya Giriş Yap
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                      <div className="relative mb-6">
                        <input
                          id="emailorphone"
                          type="text"
                          className={`bg-transparent border-solid rounded-[5px] border py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${
                            errors.emailorphone ? "border-[#f32f26]" : null
                          }`}
                          {...register("emailorphone", {
                            required:
                              "Lütfen email adresinizi veya telefon numaranızı giriniz.",
                          })}
                        />
                        <label
                          htmlFor="emailorphone"
                          className={` cursor-text  peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${
                            watcher.emailorphone
                              ? "bg-theme-color -top-2.5"
                              : "top-4"
                          } ${
                            errors.emailorphone
                              ? "text-[#f32f26]"
                              : "text-[#919191]"
                          }`}
                        >
                          Email veya Telefon
                        </label>
                        {errors.emailorphone && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.emailorphone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative mb-6 ">
                        <input
                          id="password"
                          type="password"
                          className={` bg-transparent border-solid rounded-[5px] border py-4 pl-6 peer duration-300 text-sm font-satoshi-medium w-full ${
                            errors.emailorphone ? "border-[#f32f26]" : null
                          }`}
                          {...register("password", {
                            required: "Lütfen şifrenizi giriniz.",
                          })}
                        />
                        <label
                          htmlFor="password"
                          className={` cursor-text  peer-focus:-top-2.5 peer-focus:dark:bg-theme-color transition-all select-none duration-300 px-1 absolute left-6 text-xs font-satoshi-medium ${
                            watcher.password
                              ? "bg-theme-color -top-2.5"
                              : "top-4"
                          } ${
                            errors.password
                              ? "text-[#f32f26]"
                              : "text-[#919191]"
                          }`}
                        >
                          Şifreniz
                        </label>
                        {errors.password && (
                          <p className="text-xs text-[#f32f26] mt-1">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                      <div className="text-center">
                        <input
                          style={{ fontSize: "17px" }}
                          className="uppercase text-white bg-[#179a64] font-satoshi-bold cursor-pointer py-3 w-full rounded-[5px]"
                          value="Giriş Yap"
                          type="submit"
                        />
                      </div>
                    </div>

                    <Link
                      to="/register"
                      className="text-xs text-theme-text-color hover:underline "
                    >
                      Kayıt ol
                    </Link>

                    <SuccessModal
                      layout="small"
                      visible={AdminStore.isModalOpen}
                      onClose={() => {
                        AdminStore.isModalOpen = false;
                      }}
                      text={AdminStore.successText}
                      title={AdminStore.successTitle}
                      success={AdminStore.isSuccessOrNot}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
