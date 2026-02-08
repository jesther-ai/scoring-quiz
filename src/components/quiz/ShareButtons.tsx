"use client";

import { Linkedin, Twitter, Mail, Link as LinkIcon, Check } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function ShareButtons() {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setShareUrl(window.location.origin + "/quiz/about");
  }, []);
  const shareText = "Check out this Growth vs. Fixed Mindset Assessment!";

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail if clipboard not available
    }
  }, [shareUrl]);

  const buttons = [
    {
      icon: Linkedin,
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: Twitter,
      label: "Share on Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      icon: Mail,
      label: "Share via Email",
      href: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {buttons.map(({ icon: Icon, label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-black/10 text-black/60 hover:text-black hover:border-black/30 transition-colors"
        >
          <Icon size={16} />
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors cursor-pointer ${
          copied
            ? "border-teal text-teal"
            : "border-black/10 text-black/60 hover:text-black hover:border-black/30"
        }`}
      >
        {copied ? <Check size={16} /> : <LinkIcon size={16} />}
      </button>
      {copied && (
        <span className="text-xs text-teal font-medium">
          Copied!
        </span>
      )}
    </div>
  );
}
