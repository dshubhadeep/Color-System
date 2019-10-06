// Transforms data files by adding a rgb property to them

const { readdirSync, readFileSync, writeFileSync } = require("fs")
const { join } = require("path")

const convertHexToRGB = color => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  color = color.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)

  const r = parseInt(result[1], 16),
    g = parseInt(result[2], 16),
    b = parseInt(result[3], 16)

  return `rgb(${r},${g},${b})`
}

const convertRGBToHex = color => {
  let [r, g, b] = color
    .slice(4, color.length - 1)
    .split(",")
    .map(c => Number(c).toString(16))
    .map(c => (c.length == 1 ? `${0}${c}` : c))

  let hex = `#${r}${g}${b}`

  return hex.toUpperCase()
}

const dataPath = "./src/data"
const files = readdirSync(dataPath, "utf-8")

for (let file of files) {
  console.log(`📖 Reading ${file}.`)

  const filePath = join(dataPath, file)
  const data = readFileSync(filePath, "utf-8")
  let json = JSON.parse(data)

  console.log(`🎨 Found ${json.palettes.length} palette(s).`)

  const palettes = json.palettes.map((palette, index) => {
    const swatch = palette.swatch.map(({ hex, rgb }) => {
      if (hex) {
        rgb = convertHexToRGB(hex)
      } else {
        hex = convertRGBToHex(rgb)
      }

      return {
        hex,
        rgb,
      }
    })

    console.log(`  ✔ Transformed swatch ${index + 1} - ${palette.color}`)

    return { ...palette, swatch }
  })

  json = { ...json, palettes }

  writeFileSync(filePath, JSON.stringify(json, null, 2), "utf-8")
  console.log(`✔ Updated ${file}.\n`)
}
