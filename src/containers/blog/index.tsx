import BreadCrumbs from '@/components/breadcrumbs';
import Button from '@/components/button';

const BlogContainer = ({ blog }: { blog: Blog }) => {
  console.log();

  return (
    <>
      <BreadCrumbs />

      <div className="grid gap-2 bg-gray-300 text-black font-bold mt-10">
        <div className="p-2 rounded-md border-2 border-gray-300">
          <span className="align-center">{blog.id}</span>
        </div>

        <div className="p-2 rounded-md border-2 border-gray-300">
          <span>{blog.title}</span>
        </div>

        {/* <span>{blog?.date ?? '22-30-2017, 19:46'}</span> */}

        <div className="grid gap-2">
          <Button label="Delete 🚮" type="delete" />
          <Button label="Edit Item 📝" type="edit" />
        </div>
      </div>
    </>
  );
};

export default BlogContainer;
