import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { loadDictFB, createDictFB, deleteDictFB, updateDictFB } from './redux/modules/dict'
import { Link } from "react-router-dom";

// import Card from "./Card";

const Home = (props) => {
  //리덕스로 데이터 받아오는 방식
  const word_lists = useSelector((state) => state.dict.list);
  // console.log(word_lists)
  let dispatch = useDispatch();


  return (
    <HomeWrap>
      <ListStyle>
        {word_lists.map((word, idx) => {
          // console.log(word)
          return (
            <Card key={idx} completed={word.completed}>
              <ul>
                <li>
                  <div>단어</div>
                  <p>{word.word_title}</p>
                </li>
                <li>
                  <div>설명</div>
                  <p>{word.word_text}</p>
                </li>
                <li>
                  <div>예시</div>
                  <p>{word.word_ex}</p>
                </li>
              </ul>
              <BtnBox>
                <button onClick={() => {
                  dispatch(updateDictFB(word_lists[idx].id, word_lists[idx]))
                }}>완료</button>
                <button onClick={() => {
                  dispatch(deleteDictFB(word_lists[idx].id))
                }}>삭제</button>
              </BtnBox>
            </Card>
          )
        }
        )}
      </ListStyle>
    </HomeWrap>
  )
}

const HomeWrap = styled.div`
  padding: 0 100px;
`;
const BtnBox = styled.div`
  position: absolute;
  top:1rem;
  right:1rem;
  display: flex;

  button {
    background: none;
    border: none;
    font-family: 'IM_Hyemin-Regular';
    cursor: pointer;

  }
`;

const ListStyle = styled.div`
 display: flex;
  flex-wrap: wrap;
  /* -webkit-box-pack: start;
  justify-content: space-between; */
  /* gap: 20px; */
  width: 100%;
  padding: 50px 0px;
  flex-grow: 1;
`;

const Card = styled.article`
  position: relative;
  top: 0px;
  left: 0px;
  margin: 10px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #596493;
  width : 31.7%;
  box-sizing: border-box;
  margin: 0.8%;
  box-shadow: 5px 5px 0px rgb(182 177 206);
  transition: .5s;

  background-color: ${(props) => (props.completed ? "#E6E6FA" : "")};

  &:hover{ 
    top:-3px;
    left:-3px;
    box-shadow: 8px 8px 0px rgb(182 177 206);
    border: 1px solid #4528c1;
    transition: .5s;
  }

  ul {
    padding: 10px;
  }
  li{
    padding:8px;
  }
  li>div{
    font-size: 14px;
    /* font-weight:600; */
    margin-bottom: 8px;
    color: #c6c7d0;
  }
  p {
    font-size: 20px;
    font-family: 'IM_Hyemin-Regular';
    white-space: nowrap;
    overflow: hidden;
     text-overflow: ellipsis;
  }

`;

// const Icons = css`
//   color: ${(props) =>
//     props.completed === "false"
//       ? props.theme.colors.mainColor
//       : props.theme.colors.white};
//   font-size: ${({ theme }) => theme.fontSizes.xl};
// `;

// const BeforeCheck = styled(TiTickOutline)`
//   color: ${({ theme }) => theme.colors.mainColor};
//   font-size: ${({ theme }) => theme.fontSizes.xl};
// `;
// const AfterCheck = styled(TiTick)`
//   color: ${({ theme }) => theme.colors.white};
//   font-size: ${({ theme }) => theme.fontSizes.xl};
// `;

// const Edit = styled(TiEdit)`
//   ${Icons};
// `;

// const Delete = styled(TiTimes)`
//   ${Icons};
// `;


export default Home;