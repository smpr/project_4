import React from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;
height: 100vh;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
`
const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-content: center;
width: 25vw;
color: white;
background-color: #4B4B4B;
padding: 20px;
text-align: center;
box-shadow: 3px 3px 3px #191919;
button {

}
a {
    color: white;
    text-decoration: none;
}

`

const Button = styled.button`
:hover {
    box-shadow: 0 7px 7px 0 rgba(255,255,255,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
:focus {
    outline: none;
    color:white;
    box-shadow: 0 0 0 0;
    background-color:#191919;

}

`
const ImgContainer = styled.div`
img {
width: 25vw;
}
`
const LinkDiv = styled.div`
display:flex;
justify-content: space-between;
`
const NavContainer = styled.div`
display:flex;
align-items: center;
justify-content: space-around;
background-color: #191919;

height: 5vh;
color: white;
box-shadow: 10px 10px 5px #888888;
` 
const InnerForm = styled.div`
display: flex;
justify-content: space-around;
`
const ListDiv = styled.div`
display:flex;
justify-content: left;
align-content: left;
flex-direction: column;
`
export { NavContainer, ListDiv, InnerForm, FormContainer , LinkDiv, Container, BodyContainer, Button, ImgContainer

}