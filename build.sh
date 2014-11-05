cd js;
npm install;
cd ..;
nodejs js/node_modules/browserify/bin/cmd.js js/main.js -o js/bundle.js;
sensible-browser $(pwd)/html/index.html;
