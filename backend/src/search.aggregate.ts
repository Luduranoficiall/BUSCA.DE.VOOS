import { bookingLink } from "./affiliates";

type Flight = { price: { total: number }, itineraries: { segments: { carrierCode: string }[] }[], deepLink: string };
type Hotel = { name: string, price: number, url: string };
type Tour = { title: string, price: number, url: string };

export function normalizeResults(
  flights: Flight[],
  hotels: Hotel[],
  tours: Tour[],
  userId: string
): {
  flights: { price: number, carrier: string, link: string }[],
  hotels: { name: string, price: number, link: string }[],
  tours: { title: string, price: number, link: string }[]
} {
  return {
    flights: flights.map((f) => ({
      price: f.price.total,
      carrier: f.itineraries[0].segments[0].carrierCode,
      link: f.deepLink + `&uid=${userId}`
    })),
    hotels: hotels.map((h) => ({
      name: h.name,
      price: h.price,
      link: bookingLink(h.url, userId)
    })),
    tours: tours.map((t) => ({
      title: t.title,
      price: t.price,
      link: t.url + `?partner_id=${userId}`
    }))
  };
}
