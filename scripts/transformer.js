/**
 * Transforms data files by adding a rgb/hex property to them
 * Sort the swatch on basis of luminance so that lighter color appears first
 * Sorts the palettes according to increasing length of swatches
 */

const { readdirSync, readFileSync, writeFileSync, statSync } = require("fs")
const { join, resolve } = require("path")

const filePathArg = process.argv[2]
  ? resolve(process.argv[2])
  : resolve(join("src", "data"))

const getFilePaths = filePathArg => {
  const stats = statSync(filePathArg)

  if (stats.isFile()) return [filePathArg]

  const files = readdirSync(filePathArg)
  return files.map(file => join(filePathArg, file))
}

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

const getLuminance = rgbColor => {
  const [r, g, b] = rgbColor
    .slice(4, rgbColor.length - 1)
    .split(",")
    .map(v => parseInt(v))

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const files = getFilePaths(filePathArg)

for (let file of files) {
  const fileName = file.slice(file.lastIndexOf("/") + 1)

  console.log(`📖 Reading ${fileName}.`)

  const data = readFileSync(file, "utf-8")
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

    // Sort swatch on basis of luminance (lighter color will be first)
    swatch.sort((s1, s2) => getLuminance(s2.rgb) - getLuminance(s1.rgb))

    console.log(`  ✔ Transformed swatch ${index + 1} - ${palette.color}`)

    return { ...palette, swatch }
  })

  // Sort palete on swatch length (asc)
  palettes.sort((p1, p2) => p1.swatch.length - p2.swatch.length)

  json = { ...json, palettes }

  writeFileSync(file, JSON.stringify(json, null, 2), "utf-8")
  console.log(`✔ Updated ${fileName}.\n`)
}
