
import React, { useState } from 'react';
import { MessageSquare, Send, Search, Filter, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const QA = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [questionForm, setQuestionForm] = useState({
    title: '',
    question: '',
    category: '',
    isAnonymous: false
  });

  const categories = [
    { id: 'all', label: 'All Questions', count: 24 },
    { id: 'theology', label: 'Theology', count: 8 },
    { id: 'sacraments', label: 'Sacraments', count: 6 },
    { id: 'history', label: 'Church History', count: 4 },
    { id: 'liturgy', label: 'Liturgy', count: 3 },
    { id: 'practice', label: 'Christian Practice', count: 3 }
  ];

  const questions = [
    {
      id: 1,
      title: 'What is the significance of the Coptic cross?',
      category: 'theology',
      author: 'Anonymous',
      date: 'March 15, 2024',
      answer: 'The Coptic cross represents the triumph of Christ over death. Its unique design with circles at the ends symbolizes eternal life, while the 12 decorative elements represent the apostles.',
      answeredBy: 'Father Michael Mikhail',
      answerDate: 'March 16, 2024',
      isAnswered: true
    },
    {
      id: 2,
      title: 'How do I prepare for my first confession?',
      category: 'sacraments',
      author: 'Mary K.',
      date: 'March 12, 2024',
      answer: 'Preparation for confession involves self-examination, sincere repentance, and the intention to amend your life. Spend time in prayer, reflect on your actions, and approach the sacrament with humility and faith.',
      answeredBy: 'Father David Dimitri',
      answerDate: 'March 13, 2024',
      isAnswered: true
    },
    {
      id: 3,
      title: 'Can you explain the fasting periods in the Coptic calendar?',
      category: 'practice',
      author: 'John S.',
      date: 'March 10, 2024',
      answer: 'The Coptic Orthodox Church observes several fasting periods throughout the year, including the Great Lent (55 days), Advent Fast (43 days), and the Fast of the Apostles (variable length). Each fast has specific guidelines and spiritual purposes.',
      answeredBy: 'Father Michael Mikhail',
      answerDate: 'March 11, 2024',
      isAnswered: true
    },
    {
      id: 4,
      title: 'What is the role of icons in Orthodox worship?',
      category: 'theology',
      author: 'Sarah M.',
      date: 'March 8, 2024',
      answer: '',
      answeredBy: '',
      answerDate: '',
      isAnswered: false
    },
    {
      id: 5,
      title: 'How can I get more involved in church ministries?',
      category: 'practice',
      author: 'Anonymous',
      date: 'March 5, 2024',
      answer: '',
      answeredBy: '',
      answerDate: '',
      isAnswered: false
    }
  ];

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || q.category === selectedCategory;
    const matchesSearch = q.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Question submitted:', questionForm);
    // Reset form
    setQuestionForm({ title: '', question: '', category: '', isAnonymous: false });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      theology: 'bg-orthodox-burgundy',
      sacraments: 'bg-orthodox-gold',
      history: 'bg-blue-500',
      liturgy: 'bg-green-500',
      practice: 'bg-purple-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-orthodox-burgundy mb-6">
            Questions & Answers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ask questions about faith, receive guidance from our clergy, and explore answers from our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Question Form */}
          <div className="lg:col-span-1">
            <Card className="border-orthodox-gold-light sticky top-4">
              <CardHeader>
                <CardTitle className="text-orthodox-burgundy font-serif flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-orthodox-gold" />
                  Ask a Question
                </CardTitle>
                <CardDescription>
                  Our clergy are here to help with your spiritual questions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Question title"
                      value={questionForm.title}
                      onChange={(e) => setQuestionForm({...questionForm, title: e.target.value})}
                      className="border-orthodox-gold-light focus:border-orthodox-gold"
                    />
                  </div>
                  
                  <div>
                    <Select 
                      value={questionForm.category} 
                      onValueChange={(value) => setQuestionForm({...questionForm, category: value})}
                    >
                      <SelectTrigger className="border-orthodox-gold-light focus:border-orthodox-gold">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="theology">Theology</SelectItem>
                        <SelectItem value="sacraments">Sacraments</SelectItem>
                        <SelectItem value="history">Church History</SelectItem>
                        <SelectItem value="liturgy">Liturgy</SelectItem>
                        <SelectItem value="practice">Christian Practice</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Textarea
                      placeholder="Write your question here..."
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                      className="border-orthodox-gold-light focus:border-orthodox-gold min-h-32"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={questionForm.isAnonymous}
                      onChange={(e) => setQuestionForm({...questionForm, isAnonymous: e.target.checked})}
                      className="rounded border-orthodox-gold"
                    />
                    <label htmlFor="anonymous" className="text-sm text-gray-600">
                      Submit anonymously
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-orthodox-burgundy hover:bg-orthodox-burgundy-light text-white"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Question
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Questions List */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-orthodox-gold-light focus:border-orthodox-gold"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-orthodox-burgundy hover:bg-orthodox-burgundy-light text-white" 
                    : "border-orthodox-burgundy text-orthodox-burgundy hover:bg-orthodox-burgundy hover:text-white"
                  }
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {filteredQuestions.map((question) => (
                <Card key={question.id} className="border-orthodox-gold-light">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-orthodox-burgundy font-serif mb-2">
                          {question.title}
                        </CardTitle>
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {question.author}
                          </div>
                          <span>{question.date}</span>
                        </div>
                      </div>
                      <Badge className={`${getCategoryColor(question.category)} text-white`}>
                        {categories.find(c => c.id === question.category)?.label}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  {question.isAnswered ? (
                    <CardContent>
                      <div className="bg-orthodox-ivory-dark p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3">
                          {question.answer}
                        </p>
                        <div className="text-sm text-gray-500 border-t border-orthodox-gold-light pt-2">
                          <strong>Answered by:</strong> {question.answeredBy} • {question.answerDate}
                        </div>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>Pending:</strong> This question is awaiting an answer from our clergy.
                        </p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {filteredQuestions.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-500 mb-2">No questions found</h3>
                <p className="text-gray-400">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>

        {/* Information Section */}
        <div className="mt-16 bg-orthodox-burgundy text-white rounded-lg p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">
              How Our Q&A Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orthodox-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orthodox-burgundy font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Ask Your Question</h4>
                <p className="text-orthodox-ivory-dark text-sm">
                  Submit your question in any category, anonymously or with your name.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orthodox-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orthodox-burgundy font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Clergy Response</h4>
                <p className="text-orthodox-ivory-dark text-sm">
                  Our experienced priests and deacons provide thoughtful, biblical answers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orthodox-gold rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orthodox-burgundy font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Community Learning</h4>
                <p className="text-orthodox-ivory-dark text-sm">
                  Browse answers to help your own spiritual journey and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
