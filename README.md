# generator-nodescaffold [![Build Status](https://secure.travis-ci.org/zhanglun/generator-nodescaffold.png?branch=master)](https://travis-ci.org/zhanglun/generator-nodescaffold)

> [Yeoman](http://yeoman.io) generator


### 什么是 Yeoman?

[![](http://i.imgur.com/JHaAlBJ.png)](http://yeoman.io/)

Yeoman是一个脚手架构建工具，通过 npm 安装，详情见[官网](http://yeoman.io/)

```bash
npm install -g yo
```


### 构建项目

安装 Yeoman 只是第一步，如果你想构建一个项目，比如一个基于 Backbone 的程序甚至是一个 Chrome 拓展，你必须先使用 npm 安装好对应的构建工具的package。
可以在[这里](http://yeoman.io/generators/)找到一些已经有的 generator。也可以自己编写。

这个仓库所提供的generator就是基于现有的[generator-express](https://github.com/petecoop/generator-express)拓展，针对需求做一些调整。

#### 使用

```bash
npm install -g generator-nodescaffold
```

安装完毕之后初始化

```bash
yo nodescaffold
```



## License

MIT

## Thanks

* [Yeoman](http://yeoman.io/)
* [petecoop/generator-express](https://github.com/petecoop/generator-express)