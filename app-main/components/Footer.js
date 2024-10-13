// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 My Next.js App. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms</a>
          </div>
        </div>
      </footer>
    );
}
