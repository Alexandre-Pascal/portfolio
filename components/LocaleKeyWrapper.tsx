"use client";

import { useLocale } from "@/context/LocaleContext";

/**
 * Force le remontage du contenu quand la langue change,
 * pour éviter tout texte résiduel ou données en cache.
 */
export function LocaleKeyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  return <div key={locale}>{children}</div>;
}
