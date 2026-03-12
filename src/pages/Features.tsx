import { BottomHero, FeatureRow, Screens, TopHero } from '../components';
import { useTheme } from '../hooks/useTheme';

export const FeaturesPage = () => {
  const theme = useTheme();

  return (
    <>
      <TopHero />

      <div className="flex flex-col gap-8">
        {/** Feature 1 */}
        <FeatureRow
          badgeData={{
            icon: 'dashboard',
            text: 'Overview',
          }}
          imgData={{
            src: `/carousel/01-${theme}.webp`,
            pos: 'left',
            alt: 'Summary Screen',
          }}
          title={'Unified App Summary'}
          points={[
            'Event summaries for recent on-chain activity',
            'Subscription coverage at-a-glance',
          ]}
        >
          At-a-glance summary of your imported accounts, recent on-chain
          activity, extrinsic status, and subscription coverage. A unified,
          action-ready dashboard surfacing account, chain, and transaction
          insights to help you move faster.
        </FeatureRow>

        {/** Feature 2 */}
        <FeatureRow
          badgeData={{
            icon: 'event',
            text: 'Events',
          }}
          imgData={{
            src: `/carousel/02-${theme}.webp`,
            pos: 'right',
            alt: 'Events Screen',
          }}
          title={'Structured Event Viewer'}
          points={[
            'Categorized and sorted on-chain events',
            'Inspect contextual data and event-specific payloads',
          ]}
        >
          Received events are categorized and surfaced in a dedicated viewer
          with efficient loading and sorting controls. Drill into full details
          including timestamps, related accounts, and event-specific data.
        </FeatureRow>

        {/** Feature 3 */}
        <FeatureRow
          badgeData={{
            icon: 'subscriptions',
            text: 'Subscriptions',
          }}
          imgData={{
            src: `/carousel/03-${theme}.webp`,
            pos: 'left',
            alt: 'Chain Subscriptions Screen',
          }}
          title={'Flexible Subscriptions'}
          points={[
            'Fine-grained and scoped subscriptions',
            'Preview alerts and send one-time notifications',
          ]}
        >
          Follow what matters — from network-wide events to account alerts and
          referenda updates. Flexible subscription controls and dedicated
          screens make it fast to tune, preview, and manage the signals you care
          about.
        </FeatureRow>

        {/** Feature 4 */}
        <FeatureRow
          badgeData={{
            icon: 'send',
            text: 'Send',
          }}
          imgData={{
            src: `/carousel/04-${theme}.webp`,
            pos: 'right',
            alt: 'Account Subscriptions Screen',
          }}
          title={'Native Asset Transfers'}
          points={[
            'Compose and preview native asset transfers',
            'Support for transfers across major asset hub networks',
          ]}
        >
          Transfer native assets with an intuitive flow and clear fee estimates.
          Supports Polkadot, Kusama, Paseo, and Westend with multi-network
          support baked into the UI.
        </FeatureRow>

        <Screens />
      </div>

      <BottomHero />
    </>
  );
};

export default FeaturesPage;
