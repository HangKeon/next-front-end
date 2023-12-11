import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import BoardWroteUI from "./BoardWrite.presenter";
import { 나의그래프큐엘세팅 } from "./BoardWrite.queries"

export default function BoardWrite() {

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {                              //$ = variables
        writer: writer,
        title: title,
        contents: contents
      }
    });
    console.log(result);
  }

  const onChangeWriter = (e) =>{
    setWriter(e.target.value);
  }
  
  const onChangeTitle = (e) =>{
    setTitle(e.target.value);
  }

  const onChangeContents = (e) =>{
    setContents(e.target.value);
  }

  return(
    <BoardWroteUI
      onClickSubmit = {onClickSubmit}
      onChangeWriter = {onChangeWriter}
      onChangeTitle = {onChangeTitle}
      onChangeContents = {onChangeContents}
    />
  )
}