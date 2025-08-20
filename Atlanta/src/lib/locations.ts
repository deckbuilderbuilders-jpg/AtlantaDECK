export interface Location {
  name: string
  serviceAreas: string[]
  inService: boolean
}

export interface ServiceArea {
  name: string
  locations: string[]
  inService: boolean
}

export type IndividualLocation = {
  name: string
  slug: string
  serviceAreas?: string[]
  region: string
}

export type LocationGroup = {
  region: string
  locations: IndividualLocation[]
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Existing service areas structure for current website functionality
export const serviceAreas: ServiceArea[] = [
  {
    name: "NORTH ATLANTA",
    locations: [
      "Alpharetta",
      "Johns Creek",
      "Roswell",
      "Sandy Springs",
      "Dunwoody",
      "Brookhaven",
      "Chamblee",
      "Doraville",
      "Norcross",
      "Peachtree Corners",
    ],
    inService: true,
  },
  {
    name: "NORTHEAST ATLANTA",
    locations: [
      "Tucker",
      "Stone Mountain",
      "Lilburn",
      "Snellville",
      "Lawrenceville",
      "Duluth",
      "Suwanee",
      "Buford",
      "Sugar Hill",
    ],
    inService: true,
  },
  {
    name: "NORTHWEST ATLANTA",
    locations: [
      "Marietta",
      "Kennesaw",
      "Acworth",
      "Woodstock",
      "Canton",
      "Smyrna",
      "Vinings",
      "Powder Springs",
      "Dallas",
    ],
    inService: true,
  },
  {
    name: "CENTRAL ATLANTA",
    locations: [
      "Atlanta",
      "Decatur",
      "Avondale Estates",
      "Clarkston",
      "Pine Lake",
      "Scottdale",
      "Tucker",
      "North Druid Hills",
    ],
    inService: true,
  },
  {
    name: "SOUTH ATLANTA",
    locations: [
      "East Point",
      "College Park",
      "Hapeville",
      "Forest Park",
      "Morrow",
      "Jonesboro",
      "Riverdale",
      "Stockbridge",
    ],
    inService: true,
  },
]

const rawIndividualLocations: { name: string; region: string; serviceAreas?: string[] }[] = [
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
  { name: "East Atlanta Village", region: "Central / Intown" },
  { name: "Grant Park", region: "Central / Intown" },
  { name: "Ormewood Park", region: "Central / Intown" },
  { name: "Kirkwood", region: "Central / Intown" },
  { name: "Edgewood", region: "Central / Intown" },
  { name: "Candler Park", region: "Central / Intown" },
  { name: "Virginia-Highland", region: "Central / Intown" },
  { name: "Inman Park", region: "Central / Intown" },

  // South / Southwest (Middle Income) (24 - 27)
  { name: "East Point", region: "South / Southwest" },
  { name: "College Park", region: "South / Southwest" },
  { name: "Hapeville", region: "South / Southwest" },
  { name: "Union City", region: "South / Southwest" },

  // West / Northwest (28 - 30)
  { name: "Smyrna", region: "West / Northwest" },
  { name: "Austell", region: "West / Northwest" },
  { name: "Powder Springs", region: "West / Northwest" },
]

export const individualLocations: IndividualLocation[] = rawIndividualLocations.map((r) => ({
  name: r.name,
  slug: slugify(r.name),
  region: r.region,
  serviceAreas: r.serviceAreas ?? [r.name],
}))

const regionOrder = ["North / Northeast", "East Atlanta", "Central / Intown", "South / Southwest", "West / Northwest"]

export const groupedLocations = regionOrder.map((region) => ({
  region,
  locations: individualLocations.filter((l) => l.region === region),
}))

export function getLocationBySlug(slug: string) {
  return individualLocations.find((l) => l.slug === slug)
}

// Legacy locations array for backward compatibility
export const locations: Location[] = serviceAreas.flatMap((area) =>
  area.locations.map((location) => ({
    name: location.toUpperCase(),
    serviceAreas: [location],
    inService: area.inService,
  })),
)

