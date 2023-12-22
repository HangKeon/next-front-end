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

//5. Record type => 
type eee = "철수" | "영희" | "훈이"    //Union type
let child : eee = "철수"              //철수, 영희, 훈이 만 가능
let child2 : string = "바나나"        //전부 가능

type fff = Record<eee, IProfile>      //Record type


//6. 객체의 key들로 Union type 만들기
type ggg = keyof IProfile             //name, age, school, hobby 만 가능한 union type

let myprofile: ggg = "hobby"

//7. type vs interface의 차이 => 선언병합
export interface IProfile {     //interface는 선언병합 가능
  candy: number                 //선언병합으로 추기됨
}

//8. 배운 것 응용
let profile: Partial<IProfile> = {  //현재 사용하는 IProfile은 전부 ?타입
  candy: 10
}

