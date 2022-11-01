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
        height: 300px;
    }

    .button {
        text-decoration: none;
    }

    .example_box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .button_box {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px;
    }
`

const Img2img_desc = () => {
    return (
        <CustomDiv>
            <h3>2. Image to Image with Stable Diffusion</h3>
            <div className="example_box">
                <img className="example" src="https://cdn.discordapp.com/attachments/874897301292875836/1022073065783427122/background2.jpg" />
                <img className="example" src="https://cdn.discordapp.com/attachments/874897301292875836/1022073066035093596/grid-0002.png" />
            </div>
            <div className="button_box">
                <Link className="button" to="img2img">
                바로가기
                </Link>
            </div>
        </CustomDiv>
    );
}

export default Img2img_desc;