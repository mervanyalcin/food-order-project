import { observer } from "mobx-react-lite";
import React, { useState } from "react";

interface IMainSettibgsProps {}
export const MainSettings: React.FC<IMainSettibgsProps> = observer(() => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (event: any) => {
    const value = event.target.value;
    const formattedNumber = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    setPhoneNumber(formattedNumber);
    console.log(formattedNumber);
  };

  return (
    <div>
      <div className="">
        <input
          type="text"
          id="phoneNumber"
          className="border border-double "
          onChange={(e) => {
            var phoneNumber = e.target.value;
            var formattedNumber = phoneNumber.replace(
              /(\d{1})(\d{3})(\d{3})(\d{4})/,
              "$1($2)-$3-$4"
            );
            e.target.value = formattedNumber;
          }}
        />
        <input
          type="text"
          value={phoneNumber}
          className="border border-gray-900"
          onChange={handleChange}
        />
      </div>
    </div>
  );
});
