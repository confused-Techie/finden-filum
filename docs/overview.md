# Finden Filum Documentation

This package allows you to very quickly, and with zero dependencies find out information on the file you care about.

By passing a file or path, the extension is automatically extracted, and compared against a list of known and classified extensions to see what class it falls into. Optionally you can even access more data about the extension if supported.

The possible values that can be returned:

* `category`: This is returned by default. The baseline predetermined cateogry that can be checked to get a rough idea of the purpose for this file.
* `resourceURL`: An Optional value, that will return a URL to learn more about this extension.
* `origin`: An Optional value that will list the 'origin' of the extension. Such as `.npmignore` having the origin of `NPM` the company.
* `description`: An Optional, human readable description of the file. This can get into more detail about what the file is.

## Origins of the Name

* `finden` Is German for Find
* `filum` Is Latin for "thread" otherwise the origins of the modern word "file".

Essentially, **Finden Filum** means **Find File**. Otherwise `ff` should be used within code.

## Adding new Extensions

It's highly recommended and encouraged to add new extensions. This can be done by simply adding them to the `./src/exts.csv`.

But note, that this CSV is nonstandard. There are no tab headers at all, they are already known by the application.

For simplicity the tab headers are shown in the below example:

| extension | category | origin | resourceURL | description |
| --- | --- | --- | --- | --- |
| as | source code | ActionScript Source | ... | ... | ... |

The CSV is broken up by a newline in a few different places. This is mostly to aid in readability, and allows each section to contain differing lengths of extensions. With any single character extension being added at the top, any 2 character extensions being added to the next section, up until lengths greater than four all being lumped togeter at the end.

## Recognized Categories

Categories allow increased specificty as needed. Where by default accessing the `.category` of the returned data would give a basic category. Allowing checking for file types in broad strokes. This first category returned is reffered internally as a '1st Tier Classification'. But digging deeper into the multiple classifications applied to each extension you can begin checking the '2nd Tier Classifications' and '3rd Tier Classifications'.

First tier classifications will be the most generic, only reserving a small handful of types that should be checked. Within each these classifications will become increasingly specific.

To write these classifications within the CSV it should be formated as such `1stTier:2ndTier:3rdTier`, excluding classifications as needed, as long as the first tier is present.

The below defines the valid classifications within each tier:

#### 1st Tier Classifications

- `media`: Any files for serving media, such as images, video, and audio.
- `text`: Any generic file that can be opened within a text editor.
- `executable`: Generally a binary file, that is able to be run as an application.
- `archive`: A compressed or archived file.
- `binary`: A binary file.

#### 2nd Tier Classifications

- `media`
  * `video`: Any video file.
  * `audio`: Any audio file.
  * `image`: And image file.
- `executable`
- `archive`
- `text`
  * `source code`: Programming language files.
  * `data`: File contains data, generally not intended to be interacted with directly.
  * `office`: General Office files, such as Docs, PDFs, PowerPoint files etc.
  * `configure`: File is explicitly a configuration file.
  * `version control`: File is dedicated to a version control system. Likely not ever modified directly.
  * `template`: The file serves as a templating methodology to display it's contents

#### 3rd Tier Classifications

- `text:source code:script`: Script files such as bash

## Performance

Performance has been a huge focus when creating this library. While originally this was thought to be achieved via a complex setup of optionally required HashMaps based on length of extension, in the end it was found that at a slight sacrifice to RAM usage the fastest method was a single HashMap.

The last tested benchmarks report the following:

- Maximum Time to Return extension data: `0.4398000240325928`ms
- Minimum Time to Return extension data: `0.00019979476928710938`ms
- Average Time to Return extension data: `0.0007481237649917602`ms

## Todo

Features to be Added:

- Some file types extension is not defined by the last portion of the `.%` such as 7zip multipart files which would look like: `%.7z.001`
  It could be beneficial to introduce support for an exhustive config option, where if no match is found the last dot is taken, as well as the dot before it, and searched again. This repeats until there are no more possible docs to consume, and will only then return empty.
- While rare, it seems some extensions are not static. Such as SQ Compressed files, which would take `.?Q?` where `?` is the single character of what the file originally was. Such as `.EXE` => `.EQE` or `.gitignore` => `.gitiQnore`. It may be difficult, but could be interesting to support these instances by allowed regex like searchings for any items that contain a subset of special characters. Such as `%` to represent `.*` in Regex or `?` to represent `.` in Regex.
- Split Definitions: As we have already seen some file extensions are reused, such as `.h` for a Header File, or Haskell Source Code. Currently these are affixed with `or` but we could use `|` to indicate this is a split, and instead return an array?
- Common Classes: Since as all of these extensions are classified, I've already found the list to be growing and growing, while many of these will have uses for programmers, if your file focused on media, you don't want to have to check for a dozen different programming classes. So it may be worth it to either additionally export a function that acts as a translation between many classes into very few, or filters them out based on topic, such as using `{ filter: 'av' }` to simply the classification of extensions not relevent to digital media to say just "dev files" meanwhile we leave the classification of anything relevant to digital media full.

Extension to be added:

- g: source
- vss: Source
- d: source
- e: source
- gri: source
- inf: source
- mel: source
- build: source
- re: source
- textmate: source
- fxscript: source
- lgt: source
- cfm: document
- cfml: document
- dbm: document
- dist: document
- dot: document
- ics: document
- ifb: document
- ifb: document
- dwt: document
- g: document
- in: Document
- l: document
- m4: document
- mp: document
- mtml: document
- orig: document
- pde: document
- rej: document
- servlet: document
- s5: document
- tmp: document
- tpl: document
- tt: document
- xql: document
- yy: document
