import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { useIsMobile } from "./hooks/useMobile";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import IconSquare from "./IconComponents/IconSquare";
import DynamicIcon from "./DynamicIcon";
import Image from "next/image";
import IconMenu from "./IconComponents/IconMenu";
import "react-datepicker/dist/react-datepicker.css";
import IconArrowDown from "./IconComponents/IconArrowDown";
import IconArrowForward from "./IconComponents/IconArrowForward";
import { useRouter } from "next/router";
import { useClickOutside } from "./hooks/useClickOutside";
import Collapse from "./ui/Collapse";
import CustomMenu from "./ui/CustomMenu";
import getMenuItemsWithActiveIcons, { menuItems } from "@/data/menuData";

// Dynamic import for BookADemo modal - only loads when needed
const BookADemo = dynamic(() => import("./Modals/BookADemo"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export type MenuSection = {
  title: string;
  items?: { name: string; path: string }[];
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);
  const [displayUserGuide, setDisplayUserGuide] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [expandMenu, setExpendMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useRouter();
  const isActive = (path: string) => location.pathname === path;
  const ref = useClickOutside<HTMLDivElement>(() => setShowDropDown(false));
  const isMobile = useIsMobile();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "iframe-clicked") {
        setShowMenu(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);
  useEffect(() => {
    setShowDropDown(false);
    setExpendMenu(false);
  }, [scrolled]);
  const renderMobileMenu = () => {
    if (isMobile) {
      return (
        <Sheet>
          <SheetTrigger onClick={() => setMenuOpen(true)}>
            <IconMenu />
          </SheetTrigger>
          <SheetContent
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            position="right"
          >
            <div className="flex text-white flex-col items-start mt-12">
              {menuItems.map(
                ({ label, delay, withMenu, icon, items, href }) => (
                  <React.Fragment key={label}>
                    <a
                      key={label}
                      className={`relative font-[500] mb-7 block nav-link animate-fade-in animation-delay-${delay} hover:after:w-full active:after:w-full`}
                      onClick={() => {
                        if (label === "Help Desk") {
                          setShowMenu((prev) => !prev);
                          setSelectedMenu("Help Desk");
                        }
                        if (label === "About Us") {
                          router.push(`/${href}`);
                        }
                        if (label === "Pricing") {
                          router.push(`/${href}`);
                        }
                        if (label === "Our Solutions") {
                          setShowMenu((prev) => !prev);
                          setSelectedMenu("Our Solutions");
                        }
                        if (label === "Blog") {
                          router.push(`/${href}`);
                        }
                      }}
                    >
                      <div className="flex items-center py-0 gap-2">
                        <DynamicIcon name={typeof icon === 'string' ? icon : ''} />
                        <span>{label}</span>
                        {withMenu && <IconArrowDown />}
                      </div>
                    </a>
                    {selectedMenu === label && (
                      <Collapse opened={showMenu}>
                        {items?.map((item) => (
                          <React.Fragment key={item.name}>
                            {item.path?.startsWith('http') ? (
                              <a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white font-semibold text-[16px] pb-4  cursor-pointer hover:text-[white]"
                                onClick={() => {
                                  setOpenedModal(false);
                                  setMenuOpen(false);
                                  setDisplayUserGuide(false);
                                }}
                              >
                                {item.name}
                                <IconArrowForward />
                              </a>
                            ) : (
                              <article
                                className="flex items-center gap-2 text-white font-semibold text-[16px] pb-4  cursor-pointer hover:text-[white]"
                                onClick={() => {
                                  if (item.name === "User guides") {
                                    setDisplayUserGuide(true);
                                  } else {
                                    router.push(`/${item.path}`);
                                    setOpenedModal(false);
                                    setMenuOpen(false);
                                    setDisplayUserGuide(false);
                                  }
                                }}
                              >
                                {item.name}
                                <IconArrowForward />
                              </article>
                            )}
                            {item.name === "User guides" &&
                              displayUserGuide && 'subItems' in item && (
                                <div className="flex flex-row gap-2.5 ml-2 mb-4">
                                  {item?.subItems?.map((subItem) => {
                                    return (
                                      <a
                                        className="flex items-center gap-2 text-white font-semibold text-[16px] cursor-pointer hover:text-[white]"
                                        key={subItem?.name}
                                        target="_blank"
                                        href={`https://${subItem.path}`}
                                      >
                                        &#8594;&nbsp;{subItem?.name}
                                      </a>
                                    );
                                  })}
                                </div>
                              )}
                          </React.Fragment>
                        ))}
                      </Collapse>
                    )}
                  </React.Fragment>
                )
              )}

              <div className="flex flex-col w-full mt-5 space-y-[12px]">
                <a
                  href="#"
                  onClick={() => setOpenedModal(true)}
                  className="w-full flex cursor-pointer text-center items-center justify-center py-2 px-4 text-sm rounded-card border border-white text-white sm:block animate-fade-in animation-delay-500 transition-all duration-300 hover:bg-white hover:text-primary-900 hover:shadow-lg hover:scale-105"
                >
                  Book a Demo
                </a>
                <a
                  href="https://app.plural.health/signup"
                  target="_blank"
                  className="btn-secondary flex w-full cursor-pointer text-center items-center justify-center rounded-card text-[14px] py-2 px-4 text-sm animate-fade-in animation-delay-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Try NeoEHR for free
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      );
    }

    return null;
  };
  return (
    <header
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 bg-white z-50 transition-all duration-300 ease-in-out backdrop-blur-[20px]",
        scrolled
          ? isMobile
            ? "w-full py-3 mt-0"
            : `py-3 rounded-2xl ${
                expandMenu
                  ? "max-w-[1200px] w-full border border-[#F9F9FA]"
                  : "max-w-fit w-full border border-[#F9F9FA]"
              }`
          : `py-3 w-full max-w-[1200px] xl:mt-3 ${
              isMobile ? "rounded-none" : "rounded-2xl"
            }`
      )}
      style={{
        boxShadow: "-4px 4px 24px 3px rgba(11, 12, 125, 0.04)",
      }}
    >
      <div
        className={cn(
          "container text-textColor mx-auto px-6 flex items-center justify-between",
          scrolled ? "gap-5 xl:gap-5" : "gap-5 xl:gap-5"
        )}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center animate-fade-in">
            <Image src="/logo.webp" alt="Logo" width={60} height={60} priority />
          </Link>
        </div>
        {scrolled && !expandMenu && (
          <nav className="hidden items-center px-10 lg:flex">
            {[{ label: "Menu", delay: "100" }].map(({ label, delay }) => (
              <div
                key={label}
                onClick={() => {
                  setExpendMenu(true);
                }}
                className={`relative font-[500] cursor-pointer nav-link animate-fade-in animation-delay-${delay} 
        after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:rounded-2xl after:h-[3px] after:w-0 
        after:bg-textColor after:transition-all after:duration-300 
        hover:after:w-full active:after:w-full`}
              >
                <div className="flex items-center gap-2">
                  <IconSquare />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </nav>
        )}
        {scrolled && expandMenu && (
          <nav className="hidden lg:flex items-center space-x-6">
            {getMenuItemsWithActiveIcons(location.pathname).map(
              ({
                href,
                label,
                delay,
                withMenu,
                icon,
                items,
              }: {
                href?: string;
                label: string;
                delay: string;
                items?: {
                  name: string;
                  path: string;
                  subItems?: { name: string; path: string }[];
                }[];
                withMenu: boolean;
                icon?: string;
              }) => {
                const isDropdownActive = (
                  items?: { path: string; subItems?: { path: string }[] }[]
                ) => {
                  if (!items) return false;
                  // Check top-level items
                  if (items.some((item) => location.pathname === item.path))
                    return true;
                  // Check subItems if present
                  return items.some((item) =>
                    item.subItems?.some((sub) => location.pathname === sub.path)
                  );
                };

                return (
                  <CustomMenu key={label}>
                    <CustomMenu.Target>
                      <a
                        onClick={
                          label === "Help Desk"
                            ? () => setShowDropDown(true)
                            : () => {
                                setShowDropDown(false);
                                if (href) {
                                  isActive(href);
                                  router.push(href);
                                }
                              }
                        }
                        className={cn(
                          "relative font-[500] nav-link animate-fade-in",
                          `animation-delay-${delay}`,
                          "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:rounded-2xl after:h-[3px] after:transition-all after:duration-300 hover:after:w-full active:after:w-full",
                          withMenu
                            ? isDropdownActive(items)
                              ? "text-primary-900 after:w-full after:bg-secondary-500"
                              : "text-text-secondary after:w-0 after:bg-text-secondary"
                            : location.pathname.includes(href as string)
                            ? "text-primary-900 after:w-full after:bg-secondary-500"
                            : "text-text-secondary after:w-0 after:bg-text-secondary"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <DynamicIcon name={typeof icon === 'string' ? icon : ''} />
                          <span>{label}</span>
                          {withMenu && <IconArrowDown />}
                        </div>
                      </a>
                    </CustomMenu.Target>

                    {withMenu && (
                      <CustomMenu.Dropdown>
                        {items?.map((value, index) => {
                          const hasSubItems =
                            Number(value?.subItems?.length) > 0;

                          return (
                            <div key={value.name} className="relative group">
                              {!hasSubItems && value.path?.startsWith('http') ? (
                                <a
                                  href={value.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-3 block font-[600] text-[16px] text-text-secondary hover:bg-bg-secondary cursor-pointer"
                                >
                                  {value.name}
                                </a>
                              ) : (
                                <CustomMenu.Item
                                  index={index}
                                  onClick={() => {
                                    if (!hasSubItems) {
                                      router.push(value.path);
                                    }
                                  }}
                                >
                                  <p className="font-[600] text-[16px] text-text-secondary flex items-center justify-between w-full">
                                    {value.name}
                                  </p>
                                </CustomMenu.Item>
                              )}

                              {hasSubItems && (
                                <>
                                  <div
                                    className="absolute top-0 left-full w-3 h-full z-40"
                                    style={{ pointerEvents: "auto" }}
                                  ></div>

                                  <div className="absolute top-0 ml-2 left-full hidden group-hover:flex flex-col bg-white border border-[#D0D5DD] cursor-pointer rounded-card shadow-md z-50 min-w-[200px]">
                                    {value?.subItems?.map((sub, index) => (
                                      <a
                                        key={sub.name}
                                        className="px-4 py-2 text-[16px] text-text-secondary font-semibold hover:underline hover:bg-bg-secondary cursor-pointer whitespace-nowrap"
                                        href={`https://${sub.path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          ...(index === 0 && {
                                            borderBottomWidth: "1px",
                                            borderBottomStyle: "dashed",
                                            borderBottomColor: "#D0D5DD",
                                          }),
                                          borderTopLeftRadius: "12px",
                                          borderTopRightRadius: "12px",
                                          borderBottomLeftRadius: "12px",
                                          borderBottomRightRadius: "12px",
                                        }}
                                      >
                                        {sub.name}
                                      </a>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </CustomMenu.Dropdown>
                    )}
                  </CustomMenu>
                );
              }
            )}
          </nav>
        )}
        {!scrolled && (
          <nav className="hidden lg:flex items-center space-x-6">
            {getMenuItemsWithActiveIcons(location.pathname).map(
              ({
                href,
                label,
                delay,
                withMenu,
                icon,
                items,
              }: {
                href?: string;
                label: string;
                delay: string;
                items?: {
                  name: string;
                  path: string;
                  subItems?: { name: string; path: string }[];
                }[];
                withMenu: boolean;
                icon?: string;
              }) => {
                const isDropdownActive = (
                  items?: { path: string; subItems?: { path: string }[] }[]
                ) => {
                  if (!items) return false;
                  // Check top-level items
                  if (items.some((item) => location.pathname === item.path))
                    return true;
                  // Check subItems if present
                  return items.some((item) =>
                    item.subItems?.some((sub) => location.pathname === sub.path)
                  );
                };

                return (
                  <CustomMenu key={label}>
                    <CustomMenu.Target>
                      <a
                        onClick={
                          label === "Help Desk"
                            ? () => setShowDropDown(true)
                            : () => {
                                setShowDropDown(false);
                                if (href) {
                                  isActive(href);
                                  router.push(href);
                                }
                              }
                        }
                        className={cn(
                          "relative font-[500] nav-link animate-fade-in",
                          `animation-delay-${delay}`,
                          "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:rounded-2xl after:h-[3px] after:transition-all after:duration-300 hover:after:w-full active:after:w-full",
                          withMenu
                            ? isDropdownActive(items)
                              ? "text-primary-900 after:w-full after:bg-secondary-500"
                              : "text-text-secondary after:w-0 after:bg-text-secondary"
                            : location.pathname.includes(href as string)
                            ? "text-primary-900 after:w-full after:bg-secondary-500"
                            : "text-text-secondary after:w-0 after:bg-text-secondary"
                        )}
                      >
                        <div className="flex items-center gap-2">
                          <DynamicIcon name={typeof icon === 'string' ? icon : ''} />
                          <span>{label}</span>
                          {withMenu && <IconArrowDown />}
                        </div>
                      </a>
                    </CustomMenu.Target>

                    {withMenu && (
                      <CustomMenu.Dropdown>
                        {items?.map((value, index) => {
                          const hasSubItems =
                            Number(value?.subItems?.length) > 0;

                          return (
                            <div key={value.name} className="relative group">
                              {!hasSubItems && value.path?.startsWith('http') ? (
                                <a
                                  href={value.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-4 py-3 block font-[600] text-[16px] text-text-secondary hover:bg-bg-secondary cursor-pointer"
                                >
                                  {value.name}
                                </a>
                              ) : (
                                <CustomMenu.Item
                                  index={index}
                                  onClick={() => {
                                    if (!hasSubItems) router.push(value.path);
                                  }}
                                >
                                  <p className="font-[600] text-[16px] text-text-secondary flex items-center justify-between w-full">
                                    {value.name}
                                  </p>
                                </CustomMenu.Item>
                              )}

                              {hasSubItems && (
                                <>
                                  <div
                                    className="absolute top-0 left-full w-3 h-full z-40"
                                    style={{ pointerEvents: "auto" }}
                                  ></div>

                                  <div className="absolute top-0 ml-2 left-full hidden group-hover:flex flex-col bg-white border border-[#D0D5DD] cursor-pointer rounded-card shadow-md z-50 min-w-[200px]">
                                    {value?.subItems?.map((sub, index) => (
                                      <a
                                        key={sub.name}
                                        className="px-4 py-2 text-[16px] text-text-secondary font-semibold hover:underline hover:bg-bg-secondary cursor-pointer whitespace-nowrap"
                                        href={`https://${sub.path}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          ...(index === 0 && {
                                            borderBottomWidth: "1px",
                                            borderBottomStyle: "dashed",
                                            borderBottomColor: "#D0D5DD",
                                          }),
                                          borderTopLeftRadius: "12px",
                                          borderTopRightRadius: "12px",
                                          borderBottomLeftRadius: "12px",
                                          borderBottomRightRadius: "12px",
                                        }}
                                      >
                                        {sub.name}
                                      </a>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          );
                        })}
                      </CustomMenu.Dropdown>
                    )}
                  </CustomMenu>
                );
              }
            )}
          </nav>
        )}

        <div className="hidden lg:flex space-x-4">
          <a
            onClick={() => setOpenedModal(true)}
            className="btn-ghost whitespace-nowrap cursor-pointer flex items-center justify-center px-4 text-sm h-[41px] rounded-card font-semibold animate-fade-in animation-delay-500 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Book a Demo
          </a>
          <a
            href="https://app.plural.health/signup"
            target="_blank"
            className="btn-primary hidden whitespace-nowrap cursor-pointer xl:flex items-center justify-center font-semibold rounded-card h-[40px] px-4 text-sm animate-fade-in animation-delay-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Try NeoEHR for free
          </a>
        </div>

        {/* Mobile Menu Button and Sheet */}
        <div className="lg:hidden">{renderMobileMenu()}</div>
      </div>
      {openedModal && (
        <BookADemo openedModal={openedModal} setOpenedModal={setOpenedModal} />
      )}

      {showDropDown && (
        <div ref={ref}>
          {!isMobile && (
            <div
              className={`absolute w-fit transition-all duration-300 ease-in-out ${
                scrolled ? "top-[69px]" : "top-[78px]"
              } bg-white shadow-2xl rounded-2xl h-[auto] z-50`}
              style={{
                animation: showDropDown ? 'fadeIn 0.3s ease-in' : 'fadeOut 0.3s ease-out'
              }}
            >
              <div className="container mx-auto py-6 cursor-pointer">
                <div className="w-fit"></div>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
