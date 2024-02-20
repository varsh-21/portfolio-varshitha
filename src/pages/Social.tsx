import React from "react";

import { Link } from "gatsby";
import Github from "../icons/social-icons/gh";
import Instagram from "../icons/social-icons/ig";
import Mail from "../icons/social-icons/mail";
import LinkedIn from "../icons/social-icons/in";
type SocialIconsProps = {
  size?: number;
};

function SocialIcons({ size }: SocialIconsProps) {
  const icons = (
    <div className="social-icon-container">
      <Link
        className="linkedIn"
        to={"https://www.linkedin.com/in/varshitha-br"}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <LinkedIn width={size || "28"} color={"#0072b1"} />
        </div>
      </Link>
      <Link
        className={"instagram"}
        to={"https://www.instagram.com/varshi._.21/"}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <Instagram width={size || "28"} color={"#d62976"} />
        </div>
      </Link>
      <Link
        className="i" 
        to={"mailto:varshithabr2@gmail.com"}
        target="_blank"
        rel="noreferrer"
        method="post"
      >
        <div>
          <Mail width={size || "100"} color={"#fff"} />
        </div>
      </Link>
    </div>
  );
  return <div className="social-icons">{icons}</div>;
}

export default SocialIcons;
function rgba(
  arg0: number,
  arg1: number,
  arg2: number
): import("csstype").Property.Color | undefined {
  throw new Error("Function not implemented.");
}

