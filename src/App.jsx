function App() {
  return (
    <div className="w-screen h-screen flex flex-col" id="container">
      <div className="flex" id="headingContaine">
        <h1
          className="font-bold text-6xl break-all max-w-[200px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-400"
          id="headingText"
        >
          Hi ,im
          <br />
          skanda
        </h1>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
