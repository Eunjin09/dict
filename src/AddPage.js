import React, { useRef, useState } from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { createDictFB } from './redux/modules/dict'


const AddPage = () => {

  const history = useHistory();

  const dispatch = useDispatch();

  // input 값 가져오기
  const wordRef = React.useRef(null); // 단어
  const textRef = React.useRef(null); // 설명
  const exRef = React.useRef(null); // 예시

  console.log(wordRef)

  const addInfo = () => {
    const wordInfo = wordRef.current.value;
    const textInfo = textRef.current.value;
    const exReInfo = exRef.current.value;

    dispatch(createDictFB({ word_title: wordInfo, word_text: textInfo, word_ex: exReInfo, completed: false }))
    history.push("/");
  }



  return (
    <AddWrap>
      <h2>단어 추가하기</h2>
      <Form>
        <InputBox>
          <label htmlFor="input_word">단어</label>
          <input type="text" id="input_word" ref={wordRef} />
        </InputBox>
        <InputBox>
          <label htmlFor="input_text">설명</label>
          <input type="text" id="input_text" ref={textRef} />
        </InputBox>
        <InputBox>
          <label htmlFor="input_ex">예시</label>
          <input type="text" id="input_ex" ref={exRef} />
        </InputBox>
        <InputBtn
          type="submit"
          onClick={addInfo}
        >저장하기</InputBtn>
      </Form>
    </AddWrap>
  )
}
const AddWrap = styled.div`
  margin: 0 auto;
  max-width: 400px;

  h2 {
    font-size : 20px;
    text-align: center;
    font-family: 'IM_Hyemin-Bold';
  }
`;
const Form = styled.form`
  margin: 0 auto;
  text-align: center;
`;

const InputBox = styled.div`
  margin: 40px auto;
  max-width: 400px;
  
label{
  display: block;
  text-align: left;
}
input {
  outline: none;
  width:100%;
  background: rgba(255,255,255,1);
  border: none;
  padding: 10px 3px;
  font-size: 16px;
  margin-top: 10px;
}
`;

const InputBtn = styled.button`
  font-family: 'IM_Hyemin-Regular';
  display: inline-block;
  padding: 8px 50px;
  background: #5563a1;
  border: none;
  color:#fff;
  font-size: 18px;
  cursor: pointer;
`;

export default AddPage;