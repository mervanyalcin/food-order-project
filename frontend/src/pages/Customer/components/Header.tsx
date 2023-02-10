import { Link } from "react-router-dom";
import { authStore } from "store";

const Header = () => {
  return (
    <>
      <div className="max-w-xs mx-auto">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt=""
            className="mb-4"
          />
        </Link>
        <h1 className="text-center text-md">Habil Pizza Hızlı Sipariş Hattı</h1>
        <p className="text-center text-sm mb-4">
          Siparişinizi buradan doğrudan şefe iletebilirsiniz!
        </p>
      </div>

      <div className="max-w-xl mx-auto flex flex-row justify-between">
        {!authStore.isLoginSuccess ? (
          <div>
            <Link
              to={"/login"}
              className="py-2.5 px-4 inline-block  outline-none text-sm mb-2 "
            >
              Giriş Yap
            </Link>

            <Link
              to={"/register"}
              className="py-2.5 px-4 ml-1 inline-block  outline-none text-sm mb-2 "
            >
              Kayıt ol
            </Link>
          </div>
        ) : (
          <>
            <Link
              to={"/logout"}
              className="py-2.5 px-4 ml-1 inline-block  outline-none text-sm mb-2 "
            >
              Çıkış Yap
            </Link>
          </>
        )}

        {authStore.isLoginSuccess && (
          <Link
            to={"/account"}
            className="py-2.5 px-4 ml-1 inline-block  outline-none text-sm mb-2 "
          >
            Hesabım
          </Link>
        )}
      </div>
    </>
  );
};

export default Header;
