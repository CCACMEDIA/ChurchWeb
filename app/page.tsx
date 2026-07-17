import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="font-bold text-xl text-blue-700 tracking-wide">
          ⛪ CCAC MEDIA
        </div>
        <div className="space-x-6 font-medium text-sm text-slate-600">
          <a href="#about" className="hover:text-blue-700 transition">Our Beliefs</a>
          <a href="#sermons" className="hover:text-blue-700 transition">Sermons</a>
          <a href="#events" className="hover:text-blue-700 transition">Events</a>
          <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 px-8 text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600')" }}></div>
        
        <div className="relative z-10 max-w-3xl">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-sm">Welcome to Your Spiritual Home</span>
          <h1 className="text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Discover the Purpose of Jesus for Your Life
          </h1>
          <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto">
            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." — Jeremiah 29:11
          </p>
          <div className="space-x-4">
            <a href="#about" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-slate-100 transition inline-block">
              Learn Our Beliefs
            </a>
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-800 transition inline-block border border-blue-600">
              Join Us This Sunday
            </a>
          </div>
        </div>
      </section>

      {/* Service Times & Location Quick Banner */}
      <section className="bg-white py-12 px-8 shadow-inner border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="font-bold text-lg text-slate-800 mb-2">📍 Visit Us</h3>
            <p className="text-slate-600">Enter Your Church Address Here</p>
          </div>
          <div className="p-4 border-y md:border-y-0 md:border-x border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-2">⏰ Service Times</h3>
            <p className="text-slate-600">Sundays at 10:00 AM</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg text-slate-800 mb-2">📞 Prayer Request</h3>
            <p className="text-slate-600">We are here to pray with you.</p>
          </div>
        </div>
      </section>
    </main>
  );
}