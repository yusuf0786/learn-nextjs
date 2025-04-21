'use client';

import { useParams, useRouter } from 'next/navigation'

export default function TestID() {
    const { id } = useParams()
    const router = useRouter()
    return (
        <div>
            <h1>Profile Page id: {id} </h1>
            {/* <p onClick={() => router.back()}>Back to main page</p> */}
            <p onClick={() => router.push('/test')}>Back to main page</p>
        </div>
    );
  }
  