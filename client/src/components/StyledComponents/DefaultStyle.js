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
a {
    color: white;
    text-decoration: none;
}

`
const Button = styled.button`
color: red;
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
justify-content: space-around;
background-color: #191919;
height: 8vh;
color: white;
` 
const InnerForm = styled.div`
display: flex;
justify-content: space-around;
`
export { NavContainer, InnerForm, FormContainer , LinkDiv, Container, BodyContainer, Button, ImgContainer

}