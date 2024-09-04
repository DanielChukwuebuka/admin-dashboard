import DashBoard from "./DashBoard";
import PageTitle from "./PageTitle";
import "./Main.css";

function Main() {
  return (
    <main id="main" className="main">
      <PageTitle page="Dashboard" />
      <DashBoard />
    </main>
  );
}

export default Main;
