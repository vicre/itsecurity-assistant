// pages/index.js
import { FaFacebook, FaGoogle, FaMicrosoft, FaLinkedin, FaApple, FaAndroid } from 'react-icons/fa'; // FontAwesome icons
import { SiBitwarden } from 'react-icons/si'; // Simple Icons

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Social Media Icons</h1>
      <div className="flex space-x-6 text-6xl">
        <FaFacebook className="text-blue-600" />
        <FaGoogle className="text-red-500" />
        <FaMicrosoft className="text-blue-700" />
        <FaLinkedin className="text-blue-400" />
        <SiBitwarden className="text-gray-700" />
        <FaApple className="text-gray-800" />
        <FaAndroid className="text-green-500" />
      </div>
    </div>
  );
}
