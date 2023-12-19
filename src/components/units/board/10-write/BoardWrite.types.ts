import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardWriteProps {
  isEdit: boolean
  data?: any
}

export interface IMyvariables {
  number: Number
  writer?: string
  title?: string
  contents?: string
}

export interface IBoardWriteUIPropos{
  onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void
  onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void
  isEdit: boolean
  data?: any
}