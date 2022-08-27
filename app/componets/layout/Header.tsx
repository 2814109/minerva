import { FC } from "react";
const Header: FC = () => (
  <div className=" bg-blue-600 text-white px-4 py-2">
    <ul className="h-10 flex gap-10 items-center">
      <li className="mr-5">Header Icon</li>
      <li>Management</li>
      <li>Library</li>
      <li>Analysis</li>
    </ul>
  </div>
);

export default Header;
