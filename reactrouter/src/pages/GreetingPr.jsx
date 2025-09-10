import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function GreetingPr() {
  const { language } = useContext(LanguageContext);
  return <h2>{language === "en" ? "Hello!" : "Përshëndetje!"}</h2>;
}
