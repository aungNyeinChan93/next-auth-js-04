import React from "react";

type FeatureCardProps = {
  title?: string;
  desc?: string;
  icon?: string;
};

function FeatureCard({ title, desc, icon }: FeatureCardProps) {
  return (
    <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}

const FeatureSection = () => {
  return (
    <React.Fragment>
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Fast Development"
              desc="Prebuilt components help you move quickly."
              icon="⚡"
            />
            <FeatureCard
              title="Responsive Design"
              desc="Looks great on all devices out of the box."
              icon="📱"
            />
            <FeatureCard
              title="Customizable"
              desc="Easily extend and style components."
              icon="🎨"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeatureSection;
