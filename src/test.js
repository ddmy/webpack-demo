const delay = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

let play = async name => {
  console.log('play start!')
  await delay(2000)
  console.log('play end!')
}

play()
