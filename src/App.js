import "./App.css";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router/Router";
import StickyWhatsApp from "./components/StickyWhatsApp/StickyWhatsApp";
import BackTopButton from "./components/BackTopButton/BackTopButton";
import StickyCallButton from "./components/StickyCallButton/StickyCallButton";

function App() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <StickyWhatsApp></StickyWhatsApp>
      <StickyCallButton></StickyCallButton>
      <BackTopButton></BackTopButton>
      <Toaster />
    </section>
  );
}

export default App;
