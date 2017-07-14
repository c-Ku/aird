## 圆形按钮


通过设置 `shape` 为 `circle` 可以将按钮设置为圆形.

```jsx
ReactDOM.render(
  <div className="examples">
    <Button shape="circle" icon="facebook" />
    <Button shape="circle" icon="google" type="primary" />
    <Button shape="circle" icon="tumblr" type="danger" />
    <Button shape="circle" icon="weixin" type="ghost" />
  </div>
, mountNode);
```