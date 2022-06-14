import { Title } from "../styles";
import { SymbolicIcon, StyledImg } from "../styles";
import DocsSecure from "../img/DocsSecure.png"

function FileUpload() {
    return (
        <div>
            <SymbolicIcon>
                <StyledImg src={DocsSecure} alt="DocsSecure" />
            </SymbolicIcon>
            <Title>파일 업로드</Title>
        </div>
    );
}

export default FileUpload;