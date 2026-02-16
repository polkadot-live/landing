import { FeatureCard } from '../Cards';

export const Features = () => (
  <section
    className="py-24 bg-white dark:bg-[#161616] border-b border-light-border dark:border-none"
    id="features"
  >
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard icon={'notifications'} title={'Notifications'}>
          In-app and native desktop alerts for transfers, staking, governance,
          and more.
        </FeatureCard>
        <FeatureCard icon={'shield'} title={'Non-Custodial'}>
          Secure hardware integration. Your private keys never leave your
          device.
        </FeatureCard>
        <FeatureCard icon={'hub'} title={'Multi-Chain'}>
          Unified interface for the Polkadot ecosystem and its system chains.
        </FeatureCard>
        <FeatureCard icon={'auto_graph'} title={'Human Insights'}>
          Complex chain data translated into clear, actionable event
          descriptions.
        </FeatureCard>
      </div>
    </div>
  </section>
);
