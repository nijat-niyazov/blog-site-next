import { BlogAddForm } from '@/components/blog';
import BreadCrumbs from '@/components/breadcrumbs';

type Props = {};

const AddBlog = (props: Props) => {
  // const handleChange = seState => (e: ChangeEvent<HTMLInputElement>) =>
  //   setState(e.target.value);

  return (
    <div className="bg-blue-700 p-4 h-screen text-white">
      <BreadCrumbs />
      <BlogAddForm />
    </div>
  );
};

export default AddBlog;
