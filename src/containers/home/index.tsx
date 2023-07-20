import { BlogList } from '@/components/blog';
import Header from '@/components/header';

const HomeContainer = async ({ blogs }: { blogs: Blog[] }) => {
  // const blogs: Blog[] = await fetchBlogs();

  return (
    <div>
      <Header />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default HomeContainer;
