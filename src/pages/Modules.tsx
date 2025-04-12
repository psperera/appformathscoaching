import React from 'react';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 'Y531',
    code: 'Y531',
    name: 'Pure Core',
    description: 'Complex numbers, matrices, further calculus and vectors',
    topics: ['Complex Numbers', 'Matrices', 'Further Calculus', 'Vectors'],
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700'
  },
  {
    id: 'Y532',
    code: 'Y532',
    name: 'Statistics',
    description: 'Probability distributions, hypothesis testing, correlation',
    topics: ['Probability Distributions', 'Hypothesis Testing', 'Correlation'],
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700'
  },
  // Add other modules...
];

export default function Modules() {
  return <div>Modules Page (Coming Soon)</div>;
} 