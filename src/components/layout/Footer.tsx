import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-dark-navy text-white/60 py-12 mt-20">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/assets/logos/tdl-logo-white.png"
          alt="The Decision Lab"
          width={140}
          height={28}
        />
        <p className="text-sm">
          &copy; {new Date().getFullYear()} The Decision Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
