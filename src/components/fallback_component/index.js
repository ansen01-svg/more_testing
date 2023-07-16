import styled from "@emotion/styled";
import { TextHolder } from '../navbar';


function FallbackComponent({ message }) {
    return (
        <FallbackWrapper>
            <TextHolder variant='p' text={message} />
        </FallbackWrapper>
    )
}

const FallbackWrapper = styled.div`
    width: 100vh;
    height: 87vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default FallbackComponent;