import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto  px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="text-center md:justify-between">
             
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer-small"
                  className="text-white hover:text-blueGray-300 text-sm font-semibold py-1"
                >
                  VE
                </a>
              
          </div>
        </div>
      </footer>
    </>
  );
}
