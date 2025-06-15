
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, ThumbsUp, TrendingUp, Activity } from 'lucide-react';

interface PreferredRoleProps {
  data: {
    suggestedRoles: string[];
    reasonsForFit: string[];
    growthPath: string[];
    marketDemand: string;
  };
}

const PreferredRoleAnalysis: React.FC<PreferredRoleProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Recommended Roles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.suggestedRoles.map((role, index) => (
            <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-blue-800">{role}</p>
              <p className="text-sm text-blue-600 mt-1">High compatibility match</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ThumbsUp className="h-5 w-5" />
            Reasons for Fit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {data.reasonsForFit.map((reason, index) => (
              <li key={index} className="flex items-start gap-2">
                <ThumbsUp className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Career Growth Path
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.growthPath.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold">{step}</p>
                  <p className="text-xs text-gray-500">Next {index === 0 ? '1-2' : '2-3'} years</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Market Demand
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-800">High Demand</span>
            </div>
            <p className="text-sm text-gray-700">{data.marketDemand}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreferredRoleAnalysis;
