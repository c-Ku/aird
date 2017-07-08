rm -rf ./lib
cp -R ./components ./lib
babel -d lib/ components/
npm publish