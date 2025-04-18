import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '../../../components/ui/card';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import { Separator } from '../../../components/ui/separator';

export const SignUpCard = () => {
    return (
       <Card className="w-full h-full p-8">
        <CardHeader className="pt-0 px-0"> 
        <CardTitle>
            Sign up
        </CardTitle>
        <CardDescription> Use your email to sign up.</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-5 px-0 pb-0">
            <form className="space-y-2.5">
            <Input 
             disabled={false}
             onChange={() => {}}
             value=""
             type="email"
             placeholder="Email"
             required
             />
             <Input 
              disabled={false}
              onChange={() => {}}
              value=""
              type="password"
              placeholder="Password"
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
             onClick={() => {}}
             variant="outline"
             size="lg"
             className="w-full relative">
                <FcGoogle className="size-5 absolute top-2.5 left-2.5"/>
                Continue with Google
                </Button>
            <Button
             disabled={false}
             onClick={() => {}}
             variant="outline"
             size="lg"
             className="w-full relative">
                <FaGithub className="size-5 absolute top-2.5 left-2.5"/>
                Continue with Github
                </Button>
          </div>
        </CardContent>
       </Card>
    )
}