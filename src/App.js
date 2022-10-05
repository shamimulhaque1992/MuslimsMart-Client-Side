import { Route, Routes } from "react-router-dom";
import "./App.css";
import DataProvider from "./context/DataProvider.js";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div>
      <DataProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <ToastContainer />
      </DataProvider>
    </div>
  );
}

export default App;
