import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { View } from "@/views/View";
import { Home } from "@/views/Home";
import { Config } from "@/views/Config";
import { App } from "konsta/react";
import Weather from "./views/Weather";

export default function Root() {
  const [theme, setTheme] = useState<"ios" | "material">("ios");

  useLayoutEffect(() => {
    if (window.location.href.includes("safe-areas")) {
      const html = document.documentElement;

      if (html) {
        html.style.setProperty(
          "--k-safe-area-top",
          theme === "ios" ? "44px" : "24px"
        );

        html.style.setProperty("--k-safe-area-bottom", "34px");
      }
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <App safeAreas theme={theme}>
        <Routes>
          <Route path="/" element={<Home theme={theme} onTheme={setTheme} />} />
          <Route path="/view" element={<Weather 
                        day="Monday" 
                        date="May 20" 
                        weatherCondition="sunny" 
                        temperature={{ high: 32, low: 20 }}
                        location={"San Francisco"} 
                    />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}
