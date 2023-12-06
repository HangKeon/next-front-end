import React from 'react'

const CounterLetDocumentPage = () => {

  const onClickCountUp = () => {
    const count = Number(document.getElementById('qqq').innerText) + 1;
    document.getElementById('qqq').innerText = count;
  }

  const onClickCountDown = () => {
    const count = Number(document.getElementById('qqq').innerText) - 1;
    document.getElementById('qqq').innerText = count
  }

  return (
    <div>
      <div id='qqq'>0</div>
      <button onClick={onClickCountUp}>+</button>
      <button onClick={onClickCountDown}>-</button>
    </div>
  )
}

export default CounterLetDocumentPage;
