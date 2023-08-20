function toSnakeCase(name: string): string {
  let result = name.toLowerCase()
  result = result.replace(/[^\S\r\n]/g, '_')
  return result
}

function toCamelCase(name: string): string {
  const words = name.split(' ')

  for (let i = 0; i < words.length; i++) {
    if (i !== 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    } else {
      words[0] = words[0].toLowerCase()
    }
  }

  return words.join('')
}

console.log('-- SET 1 --')
console.log(toSnakeCase('Foo Bar Baz.png'))
console.log(toCamelCase('Foo Bar Baz.png'))

console.log('\n-- SET 2 --')
console.log(toSnakeCase('FOO BAR BAZ.png'))
console.log(toCamelCase('FOO BAR BAZ.png'))

console.log('\n-- SET 3 --')
console.log(toSnakeCase('foo bar baz.png'))
console.log(toCamelCase('foo bar baz.png'))
