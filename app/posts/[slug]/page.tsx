import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadataArray from "../../../components/getPostMetadataArray"
import "../../../styles/globals.css"
import getPostMetadata from "../../../components/getPostMetadata"
import PostPreviewSPA from "../../../components/PostPreviewSPA"
import PostMetadata from "../../../components/interfaces/PostMetadata"
import MarkdownOverrides_1 from "../../../components/MarkdownOverrides_1"

const getContent = (slug: string) => {
  const path = "posts/"
  const ext = ".mdx"
  const file = `${path}${slug}${ext}`
  const content = fs.readFileSync(file, "utf-8")
  return matter(content)
}

export const generateStaticParams = async () => {
  const posts = getPostMetadataArray()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

const BlogPost = (props: any) => {
  const post = getContent(props.params.slug)
  const postmeta = getPostMetadata(props.params.slug)
  return (
    <>
      <div className="mx-6 mt-4 mb-6">
        {Solution_DetailedBlogPost(postmeta)}
      </div>
    </>
  )
}

const Solution_PostPreviewSPA = (postmeta: PostMetadata) => {

  return <PostPreviewSPA {...postmeta} />
}

const Solution_DetailedBlogPost = (postmeta: PostMetadata) => {
  return <Solution_PostPreviewSPA { ... postmeta} />
}

export default BlogPost
