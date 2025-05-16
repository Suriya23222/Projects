import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
        "X-Api-Key": "77aI65gn9rBNnxpbBwsSrw==i9gbolJHimYfRPlZ",
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    const quoteObj = data[0];
    setQuote(quoteObj.quote);
    setAuthor(quoteObj.author);
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex items-center justify-center transition duration-500`}>
      <div className= {`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} max-w-xl p-8 rounded-xl shadow-lg text-center space-y-6 bg-opacity-80 backdrop-blur-md bg-pink-200 transition-all duration-500`}>
        <h1 className="text-3xl font-bold">Quote Generator</h1>
        <p className="text-xl italic animate-fade-in">“{quote}”</p>
        <p className="text-right font-semibold">— {author}</p>

        <div className="flex justify-center gap-4 mt-6">
          <button onClick={fetchQuote} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
            New Quote
          </button>
          <button onClick={toggleTheme} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
