export function withUtm(url: string, source: string, campaign: string, userId: string) {
  return `${url}?utm_source=${source}&utm_campaign=${campaign}&uid=${userId}`;
}
export function affiliateLink(vendor: string, url: string, uid: string) {
  return `${url}?aff_id=${vendor}&uid=${uid}`;
}

export function bookingLink(hotelUrl: string, uid: string) {
  return `${hotelUrl}?aid=SEU_AID&label=${uid}`;
}
