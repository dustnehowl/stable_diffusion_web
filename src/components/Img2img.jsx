import styled from "styled-components";

const CustomDiv = styled.div`
    width : 1024px;
    justify-content: center;
    margin: auto;
    padding-bottom: 200px;
    h1 {
        font-weight: 200;
    }
`

const Img2img = () => {
    return (
        <CustomDiv>
            <h1>Image to Image</h1>
        </CustomDiv>
    );
}

export default Img2img;