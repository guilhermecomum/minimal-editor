# minimal-editor
A simple and minimal text editor


## Install


### Dependencies

- Node
- Express
- Ejs
- Grunt


On the root install node packages with
```
npm install
```

After this run grunt to generate static files
```
grunt
```

Start server with
```
node server.js
```

Open http://localhost:3000 on your browser

## Usage

- Command + b to apply bold style on select text
- Command + i to apply italic style on select text
- Command + u to apply underline style on select text

To add a image, pick one from your desktop and drop on editor


## Disclaimer
I chose [mousetrap](https://github.com/ccampbell/mousetrap) to handle
keybinds, because command key is browser-dependent
