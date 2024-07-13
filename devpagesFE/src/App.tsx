// import { returnedData } from './sampleData'
import axios from "axios";
import { useEffect, useState } from "react";
import { ReturnedDataType } from "./types.types";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 30000,
});

function App() {
  const [data, setData] = useState<ReturnedDataType | null>(null);
  const fetchData = async () => {
    console.log("HELLLOOO fetching data");
    try {
      const response = await instance.get("/user/jakezegil/dev_page");
      const data = await response.data;
      console.log("receieved", data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log("mount");
    // fetchData();
  }, []);
  console.log("bruhhh");
  console.log("hereee", data);
  return (
    <>
      <button onClick={fetchData}>Fetch data</button>
      {/* <Navbar data={data} />
      <AboutPage data={data} />
      <ProjectsPage data={data} />
      <ContactsPage data={data} /> */}
    </>
  );
}

export default App;
