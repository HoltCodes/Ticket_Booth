import styled from "styled-components";
import { Link } from "react-router-dom";



export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0; 
    overflow: hidden;
    background: linear-gradient( 180deg, rgba(108, 99, 255,1) 8%, rgba(111,102,248,1) 100%);
`;

export const FormWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px){
        height: 80%;
    }
`;


export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    max-width: 400px;
    background: #010101;
    height: 90%;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 60px 32px 100px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,.9);
    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: 400;
`;

export const FormLabel = styled.label`
    font-size: 14px;
    margin-bottom: 8px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #6C63FF;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #FF5555;
    font-size: 16px;
`;

const SignIn = styled(Link)`
    text-align: right;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;


