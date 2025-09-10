import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageButtons() {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("al")}>Shqip</button>
    </>
  );
}
