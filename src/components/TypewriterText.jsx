import { useState, useEffect } from 'react';

function TypewriterText({ phrases, typingSpeed = 60, deletingSpeed = 30, pauseTime = 1800 }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    let timeout;

    if (!isDeleting && text.length < currentPhrase.length) {
      // typing forward
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      // pause at full phrase before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      // move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span>
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}

export default TypewriterText;