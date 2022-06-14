import styled from "styled-components";
import Header from "./Header";
import Separator from "../components/auth/Separator";

const Content = styled.main`
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    height: 80vh;
    background-color: #323232;
`;

const Leftside = styled.div`
    width: 40%;
    height: 100%;
    border-right: 1px solid white;
`;

const Rightside = styled.div`
    width: 100%;
    height: 100%;
`;

const RightTop = styled.div`
    margin: 0px 50px;
    height: 12%;
    border-bottom: 1px solid white;
`;

const RightBot = styled.div`
    margin: 0px 50px;
    height: 88%;;
`;

const Controller = styled.h1`
    color: white;
    height: 100%;
    font-size: 25px;
    display: flex;
    text-align: center;
    padding: 14px 0px;
`;

const Addon = styled.div`
    height: 100%;
    /* display: flex;
    text-align: center;
    justify-content: center; */
    //padding-top: 180px;
`;

const Something = styled.h1`
    color: white;
    font-size: 24px;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    padding-top: 20px;
`;

function Layout(props) {
    return (
        <>
            <Header />
            <Content>
                <Leftside>
                    {props.main}
                </Leftside>
                <Rightside>
                    <RightTop>
                        <Controller>
                            {props.controller}
                        </Controller>
                    </RightTop>
                    <RightBot>
                        <Addon>
                            {Boolean(props.addon) ? props.addon : (<Something> Something else</Something>)}
                        </Addon>
                    </RightBot>
                </Rightside>
                <Separator />
            </Content>
        </>
    );
}

export default Layout;