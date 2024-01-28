import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledAuthTemplate=styled.div`
    position: absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #f3f0ff;

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

const WhiteBox=styled.div`
    .logo-area{
        display: block;
        padding-bottom: 2rem;
        text-align:center;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 1px;
        color: #7b4c7d;
    }
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 10px;
`;

const AuthTemplate=({children})=>{
    return(
        <StyledAuthTemplate>
            <WhiteBox>
                <div className="logo-area">
                    BOARDBUDDY
                </div>
                {children}
            </WhiteBox>
           
        </StyledAuthTemplate>
    );
};

export default AuthTemplate ;