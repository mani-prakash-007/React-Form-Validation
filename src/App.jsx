import { FormCard } from "./components/FormCard";

function App() {
  return (
    <>
      <div>
        <h1 className="underline text-2xl font-bold text-center ">
          Form Validation
        </h1>
        <div className="flex justify-center">
          <FormCard />
        </div>
      </div>
    </>
  );
}

export default App;
