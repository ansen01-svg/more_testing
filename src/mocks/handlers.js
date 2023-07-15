import { rest } from 'msw';
import mockedProducts from '../utils/mocked_products';


export const handlers = [
    rest.get('https://fakestoreapi.com/product', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockedProducts),
        )
    }),
]