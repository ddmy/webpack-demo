const fn = () => console.log('fn')

let play = async name => {
  await fn()
  const a = 1
  return `${a}hello!`
}
