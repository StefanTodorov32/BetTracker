import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import Profile from "./pages/Profile";
function App() {
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
