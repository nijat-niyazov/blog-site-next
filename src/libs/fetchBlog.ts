export const fetchBlog = async (id: string) => {
  const res = await fetch('http://localhost:3500/data/' + id);
  const data = await res.json();
  return data;
};
