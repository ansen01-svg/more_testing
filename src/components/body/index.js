import styled from 'styled-components';
import { useMyContext } from '../../context';
import { TextHolder } from '../navbar';
import ProductCard from '../product_card';
import { Button } from '../product_card';


const headerText = 'Products'

function Body() {

    const { products } = useMyContext();

    if(products.length === 0) {
        return (
            <BodyWrapper height='87vh'>
                <Loader />
            </BodyWrapper>
        )
    }

    return (
        <BodyWrapper height='auto'>
            <Content products={products} />
        </BodyWrapper>
    )
}

const Loader = () => {
    return (
        <LoaderWrapper>
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </LoaderWrapper>
    )
}

function Content({ products }) {
    return (
      <ContentWrapper>
            <Header numberOfProducts={products.length} />
            <ProductsHolder products={products} />
            <Footer />
      </ContentWrapper>
    )
}

const Header = ({ numberOfProducts }) => {
    return (
        <HeaderWrapper>
            <TextHolder variant='h2' text={headerText} />
            <TextHolder variant='h2' text={`(${numberOfProducts})`} />
        </HeaderWrapper>
    )
}

const ProductsHolder = ({ products }) => {
    return (
        <ProductsHolderWrapper>
            {
              products.map(product => {
                  return <ProductCard key={product.id} product={product} />
              })
            }
        </ProductsHolderWrapper>
    )
}

const Footer = () => {
    return (
        <FooterWrapper>
          <Button>
            See more products
          </Button>
        </FooterWrapper>
    )
}

const BodyWrapper = styled.div`
    width: 100vw;
    height: ${props => props.height};
    padding: 40px 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 780px) {
      padding: 40px 80px;
    }

    @media screen and (min-width: 1015px) {
      padding: 40px 150px;
    }
`

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const HeaderWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
`

const ProductsHolderWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
`

const FooterWrapper = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    laign-items: center;
    justify-content: center;

    button {
      border: none;
      outline: none;
      background: none;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      cursor: pointer;
      font-weight: 500;
    }
`

const LoaderWrapper = styled.div`
text-align: center;
.lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: gray;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`


export default Body;