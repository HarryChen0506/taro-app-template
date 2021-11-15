# taro-app-template

### 安装依赖

```bash
npm install -g yarn // 首次需要全局安装yarn，以后可以不需要重复安装
yarn global add @tarojs/cli // 首次需要全局安装@tarojs/cli，以后可以不需要重复安装
yarn install // 安装依赖
```

### 开发模式

安装好依赖后，选择场景，运行下面的命令之一

```bash
npm run dev:weapp // 小程序
npm run dev:h5 // H5
```

### 构建 Build

> 小程序构建成功后，静态文件可以在开发工具里上传至官方的微信服务器

```bash
npm run build:weapp // 构建后的文件夹位于 `./dist`
npm run build:h5 // 构建后的文件夹位于 `./dist`
```
