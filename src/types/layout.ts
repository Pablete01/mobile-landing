import type { SocialLink } from "./content";
import type { StoreData } from "./store";

export interface LayoutWithAppDataProps {
	name: string;
	description?: string;
	appData?: Partial<StoreData> & {
		name: string;
		logo: string;
		description: string;
		storeLinks: { apple: string; google: string };
	};
}

export interface AppHeroProps {
	name: string;
	description: string;
	fullDescription?: React.ReactNode;
	logo: string;
	storeLinks: { apple: string; google: string };
	rating: { score: number; count: string };
	downloads: string;
	version?: string;
	minimumOS?: string;
	releaseDate?: string;
	technologies?: string[];
}

export interface FloatingNavbarProps {
	logo: string;
	title: string;
	storeLinks: { apple: string; google: string };
	socialLinks: SocialLink[];
}
