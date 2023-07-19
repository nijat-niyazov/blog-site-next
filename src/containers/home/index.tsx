import { BlogList } from '@/components/blog';
import Header from '@/components/header';
import { fetchBlogs } from '@/libs';

const HomeContainer = async () => {
  const blogs: Blog[] = await fetchBlogs();

  return (
    <div className="">
      <Header />
      <BlogList blogs={blogs} />
    </div>
  );
};

export default HomeContainer;
