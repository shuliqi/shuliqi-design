# Button 按钮

---

## 基础用法:

使用 `type` 来定义按钮的样式；使用`plain` 来定义是否是朴素按钮；使用`round`来定义是否为圆角按钮

```tsx
import React from 'react';
import Button from '../src/components/Button/index';
// import { Button } from "../es"

export default () => {
  return (
    <>
      <div>
        <Button type="default" style={{ margin: 5 }}>
          default
        </Button>
        <Button type="primary" style={{ margin: 5 }}>
          primary
        </Button>
        <Button type="success" style={{ margin: 5 }}>
          success
        </Button>
        <Button type="info" style={{ margin: 5 }}>
          info
        </Button>
        <Button type="warning" style={{ margin: 5 }}>
          warning
        </Button>
        <Button type="danger" style={{ margin: 5 }}>
          danger
        </Button>
      </div>
      <div>
        <Button style={{ margin: 5 }} plain>
          default
        </Button>
        <Button type="primary" plain style={{ margin: 5 }}>
          primary
        </Button>
        <Button type="success" plain style={{ margin: 5 }}>
          success
        </Button>
        <Button type="info" plain style={{ margin: 5 }}>
          info
        </Button>
        <Button type="warning" plain style={{ margin: 5 }}>
          warning
        </Button>
        <Button type="danger" plain style={{ margin: 5 }}>
          danger
        </Button>
      </div>
      <div>
        <Button style={{ margin: 5 }} round>
          default
        </Button>
        <Button type="primary" round style={{ margin: 5 }}>
          primary
        </Button>
        <Button type="success" round plain style={{ margin: 5 }}>
          success
        </Button>
        <Button type="info" round style={{ margin: 5 }}>
          info
        </Button>
        <Button type="warning" round style={{ margin: 5 }}>
          warning
        </Button>
        <Button type="danger" round plain style={{ margin: 5 }}>
          danger
        </Button>
      </div>
    </>
  );
};
```

## 禁用状态

可以使用`disabled`来定义按钮是否被禁用, 该属性接受一个`Boolean`类型的值

```tsx
import React from 'react';
import Button from '../src/components/Button/index';
export default () => {
  return (
    <>
      <div>
        <Button type="default" disabled style={{ margin: 5 }}>
          default
        </Button>
        <Button type="primary" disabled style={{ margin: 5 }}>
          primary
        </Button>
        <Button type="success" disabled style={{ margin: 5 }}>
          success
        </Button>
        <Button type="info" disabled style={{ margin: 5 }}>
          info
        </Button>
        <Button type="warning" disabled style={{ margin: 5 }}>
          warning
        </Button>
        <Button type="danger" disabled style={{ margin: 5 }}>
          danger
        </Button>
      </div>
      <div>
        <Button style={{ margin: 5 }} plain disabled>
          default
        </Button>
        <Button type="primary" plain disabled style={{ margin: 5 }}>
          primary
        </Button>
        <Button type="success" plain disabled style={{ margin: 5 }}>
          success
        </Button>
        <Button type="info" plain disabled style={{ margin: 5 }}>
          info
        </Button>
        <Button type="warning" plain disabled style={{ margin: 5 }}>
          warning
        </Button>
        <Button type="danger" plain disabled style={{ margin: 5 }}>
          danger
        </Button>
      </div>
      <div>
        <Button style={{ margin: 5 }} round disabled>
          default
        </Button>
        <Button type="primary" round disabled style={{ margin: 5 }}>
          primary
        </Button>
        <Button type="success" round plain disabled style={{ margin: 5 }}>
          success
        </Button>
        <Button type="info" round disabled style={{ margin: 5 }}>
          info
        </Button>
        <Button type="warning" round disabled style={{ margin: 5 }}>
          warning
        </Button>
        <Button type="danger" round plain disabled style={{ margin: 5 }}>
          danger
        </Button>
      </div>
    </>
  );
};
```

## API

<API hideTitle src="./index.tsx"></API>
