"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { SectionId } from "@/lib/data";

const sectionIds: SectionId[] = [
  "hero",
  "about",
  "education",
  "certifications",
  "experience",
  "projects",
  "skills",
  "contact",
];

export function useScrollSpy(): SectionId | null {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<SectionId | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveId(null);
      return;
    }

    setActiveId("hero");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id as SectionId;
            if (sectionIds.includes(id)) setActiveId(id);
            break;
          }
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return activeId;
}
