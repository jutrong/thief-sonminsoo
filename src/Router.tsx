import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
// import Login from "./pages/Login/Login";

import {
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
  RequestRouter,
} from "./Routes";
import Requests from "./pages/Request/Requests";
import Missing from "./pages/Missing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "*",
    element: <Missing />, //홈 화면 컴포넌트
  },
  {
    path: "home",
    element: <Main />, //홈 화면 컴포넌트
  },
  {
    path: "hotFandom",
    element: <Main />, //타오르는 팬덤 컴포넌트
  },
  // { path: "login", element: <Login /> }, //로그인 컴포넌트
  {
    path: "fandom/:fandomId",
    element: <Main />, //팬덤 상세보기 컴포넌트
  },
  SignupRouter,
  ChattingRouter,
  SonminsooRouter,
  FeedRouter,
  MyPageRouter,
  SettingsRouter,
  RequestRouter,
]);

export default Router;
