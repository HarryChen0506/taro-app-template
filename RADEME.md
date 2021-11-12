# taro-app-template

### 安装依赖

```bash
npm install -g yarn // 首次需要全局安装yarn，以后可以不需要重复安装
yarn global add @tarojs/cli // 首次需要全局安装@tarojs/cli，以后可以不需要重复安装
yarn install // 安装依赖
```

### 小程序开发环境

```bash
// 安装好依赖后，运行下面的命令
npm run dev:weapp
```

### H5 开发环境

```bash
// 安装好依赖后，运行下面的命令
npm run dev:h5
```

### 小程序自动化构建步骤

- 小程序不需要后端构建，在开发工具会上传至微信服务器

```bash
npm run build:weapp // 构建好的文件夹位于 `./dist`
```

### H5 自动化构建步骤

```bash
npm run build:h5 // 构建好的文件夹位于 `./dist`
```
