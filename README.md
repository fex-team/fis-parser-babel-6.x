fis-parser-babel-6.x
============================

目前更推荐大家使用 https://github.com/fex-team/fis-parser-babel-5.x 

see https://github.com/fex-team/fis-parser-babel-6.x/issues/1



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
    parser: fis.plugin('babel-6.x'),
    rExt: 'js'
});
```
