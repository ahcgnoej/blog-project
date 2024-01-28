import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../common/Button';

const StyledAuthForm=styled.div`
    h3{
        
    }
`;


const StyledInput=styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    outline:none;
    width: 100%;
    &:focus{
        color: black;
        border-bottom: 1px solid black;
    }
    &+&{
        margin-top: 1rem;
    }
`;

const Footer=styled.div`
    margin-top: 2rem;
    text-align: right;
    a{
        color: black;
        text-decoration: underline;
        &hover{
            color: black;
        }
    }
`;

const AuthForm=({type})=>{
    return(
        <StyledAuthForm>
            
            <form>
                <StyledInput autoComplete='username' name='username' placeholder='아이디'></StyledInput>

                <StyledInput
                    autoComplete='new-password'
                    name="password"
                    placeholder='비밀번호'
                    type='password'
                ></StyledInput>

                {type==='회원가입' && (
                    <StyledInput
                    autoComplete="new-password"
                    name="passwordConfirm"
                    placeholder='비밀번호 확인'
                    type='password'
                    />
                )}

                <Button>{type}</Button>
            </form>



            <Footer>
                {type==='로그인'?(
                <Link to ="/register">회원가입</Link>
                ):(<Link to ="/login">로그인</Link>)
                }
            </Footer>
        </StyledAuthForm>
    );
};

export default AuthForm;