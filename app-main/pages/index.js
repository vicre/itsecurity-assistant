// pages/index.js
export default function Home() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen py-16 bg-gradient-to-b from-gray-100 to-gray-300">
        <h1 className="text-6xl font-bold text-gray-900">
          Hello, World!
        </h1>
        <p className="mt-6 text-xl text-gray-700">
          Tailwind CSS is working perfectly in this Next.js app.
        </p>
        <button className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </main>
    );
  }
  