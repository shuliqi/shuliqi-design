import React from 'react';
import cs from 'classnames';
import './index.less';

interface Props {
  /**
   * @description  节点样式
   */
  style?: object;

  /**
   * @description 节点类名
   */
  className?: string;

  /**
   * @description 子节点
   */
  children?: any;

  /**
   * @description  按钮的类型
   */
  type?:
    | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'text';

  /**
   * @description  按钮的尺寸
   */
  size?: 'small' | 'mini' | 'medium';

  /**
   * @description  是否为朴素按钮
   */
  plain?: boolean;

  /**
   * @description  是否为圆形按钮
   */
  round?: boolean;

  /**
   * @description  是否禁用
   */
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  type = 'default',
  size = 'default',
  style = {},
  className = null,
  plain = false,
  round = false,
  disabled = false,
  children,
}) => {
  const btnClassName = cs({
    'slq--button': true,
    [`slq--button--${type}`]: true,
    [`slq--button--type--${type}`]: true,
    [`slq--button--size--${size}`]: true,
    'is--plain': plain,
    'is--round': round,
    [`is--disabled--${type}`]: disabled,
    [`${className}`]: className,
  });

  return (
    <button type="button" style={style} className={btnClassName}>
      {children}
    </button>
  );
};

export default Button;
