import React from "react";

const FooterSection = () => {
  return (
    <React.Fragment>
      <footer className="bg-slate-900 text-slate-400 py-10 mt-4">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">HomePro</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterSection;
