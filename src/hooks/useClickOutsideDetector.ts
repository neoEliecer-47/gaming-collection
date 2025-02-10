import { useEffect, useRef, useState } from "react";

export function useClickOutsideDetector() {
  const [isClickOutside, setIsClickOutside] = useState(false);

  const dropMenuRef = useRef<HTMLDivElement>(null);

  function handleOutsideClick(event: MouseEvent) {
    if (
      dropMenuRef.current &&
      !dropMenuRef.current.contains(event.target as Node)
    ) {
      setIsClickOutside(true);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);//event to detect when user clicks outside the element
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { dropMenuRef, isClickOutside, setIsClickOutside };
}
