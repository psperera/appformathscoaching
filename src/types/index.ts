export interface Module {
  id: string;
  code: string;
  name: string;
  description: string;
}

export interface Question {
  id: string;
  moduleId: string;
  year: number;
  series: 'May' | 'June';
  paperNumber: number;
  questionNumber: number;
  content: string;
  topics: string[];
  marks: number;
}

export interface Hint {
  id: string;
  questionId: string;
  level: 1 | 2 | 3;
  content: string;
}

export interface Solution {
  id: string;
  questionId: string;
  steps: SolutionStep[];
}

export interface SolutionStep {
  id: string;
  content: string;
  markScheme: string;
  explanation: string;
} 