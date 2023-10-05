# cookie

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

  Cookie component.

## Installation

    $ npm install @segment/cookie

## Example

```js
// set
cookie('name', 'tobi')
cookie('name', 'tobi', { path: '/' })
cookie('name', 'tobi', { maxage: 60000 }) // in milliseconds
cookie('species', 'ferret')

// get
var name = cookie('name')
// => "tobi"

var cookies = cookie()
// => { name: "tobi", species: "ferret" }

// clear
cookie('name', null)
```

## License

Released under the [MIT license](LICENSE).

