import styled from "styled-components";
import { BaseURL } from "../api";
import { useState } from "react";

const Todo = (rendering) => {
  const [todo, setTodo] = useState("");
  const access_token = localStorage.getItem("access_token");

  const postTodo = async (todo) => {
    await fetch(`${BaseURL}/todos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: todo }),
    })
      .then((response) => {
        if (response.status === 201) {
          alert("게시글이 작성되었습니다..");
          return response.json();
        }
      })
      .then((response) => {
        rendering.setRendering(response);
      })
      .catch((error) => {
        console.error(error);
        alert("에러발생");
      });
  };

  const onClickHandler = () => {
    postTodo(todo);
  };

  return (
    <Layout>
      <InPut
        data-testid="new-todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button data-testid="new-todo-add-button" onClick={onClickHandler}>
        추가
      </Button>
    </Layout>
  );
};

export default Todo;

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const InPut = styled.input`
  width: 300px;
  height: 30px;
  margin: 0 25px 0;
`;

const Button = styled.button`
  width: 100px;
  background-color: #379fff;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;
