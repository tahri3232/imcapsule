import { Fragment, useState, useContext } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import sortOptions from "../DataJson/filterOptions";
import StoreContext from "../Store/StoreContext";
import DropDown from "./DropDown";
import ThemeContext from "../Store/ThemeContext";
export default function FilterComponent() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme ? "bg-white" : "bg-gray-600"}`}>
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1
              className={`${
                theme ? "bg-white text-black" : "bg-gray-600 text-white"
              } lg:text-2xl sm:text-lg font-bold tracking-tight text-gray-900`}
            >
              Filter
            </h1>
            <div className="flex items-center">
            <DropDown options={sortOptions.options} heading={sortOptions.heading} />
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pb-4 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
}
