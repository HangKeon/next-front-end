import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router'
import React from 'react'

const StaticRoutingPage = () => {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/section05/05-01-static-routing-moved");
  }

  return (
    <div>
      <button onClick={onClickMove}>페이지 이동</button>
    </div>
  )
}

export default StaticRoutingPage
