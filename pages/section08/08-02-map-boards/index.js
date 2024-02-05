import { gql, useQuery } from '@apollo/client'
import React from 'react'

const FETCH_BOARDS = gql`
  query{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }
`;

const MapBoardsPage = () => {
  const {data} = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards)

  return (
    <div>
      <div>1번 게시글 이동이 완료되었습니다.</div>
      {/* <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div> */}
      {
        data?.fetchBoards.map((el) => (
          <div key={el._id}>
            <span><input type="checkbox" /></span>
            <span style={{ margin: "10px"}}>{el.number}</span>
            <span style={{ margin: "10px"}}>{el.title}</span>
            <span style={{ margin: "10px"}}>{el.writer}</span>
          </div>
        ))
      }
    </div>
  )
}

export default MapBoardsPage
