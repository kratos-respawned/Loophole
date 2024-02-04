import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0 text-center py-5 text-sm">
      <p className="relative group cursor-pointer">
        Made with <span className="peer dark:hidden">💜</span>
        <span className="peer hidden dark:inline">🩷</span>
        <Image
          className="  block w-[100px] h-[100px] cursor-auto grayscale peer-hover:grayscale-0   transition-all duration-500 peer-hover:opacity-100 peer-hover:pointer-events-auto pointer-events-none opacity-0 absolute top-0 -translate-y-full left-1/2 -translate-x-1/2"
          src="/computer.gif"
          alt="love"
          width={200}
          height={200}
        />{" "}
      </p>
      by
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/kratos-respawned"
        className=" inline-block relative ml-1  hover:text-primary transition-colors"
      >
        @kratos-respawned
      </Link>
    </footer>
  );
};
