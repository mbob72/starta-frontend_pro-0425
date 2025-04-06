import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemeToggleButton() {
    const { toggleTheme } = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Сменить тему</button>;
}

function ThemeDisplay() {
    const { theme } = useContext(ThemeContext);
    return <p>Текущая тема: {theme}</p>;
}

export default function ThemeComponent() {
    return (
        <ThemeProvider>
            <div style={{ padding: "1rem" }}>
                <ThemeToggleButton />
                <ThemeDisplay />
            </div>
        </ThemeProvider>
    );
}
