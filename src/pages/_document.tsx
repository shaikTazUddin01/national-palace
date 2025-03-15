import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const removeGrammarlyAttrs = () => {
                document.body.removeAttribute('data-new-gr-c-s-check-loaded');
                document.body.removeAttribute('data-gr-ext-installed');
              };
              
              // Run on load
              if (document.readyState === 'complete') {
                removeGrammarlyAttrs();
              } else {
                window.addEventListener('load', removeGrammarlyAttrs);
              }
              
              // Run periodically
              setInterval(removeGrammarlyAttrs, 500);
            })();
          `
        }} />
      </body>
    </Html>
  );
} 