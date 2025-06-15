
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Users, TrendingUp, AlertTriangle } from 'lucide-react';

interface SkillsAnalysisProps {
  data: {
    technical: { skill: string; level: string; demand: string }[];
    soft: { skill: string; level: string; importance: string }[];
    trending: string[];
    gaps: string[];
  };
}

const SkillsAnalysis: React.FC<SkillsAnalysisProps> = ({ data }) => {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'advanced': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'beginner': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand.toLowerCase()) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.technical.map((skill, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{skill.skill}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDemandColor(skill.demand)}`}>
                    {skill.demand} Demand
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.soft.map((skill, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold">{skill.skill}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    skill.importance === 'Critical' ? 'text-red-600 bg-red-100' :
                    skill.importance === 'High' ? 'text-orange-600 bg-orange-100' :
                    'text-blue-600 bg-blue-100'
                  }`}>
                    {skill.importance}
                  </span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Trending Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {data.trending.map((skill, index) => (
              <div key={index} className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                <p className="text-sm font-medium text-center">{skill}</p>
                <p className="text-xs text-gray-500 text-center">High Growth</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Skill Gaps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {data.gaps.map((gap, index) => (
              <li key={index} className="flex items-center gap-2 p-2 bg-red-50 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-sm text-red-700">{gap}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillsAnalysis;
