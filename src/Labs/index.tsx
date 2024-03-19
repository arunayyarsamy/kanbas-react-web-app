import Assignment3 from "./a3";
import Nav from "../Nav";
import { Navigate, Route, Routes } from "react-router";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";

function Labs() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        {/* <Assignment3 /> */}
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </Provider>
    </>
  );
}

export default Labs;
