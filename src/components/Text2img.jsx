import styled from "styled-components";
import { useState } from 'react'
import {useForm} from 'react-hook-form';

const NewStyle = styled.div`
    width : 1024px;
    margin: auto;
    h1 {
        font-weight: 200;
    }
    form {
        display: flex;
        flex-direction: column;
        margin : auto;
        width: 100%;
        height: 100%;
        // border: 2px solid;
    }
    label{
        margin : 5px;
        font-size: 14px;
        font-weight: 600;
    }
    input{
        margin: 4px;
        border : 1px solid #d9d9d9;
        border-radius: 2px;
        padding: 10px
    }
    .submitButton{
        background-color: #d2e7e8;
    }
`

const Text2img = () => {
    const { register, handleSubmit } = useForm();
    const {img, setImg} = useState(null);
    const onSubmit = data => {
        alert(data.text);
    };
    return (
        <NewStyle>
            <h1>Text to Image</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("text")} />
            <input type="submit" />
            </form>
        </NewStyle>
    );
}

export default Text2img;