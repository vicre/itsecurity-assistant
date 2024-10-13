// pages/index.js
import React from 'react';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

const nodes = [
  {
    id: 'google',
    type: 'default',
    position: { x: 500, y: 20 }, // Adjusted position to move it above
    data: {
      label: (
        <div className="flex flex-col items-center">
          <FaGoogle className="text-red-500 text-4xl" />
          <p>Google (Gmail)</p>
          <p>victor.reipur@gmail.com</p>
        </div>
      ),
    },
  },
  {
    id: 'linkedin',
    type: 'default',
    position: { x: 300, y: 200 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <FaLinkedin className="text-blue-600 text-4xl" />
          <p>LinkedIn</p>
          <p>Recovery Email: Gmail</p>
        </div>
      ),
    },
  },
  {
    id: 'facebook',
    type: 'default',
    position: { x: 700, y: 200 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <FaFacebook className="text-blue-600 text-4xl" />
          <p>Facebook</p>
          <p>Recovery Email: Gmail</p>
        </div>
      ),
    },
  },
];

const edges = [
  { id: 'e-linkedin-google', source: 'linkedin', target: 'google', animated: false },
  { id: 'e-facebook-google', source: 'facebook', target: 'google', animated: false },
];

const FlowDiagram = () => {
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Email Recovery Diagram</h1>
      <FlowDiagram />
    </main>
  );
}