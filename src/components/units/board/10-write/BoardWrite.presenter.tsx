import { BlueButton, RedInput } from './BoardWrite.styes';
import { IBoardWriteUIPropos } from './BoardWrite.types';

export default function BoardWriteUI(props: IBoardWriteUIPropos){
  return(
    <div>
      작성자: <RedInput  type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/>
      제목 : <RedInput type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/>
      내용 : <RedInput type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/>
      <BlueButton onClick={props.isEdit === true ? props.onClickUpdate : props.onClickSubmit}>
        {props.isEdit === true ? "수정" : "등록"}하기
      </BlueButton>
    </div>
  )
}