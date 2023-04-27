import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "ABOUT", href: "/About", current: true },
   { name: "RESUME", href: "/Resume", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NaavBar() {
  return (
    
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700
                 hover:text-white focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="md:mt-6">
               <a href="/"> <h4 className="text-4xl uppercase font-bold">
                  L<span className="text-cyan-600">i</span>b
                  <span className="text-cyan-600">i</span>n
                </h4></a>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center sm:mt-8 ">
                <div className="hidden sm:ml-80 sm:block ">
                  <div className="flex space-x-4 ">             
                    <a href="/" className="text-white hover:text-cyan-600 px-3 py-2  text-sm font-large pl-8">Home</a> 
                    <a href="/about" className="text-white hover:text-cyan-600 px-3 py-2  text-sm font-large">About</a> 
                  <a href="/resume" className="text-white hover:text-cyan-600 px-3 py-2  text-sm font-large pl-52 sm:visible">Resume</a>
                  
                  </div>        
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className=" px-2 pt-2 pb-3 ml-60">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-white hover:bg-gray-900 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
