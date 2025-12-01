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
  const [width, setWidth] = useState(20)
  const [isExpanded, setIsExpanded] = useState(false)
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
          text: "Processing your request... I'm analyzing the data to provide actionable insights.",
        },
      ])
    }, 800)
  }

  const toggleSize = () => {
    setIsExpanded(!isExpanded)
    setWidth(isExpanded ? 20 : 50)
  }

  useEffect(() => {
    setMounted(true)
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "ai",
        text: "Welcome to Decision Support AI. How can I assist you today?",
      },
      {
        id: crypto.randomUUID(),
        sender: "ai",
        text: "I can help analyze data, provide strategic recommendations, and answer your business questions.",
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
    <div className="min-h-screen bg-slate-950 overflow-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-indigo-500/10 rounded-full blur-3xl animate-pulse opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-slate-500/10 rounded-full blur-3xl animate-pulse opacity-30" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-slate-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <header className="border-b border-slate-700/20 bg-gradient-to-b from-slate-900/80 to-slate-900/40 backdrop-blur-lg sticky top-0 z-20">
          <div className="max-w-full px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Decision Support Portal
                </h1>
                <p className="text-sm text-slate-400 mt-1">AI-powered analytics and strategic insights</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-hidden p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
            <div className="lg:col-span-3 flex flex-col min-h-0">
              <div
                className="flex-1 rounded-2xl bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 flex flex-col overflow-hidden shadow-2xl transition-all duration-300 ease-out"
                style={{ width: `${width}vw` }}
              >
                {/* Chat Header */}
                <div className="flex items-center justify-between gap-3 p-5 border-b border-slate-700/20 bg-gradient-to-r from-slate-900/40 to-transparent">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                      Decision Agent
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">AI-powered insights</p>
                  </div>

                  <button
                    onClick={toggleSize}
                    className="p-2.5 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-200 text-cyan-400 hover:text-cyan-300"
                    aria-label="Toggle sidebar"
                  >
                    {isExpanded ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Messages Container */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === "human" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div
                        className={`px-4 py-3 rounded-2xl max-w-xs text-sm font-medium break-words shadow-lg transition-all duration-200 hover:shadow-xl ${
                          msg.sender === "human"
                            ? "bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-br-none"
                            : "bg-slate-700/60 text-slate-100 rounded-bl-none border border-slate-600/30"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="border-t border-slate-700/20 bg-gradient-to-t from-slate-900/80 via-slate-900/60 to-transparent p-4 space-y-3">
                  <div className="flex gap-3 items-end">
                    <textarea
                      ref={textareaRef}
                      placeholder="Type your question..."
                      value={input}
                      onInput={handleSize}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSend()
                        }
                      }}
                      className="flex-1 resize-none rounded-xl px-4 py-3 bg-slate-700/40 text-slate-100 placeholder-slate-500 border border-slate-600/40 focus:border-cyan-500/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 min-h-12 max-h-24 overflow-y-auto shadow-md"
                    />

                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
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

                  <p className="text-xs text-slate-500 text-center">
                    Press <kbd className="px-2 py-1 bg-slate-700/50 rounded text-slate-400">Shift + Enter</kbd> for new
                    line
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Map and Graph */}
            <div className="lg:col-span-2 flex flex-col gap-6 min-h-0">
              {/* Map Section */}
              <div className="flex-1 rounded-2xl bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-slate-700/50">
                <div className="flex items-center justify-between gap-3 p-5 border-b border-slate-700/20 bg-gradient-to-r from-slate-900/40 to-transparent">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 003 16.382V5.618a1 1 0 011.553-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 16.382V5.618a1 1 0 00-1.553-.894L15 7m0 13V7"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-slate-100">Geographic Analysis</h3>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-slate-400 text-sm mb-2">Map Visualization</p>
                    <p className="text-slate-500 text-xs">Frontend structure complete. Backend integration pending.</p>
                  </div>
                </div>
              </div>

              {/* Graph Section */}
              <div className="flex-1 rounded-2xl bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50 backdrop-blur-sm border border-slate-700/30 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-slate-700/50">
                <div className="flex items-center justify-between gap-3 p-5 border-b border-slate-700/20 bg-gradient-to-r from-slate-900/40 to-transparent">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <h3 className="text-lg font-semibold text-slate-100">Performance Metrics</h3>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="text-center">
                    <p className="text-slate-400 text-sm mb-2">Graph Visualization</p>
                    <p className="text-slate-500 text-xs">Frontend structure complete. Backend integration pending.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
