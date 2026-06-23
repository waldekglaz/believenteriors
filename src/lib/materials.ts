// Material finishes & indicative prices.
//
// Snapshot of Egger boards from Cut Edge Bond's public price-list API
// (cutedgebond.co.uk, brand 1). Data lives in src/data/egger-finishes.json.
//
// NOTE: this is third-party supplier data. Prices are indicative and change —
// confirm with the supplier before publishing, and check you're permitted to
// reproduce their pricing/swatches. Re-pull anytime from:
//   GET https://cutedgebond.co.uk/php/products/function.php?action=productInfoFromBrand&brandId=1
import data from "@/data/egger-finishes.json";

export type FinishPrice = { thickness: number; price: number };

export type Finish = {
  code: string;
  name: string;
  group: string;
  core: string;
  boardLength: number;
  boardWidth: number;
  prices: FinishPrice[];
  swatchUrl: string | null;
};

export type FinishCatalogue = {
  source: string;
  brand: string;
  fetchedAt: string;
  currency: string;
  unit: string;
  note: string;
  count: number;
  items: Finish[];
};

export const eggerFinishes = data as FinishCatalogue;

/** Finishes grouped by their decor group (e.g. "Uni Colours"). */
export function finishesByGroup(): Record<string, Finish[]> {
  return eggerFinishes.items.reduce<Record<string, Finish[]>>((acc, item) => {
    // Fold a stray singular label into its main group.
    const group = item.group === "Uni Colour" ? "Uni Colours" : item.group;
    (acc[group] ??= []).push(item);
    return acc;
  }, {});
}
