'use client';

import Button from '@/components/button';
import { useState } from 'react';

const BlogAddForm = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  return (
    <form action="" className="grid gap-3 mt-10">
      <input
        type="text"
        value={title}
        className="rounded-md bordre-gray-500 border-2 p-2 outline-none text-black"
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        name=""
        id=""
        className="p-2 rounded-md border-gray-500 border-2 outline-none text-black"
        placeholder="Body"
        cols={30}
        rows={10}
      />
      <Button
        disabled={title.trim() === '' || body.trim() === ''}
        type="submit"
        label="Submit ✅"
      />
    </form>
  );
};

export default BlogAddForm;
