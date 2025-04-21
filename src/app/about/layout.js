// 'use client';

import '../about.css'

export const metadata = {
    title: "About Page",
    description: "This is About Page",
  };

export default function AboutLayout({children}) {
    return (
    <html lang="en">
        <body>
            <header>This is the about header</header>
            {children}
        </body>
    </html>
    )
}