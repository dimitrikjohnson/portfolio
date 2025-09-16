import { useEffect } from 'react';
import Typed from 'typed.js';

export default function IntroHeading() {
  useEffect(() => {
    // initialise Typed on the #h1-intro element
    const typed = new Typed('#h1-intro', {
      strings: ['👋 Hi! My name is'],
      typeSpeed: 60,
      onComplete: () => {
        // hide the cursor after typing finishes
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) cursor.style.display = 'none';
      }
    });

    // cleanup on unmount
    return () => typed.destroy();
  }, []);

  return (
    <h1 className="mb-3">
      <span id="h1-intro" className="inline-block text-sm font-medium tracking-wide text-green-400 mb-2.5"></span>
      <span className="block font-bold text-4xl sm:text-5xl">Dimitrik Johnson</span>
    </h1>
  );
}
