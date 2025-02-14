import "normalize.css";
import "./styles.scss";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Main />
  </StrictMode>,
  rootElement
);
