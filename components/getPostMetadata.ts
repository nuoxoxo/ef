import fs from 'fs'
import PostMetadata from "./interfaces/PostMetadata"
import path from "path"
import matter from 'gray-matter'

const getPostMetadata = (slug: string) : PostMetadata => {

  const path = 'posts/'
  const ext = '.mdx'
  const file = `${path}${slug}${ext}`
  const content = fs.readFileSync(file, 'utf-8')
  const matterContent = matter( content )
  return {
    title: matterContent.data.title,
    date: matterContent.data.date,
    subtitle: matterContent.data.subtitle,
    slug: slug,
    cover: matterContent.data.cover ? 'https://i.imgur.com/' + matterContent.data.cover + '.jpeg' : '',
  }
}

export default getPostMetadata
