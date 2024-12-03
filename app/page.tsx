import { Car } from "./types/car";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import CarsTable from "./components/CarsTable";

const Page = async () => {
  const fetchCars = async (): Promise<Car[]> => {
    const response = await fetch(
      "https://data.gov.il/api/3/action/datastore_search",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resource_id: "053cea08-09bc-40ec-8f7a-156f0677aff3",
          limit: 1000,
        }),
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.result.records;
  };

  const cars = await fetchCars();

  return (
    <main>
      <Navbar />
      <PageHeader />
      <CarsTable cars={cars} />
    </main>
  );
};

export default Page;
