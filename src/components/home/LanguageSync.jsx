import i18next from "i18next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LanguageSync = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentLocale = pathname.split("/")[1];
    if (currentLocale && i18next.language !== currentLocale) {
      i18next.changeLanguage(currentLocale);
    }
  }, [pathname]);

  return null; // No UI needed, just synchronization logic
};

export default LanguageSync;
