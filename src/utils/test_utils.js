import {render} from '@testing-library/react';
import AppWrapper from '../hocs/theme_and_context_wrapper';


const customRender = (ui, options) =>
  render(ui, {wrapper: AppWrapper, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}