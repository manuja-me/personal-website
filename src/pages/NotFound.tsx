import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background text-foreground px-6">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>
      <div className="text-center max-w-md p-8 rounded-xl border border-border/80 bg-card/80 backdrop-blur-md shadow-lg">
        <span className="text-primary font-mono text-sm font-semibold">$ error 404</span>
        <h1 className="my-3 text-6xl font-bold gradient-text">404</h1>
        <p className="mb-6 text-xl text-muted-foreground font-mono">Target route not found in system</p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3">
            <Home className="w-4 h-4 mr-2" />
            Return to Terminal
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
