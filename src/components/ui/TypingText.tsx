'use client';

import { useEffect, useState } from 'react';

type TypingTextProps = {
  phrases: string[];
  speed?: number;
  delayBetweenPhrases?: number;
  className?: string;
};

const TypingText = ({
  phrases,
  speed = 50,
  delayBetweenPhrases = 2000,
  className = '',
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenPhrases);
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed / 2);
      }
    } else {
      if (displayedText.length === currentPhrase.length) {
        if (phrases.length > 1) {
          setIsWaiting(true);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenPhrases);
        }
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(
            currentPhrase.slice(0, displayedText.length + 1)
          );
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phraseIndex, isDeleting, isWaiting, phrases, speed, delayBetweenPhrases]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingText;
