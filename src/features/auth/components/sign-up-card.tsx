import { Card, CardHeader, CardDescription, CardContent, CardTitle } from '../../../components/ui/card';

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

            </form>

        </CardContent>
       </Card>
    )
}