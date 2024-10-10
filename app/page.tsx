'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Download, Inbox, Layers, Zap, Menu, X } from "lucide-react"
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function MeTabsLanding() {
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const featuresRef = useRef<HTMLElement>(null)
  const howToUseRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    setEmail('')
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false)
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    { icon: Zap, title: "Quick Search", description: "Find any tab instantly with our powerful search functionality." },
    { icon: Layers, title: "Tab Groups", description: "Organize your tabs into custom groups for better management." },
    { icon: Inbox, title: "Tab Archive", description: "Save and restore your tab sessions with ease." },
  ]

  const howToUseSteps = [
    { title: "Download", description: "Download the Me-Tabs zip file from our website." },
    { title: "Unzip & Load", description: "Unzip the file and load it as an unpacked extension in Chrome. To load the extension, go to chrome://extensions/ in Chrome, enable Developer mode, and click Load unpacked. Then, select the unzip folder, then the extension will appear in your toolbar." },
    { title: "Start Using", description: "Click on the Me-Tabs icon in your browser to start managing your tabs!" },
  ]

  const faqItems = [
    { question: "Is Me-Tabs free to use?", answer: "Yes, Me-Tabs is completely free to download and use." },
    { question: "Can I sync my tabs across devices?", answer: "Currently, Me-Tabs works on a per-device basis. We're working on sync functionality for a future update." },
    { question: "Is Me-Tabs available for other browsers?", answer: "At the moment, Me-Tabs is only available for Google Chrome. We plan to support other browsers in the future." },
    { question: "How do I report a bug or suggest a feature?", answer: "You can reach out to our support team via email or submit an issue on our GitHub repository." },
  ]

  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white dark:bg-gray-800 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Layers className="h-6 w-6" />
          <span className="ml-2 font-bold text-xl">Me-Tabs</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <button className="text-sm font-medium hover:underline underline-offset-4" onClick={() => scrollToSection(featuresRef)}>
            Features
          </button>
          <button className="text-sm font-medium hover:underline underline-offset-4" onClick={() => scrollToSection(howToUseRef)}>
            How to Use
          </button>
          <button className="text-sm font-medium hover:underline underline-offset-4" onClick={() => scrollToSection(faqRef)}>
            FAQ
          </button>
        </nav>
        <Button
          className="ml-auto md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-14 bg-white dark:bg-gray-800 p-4 md:hidden z-40"
          >
            <nav className="flex flex-col gap-4">
              <button className="text-sm font-medium hover:underline underline-offset-4" onClick={() => scrollToSection(featuresRef)}>
                Features
              </button>
              <button className="text-sm font-medium hover:underline underline-offset-4" onClick={() => scrollToSection(howToUseRef)}>
                How to Use
              </button>
              <button className="text-sm font-medium hover:underline underline-offset-4" onClick={() => scrollToSection(faqRef)}>
                FAQ
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Manage Your Tabs with Me-Tabs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your browsing experience with our powerful Chrome extension. Organize, search, and manage your tabs effortlessly.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={'https://github.com/Intrepid-penguin/Me-tabs-exe/archive/refs/heads/main.zip'}>
                  <Button className="inline-flex items-center justify-center">
                    Download Me-Tabs
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline">Learn More</Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section ref={featuresRef} id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg"
                >
                  <feature.icon className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">See Me-Tabsin Action</h2>
            <div className="aspect-video rounded-xl overflow-hidden">
              <video className="w-full h-full bg-red-600" autoPlay loop muted>
                <source src="https://res.cloudinary.com/dh9zsffcy/video/upload/v1728519617/screen-capture_kfkdcz.mkv" type="video/webm" />
              </video>
              fffffqwertyrewqwertyrewqertewrtyutrewrty
            </div>
          </div>
        </section>
        <section ref={howToUseRef} id="how-to-use" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How to Use Me-Tabs</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {howToUseSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-2 border border-gray-200 p-4 rounded-lg"
                >
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section ref={faqRef} id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-bold">{item.question}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Organize Your Tabs?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join thousands of users who have streamlined their browsing experience with Me-Tabs.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Get notified about updates and be the first to get early access to new features.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Me-Tabs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}