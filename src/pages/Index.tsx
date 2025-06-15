
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, FileText, TrendingUp, Users, Award, Target, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Resume Analysis",
      description: "Deep AI-powered analysis of your resume content, structure, and formatting"
    },
    {
      icon: Target,
      title: "Role Matching",
      description: "Get personalized job role recommendations based on your skills and experience"
    },
    {
      icon: TrendingUp,
      title: "Salary Estimation",
      description: "Accurate salary estimates in Indian Rupees based on current market trends"
    },
    {
      icon: Users,
      title: "Skill Assessment",
      description: "Comprehensive analysis of your technical and soft skills portfolio"
    },
    {
      icon: Award,
      title: "Improvement Suggestions",
      description: "Actionable recommendations to enhance your professional profile"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms for precise career guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Resume Analyzer
            </h1>
          </div>
          <Link to="/login">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your Career with AI-Powered Resume Analysis
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Get deep insights into your professional profile, discover ideal career paths, 
            and receive personalized recommendations to accelerate your career growth in the Indian market.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/login">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-blue-200 hover:bg-blue-50 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Comprehensive Analysis Features</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform provides detailed insights across multiple dimensions 
            to give you a complete picture of your professional standing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Analyze Your Resume?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have already transformed their careers with our AI insights.
          </p>
          <Link to="/login">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Your Analysis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6" />
            <span className="text-xl font-bold">AI Resume Analyzer</span>
          </div>
          <p className="text-gray-400">
            © 2024 AI Resume Analyzer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
