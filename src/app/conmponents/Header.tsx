import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Link from "next/link";
import Image from "next/image";
import logo2 from "@/app/public/logo2.png";
const Header = () => {
  return (
    <>
      <header className="lg:px-16 px-4  mb-2 mx-1  bg-white flex sm:flex-wrap justify-between sm:justify-between  items-center sm:py-1 py-1 shadow-lg rounded-lg">
        
        <div className="flex justify-between w-1/2  items-center">
        <Sheet>
  <SheetTrigger>
  <div>
          <label
            htmlFor="menu-toggle"
            className=" pointer-cursor flex md:hidden"
          >
            <svg
              className="fill-current  text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              {/* <title>menu</title> */}
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
  </SheetTrigger>
  <SheetContent  side={'left'}>
    <SheetHeader>
      <SheetTitle><div className="flex justify-center items-center">

<Image src={logo2} width={70} height={70} alt="logo" />
</div></SheetTitle>
      <SheetDescription >
      <nav>
            <ul className="flex-col items-center justify-between text-2xl text-gray-700 pt-4 md:pt-0">
              <Link href="/" className="md:p-4 py-3 my-2 px-0 block border border-gray-200 rounded-lg">
                Home
              </Link>
              <Link href="/about" className="md:p-4 my-2 py-3 px-0 block  border border-gray-200 rounded-lg">
                About Me
              </Link>
              <Link href="/services" className="md:p-4 my-2 py-3 px-0 block border border-gray-200 rounded-lg">
                Services
              </Link>
              <Link
                href="/contact"
                className="md:p-4 py-3 px-0 block my-2 md:mb-0 mb-2 border border-gray-200 rounded-lg"
              >
                Contact{" "}
              </Link>
            </ul>
          </nav>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

          
        <div className="sm:flex-1">

          <Image src={logo2} width={80} height={80} alt="logo" />
        </div>
        </div>

        {/* <input className="hidden" type="checkbox" id="menu-toggle" /> */}

        <div className="flex justify-center items-center">
        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <Link href="/" className="md:p-4 py-3 px-0 block">
                Home
              </Link>
              <Link href="/about" className="md:p-4 py-3 px-0 block">
                About Me
              </Link>
              <Link href="/services" className="md:p-4 py-3 px-0 block">
                Services
              </Link>
              <Link
                href="/contact"
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2"
              >
                Contact{" "}
              </Link>
            </ul>
          </nav>
        </div>
          <Link
            href={"https://wa.me/3369999035"}
            target="_blank"
            className=" border-2 border-green-500 rounded-md py-1 px-2 text-green-500 hover:bg-green-500 hover:text-white"
          >
            Whatsapp
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
