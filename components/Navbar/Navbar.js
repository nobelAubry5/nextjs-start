import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center py-4 bg-slate-200">
      <Link href="/" className="font-bold mx-2">
        Accueil
      </Link>
      <Link href="/listes" className="font-bold mx-2">
        Liste de vocabulaires
      </Link>

      <Link href="/joke" className="font-bold mx-2">
        Random Joke
      </Link>
    </nav>
  );
}
