import React from 'react';
import { Link } from 'react-router-dom';

interface ModuleProgress {
  id: string;
  name: string;
  questionsAttempted: number;
  totalQuestions: number;
  topics: TopicProgress[];
  color: string;
  borderColor: string;
}

interface TopicProgress {
  id: string;
  name: string;
  questionsAttempted: number;
  totalQuestions: number;
  averageScore: number;
}

// Sample data - would come from API/database in production
const moduleProgress: ModuleProgress[] = [
  {
    id: 'Y531',
    name: 'Pure Core',
    questionsAttempted: 45,
    totalQuestions: 75,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    topics: [
      {
        id: 'complex',
        name: 'Complex Numbers',
        questionsAttempted: 15,
        totalQuestions: 20,
        averageScore: 85
      },
      {
        id: 'matrices',
        name: 'Matrices',
        questionsAttempted: 12,
        totalQuestions: 18,
        averageScore: 78
      }
    ]
  },
  {
    id: 'Y532',
    name: 'Statistics',
    questionsAttempted: 30,
    totalQuestions: 60,
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    topics: [
      {
        id: 'probability',
        name: 'Probability Distributions',
        questionsAttempted: 10,
        totalQuestions: 15,
        averageScore: 72
      },
      {
        id: 'hypothesis',
        name: 'Hypothesis Testing',
        questionsAttempted: 8,
        totalQuestions: 12,
        averageScore: 65
      }
    ]
  }
];

export default function Progress() {
  return <div>Progress Page (Coming Soon)</div>;
} 