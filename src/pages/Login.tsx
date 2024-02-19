import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div className="flex flex-col items-center flex-1 justify-center py-12 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full max-w-[400px] space-y-4">
                <div className="text-center">
                    <div className="text-3xl font-bold">Login</div>
                    <div className="text-foreground">
                        Enter your email below to login to your account
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="m@example.com"
                            required
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link
                                className="ml-auto inline-block text-sm underline"
                                to="#"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                        <Input id="password" required type="password" />
                    </div>
                    <Button className="w-full" variant={"default"}>
                        Login
                    </Button>
                </div>
                <div className="text-center flex">
                    <div className="text-foreground mr-2">
                        Don't have an account?
                    </div>
                    <Link className="text-primary" to="/register">
                        Register
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center md:w-1/2">
                <img
                    alt="Image"
                    className="w-full aspect-video object-cover"
                    height="432"
                    src="https://images.pexels.com/photos/7709123/pexels-photo-7709123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width="768"
                />
            </div>
        </div>
    );
};
