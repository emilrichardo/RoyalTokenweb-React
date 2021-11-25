import React, { useState } from 'react';
import MetaMask from './MetaMask';
import styled from 'styled-components';
import fox from "../../images/metamask-fox.svg"





const AT = () => {



  return (
  <Card>
    <div className="content">
      <img src={fox}/>
      <h5>Add Token<br/>to Metamask</h5>
    </div>
    <div className="cta">
      <MetaMask/>
    </div>
  </Card>
  );
}

const Card = styled.div`
display:inline-flex;
width:100%;
padding: 20px;
margin: 15px auto;

border-radius: 10px;
background: #1e1e32; /* Old browsers */

background: -webkit-linear-gradient(left,rgb(60, 60, 90) 0%,rgb(70, 70, 90) 100%);
background: -o-linear-gradient(left,rgb(60, 60, 90) 0%,rgb(70, 70, 90) 100%);
background: -moz-linear-gradient(left,rgb(60, 60, 90) 0%,rgb(70, 70, 90) 100%);
background: linear-gradient(to left,rgb(60, 60, 90) 0%,rgb(70, 70, 90) 100%);


& .content {
  display:flex;
  align-items:center;
  & h5 {
    color:#ffff;
  }
   & img{
     max-width: 80px;
     margin-right:18px
   }

}

`;

export default AT;