import { BlogContainer } from '@/containers';
import { fetchBlog, fetchBlogs } from '@/libs';

type BlogProps = {
  params: { blogId: string };
};

export const generateMetadata = async ({ params }: BlogProps) => {
  const id = params.blogId;
  const blog: Blog = await fetchBlog(id);

  return {
    title: 'Blog ' + id,
    description: blog.title,
  };
};

const BlogPage = async ({ params: { blogId } }: BlogProps) => {
  const blog = await fetchBlog(blogId);

  console.log('visited ', { blogId });

  return (
    <div className="p-4  text-white ">
      <BlogContainer blog={blog} />
    </div>
  );
};

export default BlogPage;

export const generateStaticParams = async () => {
  const blogs: Blog[] = await fetchBlogs();

  const staticParams = blogs.map(blog => ({ blogId: blog.id.toString() }));

  return staticParams;
};
