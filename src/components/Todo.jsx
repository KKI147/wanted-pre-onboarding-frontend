import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";
import styled from "styled-components";

const Todo = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  const [data, setData] = useState([]);

  const getTodo = async () => {
    const result = await fetch(
      "https://www.pre-onboarding-selection-task.shop/todos",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => {});
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token === null) navigate("/signin");
  }, [navigate]);

  useEffect(() => {
    getTodo();
  });

  return (
    <Layout>
      <Title>Todo</Title>
      <List />
      <ListWrapper>
        {data.map((el, id) => {
          return (
            <li key={id}>
              <label>
                <input type="checkbox" />
                <span>{el.todo}</span>
              </label>
              <Button data-testid="modify-button">수정</Button>
              <Button data-testid="delete-button">삭제</Button>
            </li>
          );
        })}
      </ListWrapper>
    </Layout>
  );
};
export default Todo;

const Layout = styled.div`
  display: inline-block;
  margin: 50px auto 0;
  position: relative;
  width: 100%;
  li {
    list-style: none;
  }
`;

const Title = styled.div`
  margin: 12px 0 30px 0;
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  color: #1d3763;
`;

const ListWrapper = styled.div`
  /* display: flex; */
  margin: 30px auto 0;
  position: relative;
  width: 50%;
  background-color: orange;
`;

const Button = styled.button`
  width: 50px;
  height: 30px;
  margin: 0 5px;
  background-color: #379fff;
  color: #fff;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;
