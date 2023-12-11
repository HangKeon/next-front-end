import { gql, useQuery } from '@apollo/client'
import React from 'react'

const FETCH_BOARD = gql`
  query{
    fetchBoard(number:20408){
      number
      writer
      title
      contents
    }
  }
`;

const StaticRoutingMovedPage = () => {
  const {data} = useQuery(FETCH_BOARD);

  console.log(data)

  return (
    <div>
      <div>3번 게시글 이동이 완료되었습니다.</div>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </div>
  )
}

export default StaticRoutingMovedPage
