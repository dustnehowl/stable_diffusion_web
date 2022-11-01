import styled from "styled-components";
import {Link} from 'react-router-dom';
import Text2img_desc from "./Text2img_desc";
import Img2img_desc from "./Img2img_desc";

const CustomDiv = styled.div`
    width : 1024px;
    justify-content: center;
    margin: auto;
    font-weight: 200;
    h1 {
        font-weight: 200;
    }
`

const Main = () => {
    return (
        <CustomDiv>
            <h1>Stable Diffusion Web Application</h1>
            <Text2img_desc />
            <Img2img_desc />
        </CustomDiv>
    );
}

export default Main;