import { Title } from "../styles";
import { SymbolicIcon, StyledImg } from "../styles";
import SharingSecure from "../img/SharingSecure.png";

function ScreenSharing() {
    return (
        <div>
            <SymbolicIcon>
                <StyledImg src={SharingSecure} alt="SharingSecure" />
            </SymbolicIcon>
            <Title>화면 공유 보호</Title>
        </div>
    );
}

export default ScreenSharing;