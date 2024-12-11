import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Form from "@/components/Form";

function Home() {
  return (
    <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
      <Header />

      <div className="grid grid-cols-8">
        <div className="col-span-2 ">
          <Aside />
        </div>
        <div className="col-span-full bg-green-100 md:col-span-6">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;