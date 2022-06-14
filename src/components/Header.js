import { faHome, faDisplay, faFileShield, faTowerBroadcast, faFileCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import routes from "../routes";

const SHeader = styled.header`
    width: 100%;
    height: 20vh;
    border-bottom: 1px solid white;
    background-color: black;
    padding: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    max-width: 930px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Icon = styled.span`
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    z-index: 2;
    user-select: none;
    transition: color 0.2s ease;
`;

const StyledLink = styled(Link)`
    padding: 30px;
    background-color: #F0F5F9;
    border-radius: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Explain = styled.h1`
    color: orange;
    margin-top: 8px;
`;

function Header() {
    return (
        <SHeader>
            <Wrapper>
                <Icon>
                    <StyledLink to={routes.home}>
                        <FontAwesomeIcon icon={faHome} size="2x" />
                    </StyledLink>
                </Icon>
                <Icon>
                    <StyledLink to={routes.WebFiltering}>
                        <FontAwesomeIcon icon={faTowerBroadcast} size="2x" />
                    </StyledLink>
                    <Explain>화상 캠 필터링</Explain>
                </Icon>
                <Icon>
                    <StyledLink to={routes.screenSharing}>
                        <FontAwesomeIcon icon={faDisplay} size="2x" />
                    </StyledLink>
                    <Explain>화면 공유 보호</Explain>
                </Icon>
                <Icon>
                    <StyledLink to={routes.fileUpload}>
                        <FontAwesomeIcon icon={faFileShield} size="2x" />
                    </StyledLink>
                    <Explain>파일 업로드</Explain>
                </Icon>
            </Wrapper>
        </SHeader>
    );
}
export default Header;