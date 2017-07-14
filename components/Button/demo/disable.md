## 不可用状态

通过添加 `disabled` 属性可将按钮设置为不可用状态。

```jsx
ReactDOM.render(
  <div className="examples">
    <div>
      <Button type="default">Default</Button>
      <Button type="default" disabled>Disabled</Button>
    </div>
    <div>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>Primary</Button>
    </div>
    <div>
      <Button type="danger">Danger</Button>
      <Button type="danger" disabled>Danger</Button>
    </div>
    <div>
      <Button type="ghost">Ghost</Button>
      <Button type="ghost" disabled>Ghost</Button>
    </div>
    <div>
      <Button type="link">Link</Button>
      <Button type="link" disabled>Link</Button>
    </div> 
  </div>
, mountNode);
```