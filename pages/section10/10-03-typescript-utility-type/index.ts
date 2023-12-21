export interface IProfile{
  name: string
  age: number
  school: string
  hobby?: string
}



//1. Partial type => 전부 ?를 추가
type aaa = Partial<IProfile>

//2. Required type => 전부 ?를 제거
type bbb = Required<IProfile>

//3. Pick type => 내가 원하는 것만 고름
type ccc = Pick<IProfile, "name" | "age">

//4. Omit type => 내가 고르는 것만 뺌
type ddd = Omit<IProfile, "school">