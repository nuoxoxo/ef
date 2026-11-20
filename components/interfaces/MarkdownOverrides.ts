interface MarkdownOverrides {

  overrides: {
    [key:string] : {
      // component:string
      //  BUG: 'h1' 'blockquote' etc. are indeed strings but TS requires `React.ElementType` here
      component: React.ElementType<any>
      props:{
        className:string
      }
    }
  }
}

export default MarkdownOverrides
