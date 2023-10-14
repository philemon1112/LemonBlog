import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css';

export const metadata = {
    title: 'Lemon Blog',
    description: "Lemon Blog | version 1.3"
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({children}) {
    return (
        <ClerkProvider>
            <html lang={`en`}>
                <body className={`${inter.className} `}>
                    <div className="w-full flex justify-center items-center min-h-screen">
                        {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}