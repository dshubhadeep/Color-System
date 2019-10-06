const fs = require("fs")
const path = require("path")

const filePathArg = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(path.join("src", "data"))

const getFilePaths = filePathArg => {
  const stats = fs.statSync(filePathArg)

  if (stats.isFile()) return [filePathArg]

  const files = fs.readdirSync(filePathArg)
  return files.map(file => path.join(filePathArg, file))
}

const checkKeys = (actualKeys, expectedKeys, padding) => {
  let counter = 0

  for (let key of expectedKeys) {
    if (!actualKeys.includes(key)) {
      const msg = `❌ ${key} field is not present`
      console.log(msg.padStart(msg.length + padding, " "))
      counter++
    }
  }

  // VERBOSE O/P
  //   if (counter === 0) {
  //     const msg = `✔ All fields (${expectedKeys}) are present`
  //     console.log(msg.padStart(msg.length + padding, " "))
  //   }

  return counter === 0
}

const files = getFilePaths(filePathArg)

for (let file of files) {
  const fileName = file.slice(file.lastIndexOf("/") + 1)

  console.log(`\n📖 Reading ${fileName}.`)

  const fileData = JSON.parse(fs.readFileSync(file, "utf-8"))

  // KEY CHECK
  if (!checkKeys(Object.keys(fileData), ["name", "url", "palettes"], 1))
    continue

  // PALETTE CHECK
  const { palettes } = fileData
  console.log(` 🔍 Found ${palettes.length} palettes`)

  // Palette key check
  const paletteKeyCheck = palettes.every(palette =>
    checkKeys(Object.keys(palette), ["color", "swatch"], 2)
  )

  if (!paletteKeyCheck) continue

  // Swatch check
  const swatchKeyCheck = palettes.every(({ color, swatch }) => {
    console.log(`  🔍 Found ${swatch.length} swatches for color ${color}`)
    return swatch.every(sw => checkKeys(Object.keys(sw), ["hex", "rgb"], 4))
  })

  if (!swatchKeyCheck) continue

  console.log(`✔ ${fileName} is validated`)
}
