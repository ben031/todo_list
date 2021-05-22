import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiCheckbox, BiCheck } from "react-icons/bi";
import { changeTodo, deleteTodo } from "../action/actions";
import styled from "styled-components";

const Todo = ({ todo, dispatch }) => {
  const { id, todo_name, completed } = todo;

  const changeHandler = () => {
    dispatch(changeTodo(id));
  };

  return (
    <SectionTag>
      {completed ? (
        <BiCheck onClick={changeHandler} className="checking" color="green" />
      ) : (
        <BiCheckbox onClick={changeHandler} className="checking" />
      )}
      <SpanTag completed={completed}>{todo_name}</SpanTag>
      <RiDeleteBin5Line
        onClick={() => dispatch(deleteTodo(id))}
        className="icons"
      />
    </SectionTag>
  );
};

export default Todo;

const SectionTag = styled.section`
  font-size: 1.2rem;
  display: flex;
  padding: 0.5rem;
  margin: 0 0.5rem;
  align-items: center;

  & .icons {
    color: black;
    padding: 0.2rem;
    font-size: 1.8rem;
    border-radius: 4px;
    background-color: transparent;
    cursor: pointer;
  }

  & .checking {
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const SpanTag = styled.span`
  flex: 1;
  margin-left: 0.8rem;
  text-decoration: ${(props) => !props.completed || "line-through"};
`;
