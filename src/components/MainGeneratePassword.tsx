"use client";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { Slider } from "primereact/slider";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

export const MainGeneratePassword = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [customCharacters, setCustomCharacters] = useState("!@#$%");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = customCharacters;

    let allCharacters = uppercase + lowercase + numbers + specialCharacters;
    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += allCharacters.charAt(
        Math.floor(Math.random() * allCharacters.length)
      );
    }

    setGeneratedPassword(newPassword);
  };

  const handleCustomCharactersChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const specialCharactersRegex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (specialCharactersRegex.test(inputValue)) {
      setCustomCharacters(inputValue);
    }
  };

  return (
    <div className="shadow-lg w-[500px] bg-white  h-[400px]">
      <div className="w-full mx-auto flex justify-center flex-col items-center gap-2 ">
        <InputText
          className=""
          value={generatedPassword}
          pt={{
            root: {
              className:
                "border w-[90%] mt-4 h-[50px] !focus:shadow-none !focus:border-none  !focus-visible:border-none p-1 text-[23px] ",
              style: { boxShadow: "none" },
            },
          }}
          onChange={(e) => setGeneratedPassword(e.target.value)}
        />
        <Button
          onClick={generatePassword}
          pt={{
            root: {
              className:
                "!focus:shadow-none !focus:border-none  !focus-visible:border-none  bg-blue-500 text-white ml-auto mr-[24px] !w-[170px] p-2",
            },
          }}
        >
          Generate Password
        </Button>
      </div>
      <div className="w-full flex gap-5 mt-20 px-10">
        <div className="w-[200px] flex flex-col">
          <InputText
            pt={{
              root: {
                className:
                  "border ml-auto  !focus:shadow-none !focus:border-none  !focus-visible:border-none p-2 w-[40px] ",
              },
            }}
            min={0}
            max={30}
            value={String(passwordLength)}
            disabled
          />
          <Slider
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.value as number)}
            className="w-14rem"
            pt={{
              root: { className: " rounded w-full" },
              handle: { className: "bg-blue-500 " },
              range: { className: "bg-blue-500" },
            }}
            min={0}
            max={30}
          />
        </div>
        <div className="w-[200px]">
          <InputText
            pt={{
              root: {
                className:
                  "border ml-auto  !focus:shadow-none !focus:border-none  !focus-visible:border-none p-2 w-[200px] ",
              },
            }}
            min={0}
            max={30}
            value={customCharacters}
            onChange={handleCustomCharactersChange}
          />
        </div>
      </div>
    </div>
  );
};
