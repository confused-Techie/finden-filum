# Finden Filum

> Quickly, dependnecy-free, check for details of any file type.

Finden Filum allows a simple method of checking the category of a provided file, based on it's extension.

By passing a file or path, the extension is automatically extracted, and compared against a list of known and classified extensions to see what class it falls into, while additionally returning more information such as a short description of the purpose of the file type.

## Install

To install Finden Filum simply run:

```bash
npm install finden-filum
```

## Usage

There are two methods available to use Finden Filum:

1. Terminal

To use Finden Filum ensure to install it globall:

```bash
npm install finden-filum -g
```

Then run via:

```bash
ff path/to/file.txt
```

Which will return the full category object in a human readable way:

```bash
> ff file.txt
> - Cateogry: text
> - Origin: Plan Text Document
```

Optionally, if you'd just like to receive the extension category:

```bash
> ff file.txt --extension
> txt
```

2. JavaScript API

Otherwise, the more traditional usage of Finden Filum may be within a NodeJS Module:

```javascript
const ff = require("finden-filum");

let ext = ff("file.txt");
```

The extension object returned will then contain the following API:

* `contains(<string>)`

  The `contains()` function can receive any valid category and if the provided category is a category that is applied to the original extension passed `true` is returned, otherwise `false` is returned.

* `getCategories()`

  Returns an array of all valid categories applied to the original extension provided.

* `getFull()`

  Returns the full object of the original extension provided. Where the full object has the following schema:

```json
{
  "category": "Contains an array of valid extensions, unless there is only one, which returns a string",
  "origin": "The description of the extension",
  "resourceURL": "Optionally, URL provided for the extension.",
  "description": "Optionally, a longer more detailed description of the extension."
}
```

* `toString()`

  Returns a string of the root category.

## How it works

Finden Filum's contains a large list of known and classified extensions.

Each extension is then given a set of categories, and a description. The category list contains several recognized categories, broken up into different tiers. Where the first tier is the most general category, and subsequent categories are more specific.

### 1st Tier Categories

- `media`: Any files for serving media, such as images, video, and audio.
- `text`: Any generic file that can be opened within a text editor.
- `executable`: Generally a binary file, that is able to be run as an application.
- `archive`: A compressed or archived file.
- `binary`: A binary file.

### 2nd Tier Categories

- `media`
  * `video`: Any video file.
  * `audio`: Any audio file.
  * `image`: Any image file.
- `executable`
- `archive`
- `text`
  * `source code`: Programming language file.
  * `data`: File contains data, generally not intended to be interacted with directly.
  * `office`: General office files, such as Docs, PDFs, PowerPoint files etc.
  * `configure`: File is explicitly a configuration file.
  * `version control`: File is dedicated to a version control system. Likely not ever modified directly.
  * `template`: The file serves as a templating methodology to display it's contents.

### 3rd Tier Classifications

- `text`
  * `source code`
    * `script`: Script files such as bash.

## Origins of the Name

* `finden` Is German for Find
* `filum` Is Latin for "thread" otherwise the origins of the modern word "file".

Essentially, **Finden Filum** means **Find File**. Otherwise `ff` should be used within code.
