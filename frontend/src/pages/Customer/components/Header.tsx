import React from "react";
import { Link } from "react-router-dom";

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

      <div className="max-w-xl mx-auto">
        <Link to={"/login"} className="py-2.5 px-4 inline-block text-white outline-none text-sm mb-2 bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 ">
          Giriş Yap 
        </Link>
        
        <Link to={"/register"} className="py-2.5 px-4 ml-1 inline-block text-white outline-none text-sm mb-2 bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 ">
          Kayıt ol 
        </Link>
      </div>
    </>
  );
};

export default Header;
