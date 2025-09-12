import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link key={snippet.id} className='flex px-2 justify-between items-center border rounded' href={`/snippets/${snippet.id}`}>
        <div className='font-bold'>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">My Snippets</h1>
        <Link className="border p-2 rounded" href="/snippets/new">Create Snippet</Link>
      </div>
      <div className="flex flex-col gap-2">
        {renderedSnippets}
      </div>
    </div>
  );
}
