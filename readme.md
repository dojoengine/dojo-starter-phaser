> ARCHIVED: Moved to [Dojo.js](https://github.com/dojoengine/dojo.js)

## Integrate Phaser with Dojo: A Quick Start Guide

Dive into this straightforward example to understand how to meld Phaser with Dojo.

This integration taps into the powerful libraries designed by [Lattice](https://lattice.xyz/):

- [PhaserX](https://github.com/latticexyz/mud/tree/main/packages/phaserx)
- [recs](https://github.com/latticexyz/mud/tree/main/packages/recs)

### Initial Setup

The repository already contains the `dojo-starter` as a submodule. Feel free to remove it if you prefer.

**Prerequisites:** First and foremost, ensure that Dojo is installed on your system. If it isn't, you can easily get it set up with:

```console
curl -L https://install.dojoengine.org | bash
```

Followed by:

```console
dojoup
```

For an in-depth setup guide, consult the [Dojo book](https://book.dojoengine.org/getting-started/quick-start.html).

### Launch the Example in Under 30 Seconds

After cloning the project, execute the following:

0. **init submodule**

```
git submodule update --init --recursive
```

1. **Terminal 1**:

```console
cd dojo-starter && katana --disable-fee
```

2. **Terminal 2**:

```console
cd dojo-starter && sozo build && sozo migrate
```

3. **Terminal 3**:

```console
cd client && yarn && yarn dev
```

or if using bun

```console
cd client && bun install && bun dev
```

Upon completion, launch your browser and navigate to http://localhost:5173/. You'll be greeted by the running example!
