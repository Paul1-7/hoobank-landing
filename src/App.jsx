import { Billing, Business, CreditCard, Feedback, Hero, Stats } from './components';

function App() {
  return (
    <div className="container mx-auto p-4 ">
      <header className="text-white">navbar</header>
      <div className=" w-full ">
        <Hero />
        <Stats />
        <Business />
        <Billing />
        <CreditCard />
        <Feedback />
      </div>
    </div>
  );
}

export default App;
