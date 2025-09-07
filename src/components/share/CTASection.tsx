import React from "react";

const CTASection = () => {
  return (
    <React.Fragment>
      <section id="cta" className="bg-indigo-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join thousands of developers building modern, responsive web apps with
          HomePro today.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl shadow">
          Start Free Trial
        </button>
      </section>
    </React.Fragment>
  );
};

export default CTASection;
