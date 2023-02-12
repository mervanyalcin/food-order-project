// Third Party Modules
import { AdminStore } from "pages/Owner/store";
import React, { useState } from "react";
import { authStore } from "store";
// Icons

// Custom Interface
interface ModalI {
  onClose?: () => unknown | null;
  visible: boolean;
  title?: string;
  text?: string;
  layout?: string;
  mt?: string | number;
  success?: boolean;
}
// Modal
export const SuccessModal = ({
  layout,
  mt,
  text,
  title,
  success,
  onClose,
  visible,
}: ModalI) => {
  // Refs
  const cancelButtonRef = React.useRef(null);

  if (visible === false) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto">
      <div className="fixed -z-10 inset-0 bg-black bg-opacity-60 transition-opacity"></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white min-w-[448px] flex flex-col px-6 py-6">
          <p
            className={`self-center font-satoshi-bold text-[32px] mt-6 ${
              success ? "text-green-600" : "text-red-500"
            }`}
          >
            {title}
          </p>

          {success ? (
            <>
              <img
                src="https://i.sozcucdn.com/wp-content/uploads/2016/08/emoj.jpg?w=390&h=219&mode=crop"
                alt=""
                className="items-center w-[150px] self-center mt-6 mb-2"
              />
            </>
          ) : (
            <>
              <img
                src="https://emojigraph.org/media/google/thinking-face_1f914.png"
                alt=""
                className="items-center w-20 self-center mt-6 mb-2"
              />
            </>
          )}

          <p
            className={`self-center font-satoshi-bold mt-3 mb-6 ${
              success ? "" : ""
            }`}
          >
            {text}
          </p>

          <button
            onClick={onClose}
            style={{ fontSize: "17px" }}
            className="uppercase text-white text-center bg-[#179a64] font-satoshi-bold cursor-pointer py-3 rounded-[5px]"
            value={`${success ? "Kapat" : "Yeniden Dene"}`}
            type="button"
          >
            {success ? "Kapat" : "Yeniden Dene"}
          </button>
        </div>
      </div>
    </div>
  );
};
