#!/usr/bin/node
import tinycolor from "tinycolor2";
import colorLib from "color"
import fs from "fs"
import createHTML from "create-html"

var colorPrimary = "#f43f5e";
//https://github.com/SimeonGriggs/tints.dev/blob/main/package.json
//https://gka.github.io/chroma.js/

var colors = [{
    color: "#f43f5e",
    steps:["0.1", "0.2", "0.3", "0.4", "0.5"]
}]


// console.log("--------------------------------------------")

// console.log(colorLib(colorPrimary).hex())
// console.log(colorLib(colorPrimary).lighten(0.1).hex())
// console.log(colorLib(colorPrimary).lighten(0.2).hex())
// console.log(colorLib(colorPrimary).lighten(0.3).hex())
// console.log(colorLib(colorPrimary).lighten(0.4).hex())
// console.log(colorLib(colorPrimary).lighten(0.5).hex())
// console.log(colorLib(colorPrimary).darken(0.1).hex())
// console.log(colorLib(colorPrimary).darken(0.2).hex())
// console.log(colorLib(colorPrimary).darken(0.3).hex())
// console.log(colorLib(colorPrimary).darken(0.4).hex())
// console.log(colorLib(colorPrimary).darken(0.5).hex())


var colorElements = `
${colors.map((color)=> {
    return `<div>
        ${color.steps.map((step)=>{
            return `<div style="background-color: ${colorLib(colorPrimary).lighten(${step}).hex()}">
            ${step}
            </div>`
        })}
    </div>`
})}
<br />

`

var html = createHTML({
    title: 'example',
    script: 'example.js',
    scriptAsync: true,
    css: 'example.css',
    lang: 'en',
    dir: 'rtl',
    head: '<meta name="description" content="example">',
    body: `${colorElements}`,
    favicon: 'favicon.png'
  })

  fs.writeFile('index.html', html, function (err) {
    if (err) console.log(err)
  })