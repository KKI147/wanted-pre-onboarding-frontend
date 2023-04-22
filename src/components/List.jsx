import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../api";
import Todo from "./Todo";
import styled from "styled-components";

const List = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");
  const [data, setData] = useState([]);
  const [rendering, setRendering] = useState();
  const [check, setCheck] = useState(false);
  const [content, setContent] = useState("");
  const [target, setTarget] = useState([]);

  const getTodo = async () => {
    await fetch(`${BaseURL}/todos`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => {
        console.error(error);
        alert("에러발생");
      });
  };

  const deleteTodo = async (id) => {
    await fetch(`${BaseURL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => {
        setRendering(response);
      })
      .catch((error) => {
        console.error(error);
        alert("에러발생");
      });
  };

  const updateTodo = async (id) => {
    await fetch(`${BaseURL}/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: content, isCompleted: check }),
    })
      .then((response) => {
        setRendering(response);
        alert("수정이 완료되었습니다.");
      })
      .catch((error) => {
        console.error(error);
        alert("에러발생");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token === null) navigate("/signin");
    else getTodo();
  }, [navigate, rendering]);

  return (
    <Layout>
      <Title>Todo</Title>
      <Todo setRendering={setRendering} />
      <ListWrapper>
        {data && data.length > 0
          ? data.map((el, index) => {
              const id = el.id;
              let editState = target.indexOf(id) === -1 ? false : true;
              return (
                <>
                  <LiTag key={id}>
                    {!editState ? (
                      <>
                        <LabelBox>
                          <CheckInput
                            type="checkbox"
                            value={check}
                            onChange={() => setCheck(!check)}
                          />
                          <Content>{el.todo}</Content>
                        </LabelBox>
                        <ButtonBox>
                          <Button
                            data-testid="modify-button"
                            onClick={() => {
                              if (target.indexOf(id) === -1) {
                                setTarget((prev) => [...prev, id]);
                              }
                            }}
                          >
                            수정
                          </Button>
                          <Button
                            data-testid="delete-button"
                            onClick={() => {
                              if (window.confirm("댓글을 삭제하시겠습니까?"))
                                deleteTodo(id);
                              else alert("취소되었습니다.");
                            }}
                          >
                            삭제
                          </Button>
                        </ButtonBox>
                      </>
                    ) : (
                      <>
                        <LabelBox>
                          <CheckInput
                            type="checkbox"
                            value={check}
                            onChange={() => setCheck(!check)}
                          />
                          <input
                            data-testid="modify-input"
                            type="text"
                            defaultValue={el.todo}
                            onChange={(e) => setContent(e.target.value)}
                          />
                        </LabelBox>
                        <ButtonBox>
                          <Button
                            data-testid="submit-button"
                            onClick={() => {
                              updateTodo(id);
                              setTarget(target.filter((el) => el !== id));
                            }}
                          >
                            제출
                          </Button>
                          <Button
                            data-testid="cancel-button"
                            onClick={() =>
                              setTarget(target.filter((el) => el !== id))
                            }
                          >
                            취소
                          </Button>
                        </ButtonBox>
                      </>
                    )}
                  </LiTag>
                </>
              );
            })
          : ""}
      </ListWrapper>
    </Layout>
  );
};
export default List;

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
  margin: 30px auto 0;
  position: relative;
  width: 50%;
`;

const LiTag = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 70%;
  height: 50px;
  margin: 5px auto 10px;
  border: 0.5px solid #d3d3d3;
`;

const LabelBox = styled.label`
  display: flex;
  align-items: center;
  margin: 0 0 0 5px;
`;

const CheckInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid gainsboro;
  border-radius: 6px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

const Content = styled.span`
  margin: 0 0 0 7px;
`;

const ButtonBox = styled.div`
  margin: 0 5px 0 0;
`;

const Button = styled.button`
  position: relative;
  right: 0;
  width: 50px;
  height: 30px;
  margin: 0 5px;
  background-color: #d3d3d3;
  color: #212121;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: #379fff;
  }
`;
