import { FC } from "react";

// Fetchしたカテゴリーをアコーディン形式で表示するように実装
const Sidebar: FC = () => {
  return (
    <aside className="w-64">
      <div className="overflow-y-auto py-4 px-3 bg-blue-50 h-screen">
        <nav>Sidebar</nav>
      </div>
    </aside>
  );
};

export default Sidebar;
