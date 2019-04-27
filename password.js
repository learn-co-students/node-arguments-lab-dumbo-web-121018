process.argv.shift()
process.argv.shift()

if (process.argv.length < 2) {
  console.log("Please give two arguments.")
} else if (isNaN(parseInt(process.argv[0])) || isNaN(parseInt(process.argv[1]))) {
  console.log("Please enter only numbers.")
} else {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  for(let i=0; i < parseInt(process.argv[1]); i++){
    let pw = ""
    for (let x = 0; x < parseInt(process.argv[0]); x++) {
      pw += charset[Math.floor(Math.random() * charset.length)]
    }
    console.log(pw)
  }
}

process.exit(0)
