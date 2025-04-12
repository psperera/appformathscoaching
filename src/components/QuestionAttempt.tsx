import React, { useState } from 'react';
import { Question, Hint, Solution } from '../types';

interface QuestionAttemptProps {
  question: Question;
  hints?: Hint[];
  solution?: Solution;
  onComplete?: (score: number) => void;
}

export default function QuestionAttempt({ 
  question, 
  hints = [], 
  solution,
  onComplete 
}: QuestionAttemptProps) {
  const [currentHintLevel, setCurrentHintLevel] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [revealedSteps, setRevealedSteps] = useState<number[]>([]);
  const [workingText, setWorkingText] = useState('');

  const showNextHint = () => {
    if (currentHintLevel < hints.length) {
      setCurrentHintLevel(currentHintLevel + 1);
    }
  };

  const revealNextStep = () => {
    if (solution && revealedSteps.length < solution.steps.length) {
      setRevealedSteps([...revealedSteps, revealedSteps.length]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Question Content */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-medium text-gray-900">
              Question {question.questionNumber}
            </h2>
            <span className="text-sm font-medium text-primary-600">
              {question.marks} marks
            </span>
          </div>
          
          <div className="prose max-w-none">
            {/* We'll need to properly render mathematical content here */}
            <div className="text-gray-900">{question.content}</div>
          </div>
        </div>
      </div>

      {/* Working Space */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-md font-medium text-gray-900 mb-4">Your Working</h3>
        <textarea
          value={workingText}
          onChange={(e) => setWorkingText(e.target.value)}
          className="w-full h-40 p-4 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          placeholder="Write your solution here..."
        />
      </div>

      {/* Hints Section */}
      {hints.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-md font-medium text-gray-900 mb-4">Hints</h3>
          <div className="space-y-4">
            {hints.slice(0, currentHintLevel).map((hint, index) => (
              <div 
                key={hint.id}
                className="p-4 bg-primary-50 rounded-md border border-primary-100"
              >
                <p className="text-primary-900">
                  Hint {index + 1}: {hint.content}
                </p>
              </div>
            ))}
            {currentHintLevel < hints.length && (
              <button
                onClick={showNextHint}
                className="w-full py-2 px-4 border border-primary-300 rounded-md text-primary-700 hover:bg-primary-50"
              >
                Show Next Hint
              </button>
            )}
          </div>
        </div>
      )}

      {/* Solution Section */}
      {solution && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-md font-medium text-gray-900 mb-4">Solution</h3>
          {!showSolution ? (
            <button
              onClick={() => setShowSolution(true)}
              className="w-full py-2 px-4 border border-primary-300 rounded-md text-primary-700 hover:bg-primary-50"
            >
              Reveal Solution
            </button>
          ) : (
            <div className="space-y-4">
              {solution.steps.map((step, index) => {
                const isRevealed = revealedSteps.includes(index);
                return (
                  <div 
                    key={step.id}
                    className={`p-4 rounded-md border ${
                      isRevealed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    {isRevealed ? (
                      <>
                        <div className="prose max-w-none">
                          <div className="text-gray-900">{step.content}</div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {step.explanation}
                        </div>
                        <div className="mt-2 text-sm font-medium text-primary-600">
                          {step.markScheme}
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={revealNextStep}
                        className="w-full text-left text-gray-600"
                      >
                        Click to reveal step {index + 1}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => onComplete?.(0)} // Replace with actual scoring logic
          className="py-2 px-6 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Save & Exit
        </button>
        <button
          onClick={() => onComplete?.(question.marks)} // Replace with actual scoring logic
          className="py-2 px-6 bg-primary-600 text-white rounded-md hover:bg-primary-700"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
} 