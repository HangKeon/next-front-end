import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router';
import React from 'react'

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number:$number){
      number
      writer
      title
      contents
    }
  }
`;

const StaticRoutingMovedPage = () => {
  const router = useRouter();

  const {data} = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number)
    }
  });

  console.log(data)

  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${router.query.number}/edit`);
  }

  return (
    <div>
      <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
      <button onClick={onClickMove}>수정하기</button>
    </div>
  )
}

export default StaticRoutingMovedPage
