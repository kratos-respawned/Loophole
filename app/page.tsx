import { ProjectDrawerDialog } from "@/components/project-drawer-dialog";

export default function Home() {
  return (
    <main className="h-full min-h-[100dvh] grid place-items-center w-full ">
      <div className="relative text-center ">
        <figure
          aria-hidden
          className="bg-lblue w-56 h-56  blur-3xl rounded-full absolute top-10 -translate-y-1/4 right-0 -z-10"
        >
          <figure className="bg-primary w-36 h-36  blur-2xl rounded-full absolute top-10 translate-x-32" />
        </figure>
        <p className="text-[clamp(1rem,10vw,5rem)] leading-none  font-sans  ">
          Hi, We&apos;re
        </p>
        <h1 className=" text-balance text-center leading-none  text-[clamp(2.5rem,15vw,8rem)]  font-geist font-extrabold max-md:py-5 ">
          Loophole <br /> Studios
        </h1>
        <p className="text-[clamp(1rem,3.5vw,1.5rem)] text-balance text-center  font-sans pb-3">
          Crafting Virtual Realities <br className=" md:hidden" /> with
          Precision and Passion.
        </p>
        <div className="flex flex-col sm:flex-row  items-center justify-center gap-4">
          <ProjectDrawerDialog />
        </div>
      </div>
    </main>
  );
}
