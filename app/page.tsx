import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/VFP3.png"
              alt="Value Focused Project"
              width={400}
              height={400}
              className="max-w-full h-auto"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl mb-8">
            Building the Future of DeFi on Solana
          </p>
          <div className="flex gap-4 items-center justify-center">
            <a
              className="rounded-full bg-purple-600 text-white px-8 py-4 hover:bg-purple-700 transition-colors text-lg font-semibold"
              href="#"
            >
              Launch App
            </a>
            <a
              className="rounded-full border-2 border-white px-8 py-4 hover:bg-white/10 transition-colors text-lg font-semibold"
              href="#"
            >
              Read Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-2">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-4">Innovative DeFi</h3>
              <p className="text-gray-200">
                Revolutionary DeFi protocols designed for sustainable growth and value creation.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-4">Community Driven</h3>
              <p className="text-gray-200">
                Governance and decision-making powered by our active community.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
              <h3 className="text-xl font-semibold mb-4">Solana Powered</h3>
              <p className="text-gray-200">
                Leveraging Solana's speed and efficiency for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our community and be part of the future of DeFi on Solana.
          </p>
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://twitter.com/vfp2day"
              className="bg-black/30 p-3 rounded-full hover:bg-black/50 transition-all transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/x-logo.svg"
                alt="Follow on X (Twitter)"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
            
            <a
              href="https://t.me/ValueFocusedProject"
              className="bg-[#229ED9]/30 p-3 rounded-full hover:bg-[#229ED9]/50 transition-all transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/telegram-logo.svg"
                alt="Join Telegram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners & Integrations</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {/* DexTools */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://www.dextools.io/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/dextools.png"
                  alt="DexTools"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>

            {/* DexScreener */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/dexscreener.png"
                  alt="DexScreener"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>

            {/* Birdeye */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://birdeye.so/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/birdeye.png"
                  alt="Birdeye"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>

            {/* Solana */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://solana.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/solanaLogo.png"
                  alt="Solana"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>

            {/* Solscan */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://solscan.io/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/solscan-logo-dark.svg"
                  alt="Solscan"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>

            {/* CoinGecko */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://coingecko.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/coingecko.png"
                  alt="CoinGecko"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>
            {/* CoinMarketCap */}
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group flex items-center justify-center">
              <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <Image
                  src="/coinmarketcap.png"
                  alt="CoinMarketCap"
                  width={200}
                  height={200}
                  className="opacity-70 group-hover:opacity-100 transition-opacity object-contain max-h-[100px] w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
