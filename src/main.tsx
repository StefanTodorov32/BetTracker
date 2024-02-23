import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme-provider.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <ClerkProvider
                    publishableKey={PUBLISHABLE_KEY}
                    appearance={{ baseTheme: dark, signIn: {baseTheme: dark}, signUp: {baseTheme: dark}}}
                >
                    <App />
                </ClerkProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
