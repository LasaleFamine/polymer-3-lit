# polymer-3-lit

> Working example with Polymer 3 and [lit-html](https://github.com/PolymerLabs/lit-html)

## What

Extending the `PropertyAccessors` class from the Polymer mixins I was able to use `lit-html` for rendering.  
I created a `PolyLitElement` trying to replicate the [Justin Fagnani example slide from the Polymer Summit 2017](https://youtu.be/ruql541T7gc?t=6m38s) that use the `_propertyChanges` from the accessors for rendering the content, calling the `render()` method of `lit-html` from the super-class.  

Just check the source code to understand better and fill an issue if I'm making mistakes!
This is actually a first try following the advice of Justin.

## Build and dev

    yarn build # Just build the bundle

    yarn start # Run http-server on src folder

    yarn dev # webpack -w

    yarn test # xo

## Feedbacks appreciate!
