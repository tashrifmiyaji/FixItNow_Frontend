import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Logo />

        <NavLinks />

        <UserMenu />
      </div>
    </header>
  );
};

export default Navbar;