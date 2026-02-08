import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Resources", href: "https://thedecisionlab.com/resources" },
  { label: "About", href: "https://thedecisionlab.com/about" },
  { label: "Contact", href: "https://thedecisionlab.com/contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        <Link href="/quiz/about">
          <Image
            src="/assets/logos/tdl-logo-teal.png"
            alt="The Decision Lab"
            width={180}
            height={36}
            priority
          />
        </Link>
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-black/60 hover:text-black transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
