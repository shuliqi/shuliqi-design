import React from "react";
import "./index.less"

interface Props {
   type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
}

const Button:React.FC<Props> = ({ type}) => {

  return <button className={`slq-default-button slq-${type}`}>按钮</button>
}

export default Button;
