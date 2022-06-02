// import React, { forwardRef } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";


const Card = () => {
  // const word_list = useSelector((state) => state.word.list);
  // const { word_title, word_text, word_ex, completed } = list;
  // const word_list = props.list;
  // console.log(word_title)



  return (
    <ul>
      <li>
        <div>단어</div>
        <p></p>
      </li>
      <li>
        <div>설명</div>
        <p></p>
      </li>
      <li>
        <div>예시</div>
        <p></p>
      </li>
    </ul>
  )
};



export default Card;