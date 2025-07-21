import { FC } from "react";

import Link from "next/link";
import Button from "@/components/ui/button";

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <Link href="/">
              <span className="text-xl font-bold uppercase">
                Ibrahim&nbsp;Raimi
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <Button
              variant="primary"
              className="h-11 px-6 rounded-full border border-charcoal uppercase hidden md:inline-flex items-center hover:bg-charcoal hover:text-bone transition duration-[0.3s] delay-200"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
