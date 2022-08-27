import { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const Layout: FC<Props> = ({ children }) => (
  <>
    <h1>Layout</h1>
    {children}
  </>
);

export default Layout;
