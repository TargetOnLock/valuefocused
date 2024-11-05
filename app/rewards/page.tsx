export default function Rewards() {
  return (
    <div className="min-h-screen p-8 pt-20 text-white">
      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Rewards System
          </h1>
          <p className="text-xl text-gray-300">
            Earn rewards simply by being part of the VFP ecosystem
          </p>
        </div>

        {/* Main Rewards Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Staking Rewards Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Staking Rewards</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Earn passive rewards simply by holding and staking your $VFP tokens. A percentage of Dapp revenue is automatically distributed to stakers.
            </p>
            <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
              <p className="text-sm text-purple-300">
                No additional action required beyond staking - earn automatically!
              </p>
            </div>
          </div>

          {/* Raffle System Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Raffle System</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Participate in our provably fair raffle system for additional rewards and giveaways.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span>Entry Fee</span>
                <span className="font-mono">$1 - $2</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span>Burning Events</span>
                <span className="font-mono text-orange-400">30%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                <span>Winner Pool</span>
                <span className="font-mono text-green-400">70%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Raffle Schedule */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all mb-16">
          <h2 className="text-2xl font-semibold mb-6">Raffle Schedule</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-xl text-center">
              <div className="text-purple-400 text-lg font-semibold mb-2">Daily</div>
              <p className="text-gray-300 text-sm">
                Daily chances to win with smaller prize pools
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl text-center">
              <div className="text-blue-400 text-lg font-semibold mb-2">Weekly</div>
              <p className="text-gray-300 text-sm">
                Weekly drawings with medium-sized rewards
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl text-center">
              <div className="text-green-400 text-lg font-semibold mb-2">Monthly</div>
              <p className="text-gray-300 text-sm">
                Major monthly events with largest prize pools
              </p>
            </div>
          </div>
        </div>

        {/* Fair Play Section */}
        <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold mb-4">Provably Fair System</h2>
          <p className="text-gray-300 mb-6">
            Our smart contract includes a Provable Fair Randomizer ensuring 100% tamper-proof, fair, and accurate winner selection.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="inline-block bg-green-500/20 rounded-full px-6 py-2 text-green-400 font-semibold">
              Tamper Proof
            </div>
            <div className="inline-block bg-green-500/20 rounded-full px-6 py-2 text-green-400 font-semibold">
              100% Fair
            </div>
            <div className="inline-block bg-green-500/20 rounded-full px-6 py-2 text-green-400 font-semibold">
              Smart Contract Verified
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}