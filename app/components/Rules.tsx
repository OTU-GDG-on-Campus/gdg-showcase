import React from "react";

interface Rule {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const rules: Rule[] = [
  {
    id: 1,
    title: "Eligibility",
    description: "Must be an Ontario Tech or Durham College student",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Team Size",
    description: "Must have team of 2-4",
    icon: "👥",
  },
  {
    id: 3,
    title: "Project Status",
    description: "Project must be functional and/or complete",
    icon: "✅",
  },
  {
    id: 4,
    title: "Project Age",
    description: "Project must not be older than 4 months",
    icon: "📅",
  },
  {
    id: 5,
    title: "Submission",
    description: "Submit GitHub Repo on March 10th",
    icon: "📤",
  },
  {
    id: 6,
    title: "Attribution",
    description: "Cite sources, if AI is used",
    icon: "📝",
  },
];

function Rules() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-6"
      id="rules"
    >
      <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text mb-4">
          RULES
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Please review these requirements carefully before submitting your
          project
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="gradient-border p-6 md:p-8 flex flex-col items-center text-center gap-3 md:gap-4 bg-surface hover:scale-105 transition-transform duration-300 w-full sm:w-[calc(50%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="text-5xl md:text-6xl mb-2">{rule.icon}</div>
              <h2 className="text-xl md:text-2xl font-bold gradient-text">
                {rule.title}
              </h2>
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rules;
