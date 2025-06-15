
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, FileText, User, Briefcase, IndianRupee, TrendingUp, Lightbulb, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PersonalInfoAnalysis from '@/components/analyzer/PersonalInfoAnalysis';
import JobRoleAnalysis from '@/components/analyzer/JobRoleAnalysis';
import SalaryEstimation from '@/components/analyzer/SalaryEstimation';
import PreferredRoleAnalysis from '@/components/analyzer/PreferredRoleAnalysis';
import ImprovementSuggestions from '@/components/analyzer/ImprovementSuggestions';
import SkillsAnalysis from '@/components/analyzer/SkillsAnalysis';
import { analyzeResumeText } from '@/utils/resumeAnalyzer';

const ResumeAnalyzer = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string>('');
  const [analysis, setAnalysis] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type === 'text/plain' || file.name.endsWith('.doc') || file.name.endsWith('.docx')) {
        setResumeFile(file);
        // For demo purposes, we'll use the filename as content
        // In a real app, you'd extract text from PDF/DOC files
        setResumeText(`Resume content from ${file.name}`);
        toast({
          title: "File uploaded successfully",
          description: `${file.name} is ready for analysis`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOC, DOCX, or TXT file",
          variant: "destructive",
        });
      }
    }
  };

  const handleTextInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeText(event.target.value);
  };

  const analyzeResume = async () => {
    if (!resumeText.trim()) {
      toast({
        title: "No resume content",
        description: "Please upload a file or paste resume text",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const analysisResult = await analyzeResumeText(resumeText);
      setAnalysis(analysisResult);
      toast({
        title: "Analysis completed",
        description: "Your resume has been analyzed successfully",
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis failed",
        description: "There was an error analyzing your resume",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Resume Analyzer</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get comprehensive insights about your resume with AI-powered analysis. 
            Discover your ideal role, salary expectations, and improvement suggestions.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Your Resume
            </CardTitle>
            <CardDescription>
              Upload your resume file or paste the text content for analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="resume-file">Upload Resume File</Label>
              <Input
                id="resume-file"
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileUpload}
                className="mt-2"
              />
              {resumeFile && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {resumeFile.name} uploaded successfully
                </p>
              )}
            </div>

            <div className="relative">
              <Label htmlFor="resume-text">Or Paste Resume Text</Label>
              <textarea
                id="resume-text"
                value={resumeText}
                onChange={handleTextInput}
                placeholder="Paste your resume content here..."
                className="w-full h-40 p-3 border border-gray-300 rounded-md resize-none mt-2"
              />
            </div>

            <Button 
              onClick={analyzeResume} 
              disabled={isAnalyzing || !resumeText.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing Resume...
                </>
              ) : (
                <>
                  <Target className="h-4 w-4 mr-2" />
                  Analyze Resume
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {analysis && (
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="role" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Current Role
              </TabsTrigger>
              <TabsTrigger value="salary" className="flex items-center gap-2">
                <IndianRupee className="h-4 w-4" />
                Salary
              </TabsTrigger>
              <TabsTrigger value="preferred" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Preferred Role
              </TabsTrigger>
              <TabsTrigger value="improvements" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Improvements
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <PersonalInfoAnalysis data={analysis.personalInfo} />
            </TabsContent>

            <TabsContent value="role">
              <JobRoleAnalysis data={analysis.currentRole} />
            </TabsContent>

            <TabsContent value="salary">
              <SalaryEstimation data={analysis.salaryEstimation} />
            </TabsContent>

            <TabsContent value="preferred">
              <PreferredRoleAnalysis data={analysis.preferredRole} />
            </TabsContent>

            <TabsContent value="improvements">
              <ImprovementSuggestions data={analysis.improvements} />
            </TabsContent>

            <TabsContent value="skills">
              <SkillsAnalysis data={analysis.skills} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
