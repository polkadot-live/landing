import { SubscriptionCard } from '../Cards';

export const Subscriptions = () => (
  <section
    className="py-32 bg-white dark:bg-background-dark"
    id="subscriptions"
  >
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold dark:font-medium text-slate-900 dark:text-white mb-4">
          Complete Subscription Control
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Choose how you want to be notified. Polkadot Live provides structured
          event items for every interaction.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <SubscriptionCard
          icon={'event_repeat'}
          kind={'balance'}
          title={'Chain Events'}
        >
          Subscribe to specific pallet events across any connected chain. Get
          notified instantly when they trigger.
        </SubscriptionCard>

        <SubscriptionCard
          icon={'bolt'}
          kind={'openGov'}
          title={'Automatic Events'}
        >
          Smart monitoring that automatically watches for high-priority events
          like staking and validator changes.
        </SubscriptionCard>

        <SubscriptionCard
          icon={'schedule'}
          kind={'staking'}
          title={'Interval Events'}
        >
          Schedule regular snapshots of OpenGov metrics like referenda vote
          counts directly in-app.
        </SubscriptionCard>
      </div>
    </div>
  </section>
);
