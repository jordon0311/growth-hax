import React from "react";
import "./App.css";
import { AgentEvent, listenToStream, stopListening } from "./lib/events";

type Status = "working" | "success" | "fail" | "idle";

function App() {
  // You can change the URL to any website for the objective.
  const [url] = React.useState("https://www.duckduckgo.com");

  const [objective] = React.useState(
    "where to find food in",
  );
  const [location, setLocation] = React.useState(
    "West Village"
  )
  const [status, setStatus] = React.useState<Status>("idle");
  const [events, setEvents] = React.useState<string[]>([]);
  const [restaurants, setRestaurants] = React.useState<string[]>([]);

  const handleEvent = (input: AgentEvent) => {
    setEvents((prev: string[]) => {
      if (input?.["objectiveComplete"]) {
        if (input?.objectiveComplete?.restaurants) {
          setRestaurants(input?.objectiveComplete?.restaurants);
        }
      }
      if (input?.progressAssessment) {
        return [...prev, `Progress: ${input.description}`];
      }
      return prev;
    });

    if (input?.["objectiveComplete"]) {
      setStatus("success");
      setEvents((prev: string[]) => [
        ...prev,
        `Success: ${input?.objectiveComplete?.result}`,
      ]);
    } else if (input?.["objectiveFailed"]) {
      setStatus("fail");
      setEvents((prev: string[]) => [
        ...prev,
        `Fail: ${input?.objectiveFailed?.result}`,
      ]);
    }
  };

  const start = () => {
    if (status === "working") {
      stopListening();
      setStatus("idle");
      return;
    }
    setStatus("working");
    setRestaurants([]);
    setEvents([]);
    listenToStream(url, objective, location, handleEvent);
  };

  const newest = events[events.length - 1];

  return (
    <div className="items-center min-h-screen justify-center space-y-4 p-8">
      <h1 className="text-4xl">This is a sample application made with <a className="border-b" href="https://nolita.ai">Nolita</a>.</h1>
      <p>You can start your project by editing the <code>app/src/App.tsx</code> file.</p>
      <p className="max-w-prose">To configure your agent logic, see the <code>agent</code> folder. You can also extend agent capabilities with personal information and custom types in the <code>extensions</code> folder, or additional back-end logic in the <code>server</code> folder.</p>
      <p className="max-w-prose">
        This application is a simple example of how you can use Nolita to build
        a web application that interacts with an agent. The agent in this
        example is a simple web navigator that finds restaurants in a given
        location. Restaurants are provided as a custom typed response from the
        agent in <code>extensions/schema.ts</code>.
      </p>
      <p className="max-w-prose">
        You can modify the objective, query and target site in <code>App.tsx</code> and inspect
        the events in your browser console.
      </p>
      <div className="flex flex-col space-y-4 max-w-screen-md border p-4">
      <p>Enter a location where you want to find food.</p>
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="bg-gray-200 p-1" onClick={() => start()}>
          {status !== "working" ? "Start" : "Stop"}
        </button>
      </div>
      <div className="flex items-center">
          <Icon status={status} />
          <p>{newest || "No events yet."}</p>
        </div>
        {restaurants.length > 0 && <p>Restaurants: {restaurants.join(", ")}</p>}
    </div>
  );
}

const Icon = ({
  status,
}: {
  status: "working" | "success" | "fail" | "idle";
}) => {
  if (status === "working") {
    return <div className="mr-2 blinker"></div>;
  } else if (status === "success") {
    return <div className="mr-2">✅</div>;
  } else if (status === "fail") {
    return <div className="mr-2">❌</div>;
  }
  return <div className="mr-2">❔</div>;
};

export default App;
