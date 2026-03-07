import { socialLinks } from "@social/data";

/**
 * Main app configuration
 * 
 * All core app settings in one place:
 * - Basic info: name, description, logo
 * - Store links: App Store and Google Play
 * - Version info: rating, age rating, version, OS requirements
 * - SEO: keywords for search optimization
 * - Social media: imported from components/social/data.ts
 */


export const storeDataConfig = {
	/** Set to true to fetch real data from App Store */
	fetchRealData: false,
	
	/** Numeric App ID (without "id" prefix) - find in App Store URL */
	appStoreAppId: 6738704543,
} as const;


export const appData = {
	/** Your app name (displayed everywhere) */
	name: "Donde cargAR",

	/** Brief app description (hero section + SEO) */
	description:
		"Consulta los precios actualizados de combustibles en Argentina y ahorra en cada carga.",
	fullDescription: "",

	/** Path to your app logo/icon */
	logo: "/assets/dondecargar/iconoDondeCargar.png",

	/** SEO keywords for search visibility */
	keywords: ["precios combustible", "nafta argentina", "ahorrar combustible", "donde cargar", "ypf shell precios"],

	/** App store download links */
	storeLinks: {
		apple: "https://apps.apple.com/app/id6738704543",
		google: "https://play.google.com/store/apps/details?id=com.app.dondecargar",
	},

	/** App rating and reviews */
	rating: {
		score: 4.8,
		count: "1.2K",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	downloads: "4+",

	/** App version */
	version: "1.0.0",

	/** Last update date */
	releaseDate: "Jan 10, 2026",

	/** Social media links */
	socialLinks,

	technologies: ["React Native", "Firebase", "TypeScript", "Tailwind CSS", "Maps API"],

} as const;
