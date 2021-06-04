import styled from "styled-components";
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import step from './img/step.png';
import clock from './img/clock.png';

import foods from './food.json';

const Card = styled.div`
    //border: black solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    width:300px;
    height:370px;
    margin-bottom: 50px;
`

const Profile = styled.image`
    margin-top:20px;
    //border:2px solid #646568;
    height:280px;
    width:280px;
    background: url(${(props) => props.src});
    //비율때문에 해야한다
    background-size: 280px;
    object-fit: cover;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1300px;
`

function Main(){
  return(
    /*
    <div>
      <Wrapper>
        <Card>
          <Profile></Profile>
          <p style={{margin: "0px"}}>치매 예방에 좋은</p>
          <p style={{height: "10px" ,margin: "10px", fontWeight: "bolder"}}>{foods[0].name}</p>
          <div style={{margin: "10px", color:"gray"}}>
            <span><img src={step} style={{width: "15px"}}/> 초급&emsp; </span>
            <span><img src={clock} style={{width: "15px"}}/> 10분 </span>
          </div>
        </Card>
      </Wrapper>
    </div>
    */
   <div>
     <Wrapper>
     {foods?.map((food,i)=>
     <Card>
      <Profile src={food.image}></Profile>
        <p style={{margin: "0px"}}>{food.description}</p>
        <p style={{height: "10px" ,margin: "10px", fontWeight: "bolder"}}>{food.name}</p>
        <div style={{margin: "10px", color:"gray"}}>
          <span><img src={step} style={{width: "15px"}}/> {food.level}&emsp; </span>
          <span><img src={clock} style={{width: "15px"}}/> {food.time}분 </span>
        </div>
     </Card>
     )} 
     </Wrapper>     
   </div>
  );
}

export default Main;