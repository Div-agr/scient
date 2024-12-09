import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./faqs.css"

function FAQComponent() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 2,
      question: "Where is Scient located?",
      answer: "Scient is conveniently located near the popular 'Ton Tea' spot, where you might refuel with eggs after a workout at the nearby gym or sports complex. It's just a short walk away from the pit stop where you grab your caffeine fix to reboot yourself.",
    },
    {
      id: 3,
      question: "How can Scient help people?",
      answer: "Scient serves as a dynamic workspace for individuals working on projects or startups. Our dedicated student team offers support in mentorship, outreach, and potential funding based on the merit of your idea.",
    },
    {
      id: 4,
      question: "How can I reach out to Scient?",
      answer: "You can contact us via the phone numbers listed on our website or connect with us through our social media handles.",
    },
    {
      id: 5,
      question: "What inventory is available at Scient?",
      answer: "We offer a wide range of basic equipment across various domains. While our inventory is continually updated, you can explore the full list on our inventory page for the most up-to-date information.",
    },    
  ];

  return (
    <div id="faq" className="faqs py-5  bg-[#000000] flex-box">
      
      <div className="bg-[#0c0d08] p-8 rounded-lg shadow-md  max-w-[1000px] m-auto right-box question-box">
        <h2 className="text-4xl font-bold text-yellow-400 mb-9 headfaq">Frequently Asked Questions</h2>

        {questions.map((q) => (
          <div key={q.id} className="mb-7 last:mb-5">
            <button
              className="flex items-center justify-between w-full p-3 font-semibold text-left text-white shadow-md text-m faq-question focus:outline-none question"
              onClick={() => setActiveQuestion(activeQuestion === q.id ? null : q.id)}
            >
              {q.question}
              {activeQuestion === q.id ? (
                <FaMinusCircle className="text-2xl text-primary" />
              ) : (
                <FaPlusCircle className="text-2xl text-primary" />
              )}
            </button>
            <AnimatePresence>
              {activeQuestion === q.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 ml-4 text-2xl font-semibold text-white"
                >
                  <p>{q.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQComponent;