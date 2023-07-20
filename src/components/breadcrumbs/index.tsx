import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const BreadCrumbs = () => {
  // const router = usePathname();

  return (
    <Link className="bg-blue-300 text-black pr-6 pl-4 py-2 rounded-md " href="/">
      ⬅ Go To home
    </Link>
  );
};

export default BreadCrumbs;
