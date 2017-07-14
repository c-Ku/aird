## 按钮尺寸

按钮有 `mini` `samll` `medium` `large` `block` 五种尺寸。

通过设置 size 为按钮设置尺寸。若不设置 size，则尺寸为默认为 `medium`。

```jsx
ReactDOM.render(
  <div className="examples">
    <Button size="mini">Mini</Button>
    <Button size="small">Small</Button>
    <Button>Medium</Button>
    <Button size="large">Large</Button>
    <Button size="block">Block</Button>
  </div>
, mountNode);
```