import { useState } from "react";
import * as S from "./App.styles";
import { Item } from "./types/item";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 0, name: "Comprar macarrão", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    const newItem: Item = {
      id: list.length + 1,
      name: taskName,
      done: false,
    };

    setList([...list, newItem]);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Header>Lista de Tarefas</S.Header>
        <AddItem onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default App;
