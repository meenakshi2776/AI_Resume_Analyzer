
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Target, IndianRupee, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FileText,
      title: 'Resume Analysis',
      description: 'Deep AI-powered analysis of your resume content and structure'
    },
    {
      icon: Target,
      title: 'Role Matching',
      description: 'Find your ideal job roles based on your skills and experience'
    },
    {
      icon: IndianRupee,
      title: 'Salary Estimation',
      description: 'Get accurate salary estimates based on Indian market trends'
    },
    {
      icon: TrendingUp,
      title: 'Career Roadmap',
      description: 'Personalized improvement suggestions and career growth path'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Resume Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get comprehensive insights about your resume with advanced AI analysis. 
            Discover your ideal role, salary expectations, and personalized improvement suggestions 
            tailored for the Indian job market.
          </p>
          <Button 
            onClick={() => navigate('/analyzer')}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4"
          >
            Analyze Your Resume
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full w-fit">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analysis Categories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Comprehensive Analysis Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Personal Information</h3>
              <p className="text-blue-700 text-sm">Complete profile analysis including contact details, education, and professional summary</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Current Role Analysis</h3>
              <p className="text-green-700 text-sm">Assessment of your current position, responsibilities, and career level</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Salary Estimation</h3>
              <p className="text-purple-700 text-sm">Market-based salary ranges and growth potential in Indian rupees</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Preferred Roles</h3>
              <p className="text-yellow-700 text-sm">AI-recommended job roles that match your skill set and experience</p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Improvement Areas</h3>
              <p className="text-red-700 text-sm">Detailed suggestions for technical skills, certifications, and career development</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold text-indigo-900 mb-2">Skills Analysis</h3>
              <p className="text-indigo-700 text-sm">Deep dive into technical and soft skills with market demand insights</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with our AI-powered resume analysis and unlock your career potential
          </p>
          <Button 
            onClick={() => navigate('/analyzer')}
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4"
          >
            Start Analysis Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
