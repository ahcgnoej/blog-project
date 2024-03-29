import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {changeField,initializeForm} from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm =()=>{
    const dispatch=useDispatch();
    const {form}=useSelector(({auth})=>({
        form: auth.login
    }));
    
    const onChange =e=>{
        const {value,name}=e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };


    const onSubmit =e =>{
        e.preventDefault();
    };

    useEffect(()=>{
        dispatch(initializeForm('login'));
    },[dispatch]);

    return (
        <AuthForm
        type="로그인"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        ></AuthForm>
    );
};

export default LoginForm;