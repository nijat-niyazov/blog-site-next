import { BlogContainer } from '@/containers';
import { fetchBlog, fetchBlogs } from '@/libs';

const BlogPage = async ({
  params: { blogId },
}: {
  params: { blogId: string };
}) => {
  const blog = await fetchBlog(blogId);

  console.log('visited ', { blogId });

  return (
    <div className="h-screen p-4 bg-blue-700 text-white ">
      <BlogContainer blog={blog} />
    </div>
  );
};

export default BlogPage;

export const generateStaticParams = async () => {
  const blogs: Blog[] = await fetchBlogs();

  console.log('generated in build time');

  const staticParams = blogs.map(blog => ({ blogId: blog.id.toString() }));

  return staticParams;
};
