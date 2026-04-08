import Calendar from "./components/Calendars";
import Notes from "./components/Notes";



function App() {
  return (
    <div className="app">
      <div className="image-section">
        <img
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe"
          alt="calendar"
        />
      </div>

      <div className="content-section">
        <Calendar/>
        <Notes/>
      </div>
    </div>
  );
}

export default App;