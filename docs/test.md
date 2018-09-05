# 测试工具包

test/utils.js 是一个可以在测试用例中使用的工具包。引入方式：

```js
const _ = require('./utils')
```

## API

### load

加载自定义组件，返回 componentId。

```js
// 用法一：加载 src 目录下的组件
const componentId = await _.load('index', 'comp') // 会加载 src/index 组件，生成的 dom 节点的 tagName 为 COMP

// 用法二：加载其他地方定义的组件
const componentId2 = await _.load({
  template: '<view>123<view>', // 即组件对应的 wxml 内容
  tagName: 'comp', // 生成的 dom 节点的 tagName
  usingComponents: {
    // 组件对应的 usingComponents
    'compb': componentId, // 需要注意的是，这里的值填的不是相对路径，是 componentId
  },
  // 其他组件定义段，参考小程序官方文档中的 Component 构造器即可
}) 
```

> ps: 这两种用法的 tagName 都是可以不传的，不传默认以 componentId 作为 tagName。

### render

渲染自定义组件，返回 [component](#component) 实例。

```js
const properties = {a: 123}
const component = _.render(componentId, properties) // 第一个参数为 componentId，第二个参数为这个组件被渲染时要传入的 property
```

### match

检查 dom 节点的内容是否符合给定的 html 结构，通常用于比较渲染结果是否符合预期。

```js
const isMatch = _.match(domNode, '<view>123</view>') // 此处会拿 domNode 的 innerHTML 和给定的 html 结构进行比较
```

### sleep

延迟一定时间执行后续代码，主要用于处理需要等待一定时间才能往后续进行操作的情况。

```js
_.sleep(300) // 等待 300ms 后再继续后续代码的执行
```

## Component

组件实例。

### 属性

| 属性名 | 类型    | 描述                    |
|--------|--------|------------------------|
| dom    | Object | 组件实例对应的 dom 节点  |
| data   | Object | 组件实例对应的 data 对象 |

### 方法

#### attach

将组件实例挂载在传入的 dom 节点上

```js
const parent = document.createElement('div')
component.attach(parent)
```

#### detach

将组件实例从父亲 dom 节点上移除

```js
component.detach()
```

#### querySelector

获取符合给定匹配串的第一个节点，返回 [componentNode](#componentnode) 实例

```js
let compNode = comp.querySelector('#a'); // 选取组件树中的节点
```

#### querySelectorAll

获取符合给定匹配串的所有节点，返回 [componentNode](#componentnode) 实例列表

```js
let compNodes = comp.querySelectorAll('.a'); // 选取组件树中的节点
```

#### setData

调用组件实例的 setData 方法

```js
comp.setData({ text: 'a' }, () => {}); // 相当于组件内部的 this.setData 接口
```

## ComponentNode

组件中的节点实例。

### 属性

| 属性名 | 类型    | 描述                      |
|--------|--------|---------------------------|
| dom    | Object | 组件节点实例对应的 dom 节点 |

### 方法

#### dispatchEvent

用于模拟触发该节点上的事件。

```js
// 触发组件树中的节点事件
compNode.dispatchEvent('touchstart', {
  touches: [{ x: 0, y: 0 }],
  changedTouches: [{ x: 0, y: 0 }],
});

// 触发组件树中的节点自定义事件
compNode.dispatchEvent('customevent', {
  touches: [{ x: 0, y: 0 }],
  changedTouches: [{ x: 0, y: 0 }],
  /* 其他 CustomEvent 构造器支持的 option */
});
```

## TODO

* template、import、include 支持
* 外链 wxs 支持
* 抽象节点支持
* ...
