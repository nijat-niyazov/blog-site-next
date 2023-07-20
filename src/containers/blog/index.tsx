import BreadCrumbs from '@/components/breadcrumbs';
import Button from '@/components/button';

const BlogContainer = ({ blog }: { blog: Blog }) => {
  console.log();

  return (
    <div className="">
      <BreadCrumbs />

      <div className="grid  gap-2 bg-gray-300 text-white  mt-10 text-center">
        <span className="font-bold text-center">{blog.title}</span>

        <div className="p-2 rounded-md border-2 border-gray-300">
          <span>{blog.body}</span>
        </div>

        {/* <span>{blog?.date ?? '22-30-2017, 19:46'}</span> */}

        <div className="grid gap-2">
          <Button label="Delete 🚮" type="delete" />
          <Button label="Edit Item 📝" type="edit" />
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
