process.argv.shift()
process.argv.shift()

const pwLength = parseInt(process.argv[0])
const amountOfPws = parseInt(process.argv[1])

if (process.argv.length < 2) {
  console.log("Please give two arguments.")
} else if (isNaN(pwLength) || isNaN(amountOfPws)) {
  console.log("Please enter only numbers.")
} else {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  for(let i = 0; i < amountOfPws; i++){
    let pw = ""
    for (let x = 0; x < pwLength; x++) {
      pw += charset[Math.floor(Math.random() * charset.length)]
    }
    console.log(pw)
  }
}

process.exit(0)
