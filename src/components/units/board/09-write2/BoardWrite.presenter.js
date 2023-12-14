import { BlueButton, RedInput } from './BoardWrite.styes';

export default function BoardWriteUI(props){
  return(
    <div>
      작성자: <RedInput  type="text" onChange={props.onChangeWriter}/>
      제목 : <RedInput type="text" onChange={props.onChangeTitle}/>
      내용 : <RedInput type="text" onChange={props.onChangeContents}/>
      <BlueButton onClick={props.isEdit === true ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit === true ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  )
}