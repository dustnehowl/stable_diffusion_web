import styled from "styled-components";
import {useForm} from 'react-hook-form';

const CustomDiv = styled.div`
    width : 1024px;
    margin: auto;
    h1 {
        font-weight: 200;
    }
`

const Text2img = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <CustomDiv>
            <h1>Text to Image</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input type="submit" />
            </form>
        </CustomDiv>
    );
}

export default Text2img;