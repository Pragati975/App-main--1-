"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

type Message = {
  id: string
  sender: "human" | "ai"
  text: string
}

export default function DecisionSupportPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isChatExpanded, setIsChatExpanded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const handleSize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const el = e.currentTarget
    el.style.height = "auto"
    el.style.height = Math.min(el.scrollHeight, 120) + "px"
  }

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage: Message = {
      id: crypto.randomUUID(),
      sender: "human",
      text: input.trim(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInput("")

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "ai",
          text: "I'm analyzing your request and gathering insights. Let me provide you with actionable recommendations.",
        },
      ])
    }, 800)
  }

  useEffect(() => {
    setMounted(true)
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "ai",
        text: "Hello! I'm your Decision Support Assistant. Ask me anything about analytics, strategy, or business insights.",
      },
      {
        id: crypto.randomUUID(),
        sender: "ai",
        text: "I can help you analyze data patterns, explore scenarios, and make informed decisions.",
      },
    ])
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  if (!mounted) return null

  return (
    <div
    className={`backdrop-blur-lg ${
  isChatExpanded
    ? // Gradient when expanded (from original style prop)
      "bg-[linear-gradient(135deg,rgba(28,40,25,0.98)_0%,rgba(40,55,40,0.98)_0%,rgba(35,50,35,0.98)_0%)]"
    : // Your new requested gradient when not expanded
      "bg-emerald-800"
}`}
      
    >
      

      <div className="relative z-10 flex flex-col h-screen">
        <header className=" border border-lime-400/100
shadow-[0_0_25px_#0f2c2044,inset_0_0_15px_#09161055] bg-emerald-950">
          <div className="max-w-full px-6 md:px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg ">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 30 30">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-amber-100">Decision Support Portal</h1>
                  <p className="text-xs md:text-sm text-amber-300/70 mt-0.5">Strategic Command Center</p>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-emerald-950/60 border border-[#1FA97A]/100 rounded-lg">
                <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-300 font-medium">System Active</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden p-4 md:p-8">
          <div
            className={`grid gap-6 h-full transition-all duration-300 ${
              isChatExpanded ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-5"
            }`}
          >
            {/* Chat Section */}
            <div
              className={`flex flex-col min-h-0 transition-all duration-300 ${
                isChatExpanded ? "lg:col-span-1" : "lg:col-span-3"
              }`}
            >
              <div className="flex-1 rounded-xl  bg-[linear-gradient(135deg,#071a16_0%,#0c2d25_50%,#061411_100%)] 

 z-30 p-0 border-b border-[#1FA97A]/100 backdrop-blur-sm  flex flex-col overflow-hidden shadow-2xl hover:shadow-8xl tran">
                {/* Chat Header */}
                <div className="flex items-center justify-between gap-3 p-5 ">
                  <div>
                    <h2 className="text-lg font-bold text-amber-100">Command Assistant</h2>
                    <p className="text-xs text-amber-300/60 mt-1">Real-time tactical support</p>
                  </div>

                  <button
                    onClick={() => setIsChatExpanded(!isChatExpanded)}
                    className="p-2.5 rounded-lg bg-amber-900/60 hover:bg-amber-800/80 transition-colors duration-200 text-amber-400 hover:text-amber-300 border border-amber-700/40"
                    aria-label="Toggle chat"
                  >
                    {isChatExpanded ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6h8m-4-4v8m-2 5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Messages Container */}
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-0 transition-all duration-300 overflow-hidden flex flex-col group"
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "human" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div
                        className={`flex items-end gap-2 max-w-xs ${msg.sender === "human" ? "flex-row-reverse" : ""}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0 border ${
                            msg.sender === "human"
                              ? "bg-gradient-to-br from-blue-800 to-blue-800 border-b-blue-800"
                              : "bg-gradient-to-br from-emerald-700 to-emerald-800 border-emerald-600/50"
                          }`}
                        >
                          {msg.sender === "human" ? "OP" : "AI"}
                        </div>

                        <div
                          className={`px-4 py-3 rounded-xl text-sm font-medium break-words shadow-md transition-all duration-200 hover:shadow-lg border ${
                            msg.sender === "human"
                              ? "bg-blue-950 text-white rounded-br-none border-amber-500/50"
                              : "bg-slate-800 text-amber-100 rounded-bl-none border-slate-700/60"
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="border-t border-amber-700/20 bg-emerald-950 p-4 space-y-3">
                  <div className="flex gap-3 items-end">
                    <textarea
                      ref={textareaRef}
                      placeholder="Enter tactical command..."
                      value={input}
                      onInput={handleSize}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                      className="flex-1 resize-none rounded-lg px-5 py-3 bg-emerald-950 text-amber-100 placeholder-amber-300/40 border border-amber-700/ focus:border-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-600/50 transition-all duration-200 min-h-12 max-h-24 overflow-y-auto"
                    />

                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 text-white hover:from-amber-500 hover:to-amber-600 disabled:from-slate-700 disabled:to-slate-800 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 border border-amber-500/50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="text-xs text-amber-300/50 text-center">
                    <kbd className="px-2 py-1 bg-slate-800 border border-amber-700/40 rounded text-amber-300">
                      Shift + Enter
                    </kbd>{" "}
                    for new line
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Analytics & Insights */}
            {!isChatExpanded && (
              <div className="lg:col-span-2 flex flex-col gap-6 min-h-0">
                <div className="flex-1 rounded-xl relative z-10 bg-black/50 border border-[#1FA97A]/100
 rounded-xl p-0 transition-all duration-300 overflow-hidden flex flex-col group">
                  <div className="flex items-center justify-between gap-3 p-5 border-b border-emerald-700/40 bg-[linear-gradient(135deg,#071a16_0%,#0c2d25_50%,#061411_100%)]
 from-slate-100 text-shadow-slate-950 group-hover:from-slate-800/80 group-hover:to-slate-700/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-900/60 text-emerald-400 border border-emerald-700/40">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-emerald-100">Performance Metrics</h3>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4">
                      <svg
                        className="w-16 h-16 mx-auto text-emerald-900/40 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                        />
                      </svg>
                    </div>
                    <p className="text-emerald-100 text-sm font-medium mb-2">Tactical Analytics</p>
                    <p className="text-emerald-300/60 text-xs leading-relaxed">
                      Real-time performance monitoring and strategic metrics visualization
                    </p>
                  </div>
                </div>

                <div className="flex-1 rounded-xl flex-1 rounded-xl relative z-10 bg-black/50 border border-[#1FA97A]/100
l p-0 transition-all duration-300 overflow-hidden flex flex-col group duration-300 overflow-hidden flex flex-col group">
                  <div className="flex items-center justify-between gap-3 p-5 border-b border-amber-700/20 bg-[linear-gradient(135deg,#071a16_0%,#0c2d25_50%,#061411_100%)]
 from-slate-800/60 to-slate-700/60 group-hover:from-slate-800/80 group-hover:to-slate-700/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-amber-900/60 text-amber-400 border border-amber-700/40">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-amber-100">Strategic Insights</h3>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4">
                      <svg
                        className="w-16 h-16 mx-auto text-amber-900/40 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-amber-100 text-sm font-medium mb-2">Command Intelligence</p>
                    <p className="text-amber-300/60 text-xs leading-relaxed">
                      Strategic recommendations and operational intelligence analysis
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
