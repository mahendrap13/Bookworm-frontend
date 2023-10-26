import "./App.css";
// import { PageLocation } from "./Components/PageLocation/PageLocation";
import { Appbar } from "./Layouts/Appbar/Appbar";
import { Footer } from "./Layouts/Footer/Footer";
import { Header } from "./Layouts/Header/Header";
import { Router } from "./Router";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Appbar />
      {/* <PageLocation /> */}
      <Router />
      <Footer />
    </div>
  );
};
