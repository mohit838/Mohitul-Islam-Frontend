const Navbar = ({ humburger, openMenu, setTheme }) => {
  const handleLightMode = () => {
    setTheme('light');
  };
  const handleDarkMode = () => {
    setTheme('dark');
  };

  return (
    <>
      <div className="flex items-center justify-between gap-5 globalMarginBottom max-sm:mb-1">
        {/* Logo */}
        <div>
          <h1 className="font-merienda font-bold text-[3rem] defaultTextlinkColor">
            <a href={`${logoImg?.link}`}>{logoImg?.logoText}</a>
          </h1>
        </div>

        {/* Navbar */}
        <div className="max-sm:hidden md:hidden landscape:max-md:hidden lg:block">
          <nav>
            <ul className="flex items-center justify-between gap-5">
              {menuItems?.map((item) => (
                <li key={item?.id} className="menuLinks">
                  <a
                    href={`${item?.link}`}
                    className="px-4 py-2 font-merienda text-[1.2rem] rounded-lg transition-all ease-out"
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="">
          <nav>
            <ul className="flex items-center justify-between gap-5">
              {/* Light And Dark Mode */}
              <li className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={handleLightMode}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </li>
              <li className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={handleDarkMode}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </li>

              {/* GitHub and LinkIdin */}
              <li className="defaultTextlinkColor max-sm:hidden md:hidden landscape:max-md:hidden lg:block">
                <a href="#" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li className="defaultTextlinkColor max-sm:hidden md:hidden landscape:max-md:hidden lg:block">
                <a href="#" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>

              {/* Mobile and Tablet Hanbuger Menu Bar Icon */}
              <li
                className="defaultTextlinkColor sm:block md:block lg:hidden"
                onClick={humburger}
              >
                <a href="#" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Drawer Menu */}
      {openMenu && (
        <div className="absolute inset-0 w-full h-screen bg-white z-[10]">
          {/* Navbar */}
          <div className="sm:block md:block lg:hidden">
            {/* Mobile and Tablet Menu */}

            <div className="mt-[30%] landscape:sm:mt-5">
              {/* Close Btn */}
              <span
                className="defaultTextlinkColor flex items-end justify-center mb-5"
                onClick={humburger}
              >
                <a href="#" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </a>
              </span>

              <nav>
                <ul className="flex flex-col items-center justify-between gap-7">
                  {menuItems?.map((item) => (
                    <li key={item?.id} className="menuLinks">
                      <a
                        href={`${item?.link}`}
                        onClick={humburger}
                        className="px-4 py-2 font-merienda sm:text-[1rem] md:text-[1.2rem] lg:text-[1.2rem] rounded-lg transition-all ease-out"
                      >
                        {item?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <ul className="flex items-center justify-center gap-5 mt-7">
                  <li className="defaultTextlinkColor">
                    <a href="#" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-github"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </li>
                  <li className="defaultTextlinkColor">
                    <a href="#" className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

const logoImg = {
  logoText: 'MI',
  link: '/',
};

const menuItems = [
  { id: 1, name: 'Home', link: '/#home' },
  { id: 2, name: 'Work', link: '/#work' },
  { id: 3, name: 'Resume', link: '/#resume' },
  { id: 4, name: 'Contact', link: '/#contact' },
  { id: 5, name: 'Blog', link: '/blog' },
];
