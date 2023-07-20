import { HomeContainer } from '@/containers';
import { fetchBlogs } from '@/libs';

export const revalidate = 30; //? revalidate this page every 10 seconds
//* This is called BackgroundRevalidation with time interval
//? it initially shows cahced data and after period time is passed it in 2d try shows new data
//! it must be used for only page or layout pages or for axios. but for fetch it must be {next:{revalidate:time period}}

export default async function Home() {
  const blogs: Blog[] = await fetchBlogs();

  return (
    <main>
      <HomeContainer blogs={blogs} />
    </main>
  );
}
