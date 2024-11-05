import TokenomicsChart from '../components/TokenomicsChart';

export default function Tokenomics() {
  return (
    <div className="min-h-screen p-8 pt-20 text-white">
      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Tokenomics
          </h1>
          <p className="text-xl text-gray-300">
            Understanding the Value Focused Project Token Economy
          </p>
        </div>

        {/* Main Token Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Token Identity Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all">
            <h2 className="text-2xl font-semibold mb-6">Token Identity</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Token Name</span>
                <span className="font-semibold">Value Focused Project</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Ticker</span>
                <span className="font-mono font-semibold text-purple-400">$VFP</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Chain</span>
                <span className="font-semibold">Solana</span>
              </div>
            </div>
          </div>

          {/* Token Metrics Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all">
            <h2 className="text-2xl font-semibold mb-6">Token Metrics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Supply</span>
                <span className="font-mono font-semibold">100,000,000</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Transaction Fee</span>
                <span className="font-mono font-semibold text-green-400">0%</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Mint & Freeze</span>
                <span className="font-semibold text-red-400">Revoked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supply Visualization with TokenomicsChart */}
        <TokenomicsChart />

        {/* Additional Info Section */}
        
      </main>
    </div>
  );
}