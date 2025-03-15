"use client";
import Navbar from "@/component/template/navbar/navbar";
import Footer from "@/component/template/footer/footer";
import { persistor, store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          {children}
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default MainProvider;
