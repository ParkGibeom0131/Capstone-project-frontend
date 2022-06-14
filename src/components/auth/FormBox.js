import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 40px 25px 40px;
    margin-bottom: 15px;
    background-color: #323232;
    form {
        margin-top: 30px;
        width: 70%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

function FormBox({ children }) {
    return <Container>{children}</Container>;
}

export default FormBox;