import styled from "@emotion/styled";
import { Typography } from "@mui/material";


function Footer() {
    return (
        <FooterWrapper>
            <Typography variant="p">
                www.FakeShop.com
            </Typography>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    width: 100vw;
    height: 20vh;
    background: rgb(189, 231, 189);
    display: flex;
    align-items: center;
    justify-content: center;
`


export default Footer;