import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionAttempt from '../components/QuestionAttempt';

// Sample data - would come from API/database
const sampleQuestion = {
  id: 'q1',
  moduleId: 'Y531',
  year: 2023,
  series: 'May' as const,
  paperNumber: 1,
  questionNumber: 3,
  content: 'Solve the equation z² + 4z + 5 = 0 in the complex plane, giving your answers in the form a + bi where a and b are real.',
  topics: ['complex-numbers'],
  marks: 5
};

const sampleHints = [
  {
    id: 'h1',
    questionId: 'q1',
    level: 1 as const,
    content: 'This is a quadratic equation in z. Consider using the quadratic formula.'
  },
  {
    id: 'h2',
    questionId: 'q1',
    level: 2 as const,
    content: 'The discriminant will be negative, leading to complex roots.'
  },
  {
    id: 'h3',
    questionId: 'q1',
    level: 3 as const,
    content: 'Use z = (-4 ± √(16-20))/2 = -2 ± √4i = -2 ± 2i'
  }
];

const sampleSolution = {
  id: 's1',
  questionId: 'q1',
  steps: [
    {
      id: 'step1',
      content: 'Using the quadratic formula: z = (-b ± √(b² - 4ac))/2a',
      markScheme: 'M1',
      explanation: 'We can solve this quadratic equation using the quadratic formula'
    },
    {
      id: 'step2',
      content: 'z = (-4 ± √(16 - 20))/2 = (-4 ± √-4)/2',
      markScheme: 'M1',
      explanation: 'Substitute a=1, b=4, c=5 into the formula'
    },
    {
      id: 'step3',
      content: 'z = -2 ± 2i',
      markScheme: 'A1',
      explanation: 'Simplify to get the two complex roots'
    }
  ]
};

export default function QuestionPage() {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const handleComplete = (score: number) => {
    // Here we would typically save the progress
    console.log(`Question completed with score: ${score}`);
    navigate('/practice');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <QuestionAttempt
        question={sampleQuestion}
        hints={sampleHints}
        solution={sampleSolution}
        onComplete={handleComplete}
      />
    </div>
  );
} 