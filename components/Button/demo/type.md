## 按钮类型

按钮有 `default` `primary` `danger` `link` `ghost` `success` `warning` 七种类型。

通过设置 type 为按钮设置类型。若不设置 type `default`。

```jsx
ReactDOM.render(
  <div className="examples">
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="success">success</Button>
    <Button type="warning">warning</Button>
  </div>
, mountNode);
```