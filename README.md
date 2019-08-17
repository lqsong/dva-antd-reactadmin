<h1>
dva-antd-reactadmin
    <h3>React 16.*.* admin management system template based on (Dva and Antd).</h3>
</h1>

## Getting started
```bush
# clone the project
git clone https://github.com/lqsong/dva-antd-reactadmin.git

// install dependencies
npm install

// develop
npm run start
```

## Build
```bush
npm run build
```

## Question
##### 引入dva后一直存在一个 Warning: Please use `require("history").createHashHistory` instead of `require("history/createHashHistory")`. Support for the latter will be removed in the next major release.
- 找到node_modules中的dva包
- 修改lib/index.js
```
 把：
    var _createHashHistory = _interopRequireDefault(require("history/createHashHistory")); 
 修改为：
    var _createHashHistory = _interopRequireDefault(require("history").createHashHistory);
```
- 关闭编译器和服务 重新启动就好了

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, www.LiQingSong.cc
