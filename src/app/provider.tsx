"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import Navbar from "@/component/template/navbar/navbar";
import SubNavbar from "@/component/template/navbar/sub-navbar";
import Footer from "@/component/template/footer/footer";

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <SubNavbar />
          {children}
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default MainProvider;
