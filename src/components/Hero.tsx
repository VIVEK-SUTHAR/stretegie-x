'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, DollarSign, LineChart, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function LendingPage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Zap className="h-8 w-8 text-yellow-400" />
          </motion.div>
          <span className="ml-2 text-xl font-bold">DeFi Strategy Hub</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  Lend, Borrow, and Profit with DeFi Strategies
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Access profitable DeFi lending strategies curated by expert traders. Start earning today!
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors">
                  Get Started
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-yellow-400">Why Choose Our Platform?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: DollarSign, title: "Maximize Your Earnings", content: "Access high-yield lending opportunities curated by expert traders." },
                { icon: Shield, title: "Risk Management", content: "Choose strategies that match your risk tolerance and investment goals." },
                { icon: LineChart, title: "Track Performance", content: "Monitor your investments and see real-time returns on your dashboard." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <item.icon className="h-8 w-8 mb-2 text-yellow-400" />
                      <CardTitle className="text-yellow-400">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      {item.content}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-yellow-400">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Browse Strategies", content: "Explore a variety of lending strategies from top DeFi traders." },
                { step: 2, title: "Choose and Invest", content: "Select a strategy that fits your goals and invest with just a few clicks." },
                { step: 3, title: "Earn and Grow", content: "Watch your investments grow and earn passive income from DeFi lending." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.div
                    className="bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center mb-4 text-2xl font-bold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-yellow-400">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "John D.", role: "Regular Investor", content: "I've seen a 20% increase in my portfolio since I started using the lending strategies on this platform. It's been a game-changer for my investments!" },
                { name: "Sarah M.", role: "Expert Trader", content: "As a strategy creator, I've been able to help others while earning passive income. It's a win-win situation for everyone involved." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-700 border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-yellow-400">{item.name}</CardTitle>
                      <CardDescription className="text-gray-300">{item.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      "{item.content}"
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-yellow-400">
                  Ready to Start Earning?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join thousands of investors who are already profiting from our curated DeFi lending strategies.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-x-4"
              >
                <Button
                  className="bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    Sign Up Now
                  </motion.span>
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
                  Schedule a Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2024 DeFi Strategy Hub. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-yellow-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-yellow-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
