# console.log

把 [console-feed]([console-feed](https://github.com/samdenty/console-feed)) 封装成单个js文件，直接开箱即用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>console.log</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        html,
        body {
            height: 100%;
            background-color: #242424;
        }

        #app {
            height: 100%;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
    </style>
</head>

<body>
    <div id="app"></div>
    <script src="/path/to/console.log.js"></script>
    <script>
        window.consoleLog(document.getElementById('app'));
    </script>
</body>

</html>
```

## License

MIT © Harvey Zack