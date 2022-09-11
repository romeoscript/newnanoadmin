import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Drawaltable from "./pages/list/Drawaltable";
import Completed from "./pages/list/Completed";
import Allwidthdrawal from "./pages/list/widthdrawal/ALLwidthdrawal";
import Completedwidthdrawal from "./pages/list/widthdrawal/Completedwidthdrawal";
import Pendingwidthdrawal from "./pages/list/widthdrawal/Pendingwidthdrawal";
import ActiveDeps from "./pages/list/ActiveDeps";
import PendingDeps from "./pages/list/PendingDeps";
import Active from "./pages/list/Active";
import Deactivated from "./pages/list/Deactivated";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="Active" element={<Active />}/>
            <Route path="Deactivated" element={<Deactivated />}/>
            <Route path="ActiveDeps" element={<ActiveDeps />}/>
            <Route path="Completed" element={<Completed />}/>
            <Route path="PendingDeps" element={<PendingDeps />}/>
            <Route path="Allwidthdrawal" element={<Allwidthdrawal />}/>
            <Route path="Completedwidthdrawal" element={<Completedwidthdrawal />}/>
            <Route path="Pendingwidthdrawal" element={<Pendingwidthdrawal />}/>
            <Route path="allaccounts">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="drawaltable">
              <Route index element={<Drawaltable />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
