import Button from "@/components/ui/button";
import { navItems } from "@/configs/site";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container !max-w-full">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-stone-400"></div>
            <span className="uppercase">Available July '25</span>
          </div>

          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                Enought talk, let's make it happen
              </h2>
              <Button
                variant="primary"
                className="mt-8"
                iconAfter={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                }
              >
                <span>Book a call</span>
              </Button>
            </div>
            <div className="">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ label, href }) => (
                  <Link href={href} key={label}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; {new Date().getFullYear()} Ibrahim Raimi &bull; All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
