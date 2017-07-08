#### **代码演示:**

按钮尺寸:

    <div className="examples">
        <Button size="mini">Mini</Button>
        <Button size="small">Small</Button>
        <Button>Medium</Button>
        <Button size="large">Large</Button>
        <Button size="block">Block</Button>
    </div>

按钮类型:

    <div className="examples">
        <Button type="default">Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Button type="ghost">Ghost</Button>
    </div>

不可用状态:

    <div className="examples">
        <Button disabled>Disabled</Button>
    </div>

图标按钮:

    <div className="examples">
      <Button icon="arrow-up" />
      <Button icon="arrow-right" />
      <Button icon="arrow-down" />
      <Button icon="arrow-left" />
    </div>

圆形按钮:

    <div className="examples">
      <Button shape="circle" icon="facebook" />
      <Button shape="circle" icon="google" type="primary" />
      <Button shape="circle" icon="tumblr" type="danger" />
      <Button shape="circle" icon="weixin" type="ghost" />
    </div>

按钮组合:

    <div className="examples">
      <ButtonGroup>
        <Button type="default">1</Button>
        <Button type="default">2</Button>
        <Button type="default">3</Button>
        <Button type="default">4</Button>
        <Button type="default">5</Button>
        <Button type="default">6</Button>
      </ButtonGroup>
    </div>

按钮loading效果:

    <div className="examples">
        <Button type="default" loading>Default</Button>
        <Button type="primary" loading>Primary</Button>
        <Button type="danger" loading>Danger</Button>
        <Button type="link" loading>Link</Button>
        <Button type="ghost" loading>Ghost</Button>
    </div>

使用方法:

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `default` `primary` `danger` `link` `ghost` | string | `default`
htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
shape | 设置按钮形状，可选值为 `circle` `rectangle` | string | ''
size | 设置按钮大小，可选值为 `mini` `small` `medium` `large` `block` 或者不设 | string | `default`
disabled | 禁止点击按钮 | boolean | `false`
icon | 设置按钮的图标类型 | string | -
loading | 设置按钮载入状态 | boolean | `false`
onClick | `click` 事件的 handler | function | -
