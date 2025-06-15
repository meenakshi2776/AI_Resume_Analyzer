
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Users, Award, Briefcase, FileText } from 'lucide-react';

interface ImprovementSuggestionsProps {
  data: {
    technical: string[];
    soft: string[];
    certifications: string[];
    experience: string[];
    resume: string[];
  };
}

const ImprovementSuggestions: React.FC<ImprovementSuggestionsProps> = ({ data }) => {
  const categories = [
    {
      title: 'Technical Skills',
      items: data.technical,
      icon: Code,
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Soft Skills',
      items: data.soft,
      icon: Users,
      color: 'green',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      title: 'Certifications',
      items: data.certifications,
      icon: Award,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Experience',
      items: data.experience,
      icon: Briefcase,
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Resume',
      items: data.resume,
      icon: FileText,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <Card key={index} className={`${category.borderColor} border-2`}>
          <CardHeader className={category.bgColor}>
            <CardTitle className="flex items-center gap-2">
              <category.icon className={`h-5 w-5 ${category.iconColor}`} />
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {category.items.slice(0, 5).map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${category.iconColor.replace('text-', 'bg-')}`}></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            {category.items.length > 5 && (
              <p className="text-xs text-gray-500 mt-3">
                +{category.items.length - 5} more suggestions
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ImprovementSuggestions;
