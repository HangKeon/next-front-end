import { gql, useMutation, useQuery } from '@apollo/client'
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

//삭제 요청 graphql
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int){
    deleteBoard(number: $number) {
      message
    }
  }
`;

const MapBoardsPage = () => {
  const {data} = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards)

  //삭제 후, 다시 refetch해서 불러옴
  const onClickDelete = (e) => {
    deleteBoard({
      variables: {
        number: Number(e.targer.id)
      },
      refetchQueries: [{query: FETCH_BOARDS}]
    })


  }

  return (
    <div>
      {
        data?.fetchBoards.map((el, idx) => (
          //key가 없으면 map은 같은 묶음으로 생각하지 않음
          <div key={el.number}>   
            <span><input type="checkbox" /></span>
            <span style={{ margin: "10px"}}>{el.number}</span>
            <span style={{ margin: "10px"}}>{el.title}</span>
            <span style={{ margin: "10px"}}>{el.writer}</span>
            <span>
              <button id={el.number} onClick={onClickDelete}>삭제</button>
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default MapBoardsPage
