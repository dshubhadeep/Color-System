// Transforms data files by adding a rgb property to them

import { convertHexToRGB } from "../src/utils.js"
import { readdirSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

const dataPath = "./src/data"
const files = readdirSync(dataPath, "utf-8")

for (let file of files) {
  console.log(`📖 Reading ${file}.`)

  const filePath = join(dataPath, file)
  const data = readFileSync(filePath, "utf-8")
  let json = JSON.parse(data)

  console.log(`🎨 Found ${json.palettes.length} palette(s).`)

  const palettes = json.palettes.map((palette, index) => {
    const swatch = palette.swatch.map(({ hex }) => {
      return {
        hex,
        rgb: convertHexToRGB(hex),
      }
    })

    console.log(`  ✔ Transformed swatch ${index + 1} - ${palette.color}`)

    return { ...palette, swatch }
  })

  json = { ...json, palettes }

  writeFileSync(filePath, JSON.stringify(json, null, 2), "utf-8")
  console.log(`✔ Updated ${file}.\n`)
}
