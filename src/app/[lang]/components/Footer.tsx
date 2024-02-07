import React from "react";
import ShareLinks from "./ShareLinks";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-800 flex justify-around items-center">
      <div className="p-4 text-center text-red-500">
        © 2024 Copyright:
        <a
          className="text-white"
          href="https://webook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; WeBook
        </a>
      </div>
      <ShareLinks />
    </footer>
  );
}
