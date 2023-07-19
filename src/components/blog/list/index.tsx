import BlogItem from '../item';

type Props = {
  blogs: Blog[];
};

const BlogList = async ({ blogs }: Props) => {
  return (
    <ul className="text-white gap-3 grid sm:w-1/2 sm:p-0 px-6 m-auto">
      {blogs.map(blog => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  );
};

export default BlogList;
