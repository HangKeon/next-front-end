import { gql, useQuery } from '@apollo/client'
import React, { MouseEvent } from 'react'

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

  const onClickAlert = (e: MouseEvent<HTMLDivElement>) => {
    alert(e.currentTarget.id + "님이 작성!")
  }

  return (
    <div>
      <div>1번 게시글 이동이 완료되었습니다.</div>
      {/* <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div> */}
      {
        data?.fetchBoards.map((el: any) => (
          <div key={el._id} id={el.writer} onClick={onClickAlert}>
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
