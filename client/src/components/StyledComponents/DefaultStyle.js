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

export { FormContainer , Container, BodyContainer, Button

}