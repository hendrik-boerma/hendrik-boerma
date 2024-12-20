import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center pt-16 bg-backgroundcolor text-textcolor">
      <article className="flex flex-col items-center gap-8 text-center">
        <h1 className=" font-bold text-8xl p-4">404</h1>
        <h2 className=" font-bold text-4xl sm:text-2xl p-4">Pagina helaas niet gevonden...</h2>
        <a
          href="/"
          className="bg-backgroundcolor2 hover:bg-primary p-4 grow rounded max-w-md hover:text-secondary"
        >
          Terug naar de website
        </a>
      </article>
    </div>
  );
}

export default NotFound;
