import { Toaster, toast } from 'sonner'

export const metadata = {
    title: "Sonner Page",
    description: "This is Sonner Page",
  };

export default function SonnerLayout({children}) {
    return (
    <html lang="en">
        <body>
            <header style={{
                padding: "1rem", 
                marginBottom: "0.5rem",
            }}>This is the header</header>
            {children}
            <Toaster expand={true} richColors position='top-right' />
        </body>
    </html>
    )
}