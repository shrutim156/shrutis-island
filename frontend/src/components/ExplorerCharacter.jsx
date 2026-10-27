import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExplorerCharacter({ speechText, onCharacterClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! Welcome to Shruti's Island 🐻. Ask me anything about my background, education, projects, or contact info!"
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Clean Intent Matching Engine based on your portfolio data
  const generateNLPResponse = (userQuery) => {
    const rawText = userQuery.toLowerCase().trim();

    // 1. Direct Self-Introduction / About Shruti More
    if (
      rawText.includes('introduce') ||
      rawText.includes('who are you') ||
      rawText.includes('tell me about yourself') ||
      rawText.includes('about shruti') ||
      rawText.includes('about me') ||
      rawText.includes('who is shruti') ||
      rawText.includes('your intro')
    ) {
      return (
        "Hi, I'm Shruti More!\n\n" +
        "I'm a final-year B.E. student in Artificial Intelligence and Data Science at PES Modern College of Engineering, Pune.\n\n" +
        "• Focus: Machine Learning, Natural Language Processing, Generative AI & Agentic AI\n" +
        "• Academics: CGPA 7.12\n" +
        "• Curiosity drives me. Code empowers me. Innovation inspires me.\n\n" +
        "Feel free to ask me about my projects, research, or contact details!"
      );
    }

    // Tokenizer & stop-word removal for NLP matching
    const stopWords = new Set(['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', 'her', 'hers', 'herself', 'it', 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', 'should', 'now']);
    
    const tokens = rawText
      .replace(/[^\w\s]/gi, '')
      .split(/\s+/)
      .filter(word => word.length > 0 && !stopWords.has(word));

    // Knowledge base with intent categories and weighted trigger keywords
    const intents = [
      {
        id: 'projects',
        keywords: ['project', 'work', 'portfolio', 'build', 'app', 'code', 'crop', 'churn', 'car', 'price', 'prediction'],
        response: "You can check out Project Harbor on the map to see Shruti's completed projects:\n• Crop Recommendation & Price Prediction System\n• Customer Churn Prediction\n• Used Car Price Prediction"
      },
      {
        id: 'research',
        keywords: ['research', 'lab', 'ml', 'machine', 'learning', 'regression', 'logistic', 'decision', 'tree', 'random', 'forest', 'knn', 'kmeans', 'clustering'],
        response: "Visit the Research Lab to explore machine learning algorithms and stations like Linear Regression, Logistic Regression, Decision Trees, Random Forest, K-Nearest Neighbors, and K-Means Clustering!"
      },
      {
        id: 'contact',
        keywords: ['contact', 'link', 'github', 'linkedin', 'email', 'reach', 'hire', 'social', 'connect', 'resume', 'cv'],
        response: "Want to get in touch? Head straight to the Satellite Station on the map to email Shruti (shrutivmore156@gmail.com), check her GitHub & LinkedIn, or download her resume."
      },
      {
        id: 'education',
        keywords: ['education', 'study', 'college', 'academy', 'degree', 'be', 'bachelor', 'engineering', 'pesmcoe', 'pune', 'cgpa', 'leetcode', 'geeksforgeeks', 'hackerrank', 'hackathon'],
        response: "Shruti is a final-year B.E. student in Artificial Intelligence & Data Science at PES Modern College of Engineering, Pune with a CGPA of 7.12. Visit the Academy to check her coding profiles (LeetCode, GeeksforGeeks, HackerRank) and hackathon achievements."
      },
      {
        id: 'about',
        keywords: ['about', 'shruti', 'more', 'palace', 'bio', 'background', 'journey', 'story', 'goal', 'engineer'],
        response: "Shruti More is a final-year AI & Data Science student at PES Modern College of Engineering Pune with a deep passion for building intelligent, data-driven solutions. Visit the Palace to read her full story!"
      },
      {
        id: 'achievements',
        keywords: ['achievement', 'certif', 'award', 'museum', 'trophy', 'honor', 'certificate', 'badge', 'internship', 'istop', 'edunet'],
        response: "Check out the Museum on the map to view Shruti's certifications and internships, including ISTOP Internship, Edunet Internship, and Data Science Course certificates!"
      },
      {
        id: 'skills',
        keywords: ['skill', 'tech', 'python', 'sql', 'pandas', 'scikit', 'flask', 'render', 'streamlit'],
        response: "Shruti works with Python, Scikit-learn, Pandas, Flask, Render, and Streamlit! Check out Project Harbor to see how these are applied in her machine learning web apps."
      },
      {
        id: 'greetings',
        keywords: ['hi', 'hello', 'hey', 'namaste', 'greetings', 'sup', 'morning', 'evening'],
        response: "Greetings, explorer! I'm Shruti's Island Assistant. Ask me to introduce Shruti, or ask where to find her projects, research, and contacts!"
      },
      {
        id: 'help',
        keywords: ['help', 'map', 'navigate', 'explore', 'where', 'guide', 'options'],
        response: "Here is your island map guide:\n• Palace: About Shruti More & Background\n• Project Harbor: Completed ML & Web Projects\n• Research Lab: ML Algorithms & Stations\n• Academy: Education, CGPA & Coding Profiles\n• Museum: Internships & Certificates\n• Satellite Station: Contact, GitHub, LinkedIn & Resume"
      }
    ];

    // Score intents based on token overlap
    let bestIntent = null;
    let maxScore = 0;

    for (const intent of intents) {
      let score = 0;
      for (const token of tokens) {
        if (intent.keywords.some(kw => token.includes(kw) || kw.includes(token))) {
          score += 1;
        }
      }
      if (score > maxScore) {
        maxScore = score;
        bestIntent = intent;
      }
    }

    if (bestIntent && maxScore > 0) {
      return bestIntent.response;
    }

    return "I'm your island guide! You can ask me to introduce Shruti, or ask about her projects, research, contact info, background, or education!";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      const botReply = generateNLPResponse(userMsg);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 450);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (onCharacterClick) onCharacterClick();
  };

  return (
    <div className="relative flex items-center gap-2 sm:gap-3 select-none pointer-events-auto">
      {/* Interactive Chat Window - Safely anchored above the cliff character */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-24 left-0 w-72 sm:w-96 max-h-[65vh] bg-[#f5efeb] text-[#2c1d0e] border-2 border-[#b88d4b] rounded-2xl shadow-2xl flex flex-col overflow-hidden font-serif z-50"
          >
            {/* Header */}
            <div className="bg-[#ebdcb9] px-4 py-2.5 border-b-2 border-[#b88d4b] flex justify-between items-center font-bold">
              <span className="flex items-center gap-2 text-xs sm:text-sm">🐻 Shruti's Island AI Guide</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#2c1d0e] hover:text-red-700 font-bold px-2 py-0.5 rounded transition-colors"
                title="Close chat"
              >
                ✕
              </button>
            </div>

            {/* Message Display Area */}
            <div className="p-3 flex-1 overflow-y-auto flex flex-col gap-2.5 text-xs sm:text-sm max-h-[45vh]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-xl max-w-[85%] whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#b88d4b] text-white self-end rounded-br-none shadow-sm'
                      : 'bg-[#ebdcb9] text-[#2c1d0e] border border-[#b88d4b]/40 self-start rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-2 bg-[#ebdcb9] border-t-2 border-[#b88d4b] flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, background..."
                className="flex-1 bg-[#f5efeb] border border-[#b88d4b] rounded-xl px-3 py-1.5 text-xs sm:text-sm text-[#2c1d0e] focus:outline-none focus:ring-1 focus:ring-[#b88d4b]"
              />
              <button
                type="submit"
                className="bg-[#b88d4b] text-white px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold hover:bg-[#a0773f] transition-colors"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Speech Bubble (Visible when chat is closed) */}
      {!isOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            key={speechText}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleClick}
            className="cursor-pointer relative bg-[#f5efeb] text-[#2c1d0e] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl border-1.5 sm:border-2 border-[#b88d4b] shadow-xl max-w-[130px] sm:max-w-xs font-serif text-xs sm:text-sm font-bold"
          >
            {speechText}
            <div className="absolute right-[-7px] sm:right-[-8px] bottom-3 sm:bottom-4 w-0 h-0 border-t-[5px] sm:border-t-[6px] border-t-transparent border-b-[5px] sm:border-b-[6px] border-b-transparent border-l-[7px] sm:border-l-[8px] border-l-[#b88d4b]" />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Floating Bear Emoji / Character Trigger */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="cursor-pointer text-3xl sm:text-5xl filter drop-shadow-md"
        title="Tap to talk with Shruti's Assistant!"
      >
        🐻
      </motion.div>
    </div>
  );
}