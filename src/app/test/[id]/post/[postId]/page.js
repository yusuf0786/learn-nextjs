"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function TestIDPostID() {
  const searchParams = useSearchParams();
  const params = useParams();
  const newParam = searchParams.get("new") || "Not Exists!"
  const oldParam = searchParams.get("old") || "Not Exists!"
  
  
    return (
      <>
        <h1>Test Id: {params.id} Post Id: {params.postId}</h1>;
        <h2>New Parameter/query value: {newParam}</h2>
      </>
    )
  }
  