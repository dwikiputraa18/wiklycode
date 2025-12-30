export default function Footer() {
return (
<footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-400">
<p>© {new Date().getFullYear()} wiklycode.dev</p>
<p className="mt-2">Crafted with Next.js & cinematic motion</p>
</footer>
)
}