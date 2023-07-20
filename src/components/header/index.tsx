import Link from 'next/link';
import Button from '../button';

const Header = () => {
  return (
    <header className="py-2 px-6 md:px-20 sm:px-10 bg-blue-400 text-white mb-6">
      <div className="sm:w-1/2  justify-between flex items-center  m-auto">
        <Link className=" font-bold text-xl" href={'/'}>
          Main Page
        </Link>
        <Link href="add-blog">
          <Button label="Add New Blog" type="edit" />
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
