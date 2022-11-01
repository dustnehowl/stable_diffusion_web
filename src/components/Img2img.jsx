import styled from "styled-components";
import React from 'react';
import ImageUploading from 'react-images-uploading';

const CustomDiv = styled.div`
    width : 1024px;
    justify-content: center;
    margin: auto;
    padding-bottom: 200px;
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
`

const Img2img = () => {
    const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
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
                <button className="upload_button"
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                >
                Upload Image
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image['data_url']} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                </div>
                ))}
            </div>
            )}
        </ImageUploading>
        </div>
    </CustomDiv>
  );
}

export default Img2img;