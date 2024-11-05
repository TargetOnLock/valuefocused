import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen p-8 pt-20 font-[family-name:var(--font-geist-sans)] text-white">
      <main className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Add Image */}
          <div className="mb-8">
            <Image
              src="/VFP1.png"
              alt="VFP Logo"
              width={500}
              height={500}
            />
          </div>
          
          <div className="w-full max-w-3xl bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About Value Focused Project (VFP)
            </h1>
            
            <div className="space-y-6 text-lg">
              <p className="text-gray-200">
                Value Focused Project (VFP) is driven by a dedicated team with a clear mission: to bring the most rewarding and fair degen cash games and raffle system to the Solana community. Our platform is designed to offer an exciting array of opportunities, from daily prizes to exclusive rewards, ensuring that users enjoy the thrill of gaming while earning tangible value.
              </p>

              <p className="text-gray-200">
                Our referral system allows you to earn Value Points, which can be redeemed for $VFP tokens and more. Additionally, you'll have the option to gift raffle tickets to others, enhancing the community experience. With custom developments underway, we're expanding to integrate our games and rewards system into Telegram in our Phase 2 rollout, offering even more ways to engage and win.
              </p>

              <p className="text-gray-200">
                At VFP, we prioritize user experience to make gaming not just profitable, but also enjoyable. Join us and discover a new world of degen games, raffles, and rewards – where you can win big while having fun.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}