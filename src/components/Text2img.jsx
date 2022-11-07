import styled from "styled-components";
import { useState } from 'react'
import {useForm} from 'react-hook-form';
import axios from "axios";
import images from "./images/loading-gif.gif"
import welcome_img from "./images/loading2.gif"

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
        border : .2px solid #d9d9d9;
        border-radius: 5px;
        padding: 10px
    }
    .submitButton{
        background-color: #d2e7e8;
    }
    .result_img{
        width: 512px;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Text2img = () => {
    const { register, handleSubmit } = useForm();
    const [img, setImg] = useState({
        img_url: welcome_img,
        success: false,
        translation: "",
    });
    const onSubmit = async (data) => {
        console.log("버튼눌렸당");
        setImg({
            success: false,
            img_url: images,
            translation: "",
        });
        const response = await axios({
            method: "POST",
            url : "http://localhost:5000/text2img",
            data: data.text,
        })
        console.log(response.data);
        setImg(response.data);
        console.log(img)
    };
    return (
        <NewStyle>
            <h1>Text to Image</h1>
            <div className="center">
                <img className="result_img" src={img.img_url} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("text")} />
            <input className="submitButton" type="submit" />
            </form>
        </NewStyle>
    );
}

export default Text2img;