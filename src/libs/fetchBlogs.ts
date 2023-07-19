export const fetchBlogs = async()=>{
  const res = await fetch('http://localhost:3500/data')
  const data =res.json()
  return data
}