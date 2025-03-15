"use client";
import Navbar from "@/component/template/navbar/navbar";
import Footer from "@/component/template/footer/footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        {children}
        <Footer />
      </Provider>
    </div>
  );
};

export default MainProvider;
