# Cons - Beautiful and easy console.log formatter

It's important to use console.log function to debug the software. But sometimes it may be confused when you work on multiple logs.
This library is useful to format the console outputs.

### Features

- Predefined formats
- Dark and light theme support
- Easy to turn on and off console logs
- Output time stamp
- Additional format supported

# Usage

You can simply use the ```Cons``` on the client side:

```html
<script src="cons.min.js"></script>
<script>
    const _ = new Cons();
    _.debug("Hello world!");
</script>
```

Or you can use CDN to include the library: `https://cdn.jsdelivr.net/gh/sundowatch/cons/cons.min.js`

## Constructor
You easily create the object's constructor. Here is the parameters:

```javascript
const _ = new Cons(mode=true, theme="dark");
```

`mode` is the output's display mode. It makes the output appear or not. Default value is `true`. Once you setted this variable, all of the outputs depend on this.

On `true`, output is shown.

On `false`, output doesn't appear

`theme` is the output's predefined format's theme. The default value is `dark`. It can be `dark` or `light`

## debug() Function

```javascript
const _ = new Cons();
_.debug(value, options = {
    color: "#fff",
    fontSize: "12px",
    backgroundColor: "transparent",
    border: "none"
  }, additionalStyle = "", timeStamp = true, preText = "DEBUG"
);
```

`value` is the will be printed output. 

`options` is the output's format. It can be multiple variables:

| Variable Type | Predefined Styles | Description | Sample Value  |
| ------------- |:-------------:|:-------------:| -----:|
| string        | `primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark` | Output's color or style | `"yellow"`, `"#f00"`, `"warning"`,`"success"` |
| integer       | 1,2,3,4,5,6,7,8,9,10 | Predefined styles | `1`, `8` |
| object        |  | Object with predifined variables | `{ color: "cyan", fontSize: "20px" }` |
| boolean        |  | Only accepts `false`. It disables the formatter. | `false` |

`additionalStyle` is the CSS style for the output.

`timeStamp` is for the print time stamp on the output. If `false`, it doesn't print the time stamp, 

`preText` is the badge of the output. It can be only `string`


# Examples

```javascript
const _ = new Cons();

_.debug("Hello World", "yellow");
_.debug("Hello World", "#f00");
_.debug("Hello World", 2);
_.debug("Hello World", 10);
_.debug("Hello World", {
  color: "#0f0",
  backgroundColor: "#ddd",
  border: "1px solid #f00",
  fontSize: "14px"
});
_.debug("Hello World", false);
_.debug("Hello World", "cyan", "margin-left: 10px; border: 1px solid #f00; border-radius: 5px;");
_.debug("Hello World", "primary");
_.debug("Hello World", "warning", timeStamp=false);
_.debug("Hello World", "yellow", preText="CODE");

const con2 = new Cons(mode=false);
con2.debug("Hello World 2", "cyan");
con2.debug("Hello World 2", "warning");
con2.debug("Hello World 2", preText="AJAX");
```

At this example, `con2.debug()`s will not print the output, because `mode` is `false`.

# Contact

You can contact with me on [www.truncgil.com](https://www.truncgil.com.tr) or [sanduvac@truncgil.com](mailto:sanduvac@truncgil.com)

