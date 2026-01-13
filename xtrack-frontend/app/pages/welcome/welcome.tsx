import "./welcome.css";

export function Welcome() {
  return (
    <section className="landing h-screen flex justify-center items-center flex-col gap-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <header className="flex flex-col gap-3 text-center">
        <h1 className="text-6xl font-bold flex justify-center items-center text-gray-900 tracking-tight">
          eXtrack
        </h1>
        <p className="tagline text-xl text-gray-600 font-medium">
          The smart tracker for your expenses!
        </p>
      </header>
      <section className="flex gap-4">
        <button className="auth-btns font-bold py-3 px-8 rounded-lg cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Sign In
        </button>
        <button className="auth-btns font-bold py-3 px-8 rounded-lg cursor-pointer bg-gray-900 hover:bg-gray-800 text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Sign Up
        </button>
      </section>
    </section>
  );
}
