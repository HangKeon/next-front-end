import { BlueButton, RedInput } from './BoardWrite.styes';

export default function BoardWriteUI(props){
  return(
    <div>
      작성자: <RedInput  type="text" onChange={props.onChangeWriter}/>
      제목 : <RedInput type="text" onChange={props.onChangeTitle}/>
      내용 : <RedInput type="text" onChange={props.onChangeContents}/>
      <BlueButton onClick={props.onClickSubmit}>GRAPHQL-API 요청하기</BlueButton>
    </div>
  )
}