import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '../../../components/ui/card';
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
        </CardContent>
       </Card>
    )
}