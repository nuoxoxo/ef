import PostPreview from "../components/PostPreview";
import PostPreviewSPA from "../components/PostPreviewSPA";
import getPostMetadataArray from "../components/getPostMetadataArray";
import "../styles/globals.css";

const HomePage = () => {
  const PostMetadataArray = getPostMetadataArray();
  const ValidPosts = PostMetadataArray.filter(post => !post.date.includes('_'))
  const PostPreviews = ValidPosts.map((blogposts, idx) => {

    return /*[0,1].includes(idx) ?*/ (
      // <PostPreviewSPA key={blogposts.slug} {...blogposts} />) : (
      <PostPreview key={blogposts.slug} {...blogposts} />);
  });

  return (
    <>
      <div className="grid grid-cols-1 mx-6 mt-4 gap-2">
        {/* {PostPreviews} */}
        {PostPreviews
          // .filter(post => !post.metadata.date.includes('_'))
          .slice(0,42)}
      </div>
    </>
  );
};

export default HomePage;
