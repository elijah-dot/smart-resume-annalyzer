import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { User, Mail, MapPin, Phone, Upload, FileText, Star, Award, Calendar, CreditCard as Edit3, Save, X, CheckCircle, AlertCircle, Brain, Target, TrendingUp } from 'lucide-react';

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [resumeAnalyzing, setResumeAnalyzing] = useState(false);
  const [resumeAnalyzed, setResumeAnalyzed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate frontend developer with 5+ years of experience building modern web applications. I love creating intuitive user interfaces and solving complex problems with clean, efficient code.',
    experience: '5+ years',
    education: 'Computer Science, UC Berkeley',
    website: 'https://johndoe.dev',
    linkedin: 'https://linkedin.com/in/johndoe'
  });

  const [skills] = useState([
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Programming' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Programming' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Docker', level: 70, category: 'DevOps' }
  ]);

  const handleSave = () => {
    updateUser({
      name: formData.name,
      email: formData.email
    });
    setIsEditing(false);
  };

  const handleResumeUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setResumeAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockAnalysis = {
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS', 'Node.js', 'Python', 'Git'],
        experience: '5+ years in frontend development',
        strengths: [
          'Strong technical leadership experience',
          'Excellent problem-solving abilities',
          'Proven track record of delivering complex projects',
          'Strong communication and collaboration skills'
        ],
        suggestions: [
          'Consider adding cloud certifications (AWS, Azure)',
          'Highlight specific metrics and achievements',
          'Add more details about leadership experience',
          'Consider learning emerging technologies like AI/ML'
        ]
      };

      updateUser({ resumeAnalysis: mockAnalysis });
      setResumeAnalyzing(false);
      setResumeAnalyzed(true);
    }, 3000);
  };

  const getSkillColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Frontend': 'bg-blue-500',
      'Programming': 'bg-green-500',
      'Backend': 'bg-purple-500',
      'Cloud': 'bg-orange-500',
      'DevOps': 'bg-red-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">
            Manage your personal information and career details
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-start space-x-6 mb-6">
                <div className="relative">
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'}
                    alt={user?.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Upload className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex-1">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h3>
                      <p className="text-gray-600 mb-4">{formData.bio}</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          {user?.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          {formData.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {formData.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {!isEditing && (
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-medium text-gray-900">{formData.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Education</p>
                    <p className="font-medium text-gray-900">{formData.education}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Resume Analysis Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Resume Analysis</h2>
              
              {!user?.resumeAnalysis && !resumeAnalyzing && (
                <div className="text-center py-8">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Your Resume</h3>
                  <p className="text-gray-600 mb-4">
                    Get AI-powered insights on your resume and personalized recommendations
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Upload className="w-4 h-4 mr-2 inline" />
                    Upload Resume
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    className="hidden"
                  />
                </div>
              )}

              {resumeAnalyzing && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analyzing Your Resume...</h3>
                  <p className="text-gray-600">
                    Our AI is extracting insights from your resume. This may take a few moments.
                  </p>
                </div>
              )}

              {user?.resumeAnalysis && (
                <div className="space-y-6">
                  {resumeAnalyzed && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        <span className="text-green-800 font-medium">Resume analyzed successfully!</span>
                      </div>
                    </div>
                  )}

                  {/* Extracted Skills */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Brain className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Extracted Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {user.resumeAnalysis.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Strengths */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Star className="w-5 h-5 text-yellow-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Key Strengths</h3>
                    </div>
                    <ul className="space-y-2">
                      {user.resumeAnalysis.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggestions */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Target className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Improvement Suggestions</h3>
                    </div>
                    <ul className="space-y-2">
                      {user.resumeAnalysis.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Skills & Expertise</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getSkillColor(skill.category)}`}></div>
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">({skill.category})</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                          className={`${getSkillColor(skill.category)} h-2 rounded-full`}
                        ></motion.div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 w-10 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Completion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Profile Completion</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Overall Progress</span>
                  <span className="font-medium text-blue-600">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="bg-blue-500 h-2 rounded-full"
                  ></motion.div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Basic information complete
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Skills added
                  </div>
                  <div className="flex items-center text-gray-500">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Add work experience
                  </div>
                  <div className="flex items-center text-gray-500">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Add portfolio projects
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Profile Views</span>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="font-medium">45</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Job Applications</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Interview Requests</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Job Matches</span>
                  <span className="font-medium text-green-600">24</span>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Profile updated
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Applied to Frontend Developer
                </div>
                <div className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Resume analyzed
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}