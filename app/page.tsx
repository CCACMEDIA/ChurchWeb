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

const serviceSchedule = [
  {
    title: 'Sunday Worship Service',
    time: '9:30 AM - 11:00 AM',
    note: 'A Christ-centered gathering for worship, prayer, and the Word.',
  },
  {
    title: 'Youth Fellowship',
    time: '3:30 PM - 5:00 PM',
    note: 'A space for young people to grow in faith and community.',
  },
];

const missionPillars = [
  {
    title: 'Reach Out',
    description:
      'Share the transforming gospel of Jesus Christ with compassion, courage, and consistency.',
  },
  {
    title: 'Reproduce',
    description:
      'Form obedient disciples who are equipped to disciple others in everyday life.',
  },
  {
    title: 'Rejoice',
    description:
      'Celebrate as one church family through worship, truth, prayer, and fellowship.',
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/CCACCANDUMAN',
    className:
      'border border-blue-200 bg-blue-50 text-blue-800 hover:border-blue-300 hover:bg-blue-100',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/canduman_alliance_church/',
    className:
      'border border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800 hover:border-fuchsia-300 hover:bg-fuchsia-100',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@candumanalliancechurch',
    className:
      'border border-slate-200 bg-slate-100 text-slate-900 hover:border-slate-300 hover:bg-slate-200',
  },
];

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-PH', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

function isUpcoming(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  return date.getTime() >= new Date().setHours(0, 0, 0, 0);
}

export default async function Home() {
  const [sermons, events] = await Promise.all([
    client.fetch<Sermon[]>(`
      *[_type == "sermon"] | order(datePreached desc) {
        _id,
        title,
        speaker,
        datePreached,
        youtubeUrl
      }
    `),
    client.fetch<ChurchEvent[]>(`
      *[_type == "event"] | order(eventDate asc) {
        _id,
        title,
        eventDate,
        time,
        location,
        description
      }
    `),
  ]);

  const upcomingEvents = events.filter((event) => isUpcoming(event.eventDate));
  const displayedEvents = upcomingEvents.length > 0 ? upcomingEvents : events;
  const latestSermons = sermons.slice(0, 6);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-300">
              Canduman Community Alliance Church
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Worship. Discipleship. Community.
            </p>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            <a href="#about" className="transition hover:text-white">
              Vision & Mission
            </a>
            <a href="#sermons" className="transition hover:text-white">
              Sermons
            </a>
            <a href="#events" className="transition hover:text-white">
              Events
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
          >
            Plan Your Visit
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=modern%20church%20worship%20interior%20warm%20natural%20light%20people%20gathering%20peaceful%20cinematic%20wide%20angle%20professional%20architectural%20photography&image_size=landscape_16_9')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_transparent_32%),linear-gradient(180deg,rgba(2,6,23,0.32),rgba(2,6,23,0.92))]" />

        <div
          id="main-content"
          className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24"
        >
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
              Welcome Home
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              A more meaningful church experience for every generation.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Canduman Community Alliance Church is a Christ-centered community
              where people worship sincerely, grow deeply in the Word, and live
              on mission together.
            </p>

            <blockquote className="mt-8 max-w-2xl border-l-2 border-blue-300 pl-5 text-sm italic leading-7 text-slate-300 sm:text-base">
              &quot;For I know the plans I have for you,&quot; declares the Lord,
              &quot;plans to prosper you and not to harm you, plans to give you hope and
              a future.&quot; Jeremiah 29:11
            </blockquote>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#sermons"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Explore Latest Sermons
              </a>
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Upcoming Events
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">
                  {sermons.length > 0 ? `${sermons.length}+` : 'Fresh'}
                </p>
                <p className="mt-1 text-sm text-slate-300">Sermons available online</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">
                  {displayedEvents.length > 0 ? displayedEvents.length : 'New'}
                </p>
                <p className="mt-1 text-sm text-slate-300">Events and gatherings ahead</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Every Sunday</p>
                <p className="mt-1 text-sm text-slate-300">Worship, prayer, and fellowship</p>
              </div>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-8">
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
                  This Week
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Join us in person
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Experience a welcoming church family in Canduman with worship
                  services, youth fellowship, biblical teaching, and prayer.
                </p>

                <div className="mt-8 space-y-4">
                  {serviceSchedule.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-blue-200">{item.time}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                    Location
                  </p>
                  <p className="mt-2 text-base font-medium text-white">
                    Purok Sambag, Tawason, Mandaue City
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Contact us at 09157259513 or 09234685865 for directions,
                    prayer requests, or ministry inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-slate-900 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
              Visit Us
            </p>
            <p className="mt-3 text-lg font-semibold">A welcoming local church</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              We gather in Canduman to worship, grow in faith, and serve our
              community together.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
              Sunday Schedule
            </p>
            <p className="mt-3 text-lg font-semibold">9:30 AM main service</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Join the congregation in worship and come back for youth fellowship
              at 3:30 PM.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
              Stay Connected
            </p>
            <p className="mt-3 text-lg font-semibold">Online and onsite ministry</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Watch sermons, follow church updates, and connect with our church
              family during the week.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-20 text-slate-900 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              Vision & Mission
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Building a Christ-centered church with spiritual depth and local impact.
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Our church exists to help people know Christ, grow in Christ, and
              share Christ. We value worship that honors God, discipleship that
              transforms lives, and ministry that reaches people with grace and truth.
            </p>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Our Vision
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                Is a Christ-centered church that passionately worships, fervently
                prays and aggressively reaches out to the peoples and intentionally
                disciples them to Christ-likeness for the glory of God.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                Our Mission
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                CCAC exists to fulfill three key callings that shape our ministries,
                relationships, and witness in the community.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {missionPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                    {pillar.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sermons" className="bg-white py-20 text-slate-900 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
                Sermons
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Recent Sunday messages and biblical teaching.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Revisit recent messages, listen again, and share sermons with
                friends and family throughout the week.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Ask About Ministries
            </a>
          </div>

          {latestSermons.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <p className="text-lg font-medium text-slate-900">No sermons available yet.</p>
              <p className="mt-2 text-sm text-slate-600">
                Add sermon entries in Sanity Studio to populate this section.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {latestSermons.map((sermon) => (
                <article
                  key={sermon._id}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                      Sermon
                    </span>
                    <span className="text-sm text-slate-500">
                      {formatDate(sermon.datePreached)}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                    {sermon.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Speaker: <span className="font-semibold text-slate-800">{sermon.speaker}</span>
                  </p>

                  <div className="mt-8 flex flex-1 items-end">
                    {sermon.youtubeUrl ? (
                      <a
                        href={sermon.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                      >
                        Watch Sermon
                      </a>
                    ) : (
                      <div className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-center text-sm font-medium text-slate-500">
                        Video link coming soon
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="events" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Upcoming Events
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Gather, grow, and serve together.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Stay informed about church gatherings, ministries, and special events
              happening in the life of our church.
            </p>
          </div>

          {displayedEvents.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-lg font-medium text-white">No upcoming events scheduled yet.</p>
              <p className="mt-2 text-sm text-slate-400">
                Add event entries in Sanity Studio and they will appear here automatically.
              </p>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {displayedEvents.map((event) => (
                <article
                  key={event._id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                        {isUpcoming(event.eventDate) ? 'Coming Up' : 'Church Event'}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{event.title}</h3>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-200">
                      <p>{formatDate(event.eventDate)}</p>
                      {event.time ? <p className="mt-1 text-slate-400">{event.time}</p> : null}
                    </div>
                  </div>

                  {event.description ? (
                    <p className="mt-5 text-sm leading-7 text-slate-300">{event.description}</p>
                  ) : (
                    <p className="mt-5 text-sm leading-7 text-slate-400">
                      More details about this event will be shared soon.
                    </p>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {event.location ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-200">
                        {event.location}
                      </span>
                    ) : null}
                    <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-200">
                      Community Fellowship
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="bg-white py-20 text-slate-900 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-700">
              Connect With Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              We would love to welcome you.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              If you have questions, prayer requests, or would like to visit the
              church, reach out through our contact details or follow our media channels.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Address
                </p>
                <p className="mt-3 text-base font-medium text-slate-900">
                  Purok Sambag, Tawason, Mandaue City
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Phone
                </p>
                <p className="mt-3 text-base font-medium text-slate-900">
                  09157259513 / 09234685865
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
                  Email
                </p>
                <a
                  href="mailto:candumanalliancechurch@gmail.com"
                  className="mt-3 inline-block text-base font-medium text-slate-900 transition hover:text-blue-700"
                >
                  candumanalliancechurch@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
              Online Presence
            </p>
            <h3 className="mt-4 text-2xl font-semibold">Stay connected throughout the week.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Follow our official channels for sermon updates, church announcements,
              devotional content, and ministry highlights.
            </p>

            <div className="mt-8 grid gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold transition ${link.className}`}
                >
                  <span>{link.label}</span>
                  <span>Visit</span>
                </a>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                Next Step
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Whether you are new to church, returning to faith, or looking for
                a spiritual family, there is a place for you here.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-4 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          <p>
            Copyright {new Date().getFullYear()} Canduman Community Alliance Church.
            All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
