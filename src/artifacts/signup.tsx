import { useState } from 'react';
import { AlertCircle, Mail, Lock, Github, Facebook, Twitter } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      console.log('Signup attempted:', { email, password });
      // Here you would typically handle the signup logic
      alert(`Signup attempted: ${email}, ${password}`);
    }
  };

  const handleSocialSignup = (platform:string) => {
    console.log(`${platform} signup attempted`);
    // Here you would typically handle the social signup logic
    alert(`${platform} signup attempted`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
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
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={<Lock className="h-4 w-4 text-gray-500" />}
              />
            </div>
            <Button type="submit" className="w-full">Sign Up</Button>
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
            <Button variant="outline" className="w-full" onClick={() => handleSocialSignup('Github')}>
              <Github className="mr-2 h-4 w-4" /> Githubx
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleSocialSignup('Facebook')}>
              <Facebook className="mr-2 h-4 w-4" /> Facebook
            </Button>
            <Button variant="outline" className="w-full" onClick={() => handleSocialSignup('Twitter')}>
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Button>
          </div>

          <div className="text-center text-sm mt-6">
            Already have an account?{' '}
            <a href="/" className="text-primary hover:underline">
              Log in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupForm;
