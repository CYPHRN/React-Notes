import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>
        Made with <span className="heart">❤️</span> using React • Copyright ⓒ{" "}
        {year}
      </p>
    </footer>
  );
}

export default Footer;
