const bcrypt = require('bcrypt');

(async () => {
  const plainTextPassword = 'SirCatFace'

const saltRounds = 10
const salt = await bcrypt.genSalt(saltRounds)
const hash = await bcrypt.hash(plainTextPassword, saltRounds)

console.log('hash:', hash)
console.log('salt:', salt)
const compare = await bcrypt.compare(plainTextPassword, hash)

console.log('Comparison result:', compare)
})()
