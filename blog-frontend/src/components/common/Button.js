import React from 'react';
import './Button.scss';

const Button = (props) => {
    // '로그인' 또는 '회원가입'인 경우에만 'weight' 클래스 추가
    const buttonClass = `Button violet ${props.children === '로그인' || props.children === '회원가입' ? 'weight' : ''}`;

    return (
        <button className={buttonClass}>{props.children}</button>
    );
};

export default Button;
