import React, { useEffect, useState } from "react";

function TriviaQuizLoop() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  // Start quiz after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch question
  const fetchQuestion = () => {
    setLoading(true);
    setFeedback("");
    setSelectedAnswer("");

    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data.results[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setFeedback("❌ Could not load question.");
      });
  };

  // Fetch question after starting
  useEffect(() => {
    if (started) {
      fetchQuestion();
    }
  }, [started]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === question.correct_answer) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! Correct: ${question.correct_answer}`);
    }

    // Load new question after 2 seconds
    setTimeout(() => {
      fetchQuestion();
    }, 2000);
  };

  return (
    <div>
      <h2>Trivia Quiz</h2>
      {!started && <p>⏳ Get ready... Starting in 3 seconds</p>}
      {started && loading && <p>Loading question...</p>}
      {started && question && (
        <div>
          <h4 dangerouslySetInnerHTML={{ __html: question.question }} />

          {/* Correct answer first */}
          <button
            onClick={() => handleAnswer(question.correct_answer)}
            disabled={!!selectedAnswer}
          >
            {question.correct_answer}
          </button>

          {/* Incorrect answers */}
          {question.incorrect_answers.map((wrong, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(wrong)}
              disabled={!!selectedAnswer}
              style={{ display: "block", marginTop: "0.5rem" }}
            >
              {wrong}
            </button>
          ))}

          {feedback && <p style={{ marginTop: "1rem" }}>{feedback}</p>}
        </div>
      )}
    </div>
  );
}

export default TriviaQuizLoop;
