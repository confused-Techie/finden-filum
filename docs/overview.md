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

The categories being exact is what ensures that this package can be easily used.

The full list of categories must strive to be as small as possible to allow for dependents of this package to easily check for all possibilities.

Below are the recognized values:

- `source code`: Refers tof iles that are written in a programming language.
- `version control`: Refers to files that are directly used for version control. Liekly themselves never written directly to.
- `text`: Refers to any file that is largely general purpose in use, and represents simple text. Such as TXT, CSV, TSV.
- `configuration`: Refers to any file that is explicitely a configuration file. While many files can effect the configuration of a program, only a few are intended as such.
- `definition`: Refers to any file that serves as a definition of other files or elements.

## Performance

Performance has been a huge focus when creating this library. While originally this was thought to be achieved via a complex setup of optionally required HashMaps based on length of extension, in the end it was found that at a slight sacrafice to RAM usage the fastest method was a single HashMap.

The last tested benchmarks report the following:

- Maximum Time to Return extension data: `0.4398000240325928`ms
- Minimum Time to Return extension data: `0.00019979476928710938`ms
- Average Time to Return extension data: `0.0007481237649917602`ms
