import { BlogAddForm } from '@/components/blog';
import BreadCrumbs from '@/components/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Add new blog',
};

const AddBlog = () => {
  return (
    <div className="p-4  text-white">
      <BreadCrumbs />
      <BlogAddForm />
    </div>
  );
};

export default AddBlog;
