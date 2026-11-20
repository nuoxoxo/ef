import Link from "next/link";
import PostMetadata from "./interfaces/PostMetadata";
import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from "gray-matter"

const getContent = (slug: string) => {

  const path = 'posts/'
  const ext = '.mdx'
  const file = `${path}${slug}${ext}`
  const content = fs.readFileSync(file, 'utf-8')
  return matter( content )
}

const PostPreviewSPA = (props: PostMetadata) => {

  return (

    <div className="
      rounded-lg p-4 pt-1
      bg-[color:var(--preview-color)]
      border-4
      border-[color:var(--shadow-color)] 
    ">
      
      <p className="text-2xs my-4 font-serif text-[color:var(--main-page-text-color)] ">{props.date}</p>
      <h2 className="text-xl mt-1 mb-2 font-sans  ">{props.title}</h2>
      <p className="text-sm mt-1 mb-4 font-sans text-[color:var(--sub-page-title-color)]  ">{props.subtitle}</p>

      {/* !!! - Tradition box-based previews - !!! */}

      {/* <Link href={`/posts/${props.slug}`}> */}
        { props.cover ? <img src={props.cover} className='mb-4'></img> : null }
      {/* </Link> */}

      {/* !!! - Single page app - !!! */}

      <article className="prose max-w-none font-serif text-[color:var(--main-page-text-color)] text-xs sm:text-base">
        <Markdown
          options={{
            overrides: {
              h1: {
                component: 'h1',
                props: {
                  className: 'text-[color:var(--main-page-text-color)] text-4xl pt-2 mb-6',
                },
              },
              h3: {
                component: 'h3',
                props: {
                  className: 'text-[color:var(--main-page-text-color)] pt-2 mb-2',
                },
              },
              strong: {
                component: 'strong',
                props: {
                  className: 'text-[color:var(--main-page-text-color)]',
                },
              },
              blockquote: {
                component: 'blockquote',
                props: {
                  className: 'text-[color:var(--quote-color)] not-italic font-serif text-xs',
                },
              },
              a: {
                component: 'a',
                props: {
                  className: 'not-prose no-underline font-mono text-[color:var(--alink-color)]',
                },
              }
            },
          }}
        >{ getContent(props.slug).content }</Markdown>
      </article>

    </div>
  )
};

export default PostPreviewSPA;
