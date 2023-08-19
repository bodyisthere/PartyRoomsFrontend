import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { componentRenderOptions, TestProvider } from './TestProvider';

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
