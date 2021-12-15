import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/Button';

describe('Button 类型', () => {
  it('default 按钮', () => {
    const { getByText } = render(<Button>default</Button>);
    const btnDom = getByText('default');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });

  it('primary 按钮', () => {
    const { getByText } = render(<Button type="primary">primary</Button>);
    const btnDom = getByText('primary');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--primary slq--button--type--primary slq--button--size--default',
    );
  });
  it('success 按钮', () => {
    const { getByText } = render(<Button type="success">success</Button>);
    const btnDom = getByText('success');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--success slq--button--type--success slq--button--size--default',
    );
  });

  it('info 按钮', () => {
    const { getByText } = render(<Button type="info">info</Button>);
    const btnDom = getByText('info');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--info slq--button--type--info slq--button--size--default',
    );
  });
  it('warning 按钮', () => {
    const { getByText } = render(<Button type="warning">warning</Button>);
    const btnDom = getByText('warning');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--warning slq--button--type--warning slq--button--size--default',
    );
  });

  it('danger 按钮', () => {
    const { getByText } = render(<Button type="danger">danger</Button>);
    const btnDom = getByText('danger');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--danger slq--button--type--danger slq--button--size--default',
    );
  });

  it('text 按钮', () => {
    const { getByText } = render(<Button type="text">text</Button>);
    const btnDom = getByText('text');
    const len = btnDom.className.split(' ').length;
    expect(len).toBe(4);
    expect(btnDom).toHaveClass(
      'slq--button slq--button--text slq--button--type--text slq--button--size--default',
    );
  });
});

describe('Button Plain', () => {
  it('无 plain 参数', () => {
    const { getByText } = render(<Button>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });
  it('plain 为 true', () => {
    const { getByText } = render(<Button plain={true}>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('is--plain');
  });
  it('plain 为 false', () => {
    const { getByText } = render(<Button plain={true}>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });
});

describe('Button Round', () => {
  it('无 round 参数', () => {
    const { getByText } = render(<Button>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });
  it('round 为false', () => {
    const { getByText } = render(<Button round={false}>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });
  it('round 为 true', () => {
    const { getByText } = render(<Button round={true}>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('is--round');
  });
});

describe('Button disabled', () => {
  it('无 disabled 参数', () => {
    const { getByText } = render(<Button>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });
  it('disabled 为 false', () => {
    const { getByText } = render(<Button disabled={false}>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass(
      'slq--button slq--button--default slq--button--type--default slq--button--size--default',
    );
  });

  it('disabled 为 true, 默认按钮', () => {
    const { getByText } = render(<Button disabled={true}>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('is--disabled--default');
  });

  it('disabled 为 true， primary 按钮', () => {
    const { getByText } = render(
      <Button type="primary" disabled={true}>
        button
      </Button>,
    );
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('is--disabled--primary');
  });
});

describe('Button  style', () => {
  it('有自定义的 style', () => {
    const { getByText } = render(
      <Button style={{ width: '80px' }}>button</Button>,
    );
    const btnDom = getByText('button');
    expect(btnDom).toHaveStyle('width: 80px');
  });
});

describe('Button  className', () => {
  it('有自定义的 style', () => {
    const { getByText } = render(<Button className="shuliqi">button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('shuliqi');
  });
});

describe('Button  size', () => {
  it('默认size', () => {
    const { getByText } = render(<Button>button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('slq--button--size--default');
  });

  it('size 为 small', () => {
    const { getByText } = render(<Button size="small">button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('slq--button--size--small');
  });

  it('size 为 mini', () => {
    const { getByText } = render(<Button size="mini">button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('slq--button--size--mini');
  });

  it('size 为 medium', () => {
    const { getByText } = render(<Button size="medium">button</Button>);
    const btnDom = getByText('button');
    expect(btnDom).toHaveClass('slq--button--size--medium');
  });
});
