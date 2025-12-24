import * as Analytics from 'expo-firebase-analytics';

export async function logSearch(origin: string, destination: string) {
  await Analytics.logEvent('search', { origin, destination });
}

export async function logAffiliateClick(partner: string, userId: string) {
  await Analytics.logEvent('affiliate_click', { partner, userId });
}
