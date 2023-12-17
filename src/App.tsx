import { Route, Routes } from "react-router-dom";
import CommendComopnent from "./componentns/CommendComponent";
import FileUpload from "./componentns/File_Edit/FileUpload";
import HeaderMain from "./componentns/HeaderMain";
import SwiperComponent from "./componentns/SwiperComponent";
import BgmSite from "./pages/BgmSite";
import Login from "./pages/Login/Login";
import Payments from "./payments/Payments";
import Main from "./pages/Main";
import SoundBar from "./componentns/utils/SoundBar";
import MusicGet from "./pages/MusicGet";

export default function App(){
  return  (
      <div>
        <Routes>       
        <Route  path="/" element={ <Main />} />
        <Route  path="/bgm" element={ <BgmSite />} />
        <Route  path="/login" element={ <Login />} />
        <Route  path="/payment" element={ <Payments />} />
        <Route  path="/music" element={ <MusicGet />} />
      </Routes>
      </div>
    )
}