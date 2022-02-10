import { useState, KeyboardEvent } from "react";
import * as S from "./styles";

type Props = {
  onEnter: (taskName: string) => void;
};

const AddItem = ({ onEnter }: Props) => {
  const [text, setText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && text !== "") {
      onEnter(text);
      setText("");
    }
  };

  return (
    <S.Container>
      <div>➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </S.Container>
  );
};

export default AddItem;
