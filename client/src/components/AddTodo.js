import React, { useState } from "react";
import styled from "styled-components";
import { addTodo } from "../action/actions";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <FormTag onSubmit={submitHandler}>
        <Input type="text" value={input} onChange={changeHandler} />
        <ButtonTag>추가</ButtonTag>
      </FormTag>
    </>
  );
};

export default AddTodo;

const FormTag = styled.form`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  width: 80%;
  border: none;
  border-bottom: 2px #ccc solid;
  outline: none;
  font-size: 1.3rem;
  transition: border-bottom 0.3s ease;
  &:focus {
    border-bottom: 2px black solid;
  }
`;

const ButtonTag = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #0f0f0f;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: #0f0f0f;
    border: 1px solid black;
  }
`;
