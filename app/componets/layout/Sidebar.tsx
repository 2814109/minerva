import { FC } from "react";

// Fetchしたカテゴリーをアコーディン形式で表示するように実装
const Sidebar: FC = () => {
  console.log("sidebar");

  return (
    <aside>
      <nav>Sidebar</nav>
    </aside>
  );
};

export default Sidebar;
