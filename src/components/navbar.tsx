import Image from "next/image";

const navItems = [
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Networks",
    href: "/network",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  }
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-20 h-20">

      {/* Logo */}
      <div className="flex items-center gap-[10px]">
        <Image
          src="/general_assets/drip_logo.svg"
          alt="Logo"
          width={77.7}
          height={40}
        />
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-[family-name:var(--font-inter)] text-white text-base font-normal leading-[1.2] capitalize whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a
            href="/become-editor"
            className="border border-white text-white px-6 py-3 rounded-full font-normal whitespace-nowrap"
          >
            Become An Editor
          </a>

          <a
            href="/become-creator"
            className="bg-white text-[#780AC1] px-6 py-3 rounded-full font-normal whitespace-nowrap"
          >
            Become A Creator
          </a>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;