import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ToogleTheme } from "./theme-toggler";
export const Navbar: FC = () => {
  return (
    <header className="flex absolute top-0 inset-x-0 items-center py-4 px-7   justify-between">
      <Link href={"/"} className=" flex items-center gap-2 text-lg">
        <Image
          className="invert transition duration-300 dark:invert-0"
          src={"/logo.png"}
          width={50}
          height={50}
          quality={100}
          alt="logo"
        />
      </Link>
      <nav className=" flex absolute left-1/2 -translate-x-1/2 gap-5 items-center">
        <Link
          href={"/"}
          className={
            "relative text-lg hover:after:w-full after:transition-all after:duration-300  after:w-0 after:bg-primary after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0 after:h-0.5"
          }
        >
          Work
        </Link>
        <Link className="text-primary text-lg" href={"/"}>
          About
        </Link>
        <Link href={"/"}>Services</Link>
      </nav>
      <div className="flex items-center gap-3">
        {/* <Link href="/login" className={buttonVariants()}>
          New Project ?
        </Link> */}
        <ToogleTheme />
      </div>
    </header>
  );
};
