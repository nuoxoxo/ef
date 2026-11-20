import fs from 'fs'

const Head = () => {

  const getRandomSVG = (): string => {
    const PATH = 'public/'
    const EXT = '.svg'
    const Files = fs.readdirSync(PATH).filter(
      (item) => item.endsWith(".svg")
    )
    const idx = Math.floor(Math.random() * Files.length)
    return `/${Files[idx]}`
  }

  const randomSVG = getRandomSVG()

  return (<head>
    <title>常滑牛乳</title>
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel='icon' type='image/svg+xml' href={ randomSVG } />
    <link rel='apple-touch-icon' href={ randomSVG } />
  </head>)
}

export default Head
