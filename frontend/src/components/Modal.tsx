// Third Party Modules
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

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto">
      <div className="fixed -z-10 inset-0 bg-black bg-opacity-60 transition-opacity">
        {" "}
      </div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="bg-white min-h-[480px] min-w-[448px] ">
          <h1>Selam</h1>

          <button
          onClick={()=> {
            console.log(authStore.isRegisterSuccess);
            
            authStore.isRegisterSuccess = false
          }}
          style={{ fontSize: "17px" }}
          className="uppercase text-white text-center bg-[#179a64] font-satoshi-bold cursor-pointer py-3 rounded-[5px] mt-auto"
          value="Onay"
          type="button"
        >
          ONAY
        </button>
        </div>


      </div>
    </div>
  );
};
