import Logo from '../utils/Logo';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import ThemeToggler from './ThemeToggler';

const Header = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Navbar
              containerStyle={'hidden xl:flex item-center gap-x-8'}
              linksStyle={'relative hover:text-primary transition-all'}
              underlineStyle={
                'absolute left-0 top-full h-[2px] bg-primary w-full'
              }
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
