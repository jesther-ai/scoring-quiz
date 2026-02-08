import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const collaborateLinks = [
  { label: "Insights", href: "https://thedecisionlab.com/insights" },
  { label: "Interventions", href: "https://thedecisionlab.com/interventions" },
  { label: "Biases", href: "https://thedecisionlab.com/biases" },
  { label: "Our Mission", href: "https://thedecisionlab.com/about" },
  { label: "Contact", href: "https://thedecisionlab.com/contact" },
];

const servicesLinks = [
  { label: "Consulting", href: "https://thedecisionlab.com/consulting" },
  { label: "Design", href: "https://thedecisionlab.com/design" },
  { label: "Newsletters", href: "https://thedecisionlab.com/newsletters" },
  { label: "Collections", href: "https://thedecisionlab.com/collections" },
  { label: "Big Problems", href: "https://thedecisionlab.com/big-problems" },
  { label: "The Science", href: "https://thedecisionlab.com/the-science" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/thedecisionlab", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/thedecisionlab", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/the-decision-lab", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/thedecisionlab", label: "Instagram" },
];

function ExternalLink({ href, children, className = "", ...rest }: { href: string; children: React.ReactNode; className?: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="w-full bg-dark-navy text-white py-16 mt-20">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-lg sm:text-xl mb-6 text-white/80">
            Eager to learn about how behavioral science can help your organization?
          </p>
          <ExternalLink
            href="https://thedecisionlab.com/contact"
            className="inline-block bg-teal hover:bg-teal/80 text-white font-bold uppercase tracking-wider py-4 px-10 rounded-full transition-colors"
          >
            Contact Us
          </ExternalLink>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="w-full bg-dark-navy text-white/60">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-12">
          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Column 1 — Hiring */}
            <div>
              <h3 className="text-white font-bold text-lg mb-3">We&apos;re hiring!</h3>
              <p className="text-sm leading-relaxed mb-4">
                Join our team to create meaningful impact by applying behavioral science.
              </p>
              <ExternalLink
                href="https://careers.thedecisionlab.com/"
                className="text-sm text-white hover:text-teal transition-colors"
              >
                Visit careers &rarr;
              </ExternalLink>
            </div>

            {/* Column 2 — Collaborate */}
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Collaborate With Us</h3>
              <ul className="space-y-2">
                {collaborateLinks.map(({ label, href }) => (
                  <li key={label}>
                    <ExternalLink href={href} className="text-sm hover:text-white transition-colors">
                      {label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services & Resources */}
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Services &amp; Resources</h3>
              <ul className="space-y-2">
                {servicesLinks.map(({ label, href }) => (
                  <li key={label}>
                    <ExternalLink href={href} className="text-sm hover:text-white transition-colors">
                      {label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <Image
                src="/assets/logos/tdl-logo-white.png"
                alt="The Decision Lab"
                width={120}
                height={24}
              />

              {/* Legal links */}
              <div className="flex items-center gap-4 text-xs">
                <ExternalLink href="https://thedecisionlab.com/terms" className="hover:text-white transition-colors">
                  Terms
                </ExternalLink>
                <ExternalLink href="https://thedecisionlab.com/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </ExternalLink>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <ExternalLink key={label} href={href} className="hover:text-white transition-colors" aria-label={label}>
                    <Icon size={18} />
                  </ExternalLink>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-center mt-4">
              &copy; {new Date().getFullYear()} The Decision Lab. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
