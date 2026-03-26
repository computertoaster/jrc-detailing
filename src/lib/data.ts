export interface Service {
  slug: string
  name: string
  price: number | null
  priceLabel?: string
  badge?: string
  featured?: boolean
  shortDesc: string
  description: string
  features: string[]
  seoTitle: string
  seoDesc: string
}

export interface Addon {
  name: string
  price: number
}

export interface Area {
  name: string
  slug: string
  primary?: boolean
  region: string
  description: string
}

export interface GalleryImage {
  src: string
  alt: string
  label: string
  wide?: boolean
}

export const services: Service[] = [
  {
    slug: 'mini-detail',
    name: 'Mini Detail',
    price: 99,
    shortDesc: 'A quick refresh for daily drivers.',
    description: 'The Mini Detail is perfect for maintaining your vehicle between full details. A thorough wash, interior vacuum, window clean, and wheel dress keeps your car looking sharp without the full commitment.',
    features: ['Wash', 'Vacuum Interior', 'Windows Inside & Out', 'Vinyl/Plastics Cleaned', 'Interior Deodoriser', 'Wheels Cleaned & Dressed'],
    seoTitle: 'Mini Detail $99 | Quick Car Refresh | JRC Detailing Victoria Point',
    seoDesc: 'Professional mini car detail for $99 in Victoria Point & Brisbane South. Includes wash, vacuum, windows, wheel dress. Mobile service by JRC Detailing.',
  },
  {
    slug: 'interior-detail',
    name: 'Interior Detail',
    price: 189,
    shortDesc: 'Deep clean for tired interiors.',
    description: 'A comprehensive interior transformation. Every surface is cleaned, dressed, shampooed, and deodorised. Steam cleaning lifts embedded dirt from carpets and seats, leaving your cabin fresh and restored.',
    features: ['Vacuum Interior', 'Vinyl/Plastics Cleaned & Dressed', 'Shampoo/Steam Carpets & Seats', 'Interior Deodoriser', 'Windows Cleaned Inside & Out'],
    seoTitle: 'Interior Detail $189 | Deep Interior Clean | JRC Detailing',
    seoDesc: 'Professional interior car detailing for $189. Steam clean seats, carpets, plastics. Mobile service across Victoria Point, Redlands & Brisbane South.',
  },
  {
    slug: 'full-cut-and-polish',
    name: 'Full Cut & Polish',
    price: 320,
    shortDesc: 'Restore your paint to showroom condition.',
    description: 'A 3-stage machine cut and polish that removes swirl marks, light scratches, and oxidation. Includes clay bar treatment to decontaminate the paint and a sealant wax for lasting protection. Wet sanding available for deeper defects.',
    features: ['Exterior Cleaned', 'Clay Bar Treatment', '3-Stage Machine Cut & Polish', 'Sealant Wax', 'Wheels Cleaned & Dressed', 'Wet Sanding if Necessary'],
    seoTitle: 'Full Cut & Polish $320 | Paint Correction | JRC Detailing',
    seoDesc: '3-stage machine cut and polish for $320. Remove swirls, scratches, oxidation. Clay bar, sealant wax included. Mobile detailing Victoria Point & Brisbane.',
  },
  {
    slug: 'full-detail',
    name: 'Full Detail',
    price: 370,
    badge: 'Most Popular',
    shortDesc: 'Inside and out, the complete package.',
    description: 'The full treatment, inside and out. Combines a thorough interior detail with exterior wash, 1-stage polish, and wax protection. Door jams cleaned, wheels dressed, and every surface treated. The go-to package for most customers.',
    features: ['Wash', 'Vacuum Interior', 'Windows Inside & Out', 'Vinyl/Plastics Cleaned & Dressed', 'Interior Deodoriser', 'Wheels Cleaned & Dressed', 'Shampoo/Steam Clean Seats & Carpets', 'Door Jams', '1-Stage Polish + Wax'],
    seoTitle: 'Full Detail $370 | Complete Car Detail | JRC Detailing',
    seoDesc: 'Complete full car detail for $370. Interior shampoo, exterior polish & wax, door jams, wheels. Most popular mobile detailing package in Brisbane South.',
  },
  {
    slug: 'prestige-detail',
    name: 'Prestige Detail',
    price: 550,
    badge: 'Best Value',
    featured: true,
    shortDesc: 'The ultimate transformation, bumper to bumper.',
    description: 'The ultimate bumper-to-bumper transformation. A 2-stage full cut and polish restores paintwork to showroom condition. Combined with a complete interior detail, engine bay clean, headlight restoration, and black plastics restoration. Every inch of your vehicle, perfected.',
    features: ['Wash', 'Vacuum Interior', 'Vinyl/Plastics Cleaned & Dressed', 'Windows Cleaned Inside & Out', 'Interior Deodoriser', 'Wheels Cleaned & Dressed', 'Door Jams Cleaned', 'Shampoo/Steam Seats & Carpets', '2-Stage Full Cut & Polish + Wax', 'Restore Black Plastics', 'Engine Bay', 'Headlight Restoration'],
    seoTitle: 'Prestige Detail $550 | Premium Full Detail | JRC Detailing',
    seoDesc: 'Premium prestige car detail for $550. 2-stage polish, engine bay, headlight restoration, full interior. Best value mobile detailing in Brisbane South.',
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    price: null,
    priceLabel: 'Custom Quote',
    shortDesc: 'Multi-year paint protection that endures.',
    description: 'Professional-grade ceramic coating applied over fully corrected paintwork. The surface is decontaminated, clay barred, machine polished, and prepped before the coating is applied. The result is a deep, glossy finish with extreme hydrophobic properties, UV resistance, and years of protection.',
    features: ['Exterior Cleaned', 'Clay Bar Treatment', 'Machine Cut & Polished', 'Prep Wash / Wax Removal', 'Application of Paint Protection', 'Wheels Cleaned & Dressed'],
    seoTitle: 'Ceramic Coating Brisbane | Paint Protection | JRC Detailing',
    seoDesc: 'Professional ceramic coating in Victoria Point & Brisbane South. Multi-year paint protection with full paint correction. Dealership trusted. Call for quote.',
  },
]

export const addons: Addon[] = [
  { name: 'Headlight Restoration', price: 50 },
  { name: 'Dog Hair Removal', price: 40 },
  { name: 'Hydrophobic Glass Coating', price: 100 },
  { name: 'Carpet & Leather Protection', price: 120 },
]

export const areas: Area[] = [
  { name: 'Victoria Point', slug: 'victoria-point', primary: true, region: 'Redlands', description: 'Based right here in Victoria Point, JRC Detailing is your local mobile car detailing specialist. From the Lakeside shopping precinct to the residential streets around Victoria Point State School, Jesse services every corner of the suburb. Enjoy dealership-quality detailing without leaving your driveway.' },
  { name: 'Cleveland', slug: 'cleveland', region: 'Redlands', description: 'Servicing Cleveland and surrounds including Raby Bay, Cleveland Point, and the Toondah Harbour precinct. Professional mobile detailing brought directly to your home, office, or waterfront residence.' },
  { name: 'Capalaba', slug: 'capalaba', region: 'Redlands', description: 'Mobile car detailing throughout Capalaba including the business district, residential areas, and surrounding streets. Convenient at-home service for Capalaba residents and businesses.' },
  { name: 'Redland Bay', slug: 'redland-bay', region: 'Redlands', description: 'Professional detailing services throughout Redland Bay. From the marina precinct to the rural residential properties, Jesse brings premium detailing to every part of Redland Bay.' },
  { name: 'Thornlands', slug: 'thornlands', region: 'Redlands', description: 'Mobile car detailing services across Thornlands. Covering the newer estates, established residential areas, and everything in between. Premium results at your doorstep.' },
  { name: 'Wellington Point', slug: 'wellington-point', region: 'Redlands', description: 'Servicing Wellington Point from the reserve to the residential streets. Professional mobile detailing for this beautiful bayside suburb.' },
  { name: 'Ormiston', slug: 'ormiston', region: 'Redlands', description: 'Premium mobile detailing throughout Ormiston. From the heritage streetscapes to modern residences, JRC Detailing brings showroom-quality results to your door.' },
  { name: 'Alexandra Hills', slug: 'alexandra-hills', region: 'Redlands', description: 'Full mobile detailing coverage across Alexandra Hills. Conveniently located nearby, Jesse can be at your home quickly for any detailing service.' },
  { name: 'Birkdale', slug: 'birkdale', region: 'Redlands', description: 'Mobile car detailing services in Birkdale. Professional ceramic coating, paint correction, and full detailing brought to your driveway.' },
  { name: 'Sheldon', slug: 'sheldon', region: 'Redlands', description: 'Servicing the acreage properties and residential areas of Sheldon. Mobile detailing that comes to you, no matter the property size.' },
  { name: 'Mount Cotton', slug: 'mount-cotton', region: 'Redlands', description: 'Professional mobile detailing in Mount Cotton. From the rural properties to the suburban streets, JRC Detailing covers the entire area.' },
  { name: 'Wynnum', slug: 'wynnum', region: 'Bayside', description: 'Mobile car detailing throughout Wynnum and the bayside precinct. Premium detailing services for this iconic Brisbane bayside suburb.' },
  { name: 'Manly', slug: 'manly', region: 'Bayside', description: 'Servicing Manly and the harbour area. Professional mobile detailing brought to your bayside home or workplace.' },
  { name: 'Chandler', slug: 'chandler', region: 'Brisbane South', description: 'Mobile detailing services in Chandler and surrounds. Convenient, professional car care at your location.' },
  { name: 'Springwood', slug: 'springwood', region: 'Brisbane South', description: 'Full mobile detailing services across Springwood and the Logan corridor. Paint correction, ceramic coating, and full details available.' },
  { name: 'Rochedale', slug: 'rochedale', region: 'Brisbane South', description: 'Professional mobile car detailing in Rochedale and Rochedale South. Premium results delivered to your home or office.' },
  { name: 'Logan', slug: 'logan', region: 'Brisbane South', description: 'Mobile detailing services across the Logan area. From daily drivers to luxury vehicles, JRC Detailing covers Logan with professional results.' },
  { name: 'Brisbane CBD', slug: 'brisbane-cbd', region: 'Brisbane', description: 'Mobile detailing for Brisbane CBD residents and businesses. Convenient on-site detailing at your office car park or apartment building.' },
  { name: 'Brisbane South', slug: 'brisbane-south', region: 'Brisbane', description: 'Covering the entire Brisbane south side. From Woolloongabba to Sunnybank and beyond, JRC Detailing brings premium mobile car detailing across Brisbane South.' },
]

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1755288348835-dc6c29852299?w=1200&q=80&fit=crop', alt: 'Mercedes AMG in showroom', label: 'Showroom Finish', wide: true },
  { src: 'https://images.unsplash.com/photo-1565689876115-23f4019e888d?w=800&q=80&fit=crop', alt: 'Water beading on car paint', label: 'Ceramic Coating' },
  { src: 'https://images.pexels.com/photos/5233259/pexels-photo-5233259.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Machine polishing a car', label: 'Paint Correction' },
  { src: 'https://images.pexels.com/photos/4876648/pexels-photo-4876648.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Car covered in foam', label: 'Exterior Detail' },
  { src: 'https://images.unsplash.com/photo-1746969977337-1a32f800793e?w=1200&q=80&fit=crop', alt: 'BMW front grille close-up', label: 'Luxury Vehicles', wide: true },
  { src: 'https://images.unsplash.com/photo-1760161339261-56487b766a17?w=800&q=80&fit=crop', alt: 'Premium leather car interior', label: 'Interior Detail' },
]

export const heroImage = 'https://images.unsplash.com/photo-1722385640799-4ee84eb90038?w=1920&q=80&fit=crop'
export const ceramicBgImage = 'https://images.unsplash.com/photo-1565689876115-23f4019e888d?w=1920&q=80&fit=crop'
export const polishingImage = 'https://images.pexels.com/photos/5233259/pexels-photo-5233259.jpeg?auto=compress&cs=tinysrgb&w=1260'