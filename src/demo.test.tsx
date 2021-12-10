import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('单元测试demo', () => {
  it('测试点击', () => {
    // 测试函数
    const fn = jest.fn();

    // render 用来渲染元素
    const { getByLabelText } =render(<button aria-label="Button" onClick={fn}></button>);

    // getByLabelText 可以通过aria-label的值来获取元素
    const btn = getByLabelText('Button');

    //  模拟点击事件
    fireEvent.click(btn);

    // 期望 fn 函数被调用
    expect(fn).toBeCalled();

    // 期望 fn 被调用一次
    expect(fn).toBeCalledTimes(1);
  });

  it('测试 input 的值和输入', () => {
    // 测试函数
    const fn = jest.fn();

    const { getByTestId } = render(<input data-testid="input" onChange={fn}/>);

    //  通过 data-testid 获取元素
    const inputDom = getByTestId('input');

    // 模拟 change 事件
    fireEvent.change(inputDom, { target: { value: "shuliqi"}});

    // 期望函数 fn 被调用
    expect(fn).toBeCalled();

    // 期望input的值是： shuliqi
    expect(inputDom).toHaveValue('shuliqi');
  })

  it("测试元素是否被disable", () => {
    const { getByText } = render(<button disabled>按钮</button>);

    // getByText 从 text 获取元素
    const btnDom = getByText('按钮');

    // 期望元素是禁的状态
    expect(btnDom).toBeDisabled();
  })

  it("测试元素包含某类名", () => {
    const { getByText } = render(<button className="btn">按钮</button>);

    // getByText 从 text 获取元素
    const btnDom = getByText('按钮');

    // 期望元素有 btn 类名
    expect(btnDom).toHaveClass('btn');
  })

  it('props 改变元素是否生效', ()=> {
    const Demo = ({ text } : any) =>  <div aria-label="shuliqi">{ text || '默认值'}</div>;

    const {getByLabelText, rerender} = render(<Demo/>);

    // 获取 aria-label 的元素
    const dom = getByLabelText('shuliqi');

    // 当没有传 props 参数时， 期望内容是： 默认值
    expect(dom).toHaveTextContent('默认值');

    // 使用 rerender来模拟 props 改变
    rerender(<Demo text="传入的值"/>);

    //  props 改变之后，期望值是传入的值
    expect(dom).toHaveTextContent('传入的值');
  })

  it('子元素是否包含某一类名', () => {
    // 组件
    const Demo = ({ className }: any) => {
      return  (
        <div>
          <span className={className}>子元素1</span>
          <span className={className}>子元素2</span>
        </div>
      )
    }

    const { baseElement} = render(<Demo className="shuliqi"/>);
    // 获取具有相同名字的子类元素
    const childrenEle = baseElement.getElementsByClassName("shuliqi");

    // 期望子类元素有两个
    expect(childrenEle.length).toBe(2)
  })
});

