export type Location = {
  name: string
  slug: string
  serviceAreas?: string[]
  region: string
}

export type LocationGroup = {
  region: string
  locations: Location[]
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Define the 30 locations with regions
const rawLocations: { name: string; region: string; serviceAreas?: string[] }[] = [
  // North / Northeast (first 9)
  { name: "Tucker", region: "North / Northeast" },
  { name: "Norcross", region: "North / Northeast" },
  { name: "Peachtree Corners", region: "North / Northeast" },
  { name: "Lilburn", region: "North / Northeast" },
  { name: "Snellville", region: "North / Northeast" },
  { name: "Lawrenceville", region: "North / Northeast" },
  { name: "Sugar Hill", region: "North / Northeast" },
  { name: "Duluth", region: "North / Northeast" },
  { name: "Suwanee", region: "North / Northeast" },

  // East Atlanta (10 - 15)
  { name: "Decatur", region: "East Atlanta" },
  { name: "Avondale Estates", region: "East Atlanta" },
  { name: "Stone Mountain", region: "East Atlanta" },
  { name: "Clarkston", region: "East Atlanta" },
  { name: "Chamblee", region: "East Atlanta" },
  { name: "Doraville", region: "East Atlanta" },

  // Central / Intown (Accessible Areas) (16 - 23)
  { name: "East Atlanta Village", region: "Central / Intown " },
  { name: "Grant Park", region: "Central / Intown " },
  { name: "Ormewood Park", region: "Central / Intown " },
  { name: "Kirkwood", region: "Central / Intown " },
  { name: "Edgewood", region: "Central / Intown " },
  { name: "Candler Park", region: "Central / Intown " },
  { name: "Virginia-Highland", region: "Central / Intown " },
  { name: "Inman Park", region: "Central / Intown " },

  // South / Southwest (Middle Income) (24 - 27)
  { name: "East Point", region: "South / Southwest " },
  { name: "College Park", region: "South / Southwest " },
  { name: "Hapeville", region: "South / Southwest " },
  { name: "Union City", region: "South / Southwest " },

  // West / Northwest (28 - 30)
  { name: "Smyrna", region: "West / Northwest" },
  { name: "Austell", region: "West / Northwest" },
  { name: "Powder Springs", region: "West / Northwest" },
]

// Map into full Location objects
export const locations: Location[] = rawLocations.map((r) => ({
  name: r.name,
  slug: slugify(r.name),
  region: r.region,
  serviceAreas: r.serviceAreas ?? [r.name],
}))

// Grouped for rendering
const regionOrder = [
  "North / Northeast",
  "East Atlanta",
  "Central / Intown ",
  "South / Southwest ",
  "West / Northwest",
]

export const groupedLocations = regionOrder.map((region) => ({
  region,
  locations: locations.filter((l) => l.region === region),
}))

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug)
}
