import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import BoardWriteUI from "./BoardWrite.presenter";
import { UPDATE_BOARD, 나의그래프큐엘세팅 } from "./BoardWrite.queries"
import { useRouter } from 'next/router';

export default function BoardWrite(props) {

  const [나의함수] = useMutation(나의그래프큐엘세팅);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const router = useRouter();
  
  //둥록하기
  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {                              //$ = variables
        writer: writer,
        title: title,
        contents: contents
      }
    });
    console.log(result);

    //게시물을 등록하고 나면 아래 상세페이지로 이동
    router.push(`/section09/09-04-boards/${result.data.createBoard.number}`);
  }

  //수정하기
  const onClickUpdate = async() => {
    const myvariables = {
      number: Number(router.query.number)
    };

    if(writer) myvariables.writer = writer;
    if(title) myvariables.title = title;
    if(contents) myvariables.contents = contents;
    

    const result = await updateBoard({
      // variables:{
      //   number: Number(router.query.number),
      //   writer: writer,
      //   title: title,
      //   contents: contents
      // }
      variables: myvariables
    });

    console.log(result);

    router.push(`/section09/09-04-boards/${result.data.updateBoard.number}`);
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
    <BoardWriteUI
      onClickSubmit = {onClickSubmit}
      onClickUpdate = {onClickUpdate}
      onChangeWriter = {onChangeWriter}
      onChangeTitle = {onChangeTitle}
      onChangeContents = {onChangeContents}
      isEdit = {props.isEdit}
      data={props.data}   //undefined or data 둘 중 하나
    />
  )
}