import styled from "styled-components";
import {Link} from 'react-router-dom';

const HeaderDiv = styled.div`
    .header {
        align-items: center;
        height : 70px;
        background-color: #ACACAC;
        font-weight: 200;
    }
    .contents {
        width : 1024px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin : 0 auto;
        font-weight: 200;
        text-decoration: none;
    }
    h2 {
        font-weight: 200;
    }
    .navElement {
        padding: 1rem;
        text-decoration: none;
    }
    .Logo {
        text-decoration: none;
    }
    padding-bottom: 20px;
`

const Header = () => {
    return (
        <HeaderDiv>
            <header className="header">
                <div className="contents">
                    <Link className="Logo" to="/">
                        <h2>Stable Diffusion</h2>
                    </Link>
                    <nav>
                        <Link className="navElement" to="text2img">text2img</Link>
                        <Link className="navElement" to="img2img">img2img</Link>
                    </nav>
                </div>
            </header>
        </HeaderDiv>
    );
}

export default Header;