'use client'

import { motion } from 'framer-motion'
import { 
  Play, 
  Calendar, 
  LayoutTemplate, 
  Settings, 
  TrendingUp, 
  Target,
  ChevronRight,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

// Navigation Component
function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = ['Product', 'AI Features', 'Why Grandeur', 'FAQ']
  
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
    >
      {/* Rainbow gradient border wrapper */}
      <div className="max-w-5xl mx-auto rounded-full p-[2px] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500">
        {/* White inner container */}
        <div className="bg-white rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/my_logo.png" 
              alt="Grandeur Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-blue-100 transition-colors text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Join waitlist
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-lg font-medium"
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Join waitlist
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

// Cloud Component - using custom cloud image
function Cloud({ top, duration, delay, scale }: { top: string; duration: number; delay: number; scale: number }) {
  return (
    <motion.img
      src="/cloud.png"
      alt="cloud"
      initial={{ x: 0, opacity: 0.85 }}
      animate={{ x: '100vw' }}
      transition={{
        x: {
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }
      }}
      className="absolute pointer-events-none select-none"
      style={{ 
        top, 
        transform: `scale(${scale})`, 
        zIndex: 1, 
        left: '-300px',
        maxWidth: 'none'
      }}
    />
  )
}

// Marquee Card Column Component
function MarqueeColumn({ cards, direction }: { cards: { name: string; role: string; image: string }[]; direction: 'up' | 'down' }) {
  return (
    <motion.div
      animate={{
        y: direction === 'up' ? [0, -600] : [-600, 0]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className="flex flex-col gap-3"
    >
      {/* Duplicate cards for seamless loop */}
      {[...cards, ...cards].map((persona, index) => (
        <PersonaCard
          key={`${persona.name}-${index}`}
          name={persona.name}
          role={persona.role}
          image={persona.image}
          delay={0}
        />
      ))}
    </motion.div>
  )
}

// Persona Card Component
function PersonaCard({ name, role, image, delay }: { name: string; role: string; image: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex-shrink-0"
    >
      {/* Photo - fixed height */}
      <img 
        src={image} 
        alt={name}
        className="w-full h-40 sm:h-44 md:h-48 object-cover object-top"
      />
      
      {/* Role Badge - floating over image at bottom */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
        <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full">
          {role}
        </span>
      </div>
    </motion.div>
  )
}

// Hero Section
function HeroSection() {
  const personas = [
    { name: 'Campaign Manager', role: 'Campaign Manager', image: '/campaign_manager.png' },
    { name: 'Ad Specialist', role: 'Ad specialist', image: '/ad_specialist.png' },
    { name: 'Solo-preneur', role: 'Solo-preneur', image: '/solo_preneur.png' },
    { name: 'Marketing Consultant', role: 'Marketing Consultant', image: '/marketing_consult.png' },
    { name: 'Head of Marketing', role: 'Head of Marketing', image: '/head_of_marketing.png' },
    { name: 'VP of Marketing', role: 'VP of marketing', image: '/vp_marketing.png' },
  ]
  
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Sky Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-400 to-sky-500" />
      
      {/* Realistic Animated Clouds - soft fluffy clouds moving left to right */}
      <Cloud top="5%" duration={60} delay={0} scale={1.2} />
      <Cloud top="15%" duration={80} delay={5} scale={1.5} />
      <Cloud top="8%" duration={50} delay={15} scale={0.9} />
      <Cloud top="25%" duration={70} delay={8} scale={1.3} />
      <Cloud top="38%" duration={55} delay={20} scale={1.0} />
      <Cloud top="50%" duration={90} delay={3} scale={1.4} />
      <Cloud top="62%" duration={65} delay={12} scale={0.8} />
      <Cloud top="75%" duration={45} delay={25} scale={1.1} />
      <Cloud top="85%" duration={75} delay={6} scale={0.95} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            {/* Hero Logo - bigger and at top */}
            <motion.div 
              variants={fadeInUp}
              className="mb-10 flex justify-center lg:justify-start"
            >
              <img 
                src="/logo.png" 
                alt="Grandeur" 
                className="w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain"
              />
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Your entire{' '}
              <span className="text-blue-900">
                marketing
              </span>{' '}
              operations{' '}
              <span className="text-blue-900">
                orchestrated
              </span>{' '}
              with AI
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-5 text-base md:text-lg text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Plan, generate, approve, and publish across every channel—from one calendar and one canvas. Grandeur turns brand guardrails into output at scale.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-full text-base font-medium transition-all hover:shadow-xl hover:shadow-blue-500/30"
              >
                Join the waitlist
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50 px-6 py-5 rounded-full text-base font-medium"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch the 90-sec explainer
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Persona Cards with Marquee Effect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Marquee Grid - 2 columns with opposite scroll directions */}
            <div className="flex gap-3 overflow-hidden h-[500px] sm:h-[550px] md:h-[600px]">
              {/* Left Column - scrolls up */}
              <div className="w-[130px] sm:w-[140px] overflow-hidden">
                <MarqueeColumn 
                  cards={personas.slice(0, 3)} 
                  direction="up" 
                />
              </div>
              
              {/* Right Column - scrolls down */}
              <div className="w-[130px] sm:w-[140px] overflow-hidden">
                <MarqueeColumn 
                  cards={personas.slice(3, 6)} 
                  direction="down" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Feature Card Component
function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  children,
  reverse = false 
}: { 
  title: string
  description: string
  icon: React.ElementType
  children: React.ReactNode
  reverse?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
    >
      {/* Content */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
      </div>
      
      {/* Visual */}
      <div className="flex-1 w-full">
        {children}
      </div>
    </motion.div>
  )
}

// Calendar Component
function CalendarWidget() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const dates = Array.from({ length: 35 }, (_, i) => i + 1)
  const events = [
    { day: 5, title: 'Blog Post', color: 'bg-blue-500' },
    { day: 12, title: 'Social Media', color: 'bg-green-500' },
    { day: 18, title: 'Email Campaign', color: 'bg-purple-500' },
    { day: 25, title: 'Product Launch', color: 'bg-orange-500' },
  ]
  
  return (
    <Card className="shadow-xl border-0 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-gray-900">March 2026</h4>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">←</Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">→</Button>
          </div>
        </div>
        
        {/* Days header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map(day => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {dates.slice(4, 35).map((date, i) => {
            const event = events.find(e => e.day === date)
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`
                  relative aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer
                  ${date === 18 ? 'bg-blue-600 text-white font-semibold' : 'hover:bg-gray-100'}
                  ${event ? 'font-medium' : ''}
                `}
              >
                {date > 31 ? date - 31 : date}
                {event && date <= 31 && (
                  <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${event.color}`} />
                )}
              </motion.div>
            )
          })}
        </div>
        
        {/* Events list */}
        <div className="mt-6 space-y-2">
          {events.map((event, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className={`w-3 h-3 rounded-full ${event.color}`} />
              <span className="text-sm font-medium text-gray-700">{event.title}</span>
              <span className="text-xs text-gray-500 ml-auto">Mar {event.day}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Framework Selection Component
function FrameworkSelector() {
  const frameworks = [
    { id: 'awareness', label: 'Brand Awareness', description: 'Focus on reach and visibility' },
    { id: 'conversion', label: 'Conversion Focused', description: 'Optimize for sales and leads' },
    { id: 'engagement', label: 'Engagement Builder', description: 'Build community and interaction' },
  ]
  
  return (
    <Card className="shadow-xl border-0">
      <CardContent className="p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Select Framework</h4>
        
        <RadioGroup defaultValue="awareness" className="space-y-3">
          {frameworks.map((framework) => (
            <div key={framework.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors cursor-pointer">
              <RadioGroupItem value={framework.id} id={framework.id} className="mt-1" />
              <div className="flex-1">
                <Label htmlFor={framework.id} className="font-semibold text-gray-900 cursor-pointer">
                  {framework.label}
                </Label>
                <p className="text-sm text-gray-500">{framework.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
        
        {/* Template Nodes Preview */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <p className="text-sm font-medium text-gray-700 mb-3">Template Nodes</p>
          <div className="flex flex-wrap gap-2">
            {['Audience', 'Channel', 'Content', 'Timing', 'Budget'].map((node, i) => (
              <motion.div
                key={node}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm"
              >
                {node}
              </motion.div>
            ))}
          </div>
          
          {/* Flow diagram */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {['Target', 'Create', 'Publish', 'Analyze'].map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="w-16 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xs font-medium text-blue-700">
                  {step}
                </div>
                {i < 3 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Campaign Tracking Widget
function CampaignWidget() {
  const metrics = [
    { label: 'Active Campaigns', value: '12', change: '+3' },
    { label: 'Total Reach', value: '2.4M', change: '+18%' },
    { label: 'Engagement Rate', value: '4.8%', change: '+0.6%' },
  ]
  
  return (
    <Card className="shadow-xl border-0">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-lg font-semibold text-gray-900">Campaign Tracking</h4>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Track activity
          </Button>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center p-3 bg-gray-50 rounded-xl">
              <p className="text-2xl font-bold text-purple-600">{metric.value}</p>
              <p className="text-xs text-gray-500 mt-1">{metric.label}</p>
              <span className="text-xs text-green-600 font-medium">{metric.change}</span>
            </div>
          ))}
        </div>
        
        {/* User Avatars */}
        <div className="flex items-center justify-center">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <img 
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                alt={`User ${i}`}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-blue-700">
              +28
            </div>
          </div>
        </div>
        
        {/* Progress bars */}
        <div className="mt-6 space-y-3">
          {[
            { label: 'Social Media', progress: 75, color: 'bg-blue-500' },
            { label: 'Email Marketing', progress: 60, color: 'bg-green-500' },
            { label: 'Content Creation', progress: 90, color: 'bg-purple-500' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-medium text-gray-900">{item.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className={`h-full ${item.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Features Section
function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything you need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              scale your marketing
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful tools designed to help marketing teams work smarter, not harder.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {/* Content Calendar Feature */}
          <FeatureCard
            title="Content Calendar"
            description="Plan, schedule, and visualize your entire content strategy in one intuitive calendar. Drag and drop to reschedule, set recurring posts, and never miss a publishing deadline again."
            icon={Calendar}
          >
            <CalendarWidget />
          </FeatureCard>
          
          {/* Framework Templates Feature */}
          <FeatureCard
            title="Framework Templates"
            description="Choose from battle-tested marketing frameworks designed for different goals. Customize templates to match your brand and let AI optimize your campaign structure."
            icon={LayoutTemplate}
            reverse
          >
            <FrameworkSelector />
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

// Brand Guidelines Section
function BrandGuidelinesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureCard
          title="Brand Guidelines"
          description="Maintain brand consistency across all channels. Store your brand assets, define tone of voice, and ensure every piece of content aligns with your brand identity."
          icon={Settings}
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Brand Flow</h4>
              
              {/* Flowchart */}
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-sm font-medium text-blue-700">
                    Logo
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <div className="w-20 h-12 bg-green-100 rounded-lg flex items-center justify-center text-sm font-medium text-green-700">
                    Colors
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <div className="w-20 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-sm font-medium text-purple-700">
                    Fonts
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
                <div className="flex items-center gap-3">
                  <div className="w-20 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-sm font-medium text-orange-700">
                    Voice
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <div className="w-24 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-medium text-white">
                    Consistent
                  </div>
                </div>
              </div>
              
              {/* Color palette preview */}
              <div className="mt-6 flex gap-2 justify-center">
                {['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500', 'bg-pink-500'].map((color) => (
                  <div key={color} className={`w-10 h-10 rounded-lg ${color}`} />
                ))}
              </div>
            </CardContent>
          </Card>
        </FeatureCard>
      </div>
    </section>
  )
}

// Budget Planning Section
function BudgetPlanningSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureCard
          title="Budget Planning"
          description="Allocate resources efficiently with AI-powered budget recommendations. Track spend in real-time and optimize your marketing investments for maximum ROI."
          icon={TrendingUp}
          reverse
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Budget Allocation</h4>
              
              {/* Budget chart */}
              <div className="space-y-4">
                {[
                  { channel: 'Social Ads', budget: '$12,500', percentage: 35, color: 'bg-blue-500' },
                  { channel: 'Content', budget: '$8,000', percentage: 22, color: 'bg-green-500' },
                  { channel: 'Email', budget: '$5,500', percentage: 15, color: 'bg-purple-500' },
                  { channel: 'Influencers', budget: '$10,000', percentage: 28, color: 'bg-orange-500' },
                ].map((item) => (
                  <div key={item.channel}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">{item.channel}</span>
                      <span className="font-semibold text-gray-900">{item.budget}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={`h-full ${item.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total */}
              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between">
                <span className="font-semibold text-gray-900">Total Budget</span>
                <span className="text-xl font-bold text-purple-600">$36,000</span>
              </div>
            </CardContent>
          </Card>
        </FeatureCard>
      </div>
    </section>
  )
}

// Campaign Tracking Section
function CampaignTrackingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureCard
          title="Campaign Tracking"
          description="Monitor all your campaigns from a single dashboard. Get real-time insights, track KPIs, and make data-driven decisions to improve your marketing performance."
          icon={Target}
        >
          <CampaignWidget />
        </FeatureCard>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to transform your marketing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of marketing teams already using Grandeour to scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full text-lg font-semibold">
              Join waitlist
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
              Schedule a demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/my_logo.png" 
                alt="Grandeur Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white">Grandeur</span>
            </div>
            <p className="text-sm">
              AI-powered marketing operations platform for modern teams.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2026 Grandeur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BrandGuidelinesSection />
      <BudgetPlanningSection />
      <CampaignTrackingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
