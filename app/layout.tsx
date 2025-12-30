import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export const metadata = {
title: 'wiklycode.dev | Web Developer Portfolio',
description: 'Cinematic web experiences with Next.js & Laravel',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="bg-slate-950 text-slate-100">
<Navbar />
{children}
<Footer />
</body>
</html>
)
}