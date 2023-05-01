import { useEffect } from 'react';

export const useIntersectionObserver = ({ options = {}, animations, query = '' }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target.dataset.nameTarget;

        entry.target.classList.toggle(animations?.[target].className, entry.isIntersecting);
      });
    }, options);

    const elements = document.querySelectorAll(query);

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return;
};
