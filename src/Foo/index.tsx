import React from 'react';

interface Props {
   /**
   * 可以这样写属性描述
   * @description      不是必填的
   * @default _
   */
    title: string; // 文案
}

const Foo: React.FC<Props> = ({title}) => {
  return <h1>{title}</h1>
}
export default Foo;
