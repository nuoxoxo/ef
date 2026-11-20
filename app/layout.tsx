import Link from "next/link"
// x f
import Head from "./head"
import fs from 'fs'

export const metadata = {
  title: "金魚",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const getRandomSVG = (): string => {
    const PATH = 'public/'
    const Files = fs.readdirSync(PATH).filter(
      (item) => item.endsWith(".svg") && item.startsWith("cat")
    )
    const idx = Math.floor(Math.random() * Files.length)
    // console.log(Files)
    return `/${Files[idx]}`
  }

  const randomSVG = getRandomSVG()
  const head = Head()

  const header = (
      <header className="mt-4">
        <div className="mx-6 flex justify-center items-center">
          <Link href='/' className="mt-2">
            <img width="100px" src={ randomSVG } />
          </Link>
        </div>
      </header>
  )
  const footer = (
    <>
      <footer className="mt-6">
        <div className="border-t border-slate-200 mx-6 
          flex justify-center items-center">
          <Link href='/' className="mt-7">
            <img width="100px" src={ randomSVG } />
          </Link>
        </div>
      </footer>

    </>
  )
  return (
    <html lang="en">
      {head}
      <body>
        <div className="mx-auto max-w-3xl ">
          {/* {header} */}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}