"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is the GDG Showcase?",
    answer:
      "The GDG Showcase is a competition where students present their tech projects to industry judges. It's your chance to demonstrate your skills, get feedback, and win amazing prizes!",
  },
  {
    id: 2,
    question: "Who can participate?",
    answer:
      "Any Ontario Tech student can participate! Teams must consist of 2-4 members. Whether you're a first-year or graduating senior, if you have a project to showcase, we want to see it!",
  },
  {
    id: 3,
    question: "What kind of projects can I submit?",
    answer:
      "Any tech project is welcome! Web apps, mobile apps, games, machine learning projects, IoT devices, or anything else you've built. The project must be functional and/or complete, and not older than 4 months.",
  },
  {
    id: 4,
    question: "When is the submission deadline?",
    answer:
      "All GitHub repositories must be submitted by March 10th. Make sure your repo includes clear documentation and a README explaining what your project does.",
  },
  {
    id: 5,
    question: "What if I used AI tools to build my project?",
    answer:
      "Using AI tools is perfectly fine! We just ask that you cite your sources and be transparent about what AI tools you used and how they contributed to your project.",
  },
  {
    id: 6,
    question: "How will projects be judged?",
    answer:
      "Projects will be evaluated by industry professionals based on factors like innovation, technical complexity, functionality, presentation quality, and real-world applicability.",
  },
  {
    id: 7,
    question: "Do I need to present in person?",
    answer:
      "Yes, presentations will be in person. This is a great opportunity to practice your pitch and communication skills in front of real industry professionals!",
  },
  {
    id: 8,
    question: "What prizes can we win?",
    answer:
      "First place wins a gaming monitor and incubator program access. Second place receives a mini projector, and third place gets a powerbank. All winners also receive recognition and valuable feedback!",
  },
];

// Styled MUI Accordion to match the site theme
const StyledAccordion = styled(Accordion)({
  backgroundColor: "var(--color-surface)",
  color: "#fff",
  border: "2px solid #444",
  borderRadius: "10px",
  marginBottom: "16px",
  "&:before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: "0 0 16px 0",
    border: "4px solid transparent",
    background:
      "linear-gradient(var(--color-surface), var(--color-surface)) padding-box, conic-gradient(from var(--angle), #ea4335, #ffffff, #f9ab00, #fff, #4285f4, #fff, #34a853, #fff, #ea4335) border-box",
    animation: "rotate-gradient 5s linear infinite",
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  "& .MuiAccordionSummary-content": {
    margin: "16px 0",
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#fff",
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  paddingTop: "0",
  paddingBottom: "20px",
});

function FAQ() {
  const [expanded, setExpanded] = React.useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center py-10 md:py-20 px-4 md:px-6"
      id="faq"
    >
      <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text mb-4">
          FAQ
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          Got questions? We've got answers!
        </p>
      </div>

      <div className="w-full max-w-4xl px-2 md:px-4">
        {faqs.map((faq) => (
          <StyledAccordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
          >
            <StyledAccordionSummary
              expandIcon={
                <span className="text-xl md:text-2xl">
                  {expanded === faq.id ? "−" : "+"}
                </span>
              }
            >
              <h3 className="text-base md:text-xl font-semibold text-white pr-2">
                {faq.question}
              </h3>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
