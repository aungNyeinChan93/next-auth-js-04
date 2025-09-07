import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Build beautiful websites{" "}
          <span className="text-indigo-600">faster</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          HomePro is a modern toolkit for developers and designers. Create
          landing pages, dashboards, and web apps with ease using prebuilt
          components.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-slate-700 border rounded-xl shadow-sm">
            Learn More
          </button>
        </div>
        <div className="mt-12">
          <img
            src={"/next.svg"}
            alt="App screenshot"
            className="rounded-2xl shadow-xl mx-auto p-2"
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
