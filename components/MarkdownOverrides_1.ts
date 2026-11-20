import MarkdownOverrides from "./interfaces/MarkdownOverrides"

const MarkdownOverrides_1: MarkdownOverrides = {

  overrides: {
    h1: {
      component: "h1",
      props: {
        className:
          "text-[color:var(--main-page-text-color)] text-4xl mb-6",
      },
    },
    strong: {
      component: "strong",
      props: {
        className: "text-[color:var(--main-page-text-color)]",
      },
    },
    blockquote: {
      component: "blockquote",
      props: {
        className:
          "text-[color:var(--quote-color)] font-serif text-md",
      },
    },
    a: {
      component: "a",
      props: {
        className:
          "not-prose no-underline font-mono text-[color:var(--alink-color)]",
      },
    },
  },
}

export default MarkdownOverrides_1
