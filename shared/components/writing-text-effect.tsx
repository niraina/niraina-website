'use client';

import { useState, useEffect } from 'react';

type WritingTextEffectProps = {
  text: string;
  speed?: number;
  eraseSpeed?: number;
  delay?: number;  // Délai avant de recommencer à écrire
};

const WritingTextEffect = ({ text, speed = 100, eraseSpeed = 50, delay = 2000 }: WritingTextEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && index < text.length) {
      // Ajout des lettres une par une
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Suppression des lettres une par une
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, eraseSpeed);
    } else if (!isDeleting && index === text.length) {
      // Marquer comme effaçant après une pause
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && index === 0) {
      // Redémarrer l'écriture après l'effacement
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, eraseSpeed, delay]);

  return <span className="mt-4 font-jetbrains text-center block min-h-6">{displayedText}</span>;
};

export default WritingTextEffect;
