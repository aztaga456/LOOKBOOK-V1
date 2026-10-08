export type Language = 'id' | 'en';

export interface TierPrice {
  paxRange: string;
  minPax: number;
  maxPax: number;
  tanpaHotel: number;
  bintang2: number;
  bintang3: number;
  bintang4: number;
  bintang5: number;
}

export interface HotelEntry {
  stars: number;
  hotels: string[];
}

export interface HotelLocation {
  location: string;
  tiers: HotelEntry[];
}

export interface PackageItem {
  id: string;
  name: { id: string; en: string };
  location: { id: string; en: string };
  shortDescription: { id: string; en: string };
  duration: { id: string; en: string };
  price: number; // base / start from price
  priceUnit: { id: string; en: string };
  rating: number;
  reviewsCount: number;
  image: string;
  category: 'stay' | 'snorkeling' | 'oneday';
  highlights?: { id: string; en: string }[];
  itinerary: { timeOrDay: string; title: { id: string; en: string }; desc: { id: string; en: string } }[];
  inclusions: { id: string; en: string }[];
  exclusions: { id: string; en: string }[];
  tierPrices?: TierPrice[];
  maxPax?: number;
  minPax?: number;
}

export interface BookingFormData {
  customerName: string;
  whatsapp: string;
  email?: string;
  travelDate: string;
  adults: number;
  children: number;
  hotelOption?: 'tanpa' | 'bintang2' | 'bintang3' | 'bintang4' | 'bintang5';
  note?: string;
}

export interface BookingResult extends BookingFormData {
  bookingCode: string;
  packageItem: PackageItem;
  totalPrice: number;
  status: 'Baru' | 'Dikonfirmasi' | 'Lunas' | 'Selesai' | 'Batal';
  createdAt: string;
}
