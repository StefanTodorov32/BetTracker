import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";

type Bet = {
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
  const { register, handleSubmit } = useForm<Bet>();

  const onSubmit = (data: Bet) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-lg border-[0px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className="flex flex-col gap-1">
          <CardTitle className="text-lg">
            Create Football Bet
          </CardTitle>
          <CardDescription>
            Enter the team names, predictions, odds, status, date,
            league, and stake.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="team1">Team 1</Label>
              <Input
                id="team1"
                placeholder="Team 1"
                {...register("team1")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="prediction">Prediction</Label>
              <Input
                id="prediction"
                placeholder="Prediction"
                {...register("prediction")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="team2">Team 2</Label>
              <Input
                id="team2"
                placeholder="Team 2"
                {...register("team2")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="odds">Odds</Label>
            <Input
              id="odds"
              placeholder="Enter the odds"
              {...register("odds")}
            />
            <Label htmlFor="status">Status</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select Status</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup defaultValue="pending">
                  <DropdownMenuRadioItem value="pending">
                    Pending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="ongoing">
                    Ongoing
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="completed">
                    Completed
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Label htmlFor="datetime">Date and Time</Label>
            <Input
              id="datetime"
              type="datetime-local"
              {...register("datetime", {
                valueAsDate: true,
              })}
            />
            <Label htmlFor="league">League</Label>
            <Input
              id="league"
              placeholder="Enter the league or tournament name"
              {...register("league")}
            />
            <Label htmlFor="sport">Sport</Label>
            <Select {...register("sport")}>
              <SelectTrigger>
                <SelectValue placeholder="Select Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="football">
                  Football
                </SelectItem>
                <SelectItem value="basketball">
                  Basketball
                </SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
              </SelectContent>
            </Select>
            <Label htmlFor="stake">Stake</Label>
            <Input
              id="stake"
              placeholder="Enter the stake amount"
              {...register("stake")}
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
    </Card>
  );
}
