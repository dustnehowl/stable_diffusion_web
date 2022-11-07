import styled from "styled-components";
import {useForm} from 'react-hook-form';
import React from 'react';
import axios from "axios";
import ImageUploading from 'react-images-uploading';

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
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    };

    const onSubmit = async (sm_data) => {
        console.log("버튼눌렸당");
        const response = await axios({
            method: "POST",
            url : "http://localhost:5000/img2img",
            data: sm_data.text,
        })
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