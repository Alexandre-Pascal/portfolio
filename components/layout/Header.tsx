"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";
import { getUi } from "@/lib/i18n";
import { sectionIds, type SectionId } from "@/lib/data";

const navIds: SectionId[] = [
  "hero",
  "about",
  "education",
  "certifications",
  "experience",
  "projects",
  "skills",
  "contact",
];

export function Header() {
  const { locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  const t = getUi(locale);
  const activeId = useScrollSpy();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = navIds.map((id) => ({
    id,
    label: t.nav[id],
  }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  const handleNavLinkClick = (e: React.MouseEvent, id: SectionId) => {
    if (typeof window !== "undefined" && window.location.hash === `#${id}`) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6"
        aria-label={t.aria.nav}
      >
        <Link
          href="/#hero"
          onClick={(e) => handleNavLinkClick(e, "hero")}
          className="font-heading text-lg font-semibold text-foreground transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Portfolio
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          <ul className="flex items-center gap-8">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  className={`relative py-2 text-sm font-medium transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    activeId != null && activeId === id
                      ? "text-accent"
                      : "text-foreground-muted"
                  }`}
                  onClick={(e) => handleNavLinkClick(e, id)}
                >
                  {label}
                  {activeId != null && activeId === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              type="button"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-background-card hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={
                theme === "light" ? t.aria.themeToDark : t.aria.themeToLight
              }
            >
              {theme === "light" ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* Language switcher */}
            <div className="flex rounded-lg border border-border bg-background-secondary/80 p-0.5">
              <button
                type="button"
                onClick={() => setLocale("fr")}
                className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  locale === "fr"
                    ? "bg-accent text-background"
                    : "text-foreground-muted hover:text-foreground"
                }`}
                aria-pressed={locale === "fr"}
                aria-label="Français"
              >
                FR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  locale === "en"
                    ? "bg-accent text-background"
                    : "text-foreground-muted hover:text-foreground"
                }`}
                aria-pressed={locale === "en"}
                aria-label="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: theme + lang switcher + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground-muted transition-colors hover:bg-background-card hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={
              theme === "light" ? t.aria.themeToDark : t.aria.themeToLight
            }
          >
            {theme === "light" ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
          <div className="flex rounded-lg border border-border bg-background-secondary/80 p-0.5">
            <button
              type="button"
              onClick={() => setLocale("fr")}
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                locale === "fr"
                  ? "bg-accent text-background"
                  : "text-foreground-muted"
              }`}
              aria-label="Français"
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                locale === "en"
                  ? "bg-accent text-background"
                  : "text-foreground-muted"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-background-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.aria.closeMenu : t.aria.openMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 top-16 z-40 min-h-[100dvh] bg-background md:hidden"
                style={{ height: "calc(100dvh - 4rem)" }}
                aria-hidden="true"
              >
                <ul className="flex flex-col gap-1 px-4 py-6">
                  {navItems.map(({ id, label }) => (
                    <li key={id}>
                      <Link
                        href={`/#${id}`}
                        className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                          activeId != null && activeId === id
                            ? "bg-background-card text-accent"
                            : "text-foreground hover:bg-background-card hover:text-accent"
                        }`}
                        onClick={(e) => handleNavLinkClick(e, id)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
}
