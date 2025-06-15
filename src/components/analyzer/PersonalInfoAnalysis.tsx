
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, MapPin, GraduationCap, Briefcase, FileText } from 'lucide-react';

interface PersonalInfoProps {
  data: {
    name: string;
    contact: string;
    location: string;
    experience: string;
    education: string;
    summary: string;
  };
}

const PersonalInfoAnalysis: React.FC<PersonalInfoProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Personal Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-4 w-4 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-medium">{data.name}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Contact</p>
              <p className="font-medium">{data.contact}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Location</p>
              <p className="font-medium">{data.location}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Professional Background
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Briefcase className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Experience</p>
              <p className="font-medium">{data.experience}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <GraduationCap className="h-4 w-4 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Education</p>
              <p className="font-medium">{data.education}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfoAnalysis;
