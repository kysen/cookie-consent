import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faPlus,
  faMinus,
  faWindowMaximize,
  faArrowLeft,
  faArrowRight,
  faRedo,
  faHome,
  faLock,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import "./styles/main.scss";

import BannerCreator from "./components/banner-creator";

function App() {
  library.add(
    faTimes,
    faPlus,
    faMinus,
    faWindowMaximize,
    faArrowLeft,
    faArrowRight,
    faRedo,
    faHome,
    faLock,
    faStar,
    faEllipsisV
  );
  return (
    <div className="app">
      <BannerCreator />
    </div>
  );
}

export default App;
