import React from 'react'

//컴포넌트 밖에 만든 이유 : 컴포넌트가 리랜더링 되어도 다시 안 만들기 위해 => 효율적
const FRUITS = [
  {number: 1, title: "레드향"},
  {number: 2, title: "샤안머스켓"},
  {number: 3, title: "산청딸기"},
  {number: 4, title: "한라봉"},
  {number: 5, title: "사과"},
  {number: 6, title: "애플망고"},
  {number: 7, title: "딸기"},
  {number: 8, title: "청혜향"},
  {number: 9, title: "과일선물세트"},
  {number: 10, title: "귤"}
];

const MapFruitsPage = () => {

  return (
    <div>
    {
      FRUITS.map((el)=><div key={el._id}>{el.number} {el.title}</div>)
    }
    </div>
  )
}

export default MapFruitsPage
