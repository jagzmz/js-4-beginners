# JS-4-Beginners

### Usage


Install the dependencies and run the script.

```sh
$ cd js-4-beginners
$ npm install
$ node index.js --add=1,2,3,4
```
`--add=1,2,3,4`
- `add` is the name of the key which you exported from `src/utils/index.js`.
- `1,2,3,4` are the arguments which are passed to the function.


### Contribution

- Make a file inside `src/utils/` folder for your utility function and export the function. ```Ex: subtract.js```
- Export the file which you made from `src/utils/index.js`.
- Test your new function using command line. `Ex: $ node index.js --subtract=1,2,3,4`