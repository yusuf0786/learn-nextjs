"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Test() {

    const router = useRouter();

    return (
        <div>
            <h1>List of profile</h1>
            <ul style={{
                display: "flex",
                flexDirection: "column",
            }}>
                <Link href="/test/1">Profile 1</Link>
                <Link href="/test/2">Profile 2</Link>
                <Link
                prefetch={false} // dosen't work locally
                scroll={false}
                href={{
                    pathname: "/test/3",
                    query: {
                        userName: "name",
                        userId: 12,
                        person: JSON.stringify({
                            age: 18,
                        })
                    }
                }}>
                    <div>A Link with url queries</div>
                </Link>
                <a href="https://google.com">Google</a>
            </ul>
        </div>
    );
  }
  