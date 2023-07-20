import { redirect } from 'next/navigation';

const AdminPanel = ({ searchParams }: any) => {
  const logged = searchParams.logged;

  if (!logged) {
    redirect('/login');
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      <h2 className="text-white font-bold text-3xl">Welcome to AdminPanel</h2>
    </div>
  );
};

export default AdminPanel;
