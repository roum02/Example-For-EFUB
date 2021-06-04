import React from "react";
import styled from "styled-components";

const Menus = styled.div`
    //border: #655851 solid 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width:80px;
    height:40px;
    color: black;
    font-size: 90%;
    font-weight: bold;

    &:hover{
    background-color: #655851;
    color: white;
    text-decoration: none;
    }
`

function NavItem({ menu }) {
  return (
    <div>
      <Menus>
      <div> {menu.name} </div>
      </Menus>
    </div>
  );
}

export default NavItem;