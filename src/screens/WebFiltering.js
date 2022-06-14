import { Title } from "../styles";
import { SymbolicIcon, StyledImg } from "../styles";
import WebFilter from "../img/WebFilter.png";

function WebFiltering() {
    return (
        <div>
            <SymbolicIcon>
                <StyledImg src={WebFilter} alt="WebFiltering" />
            </SymbolicIcon>
            <Title>화상 캠 필터링</Title>
        </div>
    );
}

export default WebFiltering;