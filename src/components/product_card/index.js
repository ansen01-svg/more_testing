import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useMyContext } from '../../context';
import { useState } from "react";


function ProductCard({ product }) {

    const { image, price, rating, title } = product;

    return (
        <ProductCardWrapper>
            <ImageHolder image={image} title={title} />
            <RatingHolder rating={rating} />
            <TitleHolder title={title} />
            <PriceHolder price={price} />
            <ButtonHolder />
        </ProductCardWrapper>
    )
}

function ImageHolder({ image, title }) {
    return (
        <ImageWrapper>
            <img src={image} alt={title} />
        </ImageWrapper>
    )
}

function RatingHolder({ rating }) {
    return (
        <RatingWrapper>
            <Typography variant="h4">
                { rating }
            </Typography>
            <StarIcon sx={{ fontSize: '14px', color: 'green' }} />
        </RatingWrapper>
    )
}

function TitleHolder({ title }) {
    return (
        <TitleWrapper>
            <Typography variant="p">
                { title }
            </Typography>
        </TitleWrapper>
    )
}

function PriceHolder({ price }) {
    return (
        <PriceWrapper>
            <Typography variant="h3">
                Rs. { price }
            </Typography>
        </PriceWrapper>
    )
}

function ButtonHolder() {

    const { setCartAmount } = useMyContext();

    const [disable, setDisable] = useState(false);

    function addToCart() {
        setCartAmount(cartAmount => cartAmount + 1)
        setDisable(true)
    }

    return (
        <ButtonWrapper className="button_holder">
            <Button handleClick={addToCart} disableButton={disable}>
                {
                    disable ? 'In cart' : 'Add to cart'
                }
            </Button>
        </ButtonWrapper>
    )
}

export const Button = (props) => {

    const { children, handleClick, disableButton } = props;

    return (
        <button onClick={handleClick} disabled={disableButton}>
            { children }
        </button>
    )
}

const ProductCardWrapper = styled.div`
    width: 210px;
    height: 320px;
    position: relative;
    // border: 1px solid gray;

    @media screen and (min-width: 850px) {
        height: 300px;
        cursor: pointer;

        &:hover {
            box-shadow: 5px 5px 10px rgb(215, 243, 215),
            -5px -5px 10px rgb(215, 243, 215);
    
            .button_holder {
                display: block;
            }
        }
    }
`

const ImageWrapper = styled.div`
    width: 100%;
    height: 75%;
    // border: 1px solid gray;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }

    @media screen and (min-width: 850px) {
        height: 84%;
    }
`

const RatingWrapper = styled.div`
    padding: 5px;
    position: absolute;
    top: 67%;
    left: 10px;
    background: rgb(215, 243, 215);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

const TitleWrapper = styled.div`
    padding: 2px 10px;
    z-index: -10;
    // border: 1px solid gray;
`

const PriceWrapper = styled.div`
    padding: 2px 10px;
    // border: 1px solid gray;
`

const ButtonWrapper = styled.div`
    width: 100%;
    height: 32px;
    background: white;
    // border: 1px solid gray;

    button {
        width: 100%;
        height: 100%;
        border: 0.1px solid rgb(189, 231, 189);
        outline: none;
        background: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    }

    @media screen and (min-width: 850px) {
        height: auto;
        padding: 2px 10px;
        position: absolute;
        top: 84%;
        left: 0;
        z-index: 10;
        display: none;

        button {
            cursor: pointer;
            
            &:hover {
                border: 0.1px solid black; 
            }
        }
    }
`


export default ProductCard;