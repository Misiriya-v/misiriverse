import { useEffect, useState } from "react";

const useTyping = (
  words = [],
  typingSpeed = 120,
  deletingSpeed = 60,
  delay = 1800
) => {
  const [text, setText] = useState("");

  const [wordIndex, setWordIndex] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);

          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return text;
};

export default useTyping;