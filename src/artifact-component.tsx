import React, { useState } from 'react';
import { AlertCircle, Mail, Lock, User, Github, Facebook, Twitter } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password || !website) {
      setError('Please fill in all fields');
    } else {
      setError('');
      console.log('Login attempted:', { email, password, website });
      // Here you would typically handle the login logic
      alert(`Login attempted: ${email}, ${password}, ${website}`);
    }
  };

  const handleSocialLogin = (platform) => {
    console.log(`${platform} login attempted`);
    // Here you would typically handle the social login logic
    alert(`${platform} login attempted`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Demo Component</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail className="h-4 w-4 text-gray-500" />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock className="h-4 w-4 text-gray-500" />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Target Website</Label>
              <Select onValueChange={setWebsite}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a website" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website1">Website 1</SelectItem>
                  <SelectItem value="website2">Website 2</SelectItem>
                  <SelectItem value="website3">Website 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Log In</Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="relative mt-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('Github')}>
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('Facebook')}>
              <Facebook className="mr-2 h-4 w-4" /> Facebook
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleSocialLogin('Twitter')}>
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Button>
          </div>

          <div className="text-center text-sm mt-6">
            Don't have an account?{' '}
            <Button variant="link" className="p-0">
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;