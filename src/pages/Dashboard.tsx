import { Button } from "@/components/ui/button";

export const Dashboard: React.FC = () => {
    return (
        <div className="flex justify-center flex-1">
            <div className="mt-8 flex flex-col">
                <h1 className="text-2xl font-bold">
                    Please add a bankroll and start tracking your bets!
                </h1>
                <Button variant={"destructive"} className="mt-8">Add bankroll</Button>
            </div>
        </div>
    );
};
