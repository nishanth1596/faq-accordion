import FaqCard from "./Components/FaqCard";

function App() {
  return (
    <div className="flex h-dvh flex-col items-center">
      <header>
        <h1 className="sr-only">Faq Accordian</h1>
      </header>
      <main>
        <section>
          <FaqCard />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
