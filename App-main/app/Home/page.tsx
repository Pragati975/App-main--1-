"use client"

import Link from "next/link";


export default function Home() {

  return (
    <div className="w-full h-full flex bg-emerald-950


 text-white">
      {/* LEFT SIDEBAR */}
<aside
  className="w-72 bg-[linear-gradient(180deg,#001912_0%,#003220_40%,#002417_75%,#00120b_100%)]
             border-r border-[#173927] p-4 flex flex-col gap-8 overflow-y-auto">

  <h2 className="text-xl font-semibold tracking-wide text-[#aae1e8]">
    DATA SOURCES
  </h2>

  {/* CARD 1 */}
  <div className="relative rounded-xl group">
    {/* Glow overlay */}
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-30 blur-[18px]
                 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(0,255,180,0.15),transparent)]
                 mix-blend-screen"
    />
    
    {/* Main card */}
    <div className="relative z-10 bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300">

      <p className="text-sm opacity-60">Surveillance Feed</p>

      <div className="mt-2 w-full h-full bg-black/30 flex items-center justify-center
                      rounded-lg border border-[#1E2A3E] text-xs opacity-50
                      shadow-[inset_0_6px_12px_rgba(0,0,0,0.65)]">
        No Signal
      </div>
    </div>

    {/* Left glow strip */}
    <div
      className="absolute left-0 top-5 bottom-5 w-1.5 rounded-r-lg blur-sm pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,255,160,0.12) 0%, rgba(0,255,160,0.05) 70%, transparent)",
      }}
    />
  </div>

  {/* CARD 2 */}
  <div className="relative rounded-xl group">
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-30 blur-[18px]
                 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(0,255,180,0.15),transparent)]
                 mix-blend-screen"
    />

    <div className="relative z-10 bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-4

                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300">

      <p className="text-sm opacity-60">Drone Link</p>

      <div className="mt-2 w-full h-full bg-black/30 flex items-center justify-center
                      rounded-lg border border-[#1E2A3E] text-xs opacity-50
                      shadow-[inset_0_6px_12px_rgba(0,0,0,0.65)]">
        Link Active
      </div>
    </div>

    <div
      className="absolute left-0 top-5 bottom-5 w-1.5 rounded-r-lg blur-sm pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,255,160,0.12) 0%, rgba(0,255,160,0.05) 70%, transparent)",
      }}
    />
  </div>

  {/* CARD 3 */}
  <div className="relative rounded-xl group">
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-30 blur-[18px]
                 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(0,255,180,0.15),transparent)]
                 mix-blend-screen"
    />

    <div className="relative z-10 bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300">

      <p className="text-sm opacity-60">Drone Link</p>

      <div className="mt-2 w-full h-full bg-black/30 flex items-center justify-center
                      rounded-lg border border-[#1E2A3E] text-xs opacity-50
                      shadow-[inset_0_6px_12px_rgba(0,0,0,0.65)]">
        Link Active
      </div>
    </div>

    <div
      className="absolute left-0 top-5 bottom-5 w-1.5 rounded-r-lg blur-sm pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,255,160,0.12) 0%, rgba(0,255,160,0.05) 70%, transparent)",
      }}
    />
  </div>

  {/* CARD 4 */}
  <div className="relative rounded-xl group">
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-30 blur-[18px]
                 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(0,255,180,0.15),transparent)]
                 mix-blend-screen"
    />

    <div className="relative z-10 bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300">

      <p className="text-sm opacity-60">Drone Link</p>

      <div className="mt-2 w-full h-full bg-black/30 flex items-center justify-center
                      rounded-lg border border-[#1E2A3E] text-xs opacity-50
                      shadow-[inset_0_6px_12px_rgba(0,0,0,0.65)]">
        Link Active
      </div>
    </div>

    <div
      className="absolute left-0 top-5 bottom-5 w-1.5 rounded-r-lg blur-sm pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,255,160,0.12) 0%, rgba(0,255,160,0.05) 70%, transparent)",
      }}
    />
  </div>

  {/* CARD 5 */}
  <div className="relative rounded-xl group">
    <span
      className="pointer-events-none absolute inset-0 rounded-xl opacity-30 blur-[18px]
                 bg-[radial-gradient(50%_60%_at_20%_20%,rgba(0,255,180,0.15),transparent)]
                 mix-blend-screen"
    />

    <div className="relative z-10 bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300">

      <p className="text-sm opacity-60">Drone Link</p>

      <div className="mt-2 w-full h-full bg-black/30 flex items-center justify-center
                      rounded-lg border border-[#1E2A3E] text-xs opacity-50
                      shadow-[inset_0_6px_12px_rgba(0,0,0,0.65)]">
        Link Active
      </div>
    </div>

    <div
      className="absolute left-0 top-5 bottom-5 w-1.5 rounded-r-lg blur-sm pointer-events-none"
      style={{
        background:
          "linear-gradient(180deg, rgba(0,255,160,0.12) 0%, rgba(0,255,160,0.05) 70%, transparent)",
      }}
    />
  </div>
</aside>



      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto custom-scroll">
        <div className="sticky top-0 bg-[#1bb35800]


border border-lime-400/100
shadow-[0_0_25px_#0f2c2044,inset_0_0_15px_#09161055] bg-emerald-950
 z-30 p-4 


 z-30 p-2">
          <h1 className="text-3xl text-[#8BF5CA] font-extrabold tracking-wide

 text-[#A8F2D4] tracking-wide mb-6">MISSION CONTROL FEED</h1>
        </div>

        <div className="space-y-28 p-7">

          {/* IMAGE AGENT */}
          <div className="flex items-start gap-8 justify-center">

            {/* ICON */}
            <div className="w-30 h-30 rounded-2xl flex items-center justify-center self-center 
     bg-gray-950 p-6 rounded-lg border border-green-500
      shadow-[0_0_8px_2px_rgba(163,255,79,0.4)] backdrop-blur-md">
              <span className="text-xs tracking-wide text-lime-300 font-semibold">IMAGE</span>
            </div>

            {/* BOX */}
            <div className="flex-1 relative bg-green-900

 border border-lime-100 rounded-xl p-10 shadow-lg shadow-black/20 backdrop-blur-sm overflow-hidden">

              {/* ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-1 bg-lime-100 rounded-l-xl"></div>

              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] opacity-40">14:22:05</p>

                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-lime-300 tracking-wide">IMAGE INTELLIGENCE</h3>
                  <span className="text-[10px] px-2 py-px rounded-full bg-green-500/20 text-pink- tracking-wide">Active</span>
                </div>
              </div>

              <p className="text-sm opacity-100 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laboriosam maxime sequi veritatis. Neque dignissimos inventore, eveniet nobis ad nesciunt veniam atque officia cumque explicabo nihil culpa minima ipsum, molestiae, numquam eligendi porro. Nihil in, esse optio quis eius sequi magni placeat suscipit obcaecati quos quidem, deserunt iure!
              </p>
            </div>
          </div>




          {/* VIDEO AGENT */}
          <div className="flex items-start gap-8 justify-center">



            {/* BOX */}
            <div className="flex-1 relative bg-green-900

 border border-lime-100 rounded-xl p-10 shadow-lg shadow-black/20 backdrop-blur-sm overflow-hidden">

              {/* ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-1 bg-lime-100 rounded-l-xl"></div>

              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] opacity-40">14:22:05</p>

                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-lime-500 tracking-wide">VIDEO INTELLIGENCE</h3>
                  <span className="text-[10px] px-2 py-px rounded-ful bg-green-500/20 text-pink- tracking-wide tracking-wide">Active</span>
                </div>
              </div>

              <p className="text-sm opacity-100 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente temporibus quia harum doloribus mollitia architecto sunt pariatur nostrum. Tempora beatae asperiores quidem porro, distinctio eos rem? Harum molestias quam voluptatum esse, nemo commodi nisi reiciendis quo ut corrupti laboriosam! Ipsam dolor impedit itaque non nobis perspiciatis magnam.
              </p>
            </div>
            {/* ICON */}
            <div className="w-30 h-30 rounded-2xl flex items-center justify-center self-center 
      bg-gray-950 p-6 rounded-lg border border-green-400 shadow-[0_0_8px_2px_rgba(163,255,79,0.4)] backdrop-blur-md">
              <span className="text-xs tracking-wide text-lime-500 font-semibold">VIDEO</span>
            </div>
          </div>


          {/* AUDIO AGENT */}
          <div className="flex items-start gap-8 justify-center">

            {/* ICON */}
            <div className="w-30 h-30 rounded-2xl flex items-center justify-center self-center 
     bg-gray-950 p-6 rounded-lg border border-green-500 shadow-[0_0_8px_2px_rgba(163,255,79,0.4)] backdrop-blur-md

">
              <span className="text-xs tracking-wide text-lime-600 font-semibold">AUDIO</span>
            </div>

            {/* BOX */}
            <div className="flex-1 relative bg-green-900

 border border-lime-100 rounded-xl p-10 shadow-lg shadow-black/20 backdrop-blur-sm overflow-hidden">

              {/* ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-1 bg-lime-100 rounded-l-xl"></div>

              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] opacity-40">14:22:05</p>

                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-lime-500 tracking-wide">AUDIO INTELLIGENCE</h3>
                  <span className="text-[10px] px-2 py-px rounded-full bg-green-500/20 text-pink- tracking-wide">Active</span>
                </div>
              </div>

              <p className="text-sm opacity-100 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, deleniti! Deleniti, tempore at culpa optio facilis enim assumenda eaque explicabo possimus sed cupiditate reprehenderit mollitia maiores nihil pariatur ipsam obcaecati aperiam. Cum, accusamus numquam id et commodi, laudantium quae ad enim harum sapiente obcaecati! Vitae expedita aspernatur cupiditate.
              </p>
            </div>
          </div>


          {/* TEXT AGENT */}
          <div className="flex items-start gap-8 justify-center">

          

            {/* BOX */}
            <div className="flex-1 relative bg-green-900

 border border-lime-100 rounded-xl p-10 shadow-lg shadow-black/20 backdrop-blur-sm overflow-hidden">

              {/* ACCENT LINE */}
              <div className="absolute left-0 top-0 h-full w-1 bg-pink-100 rounded-l-xl"></div>

              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] opacity-40">14:22:05</p>

                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-lime-500 tracking-wide">TEXT INTELLIGENCE</h3>
                  <span className="text-[10px] px-2 py-px rounded-full bg-green-500/20 text-pink- tracking-wide">Active</span>
                </div>
              </div>

              <p className="text-sm opacity-100 leading-relaxed">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quisquam doloribus ea necessitatibus laudantium debitis, facere et eveniet mollitia! Animi exercitationem distinctio quos ut ipsam soluta nihil, sunt voluptatum at illo atque quia reiciendis eos rem magni voluptate ipsa in corrupti sequi inventore assumenda vero tenetur amet natus?
              </p>
            </div>
              {/* ICON */}
            <div className="w-30 h-30 rounded-2xl flex items-center justify-center self-center 
   bg-gray-950 p-6 rounded-lg border border-green-500 shadow-[0_0_8px_2px_rgba(163,255,79,0.4)] backdrop-blur-md
     backdrop-blur-md">
              <span className="text-xs tracking-wide text-lime-500 font-semibold">TEXT</span>
            </div>
          </div>




        </div>
      </main>

      {/* RIGHT PANEL */}
      <aside className="w-80 bg-[linear-gradient(180deg,#001912_0%,#003220_40%,#002417_75%,#00120b_100%)]

 border-[#58a3b0] p-4 flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-wide text-[#b2e4f4]">INTELLIGENCE SUMMARY</h2>

        <div className="bg-black/50 border border-[#1FA97A]/100 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300
 border border-[#1E2A3E] rounded-xl p-4 h-32">
          <p className="text-sm opacity-60">SITUATION ANALYSIS</p>
          <p className="text-xs mt-2 opacity-40">Waiting for aggregator analysis...</p>
        </div>

        <div className=" bg-black/50 border border-[#1FA97A]/100 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300
border border-[#1E2A3E] rounded-xl p-4">
          <p className="text-sm opacity-60 mb-2">THREAT CONFIDENCE</p>
          <div className="w-full h-2 bg-[linear-gradient(135deg,#0d2f3b,#0b242f,#091a23)]
 rounded-full relative">
            <div className="absolute left-0 top-0 h-2 bg-yellow-400 rounded-full" style={{ width: "72%" }}></div>
          </div>
          <p className="text-right text-xs mt-1 opacity-70">72%</p>
        </div>

          <Link href ='/dashboard'  className="block mt-4 py-2 rounded-lg bg-cyan-500 hover:bg-indigo-500 transition-all shadow text-sm font-medium text-center">OPEN DASHBOARD</Link>

        
          <div className="bg-black/50 border border-[#1FA97A]/100 rounded-xl p-4
                    h-56 shrink-0 flex flex-col justify-center items-center
                    backdrop-blur-sm shadow-[inset_0_12px_32px_rgba(0,0,0,0.7)]
                    hover:shadow-[inset_0_14px_36px_rgba(0,0,0,0.78)]
                    transition-all duration-300
 border border-[#1E2A3E] rounded-xl p-4 mt-2 h-40 flex items-center justify-center text-sm opacity-70">
            Chart Component Placeholder
          </div>
        
      </aside>
    </div>
  );
}
