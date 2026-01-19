'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollEffectProvider() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const animationElements = document.querySelectorAll(
      '.imageeffect .wp-block-image, .fadeLeft, .fadeUp, .fadeRight, .fadePopup, .customEffect'
    );

    const check_if_in_view = () => {
      const windowHeight = window.innerHeight;
      const windowTop = window.scrollY;
      const windowBottom = windowTop + windowHeight;

      animationElements.forEach((el) => {
        const element = el as HTMLElement;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;

        if (elementBottom >= windowTop && elementTop <= windowBottom) {
          element.classList.add('in-view');
        } else {
          element.classList.remove('in-view');
        }
      });
    };

    const timeoutId = setTimeout(() => {
      check_if_in_view();
      window.addEventListener('scroll', check_if_in_view);
      window.addEventListener('resize', check_if_in_view);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', check_if_in_view);
      window.removeEventListener('resize', check_if_in_view);
    };
  }, [pathname, isMounted]);

  return null;
}

