import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Logo from "../utils/Logo";
import Navbar from "./Navbar";
import SocialIcon from "./SocialIcon";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className=""
      >
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar
              containerStyle="flex flex-col items-center gap-y-6"
              linksStyle="text-2xl"
            />
            <SocialIcon
              contiainerStyles="flex gap-x-4"
              iconsStyles="text-2xl"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
