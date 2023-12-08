import { gql, useMutation } from '@apollo/client'
import React from 'react'

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ #변수의 타입 적는 곳
    createProduct(seller: $seller, createProductInput: $createProductInput){  #실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

const GraphqlMutationArgsPage = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await createProduct({
      variables: {
        seller: "훈이",
        createProductInput: {
          name: "마우스",
          detail: "정말 좋은 마우스",
          price: 3000
        }
      }
    });
    console.log(result);
  }
  
  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </div>
  )
}

export default GraphqlMutationArgsPage;
