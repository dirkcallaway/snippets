import { redirect } from "next/navigation";
import { db } from "@/db";

export default function SnippetCreatePage() {

  async function createSnippet(formData: FormData) {
    'use server';

    const title = formData.get("title")?.toString() as string;
    const code = formData.get("code")?.toString() as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);

    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">
        Create a Snippet
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border p-2 rounded w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border p-2 rounded w-full"
            id="code"
          />
        </div>
        <button className="rounded p-2 bg-blue-200" type="submit">
          Create Snippet
        </button>
      </div>
    </form>
  );
}
