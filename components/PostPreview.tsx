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

const PostPreview = (props: PostMetadata) => {

  return (

    <div className=" shadow-[color:var(--shadow-color)] rounded-md py-1 px-3 bg-[color:var(--preview-color)]">

      {/* !!! - date metadata viewed as strings - !!! */}

        <h6 className="font-helvetica text-[color:var(--main-page-title-color)] hover:underline">
          {props.date}
        </h6>

      {/* !!! - date metadata viewed in "Jan 12"-like format - !!! */}

      {/* <h1 className="text-xl font-serif font-semibold text-[color:var(--main-page-title-color)] hover:underline">
        {new Date(props.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        })}
      </h1> */}

      {/* {props.subtitle && (<p className="mt-2 text-s font-sans text-[color:var(--main-page-subtitle-color)] ">
        {props.subtitle}
      </p>)} */}

      {/* !!! - Tradition box-based previews - !!! */}

      {/* <Link href={`/posts/${props.slug}`}>
        { props.cover ? <img src={props.cover} className='mt-2'></img> : null }
      </Link> */}

      {/* !!! - Single page app - !!! */}

      <article className="pt-6 pb-3 rose max-w-none text-[color:var(--main-page-text-color)] text-xs sm:text-base">
        <Markdown>{ getContent(props.slug).content }</Markdown>
      </article>
    </div>
  )
};

export default PostPreview;
