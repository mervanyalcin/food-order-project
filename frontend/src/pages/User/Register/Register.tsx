import { SuccessModal } from "components/Modal";
import { observer } from "mobx-react-lite";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authStore } from "../../../store/auth";

interface IRegisterProps {}
export const Register: React.FC<IRegisterProps> = observer(() => {
  const [scs, setScs] = React.useState(false); // Success modalın açılma durumunun kontrolü.
  const [scsTitle, setScsTitle] = React.useState(""); // Success modalın başlığının kontrolü.
  const [scsText, setScsText] = React.useState(""); // Success modalın içeriğindeki yazının kontrolü.
  const [scsSuccess, setScsSuccess] = React.useState(false); // Success modalın true yada false olma durumu. (Başarılı / Başarısız işlem.)

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
      fullName: "",
      password: "",
      email: "",
      phoneNumber: "",
      jwtToken: "",
    },
  });
  const watcher = watch();

  const onSubmit = async ({
    fullName,
    password,
    email,
    phoneNumber,
  }: {
    fullName: string;
    password: string;
    email: string;
    phoneNumber: string;
  }) => {
    try {
      const result = await authStore.register({
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        jwtToken: "jwttoken",
      });

      if (authStore.isRegisterSuccess) {
        setScs(true);
        setScsSuccess(true);
        setScsText(``);
      } else {
        setScs(true);
        setScsSuccess(false);
        setScsText(``);
      }
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      setScs(true);
      setScsSuccess(false);
      setScsText(`${message}`);
    }
  };

  if (authStore.isLoginSuccess) {
    navigate("/");
  }

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
                    Hızlı Sipariş İçin Habil Pizza'ya Kayıt Ol
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                      <div className="relative mb-6">
                        <input
                          id="fullName"
                          type="text"
                          className={`bg-transparent border-solid rounded-[5px] text-black  border py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${
                            errors.fullName ? "border-[#f32f26]" : null
                          }`}
                          {...register("fullName", {
                            required: "Lütfen email adresinizi giriniz.",
                          })}
                        />
                        <label
                          htmlFor="fullName"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${
                            watcher.fullName
                              ? "bg-theme-color -top-2.5"
                              : "top-4"
                          } ${
                            errors.fullName
                              ? "text-[#f32f26]"
                              : "text-[#919191]"
                          }`}
                        >
                          Tam adınız*
                        </label>
                        {errors.fullName && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.fullName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative mb-6">
                        <input
                          id="email"
                          type="text"
                          className={`bg-transparent border-solid rounded-[5px] border py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${
                            errors.email ? "border-[#f32f26]" : null
                          }`}
                          {...register("email", {
                            required: "Lütfen email adresinizi giriniz.",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message:
                                "Lütfen geçerli bir email adresi giriniz.",
                            },
                          })}
                        />
                        <label
                          htmlFor="email"
                          className={` cursor-text  peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${
                            watcher.email ? "bg-theme-color -top-2.5" : "top-4"
                          } ${
                            errors.email ? "text-[#f32f26]" : "text-[#919191]"
                          }`}
                        >
                          E-Posta*
                        </label>
                        {errors.email && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative mb-6">
                        <input
                          id="phoneNumber"
                          type="text"
                          maxLength={11}
                          onFocus={() => {
                            if (
                              watcher.phoneNumber === "0" ||
                              watcher.phoneNumber?.length === 0
                            ) {
                              setValue("phoneNumber", "0");
                            }
                          }}
                          className={`bg-transparent border-solid rounded-[5px] border py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full  ${
                            errors.phoneNumber ? "border-[#f32f26]" : null
                          }`}
                          {...register("phoneNumber", {
                            onChange: (e) => {
                              setValue("phoneNumber", e.target.value);
                              if (!/^0/.test(e.target.value)) {
                                setValue("phoneNumber", "0" + e.target.value);
                              }
                            },
                            onBlur(e) {
                              if (e.target.value === "0") {
                                setValue("phoneNumber", "");
                              }
                            },
                            required: "Lütfen email adresinizi giriniz.",
                            pattern: {
                              value: /(^0{1})(\d{3})(\d{3})(\d{4})/,
                              message:
                                "Telefon numaranız başında 0 ile birlikte 11 haneli olmalı ve sadece rakamlardan oluşmalıdır.",
                            },
                          })}
                        />
                        <label
                          htmlFor="phoneNumber"
                          className={` cursor-text  peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium  ${
                            watcher.phoneNumber
                              ? "bg-theme-color -top-2.5"
                              : "top-4"
                          } ${
                            errors.phoneNumber
                              ? "text-[#f32f26]"
                              : "text-[#919191]"
                          }`}
                        >
                          Telefon Numaranız*
                        </label>
                        {errors.phoneNumber && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative mb-6 ">
                        <input
                          id="password"
                          type="password"
                          className={` bg-transparent border-solid rounded-[5px] border py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${
                            errors.password ? "border-[#f32f26]" : null
                          }`}
                          {...register("password", {
                            required: "Lütfen şifrenizi giriniz.",
                            pattern: {
                              value:
                                /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                              message:
                                "Şifreniz en az 6 karakterden oluşmalı, en az bir rakam içermeli, kabul edilebilir özel karakterler ise !,@,#,$,%,^,&,* dir.",
                            },
                          })}
                        />
                        <label
                          htmlFor="password"
                          className={` cursor-text  peer-focus:-top-2.5 peer-focus:dark:bg-theme-color transition-all select-none duration-300 px-1 absolute left-6 text-xs font-satoshi-medium ${
                            watcher.password
                              ? "bg-theme-color -top-2.5 "
                              : "top-4"
                          } ${
                            errors.password
                              ? "text-[#f32f26]"
                              : "text-[#919191]"
                          }`}
                        >
                          Şifreniz*
                        </label>
                        {errors.password && (
                          <p className="text-xs text-[#f32f26] mt-1">
                            {errors.password.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-center">
                      <input
                        style={{ fontSize: "17px" }}
                        className="uppercase text-white bg-[#179a64] font-satoshi-bold cursor-pointer py-3 w-full rounded-[5px] active:bg-[#138c5a]"
                        value="KAYIT OL"
                        type="submit"
                      />
                    </div>

                    <div className="flex flex-row justify-between mt-4">
                      <>
                        <Link
                          to="/login"
                          className="text-xs text-theme-text-color hover:underline "
                        >
                          Giriş Yap
                        </Link>
                      </>

                      <Link
                        to="/"
                        className="text-xs text-theme-text-color hover:underline "
                      >
                        Menüye Dön
                      </Link>
                    </div>

                    {authStore.isRegisterSuccess ? (
                      <>
                        <SuccessModal
                          layout="small"
                          visible={scs}
                          onClose={() => {
                            setScs(false);
                            // onModalClose();
                            window.location.reload();
                          }}
                          text={scsText}
                          title={scsTitle}
                          success={scsSuccess}
                        />
                      </>
                    ) : (
                      <></>
                    )}
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
