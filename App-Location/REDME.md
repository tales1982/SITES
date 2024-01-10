# Configuracao inicial do projeto

## npm init -y

## npm install --save-dev gulp-sass

## npm install gulp --save-dev sass

## adcione o script no json
"build":"gulp",

## instalando o pluguin imagemin para compactar minhas imagens IPMOTTE tem que ser na versao 7.1.0
npm install --save-dev gulp-imagemin@7.1.0

## Para executar basta digitar
 npm run gulp

## crie uma pasta 
src\style\main.scss

## Importe o gulp no gulpfile
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

## Fasa a configuracao no gulp file para saida e entrada das pasta.


## Execute o comando build para conferir se esta tudo rodando
npm run build

## Estale watch no gulpfile para observar os arquivos e compilar automaticament.
exports.watch

## depois execute o  
npm run build watch




