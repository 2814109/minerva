import { FC, useState, memo, useCallback } from "react";

// performance tuning list

type ListItemProps = {
  argument: string;
};

const ListItem: FC<ListItemProps> = memo(({ argument }) => {
  console.log("Rendering Item");

  return (
    <div>
      <span>{argument}</span>
    </div>
  );
});

type ListAreaType = {
  list: { id: number }[];
};

const ListArea: FC<ListAreaType> = memo(({ list }) => {
  console.log("Rendering Area");
  return (
    <>
      {list.map(({ id }) => (
        <ListItem key={id} argument={String(id)} />
      ))}
    </>
  );
});

const Demo: FC = () => {
  const initList = [...Array(10)].map((_, index) => ({ id: index }));
  const [listData, setListData] = useState(initList);

  const addListItem = useCallback(() => {
    setListData((preListData) => [...preListData, { id: preListData.length }]);
  }, []);

  return (
    <>
      <ListArea list={listData} />
      <button type="button" onClick={addListItem}>
        create Item
      </button>
    </>
  );
};

export default Demo;
