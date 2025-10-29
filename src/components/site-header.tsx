import Image from "next/image";
import LiveGameButton from "./live-game-button";
import SelectLanguage from "./select-language-button";
import BuyVipButton from "./buy-vip-button";
import SiteMobileMenu from "./site-mobile-menu";

// import BuyVipButton from "../UI/BuyVip/BuyVipButton";
// import LiveGameButton from "../UI/LiveGameButton";
// import MobileSidebar from "../UI/MobileSidebar";
// import RulesButton from "../UI/RulesButton";
// import SelectLanguage from "../UI/SelectLanguage";

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-sm shadow-sm">
      <div className="flex h-[77px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center gap-12">
          <div className="block lg:hidden">
            <Image
              src="/logo.webp"
              alt="bain-logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
          <nav className="hidden lg:flex items-center gap-6" />
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <LiveGameButton />
          <BuyVipButton />
          <SelectLanguage />
        </div>

        <div className="ml-auto lg:hidden">
          <SiteMobileMenu />
        </div>
      </div>
    </header>
  );
}
