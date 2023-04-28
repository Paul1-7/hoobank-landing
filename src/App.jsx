import Business from './components/Business';
import Hero from './components/Hero';
import Stats from './components/Stats';

function App() {
  return (
    <div className="container mx-auto p-4 ">
      <header className="text-white">navbar</header>
      <div className=" w-full ">
        <Hero />
        <Stats />
        <Business />
      </div>
    </div>
  );
}

export default App;
