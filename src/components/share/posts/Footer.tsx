import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <section>
        <footer className="bg-white border-t py-6 mt-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} PostList Inc. All rights reserved.
        </footer>
      </section>
    </React.Fragment>
  );
};

export default Footer;
