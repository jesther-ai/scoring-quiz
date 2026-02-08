import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/5">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-5">
        <Link href="/quiz/about">
          <Image
            src="/assets/logos/tdl-logo-teal.png"
            alt="The Decision Lab"
            width={180}
            height={36}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
