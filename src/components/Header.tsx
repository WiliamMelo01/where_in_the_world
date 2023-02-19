import React from 'react';
import { BsMoon } from 'react-icons/bs';

export default function Header() {
  function handleClick() {
    const html = document.querySelector('html');
    html?.classList.toggle('dark');
  }

  return (
    <div className="w-full bg-white-50 dark:bg-dark-mode-element-100 dark:shadow-box-dark shadow-box font-nunito py-5 px-12 flex justify-between max-[452px]:px-6">
      <h1 className=" text-2xl font-extrabold max-[452px]:text-lg max-[324px]:text-md">
        Where in the World?
      </h1>
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <BsMoon />
        <button
          className="font-semibold text-lg whitespace-nowrap"
          onClick={handleClick}
        >
          Dark mode
        </button>
      </div>{' '}
    </div>
  );
}
