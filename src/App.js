import { Route, Routes } from "react-router-dom";
import './styles/common.scss';
import './styles/contents.scss';
import MainPage from "./pages/MainPage";
import CounselingwaitingRoom from "./pages/CounselingwaitingRoom";
import MainPage02 from "./pages/MainPage02";

import MainPageLength from "./pages/MainPageLength";
import MainPageWidth from "./pages/MainPageWidth";

// import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/CounselingwaitingRoom" element={<CounselingwaitingRoom />} />
      <Route path="/MainPage02" element={<MainPage02 />} />
      {/* 모바일 */}
      <Route path="/MainPageLength" element={<MainPageLength />} />
      <Route path="/MainPageWidth" element={<MainPageWidth />} />

      {/* ETC */}
      <Route path="/" element={<MainPage />} />

    </Routes>
  );
}

export default App;