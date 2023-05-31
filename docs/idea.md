Essentially, I'm hoping to achieve a massive lookup table natively in javascript.

From research it seems the fastest lookup times will be achieved via having a proper hashmap.

But to even further try to reduce the memory footprint of this hashmap, there will be sets of hashmaps broken up via the extension string length, minus the dot(`.`).

Ideally this will allow fast lookup times while only keeping a single hashmap in memory as needed.

---

Structure of our map:

The map itself will have a key of the extension we care about, whereas the value is then an object. The object should be able to support a few fields so that we can return what the user wants in each scenario.

* `category`: This is the baseline predetermined category that we will use. This list should be rather short so that simpler applications can build support for it's possible returns.
* `resourceURL`: An optional component that can provide a URL for this specific extension.
* `origin`: An optional string origin for the extension. Such as `.npmignore` having `"origin": "NPM"`.
* `description`: Optional but encouraged field to put in a more human readable description of the file type.

---

By default the category will be the only thing returned. But via options more info instead could be returned.

---

Origins of the name:

* `finden` Is German for Find
* `filum` Is Latin for "thread" the origins of the modern word find.

Essentially means, Find File. `ff` for use in code examples.
