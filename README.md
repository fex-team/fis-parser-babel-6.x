fis-parser-babel-6.x
============================

插件默认开启了 `preset-2015` `preset-stage-3` `preset-react`，如果希望使用更多的babel插件，可以使用插件配置自行添加

插件配置文档可以参考 https://babeljs.io/docs/usage/api/#options

FIS2用法

```
fis.config.set('project.fileType.text', 'es');
fis.config.set('modules.parser.es', 'babel-6.x');
fis.config.set('roadmap.ext.es', 'js');

```


FIS3用法

```
fis.set('project.fileType.text', 'es');
fis.match('server/**.es', {
    parser: fis.plugin('babel-6.x', {
        // presets: [
        // 注意一旦这里在这里添加了 presets 配置，则会覆盖默认加载的 preset-2015 等插件，因此需要自行添加所有需要使用的 presets
        // ]
    }),
    rExt: 'js'
});
```


## 如何开启resourcemap

以下例子以 FIS3 为示例，FIS2可参考调整

```
fis.match('server/**.es', {
    parser: fis.plugin('babel-6.x', {
        sourceMaps: true
    }),
    rExt: 'js'
});
```

> 如果使用的是 FIS2 ，为了保证 sourcemap 的功能正常，请确认 FIS2 版本 > 1.9.3

## FIS2 下如何只为 *.es.js 开启Babel编译

```
fis.config.set('modules.parser.js', 'babel-6.x');
fis.config.set('settings.parser.babel-6.x');

fis.config.get('roadmap.path').unshift({
    reg: '**.es.js',
    useBabel: true  // 开启 Babel 编译，可以忽略
}, {
    reg: '**.js',
    useBabel: false // 关闭 Babel 编译
});
```

## DEMO

https://github.com/fex-team/fis3-demo/tree/master/use-react
