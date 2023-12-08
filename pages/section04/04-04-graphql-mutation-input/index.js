import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`;

const GraphqlMutationInputPage = () => {
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

  return (
    <div>
      작성자: <input type="text" onChange={onChangeWriter}/>
      제목 : <input type="text" onChange={onChangeTitle}/>
      내용 : <input type="text" onChange={onChangeContents}/>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  )
}

export default GraphqlMutationInputPage;
