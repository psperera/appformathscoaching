import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const modules = [
  { id: 'Y531', name: 'Pure Core', color: 'bg-blue-100', progress: 65 },
  { id: 'Y532', name: 'Statistics', color: 'bg-green-100', progress: 45 },
  { id: 'Y533', name: 'Mechanics', color: 'bg-yellow-100', progress: 30 },
  { id: 'Y534', name: 'Discrete', color: 'bg-purple-100', progress: 20 },
  { id: 'Y535', name: 'Additional Pure', color: 'bg-pink-100', progress: 15 },
];

const recentQuestions = [
  { id: 1, module: 'Pure Core', topic: 'Complex Numbers', date: '2024-03-15' },
  { id: 2, module: 'Statistics', topic: 'Hypothesis Testing', date: '2024-03-14' },
  { id: 3, module: 'Mechanics', topic: 'Kinematics', date: '2024-03-13' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
        <p className="mt-1 text-gray-500">
          Continue your AS Further Mathematics revision journey.
        </p>
      </div>

      {/* Module Progress Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Module Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <Link
              key={module.id}
              to={`/modules/${module.id}`}
              className={`${module.color} p-4 rounded-lg hover:opacity-90 transition-opacity`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{module.name}</span>
                <span className="text-sm text-gray-600">{module.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 rounded-full h-2"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="divide-y divide-gray-200">
          {recentQuestions.map((question) => (
            <div key={question.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">{question.module}</p>
                <p className="text-sm text-gray-500">{question.topic}</p>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(question.date).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/practice"
          className="bg-primary-50 p-6 rounded-lg shadow hover:bg-primary-100 transition-colors"
        >
          <h3 className="font-medium text-primary-700">Start Practice</h3>
          <p className="text-sm text-primary-600 mt-1">
            Practice questions from any module
          </p>
        </Link>
        <Link
          to="/progress"
          className="bg-secondary-50 p-6 rounded-lg shadow hover:bg-secondary-100 transition-colors"
        >
          <h3 className="font-medium text-secondary-700">View Progress</h3>
          <p className="text-sm text-secondary-600 mt-1">
            See detailed progress analytics
          </p>
        </Link>
      </div>
    </div>
  );
} 