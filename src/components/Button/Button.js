import React from "react"
import { btn } from "./Button.module.css"

const Button = ({ onClickGoodBtn, onClickNeutralBtn, onClickBadBtn, onClickBtn }) => {
  // console.log(onClickBtn)
  return (
    <>
      <button className={btn} onClick={onClickBtn}>
        good
      </button>
      <button className={btn} onClick={onClickBtn}>
        neutral
      </button>
      <button className={btn} onClick={onClickBtn}>
        bad
      </button>
      {/* <button className={btn} onClick={onClickGoodBtn}>
        good
      </button>
      <button className={btn} onClick={onClickNeutralBtn}>
        neutral
      </button>
      <button className={btn} onClick={onClickBadBtn}>
        bad
      </button> */}
    </>
  )
}

export default Button
