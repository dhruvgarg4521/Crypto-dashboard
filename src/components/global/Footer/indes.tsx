import { Github, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10 flex flex-col justify-center items-center gap-4">
      <p className="text-sm">Follow us on:</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/HarshYadv5554/"
          target="_blank"
          rel="noreferrer"
          aria-label="HarshYadv5554 on GitHub"
        >
          <Github className="h-5 w-5 stroke-[0.75]" />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh-yadav5554/"
          target="_blank"
          rel="noreferrer"
          aria-label="HarshYadv5554 on LinkedIn"
        >
          <Linkedin className="h-5 w-5 stroke-[0.75]" />
        </a>
      </div>
      <a
        href="https://github.com/HarshYadv5554/"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my Portfolio"
        className="group"
      >
        {"</>"} with 💛 by{" "}
        <span className="font-semibold transition-all ease-in-out group-hover:text-blue-500 decoration-wavy decoration-1 group-hover:underline underline-offset-[6px]">
          Harsh Yadav
        </span>
      </a>
    </footer>
  );
}
