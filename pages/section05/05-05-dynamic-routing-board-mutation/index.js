import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router';
import React from 'react'

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
  const router = useRouter()

  const [나의함수] = useMutation(나의그래프큐엘세팅);

  const onClickSubmit = async () => {

    try {   //try에 있는 내용을 실행하다 실패하면, 아래 있는 모든 내용 무시하고 catch 실행

      const result = await 나의함수({
        variables: {                              //$ = variables
          writer: "훈이",
          title: "안녕하시오.",
          contents: "방가방가!"
        }
      });

      console.log(result);

      router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`)

    } catch(err) {
      alert(err.message)
    }
    
  }
  
  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  )
}

export default GraphqlMutationArgsPage;
