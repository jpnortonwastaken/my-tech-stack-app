import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Plus, Minus } from "lucide-react";
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* Add this draggable title bar */}
      <div className="fixed top-0 left-0 w-full h-9 draggable-area" />

      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center space-y-4">
          <Button variant="ghost" onClick={toggleTheme}>
            {theme !== "light" ? <Moon /> : <Sun />}
            {theme === "light" ? "Light" : "Dark"}
          </Button>

          <Card className="min-w-[350px]">
            <CardHeader className="text-left">
              <CardTitle>Counter</CardTitle>
              <CardDescription>A simple counter test app</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex-col items-center justify-center pt-2 space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    onClick={() => setCount(count - 1)}
                    variant="outline_round"
                    size="icon"
                  >
                    <Minus />
                  </Button>
                  <h1 className="text-center">Count: {count}</h1>
                  <Button
                    onClick={() => setCount(count + 1)}
                    variant="outline_round"
                    size="icon"
                  >
                    <Plus />
                  </Button>
                </div>
                <div className="flex justify-center">
                  <Button onClick={() => setCount(0)} variant="link">
                    Reset
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
