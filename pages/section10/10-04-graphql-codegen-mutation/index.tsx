import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../../.src/commons/types/generated/types';

const 나의그래프큐엘세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){
    createBoard(writer: $writer, title: $title, contents: $contents){
      _id
      number
      message
    }
  }
`;

const GraphqlMutationArgsPage = () => {

  // const [counter, setCounter] = useState<Number>(0)

  // const [나의함수] = useMutation<결과타입, 변수타입>(나의그래프큐엘세팅);
  const [나의함수] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(나의그래프큐엘세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {                              //$ = variables
        writer: "훈이",
        title: "안녕하시오.",
        contents: "방가방가!"
      }
    });
    console.log(result);
  }
  
  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  )
}

export default GraphqlMutationArgsPage;
