import styled from "styled-components";
import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

const Card = styled.div`
    background-color: #2c3035;
    border-radius: 20px;
    box-shadow: rgba(23, 25, 29, 0.3) 0 2px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 800px;
    width:350px;
    height:350px;
    margin-bottom: 50px;
`

const Profile = styled.image`
    margin-top:20px;
    border:2px solid #646568;
    height:180px;
    width:180px;
    background: url(${(props) => props.src});
    //비율때문에 해야한다
    background-size: 180px;
`

function Main(){
  /*
  const [myState, setMyState] = useState({
    login: '',
    avatar_url: '',
    html_url: '',
    name: '',
    company: ''
  });
  */
  return(
    <div>
      <div>
        <p>OUR RECIPES</p>
        <p>우리의식탁과 맛있는 음식을 만들어 보세요.</p>
      </div>
      
      <div></div>

      <div>
        <Card>
          <Profile></Profile>
        </Card>
      </div>
    </div>
  );
}

export default Main;