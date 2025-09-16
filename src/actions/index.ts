'use server';

import { redirect } from "next/navigation";
import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect(`/`);
}

export async function createSnippet(formState: { message: string }, formData: FormData) {
  try {
    const title = formData.get("title")?.toString();
    const code = formData.get("code")?.toString();

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be longer'
      };
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be longer'
      };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect('/');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message
      };
    }
    return { message: 'Something went wrong...' };
  }
}