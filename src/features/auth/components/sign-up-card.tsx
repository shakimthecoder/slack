import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '../../../components/ui/card';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';
import { SignInFlow } from '../types';
import { useState } from 'react';
import { TriangleAlert } from 'lucide-react';
import { useAuthActions } from '@convex-dev/auth/react'

interface SignUpCardProps {
    setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
    const { signIn } = useAuthActions();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState<string | null>("");
    const [name, setName] = useState("");

    const handleProviderSignUp = (value: "github" | "google") => {
        setPending(true);
        signIn(value)
        .finally(() => setPending(false));
        }

    const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setError("Passwords do not match");
        }
        setPending(true);
        signIn("password", { name, email, password, flow: "signUp" })
        .catch(() => {
          setError("Something went wrong");
        })
        .finally(() => setPending(false));
    }

    return (
       <Card className="w-full h-full p-8">
        <CardHeader className="pt-0 px-0"> 
        <CardTitle>
            Sign up
        </CardTitle>
        <CardDescription> Use your email to sign up.</CardDescription>
        </CardHeader>
        {!!error && (
            <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <TriangleAlert className="size-4">
                <p>{error}</p>
                </TriangleAlert> 
            </div>
        )}
        <CardContent className="space-y-5 px-0 pb-0">
            <form onSubmit={onPasswordSignUp} className="space-y-2.5">
            <Input 
             disabled={pending}
             onChange={(e) => setEmail(e.target.value)}
             value={email}
             type="email"
             placeholder="Email"
             required
             />
            <Input 
             disabled={pending}
             onChange={(e) => setName(e.target.value)}
             value={name}
             placeholder="Name"
             required
             />
             <Input 
              disabled={pending}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              />
              <Input 
              disabled={pending}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password"
              required
              />
              <Button
               type="submit"
               className="w-full"
               size="lg"
               disabled={false}>
                Continue
              </Button>
            </form>
         <Separator />
          <div className="flex flex-col gap-y-2.5">
            <Button
             disabled={false}
             onClick={() => handleProviderSignUp("google")}
             variant="outline"
             size="lg"
             className="w-full relative">
                <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                Continue with Google
                </Button>
            <Button
             disabled={false}
             onClick={() => handleProviderSignUp("github")}
             variant="outline"
             size="lg"
             className="w-full relative">
                <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                Continue with Github
                </Button>
            <p className="text-xs text-muted-foreground">
                Already have an account? <span onClick={() => setState("signIn")}className="text-sky-500 hover:underline cursor-pointer">Sign In</span>
            </p>
          </div>
        </CardContent>
       </Card>
    )
}