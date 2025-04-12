import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface Topic {
  id: string;
  name: string;
  moduleId: string;
}

interface Question {
  id: string;
  moduleId: string;
  topicId: string;
  content: string;
  marks: number;
  year: number;
  paperNumber: number;
}

// Sample data - would come from API/database in production
const topics: Topic[] = [
  { id: 'complex', name: 'Complex Numbers', moduleId: 'Y531' },
  { id: 'matrices', name: 'Matrices', moduleId: 'Y531' },
  { id: 'probability', name: 'Probability Distributions', moduleId: 'Y532' },
  { id: 'hypothesis', name: 'Hypothesis Testing', moduleId: 'Y532' },
];

const questions: Question[] = [
  {
    id: 'q1',
    moduleId: 'Y531',
    topicId: 'complex',
    content: 'Solve the equation z² + 4z + 5 = 0 in the complex plane.',
    marks: 5,
    year: 2023,
    paperNumber: 1
  },
  // Add more sample questions...
];

export default function Practice() {
  return <div>Practice Page (Coming Soon)</div>;
} 