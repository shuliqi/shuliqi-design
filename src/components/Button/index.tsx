import React from 'react';
import classnames from 'classnames';
import './index.less';

interface Props {
  style?: object;
  className?: string;
  children?: any;
  type?:
    | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'text';
  size?: 'small' | 'mini' | 'medium';
  plain?: boolean;
  round?: boolean;
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
  const btnClassName = classnames({
    'slq--button': true,
    [`slq--button--${type}`]: true,
    [`slq--button--${size}`]: true,
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
