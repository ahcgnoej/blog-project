import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Button from '../common/Button';

const StyledAuthForm=styled.div`

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

const AuthForm=({type, form,onChange,onSubmit})=>{
    return(
        <StyledAuthForm>
            
            <form onSubmit={onSubmit}>
                {/*아이디 입력필드*/}
                <StyledInput 
                autoComplete='username' 
                name='username' 
                placeholder='아이디'
                onChange={onChange}
                value={form.username}
                ></StyledInput>

                {/* 비밀번호 입력 필드 */}
                <StyledInput
                    autoComplete='new-password' 
                    name="password"
                    placeholder='비밀번호'
                    type='password'
                    onChange={onChange}
                    value={form.password}
                ></StyledInput>

                {type==='회원가입' && (
                    <StyledInput
                    autoComplete="new-password"
                    name="passwordConfirm"
                    placeholder='비밀번호 확인'
                    type='password'
                    onChange={onChange}
                    value={form.passwordConfirm}
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