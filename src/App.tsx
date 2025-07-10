import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
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
  TrendingUp,
  Crown,
  Gift,
  Sparkles,
  Atom
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
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950"></div>
      <div className="fixed inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgb(168,85,247,0.1)_120deg,transparent_240deg)] animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNywgMTEwLCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz4KPHN2Zz4K')] opacity-20"></div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-violet-500/30">
                  <Gamepad2 className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Sparkles className="w-4 h-4 text-yellow-900" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight">
              LevelUp Fit
            </h1>
            
            <p className="text-xl md:text-3xl text-slate-300 mb-8 max-w-4xl mx-auto font-light">
              Turn your fitness into a <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-semibold">neural-enhanced game</span>
            </p>
            
            <div className="mb-12">
              <Badge variant="secondary" className="text-sm px-6 py-3 bg-violet-500/20 border border-violet-500/30 text-violet-300 hover:bg-violet-500/30 transition-colors backdrop-blur-sm">
                <Atom className="w-4 h-4 mr-2 animate-spin" style={{animationDuration: '3s'}} />
                Neural Beta • Coming 2025
              </Badge>
            </div>
            
            {/* CTA Section */}
            <div className="max-w-md mx-auto mb-16">
              <Card className="border-0 bg-slate-900/40 backdrop-blur-xl shadow-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                    <h3 className="text-lg font-semibold text-white">Neural Access Queue</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-slate-300">Neural ID</Label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="mt-2 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-violet-500 focus:ring-violet-500/20 backdrop-blur-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-slate-300">Neural Link</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@neural.net"
                        className="mt-2 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-violet-500 focus:ring-violet-500/20 backdrop-blur-sm"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold py-3 shadow-lg hover:shadow-violet-500/25 transition-all duration-300 border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Linking Neural...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Get Neural Access
                        </div>
                      )}
                    </Button>
                  </form>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    No spam. Neural encryption guaranteed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-10 py-24 bg-slate-900/20 backdrop-blur-sm border-y border-violet-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Fitness Meets <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">Neural Gaming</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-slate-300 leading-relaxed">
                LevelUp Fit transforms your fitness journey into an <span className="text-violet-400 font-semibold">AI-enhanced RPG experience</span>. 
                Every workout becomes a neural quest, every goal becomes a digital achievement, and every milestone becomes a level-up moment.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Whether you're a fitness noob or a seasoned athlete, our <span className="text-cyan-400 font-semibold">neural adaptation system</span> 
                customizes to your biorhythm with personalized challenges, real-time competitions, and immersive progress visualization.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 bg-slate-800/30 backdrop-blur-xl hover:bg-slate-800/50 transition-all duration-500 border border-violet-500/20 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/10">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-violet-500/30 group-hover:to-cyan-500/30 transition-all duration-300 border border-violet-500/30">
                      <feature.icon className="w-7 h-7 text-violet-400 group-hover:text-violet-300 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* App Preview Section */}
      <div className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Neural <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">Interface Preview</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Experience the future of fitness technology with our quantum-enhanced user interface
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mockup placeholders */}
            <Card className="group border-0 bg-slate-800/30 backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-violet-500/10">
              <CardContent className="p-8">
                <div className="aspect-[9/16] bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-violet-500/30 group-hover:border-violet-500/50 transition-all duration-300">
                  <div className="text-center">
                    <Trophy className="w-16 h-16 text-violet-400 mx-auto mb-4 drop-shadow-lg" />
                    <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto animate-pulse"></div>
                  </div>
                </div>
                <h3 className="font-bold text-center text-white mb-3 text-lg">Neural Command Center</h3>
                <p className="text-sm text-slate-300 text-center leading-relaxed">
                  Monitor your biometric data, XP progression, and neural achievements in real-time
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-slate-800/30 backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
              <CardContent className="p-8">
                <div className="aspect-[9/16] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-center">
                    <Target className="w-16 h-16 text-cyan-400 mx-auto mb-4 drop-shadow-lg" />
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mx-auto animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                <h3 className="font-bold text-center text-white mb-3 text-lg">Quantum Missions</h3>
                <p className="text-sm text-slate-300 text-center leading-relaxed">
                  AI-generated fitness quests that adapt to your biometric patterns
                </p>
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-slate-800/30 backdrop-blur-xl border border-violet-500/20 hover:border-violet-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10">
              <CardContent className="p-8">
                <div className="aspect-[9/16] bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-orange-400 mx-auto mb-4 drop-shadow-lg" />
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto animate-pulse" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
                <h3 className="font-bold text-center text-white mb-3 text-lg">Neural Network</h3>
                <p className="text-sm text-slate-300 text-center leading-relaxed">
                  Connect with fitness enthusiasts across the metaverse leaderboard
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Early Adopter Benefits */}
      <div className="relative z-10 py-24 bg-slate-900/20 backdrop-blur-sm border-y border-violet-500/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">Neural Pioneer</span> Benefits
          </h2>
          <p className="text-xl text-slate-300 mb-16 leading-relaxed">
            Be among the first neural-linked users and unlock exclusive quantum rewards
          </p>
          
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="flex flex-col items-center group">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Gift className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors">Neural Premium Access</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">First month of quantum features completely free</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Crown className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">Genesis Badge</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">Permanent "Neural Founder" achievement for your profile</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="relative mb-6">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Zap className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">Beta Neural Link</h3>
              <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">Test cutting-edge features before public release</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social & Contact */}
      <div className="relative z-10 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join the <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">Neural Collective</span>
          </h2>
          <p className="text-xl text-slate-300 mb-16 leading-relaxed">
            Connect with fellow neural pioneers and follow our quantum development journey
          </p>
          
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="outline" size="lg" className="group flex items-center space-x-3 bg-slate-800/30 border-violet-500/30 text-violet-300 hover:bg-violet-500/20 hover:border-violet-500/50 backdrop-blur-sm transition-all duration-300">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Neural Feed</span>
            </Button>
            <Button variant="outline" size="lg" className="group flex items-center space-x-3 bg-slate-800/30 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300">
              <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Neural Updates</span>
            </Button>
            <Button variant="outline" size="lg" className="group flex items-center space-x-3 bg-slate-800/30 border-orange-500/30 text-orange-300 hover:bg-orange-500/20 hover:border-orange-500/50 backdrop-blur-sm transition-all duration-300">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Neural Hub</span>
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-slate-300 mb-6 text-lg">Enterprise neural integration inquiries?</p>
            <Button variant="outline" className="group flex items-center space-x-3 mx-auto bg-slate-800/30 border-violet-500/30 text-violet-300 hover:bg-violet-500/20 hover:border-violet-500/50 backdrop-blur-sm transition-all duration-300">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Neural Contact</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900/40 backdrop-blur-xl border-t border-violet-500/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <Gamepad2 className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">LevelUp Fit</h3>
            <p className="text-slate-300 mb-8 text-lg">Neural-enhanced fitness evolution</p>
            
            <Separator className="mb-8 bg-violet-500/20" />
            
            <div className="flex justify-center space-x-8 text-sm text-slate-400 mb-8">
              <a href="#" className="hover:text-violet-300 transition-colors duration-300">Neural Privacy</a>
              <a href="#" className="hover:text-violet-300 transition-colors duration-300">Quantum Terms</a>
              <a href="#" className="hover:text-violet-300 transition-colors duration-300">Neural Support</a>
            </div>
            
            <p className="text-sm text-slate-500">
              © 2025 LevelUp Fit Neural Labs. All quantum rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App