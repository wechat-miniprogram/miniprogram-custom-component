# miniprogram-custom-component

小程序自定义组件脚手架

## 开发

1. 安装依赖：

```
npm install
```

2. 执行命令：

```
npm run dev
```

默认会在包根目录下生成 miniprogram\_dev 目录，src 中的源代码会被构建并生成到 miniprogram\_dev/components 目录下。如果需要监听文件变化动态构建，则可以执行命令：

```
npm run watch
```

> ps: 如果 minirpogram\_dev 目录下已存在小程序 demo，执行`npm run dev`则不会再将 tools 下的 demo 拷贝到此目录下。而执行`npm run watch`则会监听 tools 目录下的 demo 变动并进行拷贝。

3. 生成的 miniprogram\_dev 目录是一个小程序项目目录，以此目录作为小程序项目目录在开发者工具中打开即可查看自定义组件被使用的效果。

4. 进阶：

* 如果有额外的构建需求，可自行修改 tools 目录中的构建脚本。
* 内置支持 less、sourcemap 等功能，默认关闭。如若需要可以自行修改 tools/config.js 配置文件中相关配置。
* 内置支持多入口构建，如若需要可自行调整 tools/config.js 配置文件的 entry 字段。
* 默认开启 eslint，可自行调整规则或在 tools/config.js 中注释掉 eslint-loader 行来关闭此功能。

## 发布

> ps: 发布前得确保已经执行构建，小程序 npm 包只有构建出来的目录是真正被使用到的。

1. 如果还没有 npm 帐号，可以到[ npm 官网](https://www.npmjs.com/)注册一个 npm 帐号。
2. 在本地登录 npm 帐号，在本地执行：

```
npm adduser
```

或者

```
npm login
```

3. 在已完成编写的 npm 包根目录下执行：

```
npm publish
```

到此，npm 包就成功发布到 npm 平台了。

> PS：一些开发者在开发过程中可能修改过 npm 的源，所以当进行登录或发布时需要注意要将源切回 npm 的源。

## 目录结构

以下为推荐使用的目录结构，如果有必要开发者也可以自行做一些调整:

```
|--miniprogram_dev // 开发环境构建目录
|--miniprogram_dist // 生产环境构建目录
|--src // 源码
|   |--common // 通用 js 模块
|   |--components // 通用自定义组件
|   |--images // 图片资源
|   |--wxml // 通用 wxml 模版资源
|   |--wxs // 通用 wxs 资源
|   |--wxss // 通用 wxss 资源
|   |
|   |--xxx.js/xxx.wxml/xxx.json/xxx.wxss // 暴露的 js 模块/自定义组件入口文件
|
|--test // 测试用例
|--tools // 构建相关代码
|   |--demo // demo 小程序目录，开发环境下会被拷贝生成到 miniprogram_dev 目录中
|   |--test // 测试工具相关目录
|   |--config.js // 构建相关配置文件
|
|--gulpfile.js
```

> PS：对外暴露的 js 模块/自定义组件请放在 src 目录下，不宜放置在过深的目录。另外新增的暴露模块需要在 tools/config.js 的 entry 字段中补充，不然不会进行构建。

## 测试

* 执行测试用例：

```
npm run test
```

* 检测覆盖率：

```
npm run coverage
```

测试用例放在 test 目录下，其中 test/utils 是已封装好可在测试用例中使用的工具包，具体使用文档请[点击此处查看](./docs/test.md)。在测试中可能需要用到官方提供的一些接口（如`wx.getSystemInfo`），可在 test/utils 下自行模拟实现（里面已内置部分模拟接口）。

> 目前测试框架仍有部分自定义组件的功能不支持（可参考测试工具包使用文档中的 TODO 列表），后续会逐步进行支持。

## 其他命令

* 清空 miniprogram_dist 目录：

```
npm run clean
```

* 清空 miniprogam_dev 目录：

```
npm run clean-dev
```
