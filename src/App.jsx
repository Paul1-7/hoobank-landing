import { Billing, Business, CTA, Clients, CreditCard, Feedback, Hero, Stats } from './components';

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
        <Clients />
        <CTA />
      </div>
    </div>
  );
}

export default App;
