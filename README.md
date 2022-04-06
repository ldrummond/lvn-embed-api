# lvn-embed-api

This is an open-source npm package for embedding LVN highlights within other js projects.
This package is brought to you by [Cortico](https://cortico.ai/).

To install this package, you should run
`npm install lvn-embed-api`.

## Usage

```
import {HighlightPlayer} from 'lvn-embed-api'
const player = new HighlightPlayer("embed-div-id",{HighlightOptions})
player.play()
```

All the functions available to use in the [player.js spec](https://github.com/embedly/player.js/blob/master/SPEC.rst) are available through this API. We also provide context on whether the player is actively playing.

Note: HighlightOptions are only enforced if `type` is equal to `"minimum"`.

## Examples

In the `examples` folder, there are examples of using the imbed within different environments.
