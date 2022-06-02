import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadDictFB } from "./redux/modules/dict";

import Home from "./Home";
import Header from "./Header";
import AddPage from "./AddPage";
import './style.css';

function App() {
  // const history = useHistory();

  // 디스패치 사용
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(loadDictFB());
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/add' component={AddPage} />
          </Switch>
        </Container>
        <AddBtn className="addBtn" to="/add">추가</AddBtn>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  font-family: 'IM_Hyemin-Bold';
`;

const AddBtn = styled(Link)`
  position: fixed;
  bottom: 20px;
  right:20px;
  width:50px;
  height:50px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  border: 2px solid #7d8dd0;
  font-family: 'IM_Hyemin-Regular';
`;


export default App;
