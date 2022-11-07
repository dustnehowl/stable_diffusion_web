import styled from "styled-components";
import {useForm} from 'react-hook-form';
import React from 'react';
import axios from "axios";
import ImageUploading from 'react-images-uploading';
import { useState } from 'react'
import loading_img from "./images/loading-gif.gif"

const CustomDiv = styled.div`
    width : 1024px;
    justify-content: center;
    margin: auto;
    padding-bottom: 50px;
    h1 {
        font-weight: 200;
    }

    .upload_button {
        width: 95%;
        height: 320px;
        background-color: #d2e7e8;
        border : 1px solid #d9d9d9;
        border-radius: 2px;
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
    form {
        display: flex;
        flex-direction: column;
        margin : auto;
        width: 100%;
        height: 100%;
        // border: 2px solid;
    }

    .prompt{
        font-weight: 200;
        padding-top : 30px;
        padding-bottom : 15px;
    }
    .modify_bt{
        margin: 5px;
        border : .2px solid #d9d9d9;
        border-radius: 5px;
        padding: 10px;
        width: 253px;
        background-color : #d2e7e8;
    }
`

const Img2img = () => {
    const { register, handleSubmit } = useForm();
    const [images, setImages] = React.useState([]);
    const [result_img, setImg] = useState({
        img_url: "",
        success: false,
        translation: "",
    });
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    };

    const onSubmit = async (sm_data) => {
        console.log("버튼눌렸당");
        setImg({
            success: false,
            img_url: loading_img,
            translation: "",
        });
        console.log(images[0])
        const formData = new FormData()
        formData.append("file", images[0].file)
        formData.append("fileName", "test.png")
        formData.append("prompt", sm_data.text)
        
        const response = await axios({
            method: "POST",
            url: "http://localhost:5000/img2img",
            headers: {
            "Content-Type": "multipart/form-data", // Content-Type을 반드시 이렇게 하여야 한다.
            },
            data: formData, // data 전송시에 반드시 생성되어 있는 formData 객체만 전송 하여야 한다.
        })
        
        setImg(response.data);
        // const response = await axios({
        //     method: "POST",
        //     url : "http://localhost:5000/img2img",
        //     data: sm_data.text,
        // })
        console.log(response.data.translation);
    };

    return (
    <CustomDiv>
        <h1>Image to Image</h1>
        <div className="App">
        <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
        >
            {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            }) => (
            // write your building UI
            <div className="upload__image-wrapper">
                {imageList.length ? 
                <div>
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image['data_url']} alt="" width="512" />
                            <div className="image-item__btn-wrapper">
                            <button className="modify_bt" onClick={() => onImageUpdate(index)}>이미지 변경</button>
                            <button className="modify_bt" onClick={() => onImageRemove(index)}>Remove</button>
                            
                            </div>
                        </div>
                    ))}
                    <div className="prompt">Prompt 입력</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("text")} />
                    <input className="submitButton" type="submit" />
                    </form>
                    <img className="result_img" src={result_img.img_url} />
                </div>
                    
                :
                    <button className="upload_button" 
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                    >
                    Upload Image
                    </button>
                }
            </div>
            )}
        </ImageUploading>
        </div>
    </CustomDiv>
    );
}

export default Img2img;