import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import siteContent from "@/data/siteContent";

const { notFound } = siteContent;

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dark pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-500/8 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center px-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[8rem] md:text-[10rem] font-extrabold leading-none gradient-text font-display">
            {notFound.title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xl md:text-2xl text-white/60 font-medium max-w-md mx-auto"
        >
          {notFound.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="rounded-full px-10 h-14 text-lg font-bold gradient-bg-white text-foreground border-0 shadow-2xl shadow-primary/25 hover:bg-white/90 hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300 gap-2.5"
            asChild
          >
            <a href="/">
              <ArrowLeft className="w-5 h-5" />
              {notFound.buttonLabel}
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
