import "bootstrap-icons/font/bootstrap-icons.css";
("remixicon/fonts/remixicon.css");

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./Component/Header";
import SideBar from "./Component/SideBar";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import BackToTop from "./Component/BackToTop";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
