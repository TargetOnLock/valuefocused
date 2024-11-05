export default function Roadmap() {
  return (
    <div className="min-h-screen p-8 pt-20 text-white">
      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Roadmap
          </h1>
          <p className="text-xl text-gray-300">
            Our journey to building the ultimate VFP ecosystem
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

          {/* Phase 1 */}
          <div className="relative mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Phase 1: The Sweet Ride
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all">
              <div className="space-y-4">
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Establish community engagement and Social Media growth</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>200+ Telegram Members</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Raise Presale Funds</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Organize KOLs & Partnerships for Marketing</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Organize a Social Media Team and administration</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                    <span>Launch "Value Focused Project" token on the Solana blockchain Successfully</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Phase 2: Growth & Development
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-blue-500/50 transition-all">
              <div className="space-y-4">
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>CG & CMC Listing</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>Tier 3 Exchange Listings</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>Engage with the community and build a strong network of holders</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>500+ Telegram Members</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>Organize community events inspired by Napoleon Dynamite</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>Finalize our Ballot Voting DApp and Revenue Share Integration</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    <span>Projected Treasury Growth for Syndication Programs & partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-indigo-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Phase 3: DApp Launch
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-indigo-500/50 transition-all">
              <div className="space-y-4">
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                    <span>750+ Telegram Members</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                    <span>Tier 2 Exchange Listings</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                    <span>Public Launch of the voting DApp (1 Vote = $1 Tokens = 1 Entry)</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                    <span>Enable community participation and governance through voting mechanisms</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                    <span>Deflationary Mechanism - "Rex Kwon Do Training"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-violet-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Phase 4: Expansion
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-violet-500/50 transition-all">
              <div className="space-y-4">
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                    <span>1,000+ Telegram Members</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                    <span>Tier 1 Exchange Listings</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                    <span>Introduce the deflationary aspect to the token ecosystem</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                    <span>Conduct live drawings with token burns</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                    <span>Forge strategic partnerships and integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Steps */}
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold">
                Final Steps & Ongoing Development
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-green-500/50 transition-all">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Continuation Growth</h3>
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Focus on long-term growth and sustainability</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Launch additional features to enhance token utility</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Regular updates and community-driven enhancements</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span>Sustain and evolve the token ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}