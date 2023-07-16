import { screen, render } from "../../utils/test_utils";
import Navbar from ".";


describe('Navbar', () => {
    it('renders correctly', () => {
        render(<Navbar />)

        const logoElement = screen.getByRole('heading')
        expect(logoElement).toHaveTextContent(/pos/i)

        const cartAmountHolderElement = screen.getByTestId('cart-amount-holder')
        expect(cartAmountHolderElement).toHaveTextContent('0')
    })
})