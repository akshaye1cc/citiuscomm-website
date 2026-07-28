'use client';

import { useEffect, useRef, useState } from 'react';

type TypingTextProps = {
  phrases: string[];
  speed?: number;
  delayBetweenPhrases?: number;
  className?: string;
  /** Freeze the sequence where it stands — drives the hero's pause control. */
  paused?: boolean;
  /** Fires once the last phrase has typed out and the cursor retires. */
  onSettled?: () => void;
};

/**
 * Types each phrase in turn, then comes to rest on the final one. The sequence
 * ends rather than looping, so it never holds the page in permanent motion.
 * Reduced motion skips straight to the resting phrase, and no work is scheduled
 * while the tab is hidden or `paused` is set.
 */
const TypingText = ({
  phrases,
  speed = 50,
  delayBetweenPhrases = 2000,
  className = '',
  paused = false,
  onSettled,
}: TypingTextProps) => {
  const restingPhrase = phrases.length ? phrases[phrases.length - 1] : '';

  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [settled, setSettled] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  // Held in a ref so an inline parent callback can't restart the effects below.
  const onSettledRef = useRef(onSettled);
  onSettledRef.current = onSettled;

  // Reduced motion lands on the same end state the animation would reach,
  // just without the journey.
  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setDisplayedText(restingPhrase);
    setSettled(true);
  }, [restingPhrase]);

  useEffect(() => {
    const sync = () => setTabHidden(document.hidden);
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  useEffect(() => {
    if (settled) onSettledRef.current?.();
  }, [settled]);

  useEffect(() => {
    if (settled || paused || tabHidden || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    const isLastPhrase = phraseIndex === phrases.length - 1;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isWaiting) {
      timeout = setTimeout(() => {
        if (isLastPhrase) {
          setSettled(true);
        } else {
          setIsWaiting(false);
          setIsDeleting(true);
        }
      }, delayBetweenPhrases);
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => prev + 1);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, speed / 2);
      }
    } else if (displayedText.length === currentPhrase.length) {
      setIsWaiting(true);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
      }, speed);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [
    displayedText,
    phraseIndex,
    isDeleting,
    isWaiting,
    settled,
    paused,
    tabHidden,
    phrases,
    speed,
    delayBetweenPhrases,
  ]);

  return (
    <span className={className}>
      {displayedText}
      {!settled && (
        <span aria-hidden="true" className={paused ? '' : 'animate-pulse'}>
          |
        </span>
      )}
    </span>
  );
};

export default TypingText;
