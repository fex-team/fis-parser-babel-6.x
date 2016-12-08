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
        // preset: [
        // 注意一旦这里在这里添加了preset配置，则会覆盖默认加载的preset-2015等插件，因此需要自行添加所有需要使用的preset
        // ]
    }),
    rExt: 'js'
});
```
