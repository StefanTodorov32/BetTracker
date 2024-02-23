import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { useAuth } from "@clerk/clerk-react";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { getBets } from "./utils/supabaseRequests";

type Bet = {
    created_at: string;
    datetime: string | null;
    id: number;
    league: string | null;
    odds: number | null;
    prediction: string | null;
    sport: string | null;
    stake: number | null;
    team1: string | null;
    team2: string | null;
    user_id: string | null;
};

function App() {
    const { userId, getToken } = useAuth();
    const [bets, setBets] = useState<Bet[]>([]);
    useEffect(() => {
        const loadBets = async () => {
            const token = await getToken({
                template: "supabase",
            });
            if (!userId || !token) return;
            const betsData = await getBets({ userId, token });
            setBets(betsData || []);
        };
        loadBets();
    }, [userId, getToken]);
    console.log(bets)
    return (
        <div className="bg-background flex flex-col h-screen text-foreground">
            <Navbar />
            <div className="flex flex-col flex-1">
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
