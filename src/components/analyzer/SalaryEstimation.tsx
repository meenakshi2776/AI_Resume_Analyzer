
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, TrendingUp, BarChart3, Info } from 'lucide-react';

interface SalaryEstimationProps {
  data: {
    currentRange: { min: number; max: number };
    potentialRange: { min: number; max: number };
    factors: string[];
    marketAnalysis: string;
  };
}

const SalaryEstimation: React.FC<SalaryEstimationProps> = ({ data }) => {
  const formatSalary = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`;
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5" />
            Current Market Value
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium mb-2">Current Salary Range</p>
            <p className="text-2xl font-bold text-blue-800">
              {formatSalary(data.currentRange.min)} - {formatSalary(data.currentRange.max)}
            </p>
            <p className="text-sm text-blue-600 mt-1">Per Annum</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600 font-medium mb-2">Potential Salary Range</p>
            <p className="text-2xl font-bold text-green-800">
              {formatSalary(data.potentialRange.min)} - {formatSalary(data.potentialRange.max)}
            </p>
            <p className="text-sm text-green-600 mt-1">With improvements</p>
          </div>

          <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg">
            <TrendingUp className="h-5 w-5 text-yellow-600" />
            <div>
              <p className="text-sm font-medium text-yellow-800">Growth Potential</p>
              <p className="text-xs text-yellow-600">
                {Math.round(((data.potentialRange.min - data.currentRange.min) / data.currentRange.min) * 100)}% - 
                {Math.round(((data.potentialRange.max - data.currentRange.max) / data.currentRange.max) * 100)}% increase possible
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Salary Factors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.factors.map((factor, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{factor}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              Market Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700 leading-relaxed">{data.marketAnalysis}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SalaryEstimation;
