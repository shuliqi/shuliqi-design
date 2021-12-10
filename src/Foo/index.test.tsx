import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Foo from './index';

describe('<Foo />组件', () => {
  it('文案是否正确', () => {
    const msg = 'msg';
    render(<Foo title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});

