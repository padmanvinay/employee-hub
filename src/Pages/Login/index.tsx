/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { useAppDispatch } from '../../Redux/hooks';
import { setLoginData } from '../../Redux/Login/auth-slice';

const DEFAULT_LOGIN_ERROR = {
  email: '',
  password: '',
};

const DEFAULT_REGISTER_ERROR = {
  name: '',
  mobileNumber: '',
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [registerError, setRegisterError] = useState(DEFAULT_REGISTER_ERROR);
  const [loginError, setLoginError] = useState(DEFAULT_LOGIN_ERROR);

  useEffect(() => {
    setName('');
    setMobileNumber('');
    setCompanyName('');
    setEmail('');
    setPassword('');
    setRegisterError(DEFAULT_REGISTER_ERROR);
    setLoginError(DEFAULT_LOGIN_ERROR);
  }, [activeTab]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    let hasError = false;
    const newError = { ...DEFAULT_LOGIN_ERROR };

    if (email === '') {
      newError.email = 'Email is required';
      hasError = true;
    }
    if (password === '') {
      newError.password = 'Password is required';
      hasError = true;
    }

    setLoginError(loginError);

    if (hasError) {
      return;
    } else {
      dispatch(
        setLoginData({
          email,
          mobileNumber: '',
          isLoggedIn: true,
          token: '123456',
        }),
      );
    }
  };

  const handleUserRegister = (event: React.FormEvent) => {
    event.preventDefault();
    let hasError = false;
    const newError = { ...DEFAULT_REGISTER_ERROR };

    if (name === '') {
      newError.name = 'Name is required';
      hasError = true;
    }
    if (mobileNumber === '') {
      newError.mobileNumber = 'Mobile number is required';
      hasError = true;
    }
    if (email === '') {
      newError.email = 'Email is required';
      hasError = true;
    }
    if (password === '') {
      newError.password = 'Password is required';
      hasError = true;
    }

    setRegisterError(newError);

    if (hasError) {
      return;
    } else {
      console.log('registered');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[25rem]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome</CardTitle>
          <CardDescription className="text-center">Login or create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} className="w-full" onValueChange={(tab) => setActiveTab(tab as 'login' | 'register')}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="pt-4">
              <form className="grid gap-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                {loginError.email && <h1 className="text-red-500 text-xs">{loginError.email}</h1>}
                <Input
                  type="password"
                  placeholder="Password"
                  className="input"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                {loginError.password && <h1 className="text-red-500 text-xs">{loginError.password}</h1>}
                <Button onClick={handleLogin}>Login</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="grid gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {registerError.name && <h1 className="text-red-500 text-xs">{registerError.name}</h1>}
                <Input
                  type="text"
                  placeholder="Mobile Number"
                  className="input"
                  onChange={(e) => setMobileNumber(e.target.value)}
                  value={mobileNumber}
                />
                {registerError.mobileNumber && <h1 className="text-red-500 text-xs">{registerError.mobileNumber}</h1>}
                <Input
                  type="text"
                  placeholder="Company Name"
                  className="input"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {registerError.email && <h1 className="text-red-500 text-xs">{registerError.email}</h1>}
                <Input
                  type="password"
                  placeholder="Password"
                  className="input"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {registerError.password && <h1 className="text-red-500 text-xs">{registerError.password}</h1>}
                <Button onClick={handleUserRegister}>Register</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
