import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { ComponentRenderOptions, TestProvider } from './TestProvider';

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
