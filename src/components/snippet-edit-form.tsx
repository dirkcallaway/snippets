'use client';

import type { Snippet } from "@/generated/prisma";
import Editor from '@monaco-editor/react';

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditPage({ snippet }: SnippetEditFormProps) {
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  )
}