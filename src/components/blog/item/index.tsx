import Button from '@/components/button';
import Link from 'next/link';

type Props = {
  blog: Blog;
};

const BlogItem = ({ blog }: Props) => {
  return (
    <li className="p-2 border-2 border-gray-200 flex justify-between text-gray-200 rounded-md hover:scale-110 transition-all">
      
      <Link href={`/blog/${blog.id}`} className="w-full ">
        <span>{blog.title}</span>
      </Link>
      <div className="gap-2 z-10 flex items-center text-2xl px-3 ">
        <input type="checkbox" className="scale-150" />
        <Button label="🚮" />
      </div>
    </li>
  );
};

export default BlogItem;
