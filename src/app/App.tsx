import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SOSEntryScreen } from "./components/SOSEntryScreen";
import { ContactTrustedScreen } from "./components/ContactTrustedScreen";
import { ProcessingScreen } from "./components/ProcessingScreen";
import { CallingScreen } from "./components/CallingScreen";

type Screen = "entry" | "contacts" | "processing" | "calling-police" | "calling-ambulance";

const screenOrder: Record<Screen, number> = {
  entry: 0,
  contacts: 1,
  processing: 2,
  "calling-police": 3,
  "calling-ambulance": 3,
};

export default function App() {
  const [screen, setScreen] = useState<Screen>("entry");
  const [prevScreen, setPrevScreen] = useState<Screen>("entry");

  const navigate = (next: Screen) => {
    setPrevScreen(screen);
    setScreen(next);
  };

  const direction =
    screenOrder[screen] > screenOrder[prevScreen] ? 1 : -1;

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
    }),
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0a0a0f 0%, #0d0d0d 50%, #0a0a0a 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "300px",
          height: "300px",
          background:
            screen.includes("calling")
              ? "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)"
              : screen === "processing"
              ? "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          transition: "background 1s ease",
        }}
      />

      {/* Phone frame */}
      <div
        className="relative overflow-hidden"
        style={{
          width: "390px",
          height: "844px",
          backgroundColor: "#0a0a0a",
          borderRadius: "44px",
          boxShadow:
            "0 0 0 1px #1e1e1e, 0 32px 80px rgba(0,0,0,0.8), 0 0 120px rgba(0,0,0,0.6)",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 z-30 flex items-center justify-center"
          style={{
            transform: "translateX(-50%)",
            width: "126px",
            height: "34px",
            backgroundColor: "#000",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <div
            className="rounded-full"
            style={{ width: "10px", height: "10px", backgroundColor: "#111" }}
          />
        </div>

        {/* Edge highlight */}
        <div
          className="absolute inset-0 pointer-events-none z-20 rounded-[44px]"
          style={{
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.4)",
          }}
        />

        {/* Screen content */}
        <div className="absolute inset-0 overflow-hidden rounded-[44px]">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={screen}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 340, damping: 34 },
                opacity: { duration: 0.25 },
              }}
              className="absolute inset-0"
              style={{ backgroundColor: "#0a0a0a" }}
            >
              {screen === "entry" && (
                <SOSEntryScreen onSOSPress={() => navigate("contacts")} />
              )}

              {screen === "contacts" && (
                <ContactTrustedScreen
                  onNotify={() => navigate("processing")}
                  onBack={() => navigate("entry")}
                />
              )}

              {screen === "processing" && (
                <ProcessingScreen
                  onCallPolice={() => navigate("calling-police")}
                  onCallAmbulance={() => navigate("calling-ambulance")}
                />
              )}

              {(screen === "calling-police" || screen === "calling-ambulance") && (
                <CallingScreen
                  type={screen === "calling-police" ? "police" : "ambulance"}
                  onEndCall={() => navigate("entry")}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Home indicator */}
        <div
          className="absolute bottom-2 left-1/2 z-30 rounded-full"
          style={{
            transform: "translateX(-50%)",
            width: "134px",
            height: "5px",
            backgroundColor: "rgba(255,255,255,0.18)",
          }}
        />
      </div>

      {/* Screen label */}
      <motion.div
        key={screen}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-8 left-1/2 flex items-center gap-2"
        style={{ transform: "translateX(-50%)" }}
      >
        {(["entry", "contacts", "processing"] as Screen[]).map((s) => (
          <div
            key={s}
            className="rounded-full transition-all duration-500"
            style={{
              width: screen === s ? "20px" : "6px",
              height: "6px",
              backgroundColor:
                screen === s
                  ? "#ef4444"
                  : screenOrder[screen] > screenOrder[s]
                  ? "#22c55e"
                  : "#2a2a2a",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
