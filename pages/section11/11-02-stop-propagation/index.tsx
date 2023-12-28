import { gql, useQuery } from '@apollo/client'
import React, { MouseEvent } from 'react'
import Checkbox from './checkbox';

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

  // const onClickAlert = (e: MouseEvent<HTMLDivElement>) => {
  //   alert(e.currentTarget.id + "님이 작성!")
  // }

  const qqq1 = () =>{
    alert("1번 클릭!")
  }

  

  const qqq4 = () =>{
    alert("4번 클릭!")
  }


  return (
    <div>
      <div>1번 게시글 이동이 완료되었습니다.</div>
      {/* <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div> */}
      {
        data?.fetchBoards.map((el: any) => (
          <div id={el.writer} onClick={qqq1}>
            <Checkbox/>
            <span style={{ margin: "10px"}} onClick={qqq4}>{el.number}</span>
            <span style={{ margin: "10px"}}>{el.title}</span>
            <span style={{ margin: "10px"}}>{el.writer}</span>
          </div>
        ))
      }
    </div>
  )
}

export default MapBoardsPage
