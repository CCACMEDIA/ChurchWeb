import { client } from '@/sanity/lib/client';

export const revalidate = 0;

interface Sermon {
  _id: string;
  title: string;
  speaker: string;
  datePreached: string;
  youtubeUrl?: string;
}

interface ChurchEvent {
  _id: string;
  title: string;
  eventDate: string;
  time?: string;
  location?: string;
  description?: string;
}

export default async function Home() {
  // Fetch sermons
  const sermons: Sermon[] = await client.fetch(`
    *[_type == "sermon"] | order(datePreached desc) {
      _id,
      title,
      speaker,
      datePreached,
      youtubeUrl
    }
  `);

  // Fetch upcoming events
  const events: ChurchEvent[] = await client.fetch(`
    *[_type == "event"] | order(eventDate asc) {
      _id,
      title,
      eventDate,
      time,
      location,
      description
    }
  `);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="font-bold text-xl text-blue-700 tracking-wide">
          Canduman Community Alliance Church
        </div>
        <div className="space-x-6 font-medium text-sm text-slate-600">
          <a href="#about" className="hover:text-blue-700 transition">Our Vision & Mission</a>
          <a href="#sermons" className="hover:text-blue-700 transition">Sermons</a>
          <a href="#events" className="hover:text-blue-700 transition">Events</a>
          <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-32 px-8 text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=1600')" }}></div>
        <div className="relative z-10 max-w-3xl">
          <span className="text-blue-300 font-semibold tracking-wider uppercase text-xs sm:text-sm bg-blue-950/40 px-3 py-1 rounded-full">
            Welcome to Canduman Community Alliance Church
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-6 leading-tight">
            Discover the Purpose of Jesus for Your Life
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mb-8 max-w-2xl mx-auto italic">
            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future." — Jeremiah 29:11
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#sermons" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-slate-100 transition inline-block">
              Watch Latest Sermons
            </a>
            <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-800 transition inline-block border border-blue-600">
              Join Us This Sunday
            </a>
          </div>
        </div>
      </section>

      {/* Quick Schedule & Location Banner */}
      <section className="bg-white py-12 px-8 shadow-inner border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="font-bold text-lg text-slate-800 mb-2">📍 Visit Us</h3>
            <p className="text-slate-600 text-sm">Purok Sambag, Tawason, Mandaue City</p>
          </div>
          <div className="p-4 border-y md:border-y-0 md:border-x border-slate-200">
            <h3 className="font-bold text-lg text-slate-800 mb-2">⏰ Sunday Schedule</h3>
            <p className="text-slate-600 text-sm font-semibold">Adult Service: 9:30 AM - 11:00 AM</p>
            <p className="text-slate-500 text-sm">Youth Fellowship: 3:30 PM - 5:00 PM</p>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg text-slate-800 mb-2">📞 Get in Touch</h3>
            <p className="text-slate-600 text-sm">09157259513 / 09234685865</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="about" className="py-20 px-8 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 relative inline-block pb-2">
              Our Vision
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-blue-600 rounded"></span>
            </h2>
            <p className="text-xl text-slate-700 mt-6 leading-relaxed max-w-3xl mx-auto font-medium italic">
              "Is a Christ-centered church that passionately worships, fervently prays and aggressively reaches out to the peoples and intentionally disciples them to Christ-likeness for the Glory of God."
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 relative inline-block pb-2">
              Our Mission
              <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-blue-600 rounded"></span>
            </h2>
            <p className="text-slate-600 mt-2 mb-8">CCAC exists to fulfill three key Callings:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-4">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="text-2xl mb-2">📢</div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Reach Out</h4>
                <p className="text-slate-600 text-sm">To actively reach out to people with the transforming Gospel of Jesus Christ.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="text-2xl mb-2">🌱</div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Reproduce</h4>
                <p className="text-slate-600 text-sm">To reproduce obedient disciples who will dynamically go out and make more disciples.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/60 shadow-sm">
                <div className="text-2xl mb-2">🙌</div>
                <h4 className="font-bold text-lg text-blue-900 mb-2">Rejoice</h4>
                <p className="text-slate-600 text-sm">To rejoice together as one family in the grounding truth of the Word and dynamic Worship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Sermons Section */}
      <section id="sermons" className="py-20 px-8 max-w-6xl mx-auto border-b border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Recent Sunday Sermons</h2>
          <p className="text-slate-600 mt-2">Listen to the word of God shared by our pastors</p>
        </div>

        {sermons.length === 0 ? (
          <p className="text-center text-slate-500 py-8">No sermons found. Add some in the Sanity Studio!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <div key={sermon._id} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 flex flex-col justify-between p-6">
                <div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase">
                    {sermon.datePreached}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3 mb-1">
                    {sermon.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    Speaker: <span className="font-medium text-slate-700">{sermon.speaker}</span>
                  </p>
                </div>
                
                {sermon.youtubeUrl && (
                  <a 
                    href={sermon.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition mt-4"
                  >
                    ▶ Watch Video
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Dynamic Upcoming Events Section */}
      <section id="events" className="py-20 bg-slate-100 px-8 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Church Calendar & Events</h2>
            <p className="text-slate-600 mt-2">Join us in fellowship and community events</p>
          </div>

          {events.length === 0 ? (
            <p className="text-center text-slate-500 py-8">No upcoming events scheduled right now.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event) => (
                <div key={event._id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <span className="text-sm font-bold text-blue-700">🗓️ {event.eventDate}</span>
                      {event.time && <span className="text-sm text-slate-500">🕒 {event.time}</span>}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                    {event.description && <p className="text-slate-600 text-sm mb-4 leading-relaxed">{event.description}</p>}
                  </div>
                  {event.location && (
                    <div className="text-xs font-semibold text-slate-500 mt-2 pt-2 border-t border-slate-50 flex items-center gap-1">
                      📍 <span>{event.location}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact & Socials Footer Section */}
      <section id="contact" className="py-16 bg-slate-900 text-white px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Connect With Us</h2>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Have questions, prayer requests, or want to know more about our fellowships? Reach out to us through our direct contact lines or social handles.
            </p>
            <div className="space-y-3 text-slate-300 text-sm">
              <p>📍 <strong>Address:</strong> Purok Sambag, Tawason, Mandaue City</p>
              <p>📞 <strong>Phone:</strong> 09157259513 / 09234685865</p>
              <p>✉️ <strong>Email:</strong> candumanalliancechurch@gmail.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Follow Our Media Channels</h2>
            <p className="text-slate-400 text-sm mb-6">
              Stay updated with online streams, daily reflections, and media highlights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.facebook.com/CCACCANDUMAN" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold text-center text-sm py-2.5 px-4 rounded-lg transition"
              >
                Facebook Page
              </a>
              <a 
                href="https://www.instagram.com/canduman_alliance_church/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-yellow-500 to-purple-600 hover:opacity-90 text-white font-bold text-center text-sm py-2.5 px-4 rounded-lg transition"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@candumanalliancechurch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black hover:bg-slate-800 text-white font-bold text-center text-sm py-2.5 px-4 rounded-lg transition border border-slate-700"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 mt-16 pt-8 border-t border-slate-800">
          © {new Date().getFullYear()} Canduman Community Alliance Church (CCAC). All Rights Reserved.
        </div>
      </section>
    </main>
  );
}