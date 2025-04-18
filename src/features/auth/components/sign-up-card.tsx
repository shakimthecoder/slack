import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';

export const SignUpCard = () => {
    return (
       <Card className="w-full h-full p-8">
        <CardHeader className="pt-0 px-0"> 
        <CardTitle>
            Sign up
        </CardTitle>
        </CardHeader>
        <CardDescription> Use your email to sign up.</CardDescription>
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
            </form>

        </CardContent>
       </Card>
    )
}