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
	name: "El Mate Company",

	/** Brief app description (hero section + SEO) */
	description:
		"",
	fullDescription: "",

	/** Path to your app logo/icon */
	logo: "/assets/logo_matecompany.webp",

	/** SEO keywords for search visibility */
	keywords: ["precios combustible", "nafta argentina", "ahorrar combustible", "donde cargar", "ypf shell precios"],

	/** App store download links */
	storeLinks: {
		apple: "",
		google: "",
	},

	/** App rating and reviews */
	rating: {
		score: 0.0,
		count: "",
	},

	/** Age rating (e.g., 4+, 12+, 17+) */
	downloads: "",

	/** App version */
	version: "",

	/** Last update date */
	releaseDate: "",

	/** Social media links */
	socialLinks,

	technologies: [],

} as const;
