import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import SignIn from "../components/join/SignIn";
import SignUp from "../components/join/SignUp";
import Todo from "../components/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
