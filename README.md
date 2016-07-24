# Pokemon Go protobuf.js wrapper with full protocol support

This package wraps `protobufjs` and the [current](https://github.com/AeonLucid/POGOProtos) Pokemon Go protobuf definitions together in one package.

## Installation

```
npm i --save pokemongo-protobufjs
```

## Recompile the proto definitions

By now, the [POGOProtos](https://github.com/AeonLucid/POGOProtos) include a compile script.
Pull the newest revision and compile it with `python compile_single.py -d` to generate the new
versions in `tmp/`.

And: This README deserves more love :)
