# Button 按钮

基础组件，触发业务逻辑时使用。

## API

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
type | 设置按钮类型，可选值为 `default` `primary` `danger` `link` `ghost` `success` `warning` | string | `default`
htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button`
shape | 设置按钮形状，可选值为 `circle` `rectangle` | string | ''
size | 设置按钮大小，可选值为 `mini` `small` `medium` `large` `block` 或者不设 | string | `default`
disabled | 禁止点击按钮 | boolean | `false`
icon | 设置按钮的图标类型 | string | -
loading | 设置按钮载入状态 | boolean | `false`
onClick | `click` 事件的 handler | function | -
