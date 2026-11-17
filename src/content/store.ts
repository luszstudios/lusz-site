// Store items. Add one object per item; the store page builds itself from this list.
// Each item links out to where it is sold (for example its Tradera listing).
export type StoreItem = {
  name: string;
  price: string; // e.g. "450 kr"
  image: string; // file in /public/images, e.g. "/images/vinyl-coat.jpg"
  alt: string;
  href: string; // link to the listing
  sold?: boolean;
};

export const storeItems: StoreItem[] = [];
