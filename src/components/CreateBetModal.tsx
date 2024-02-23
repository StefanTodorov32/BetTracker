import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { createBet } from "@/utils/supabaseRequests";
import { useAuth } from "@clerk/clerk-react";

export type Bet = {
    team1: string;
    prediction: string;
    team2: string;
    odds: number;
    status: string;
    datetime: Date;
    league: string;
    sport: string;
    stake: number;
};

export default function CreateBetsModal({
    setShowModal,
}: {
    setShowModal: (show: boolean) => void;
}) {
    const form = useForm<Bet>();
    const {userId, getToken} = useAuth();
    const onSubmit = async(data: Bet) => {
        const token = await getToken({
            template: "supabase",
        });
        if (!userId || !token) return;
        const res = await createBet({ bet: data , userId, token});
        console.log(res);
    };
    return (
        <Card className="w-full max-w-lg border-[0px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardHeader className="flex flex-col gap-1">
                        <CardTitle className="text-lg">
                            Create Football Bet
                        </CardTitle>
                        <CardDescription>
                            Enter the team names, predictions, odds, status,
                            date, league, and stake.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1">
                                <FormField
                                    control={form.control}
                                    name="team1"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Team 2</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Team 2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <FormField
                                    control={form.control}
                                    name="prediction"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Prediction</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Prediction"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <FormField
                                    control={form.control}
                                    name="team2"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Team 2</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Team 2"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="odds"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Odds</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter the odds"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select
                                            {...field}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Status" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectItem value="pending">
                                                    Pending
                                                </SelectItem>
                                                <SelectItem value="finished">
                                                    Finished
                                                </SelectItem>
                                                <SelectItem value="void">
                                                    Void
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="datetime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date of the event</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !field.value &&
                                                                "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP"
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0"
                                                align="start"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date()
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="league"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>League</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter the league"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="sport"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sport</FormLabel>
                                        <Select
                                            {...field}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Sport" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectItem value="football">
                                                    Football
                                                </SelectItem>
                                                <SelectItem value="basketball">
                                                    Basketball
                                                </SelectItem>
                                                <SelectItem value="tennis">
                                                    Tennis
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="stake"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Stake</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter the stake"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="gap-4">
                        <Button size="sm" type="submit">
                            Create Bet
                        </Button>
                        <Button size="sm" onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
