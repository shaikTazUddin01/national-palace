import Navbar from "@/component/template/navbar/navbar";

type MainProviderProps = {
  children: React.ReactNode;
};

const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainProvider;
