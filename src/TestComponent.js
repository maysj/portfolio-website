import React from 'react';

function TestComponent() {
  return (
    <div className="p-10">
      <h1 className="font-poppins text-4xl">This is Poppins Font</h1>
      <h2 className="font-kosugi text-3xl mt-4">This is Kosugi Maru Font</h2>
      <h3 className="font-gabarito text-2xl mt-4">This is Gabarito Font</h3>
      <p className="font-libre mt-4">This is Libre Baskerville Font for longer text.</p>
      <p className="font-roboto mt-4">This is Roboto Font for large blocks of text.</p>
      <p className="font-inter mt-4">This is Inter Font for subheadings.</p>
      <input className="font-work w-full p-2 mt-4 border" placeholder="This is Work Sans for forms" />
      <button className="font-sora bg-blue-500 text-white px-4 py-2 mt-4">Sora Button</button>
      <footer className="font-manrope mt-4">Manrope for footers and sidebars</footer>
      <h1 className="font-montserrat text-4xl mt-4">Montserrat for large display</h1>
      <p className="font-space mt-4">Space Mono for quirky areas like navigation</p>
    </div>
  );
}

export default TestComponent;
