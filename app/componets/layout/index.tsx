import { FC, ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    <div className="flex">
      <Sidebar />
      <div className="p-8 flex-1">{children}</div>
    </div>
  </>
);

export default Layout;
