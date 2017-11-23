import React, { Component } from 'react';
import styled from 'styled-components'

const BodyContainer = styled.div`
display:flex;
justify-content: space-around;
background-color: #323232;

`

class Header extends Component {
    render() {
        return (
            <BodyContainer>
                <h1><center>Walk Through and Resource Guides</center></h1>
            </BodyContainer>
        );
    }
}

export default Header;