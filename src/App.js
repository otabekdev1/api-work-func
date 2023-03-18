import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
function App() {
  const url = "https://course-api.com/react-tours-project";
  const [loading, setLoading] = useState(true);

  const [tours, setTours] = useState([]);
  const RemoveTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>to tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} RemoveTour={RemoveTour} />
      </main>
    </>
  );
}

export default App;
