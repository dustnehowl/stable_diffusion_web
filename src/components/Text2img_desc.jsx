import styled from "styled-components";
import {Link} from 'react-router-dom';

const CustomDiv = styled.div`
    width : 1024px;
    justify-content: center;
    margin: auto;
    font-weight: 200;

    h3 {
        font-weight: 200;
    }

    .example {
        padding-top: 20px;
        width : 1024px;
    }

    .button {
        text-decoration: none;
    }

    .button_box {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
`

const Text2img_desc = () => {
    return (
        <CustomDiv>
            <h3>1. Text to Image with Stable Diffusion</h3>
            <img className="example" src="https://cdn.discordapp.com/attachments/874897301292875836/1036846848821968947/stable_diffusion_web_1.png" />
            <img className="example" src="https://cdn.discordapp.com/attachments/874897301292875836/1036846849702768692/stable_diffusion_web_2.png" />
            <div className="button_box">
                <Link className="button" to="text2img">
                바로가기
                </Link>
            </div>
        </CustomDiv>
    );
}

export default Text2img_desc;