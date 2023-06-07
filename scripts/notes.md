A helpful script for automated updating of this document from [`file-textensions.org`](https://www.file-extensions.org/):

```js
let ele = document.getElementsByClassName("extensiontable")[0].children[0].children;
let obj = [];
[...ele].forEach((element) => {
    let ext = element.firstChild.lastChild.lastChild.textContent;
    let desc = element.lastChild.textContent;
    obj.push({ ext: ext, desc: desc, cat: "media:video" });
});
console.log(JSON.stringify(obj));
```
