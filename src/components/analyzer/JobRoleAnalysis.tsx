
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, TrendingUp, CheckCircle, Award } from 'lucide-react';

interface JobRoleProps {
  data: {
    title: string;
    level: string;
    industry: string;
    responsibilities: string[];
    achievements: string[];
    matchScore: number;
  };
}

const JobRoleAnalysis: React.FC<JobRoleProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Current Role Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Job Title</p>
            <p className="font-semibold text-lg">{data.title}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Experience Level</p>
            <p className="font-medium text-blue-600">{data.level}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Industry</p>
            <p className="font-medium">{data.industry}</p>
          </div>
          
          <div>
            <p className="text-sm text-gray-600">Profile Match Score</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${data.matchScore}%` }}
                ></div>
              </div>
              <span className="font-bold text-green-600">{data.matchScore}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Key Responsibilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {data.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{responsibility}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Key Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {data.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <Award className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobRoleAnalysis;
