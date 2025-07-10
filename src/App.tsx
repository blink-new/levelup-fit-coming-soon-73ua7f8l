import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Play, 
  Trophy, 
  Target, 
  Users, 
  Zap, 
  Calendar,
  Instagram,
  Twitter,
  MessageCircle,
  Mail,

  Gamepad2,
  Star,
  TrendingUp,
  Crown,
  Gift
} from 'lucide-react'
import { toast } from 'react-hot-toast'

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !name) {
      toast.error('Please fill in all fields')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Welcome to the waitlist! Check your email for updates.')
    setEmail('')
    setName('')
    setIsSubmitting(false)
  }

  const features = [
    { icon: Trophy, title: 'Earn XP & Level Up', description: 'Every workout earns you experience points' },
    { icon: Target, title: 'Complete Challenges', description: 'Daily and weekly fitness challenges' },
    { icon: Calendar, title: 'Build Streaks', description: 'Maintain your fitness momentum' },
    { icon: Users, title: 'Compete with Friends', description: 'Join leaderboards and friendly competition' },
    { icon: Crown, title: 'Unlock Achievements', description: 'Collect badges and special rewards' },
    { icon: TrendingUp, title: 'Track Progress', description: 'Visual progress tracking and analytics' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Gamepad2 className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-yellow-800" />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              LevelUp Fit
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Turn your fitness into a game
            </p>
            
            <div className="mb-8">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Play className="w-4 h-4 mr-2" />
                Coming Soon
              </Badge>
            </div>
            
            {/* CTA Section */}
            <div className="max-w-md mx-auto mb-12">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Join the Waitlist</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="mt-1"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Joining...' : 'Get Early Access'}
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    No spam. Unsubscribe any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Fitness Meets Gaming
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg text-gray-600">
                LevelUp Fit transforms your fitness journey into an engaging RPG-style game. 
                Every workout becomes an adventure, every goal becomes a quest, and every milestone becomes an achievement.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a fitness beginner or a seasoned athlete, our gamification system 
                adapts to your level and keeps you motivated with personalized challenges, 
                social competition, and meaningful progress tracking.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* App Preview Section */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get a Sneak Peek
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what you can expect from LevelUp Fit when it launches
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mockup placeholders */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Dashboard</p>
                  </div>
                </div>
                <h3 className="font-semibold text-center">Your Progress Hub</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Track your level, XP, and achievements in one place
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-[9/16] bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Target className="w-12 h-12 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Challenges</p>
                  </div>
                </div>
                <h3 className="font-semibold text-center">Daily Quests</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Complete personalized fitness challenges
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-[9/16] bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Social</p>
                  </div>
                </div>
                <h3 className="font-semibold text-center">Compete & Connect</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Challenge friends and climb leaderboards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Early Adopter Benefits */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Early Adopter Perks
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Be among the first to experience LevelUp Fit and get exclusive benefits
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Premium Month</h3>
              <p className="text-gray-600">Get your first month of premium features free</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Badge</h3>
              <p className="text-gray-600">Permanent "Founding Member" achievement</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Early Access</h3>
              <p className="text-gray-600">Try new features before everyone else</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Contact */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Follow our journey and join the community
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>Discord</span>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">Press or partnership inquiries?</p>
            <Button variant="outline" className="flex items-center space-x-2 mx-auto">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">LevelUp Fit</h3>
            <p className="text-gray-400 mb-6">Turn your fitness into a game</p>
            
            <Separator className="mb-6" />
            
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              © 2025 LevelUp Fit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App