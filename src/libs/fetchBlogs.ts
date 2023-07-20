// Incremental  Static Page

// export const dynamic = 'auto'
// export const dynamicParams = false // ? it says that if in SSG has no param of that then it will fetch for that param. false means it won't go to fetch data if there is not param in advance

export const fetchBlogs = async () => {
  const res = await fetch('http://localhost:3500/data');
  const data = res.json();
  return data;
};
