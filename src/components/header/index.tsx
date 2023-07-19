import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-2 px-6 md:px-20 sm:px-10 bg-blue-400 text-white mb-2">
      <div className="sm:w-1/2  justify-between flex items-center  m-auto">
        <Link className=" font-bold text-xl" href={'/'}>
          Main Page
        </Link>
        <Link href="add-blog" className="bg-green-600 py-2 px-6 rounded-md">
          Add New Blog
        </Link>
      </div>
    </header>
  );
};

export default Header;
