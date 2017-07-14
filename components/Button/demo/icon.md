## 图标按钮

当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性。

```jsx
ReactDOM.render(
  <div className="examples">
    <div>    
      <Button icon="arrow-up" />
      <Button icon="arrow-right" />
      <Button icon="arrow-down" />
      <Button icon="arrow-left" />
    </div>
    <div>    
      <Button icon="arrow-up">Up</Button>
      <Button icon="arrow-right">Right</Button>
      <Button icon="arrow-down">Down</Button>
      <Button icon="arrow-left">Left</Button>
    </div>
  </div>
, mountNode);
```