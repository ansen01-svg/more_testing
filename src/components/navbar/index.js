import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMyContext } from '../../context';


const logo = 'FakeShop';

function Navbar() {
    return (
        <NavWrapper>
            <TextHolder text={logo} variant='h1' />
            <CartHolder />
        </NavWrapper>
    )
}

export const TextHolder = ({ text, variant }) => {
    return (
        <div>
            <Typography variant={variant}>{text}</Typography>
        </div>
    )
}

function CartHolder() {

    const { cartAmount } = useMyContext();

    return (
        <CartWrapper>
            <span className="amount_holder">
                <Typography variant="p" data-testid='cart-amount-holder'>
                    { cartAmount }
                </Typography>
            </span>
            <IconHolder>
                <ShoppingCartIcon />
            </IconHolder>
        </CartWrapper>
    );
}

export const IconHolder = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    )
}

const NavWrapper = styled.div`
    width: 100vw;
    height: 65px;
    padding: 0 20px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 2px 2px 8px rgb(215, 243, 215);
    z-index: 20;

    @media screen and (min-width: 780px) {
        padding: 0 40px;
    }
`

const CartWrapper = styled.div`
    position: relative;

    .amount_holder {
        position: absolute;
        top: -15px;
        left: -7px;
    }
`


export default Navbar;