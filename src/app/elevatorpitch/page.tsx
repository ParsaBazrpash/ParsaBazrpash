// pages/elevator-pitch.js
import { Navbar } from '../components/Navbar';

export default function ElevatorPitch() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-32 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">My Elevator Pitch</h1>
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-gray-800 rounded-lg overflow-hidden p-4">
            <video 
              className="w-full aspect-[9/16] mx-auto rounded-lg"
              controls
              autoPlay={false}
              playsInline
            >
              <source src="/images/Elevatorpitch.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
}
