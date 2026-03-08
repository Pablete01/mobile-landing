import AppInfo from "@hero/AppInfo";
import StoreButtons from "@hero/StoreButtons";
import type { AppHeroProps } from "@t/layout";
import { motion } from "framer-motion";
import { memo } from "react";
import TechStack from "./TechStack";

const AppHero = ({ name, description, fullDescription, storeLinks, logo, rating, downloads, version, minimumOS, releaseDate, technologies }: AppHeroProps) => (
	<motion.div
	    layout
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}>
	<div className="mb-16 flex flex-col md:flex-row gap-8 items-start"
	>
		<AppInfo
			name={name}
			description={description}
			fullDescription={fullDescription || "No llegó la descripción"}
			logo={logo}
			rating={rating}
			downloads={downloads}
			version={version}
			minimumOS={minimumOS}
			releaseDate={releaseDate}
		/>
		<StoreButtons storeLinks={storeLinks} />
		</div>
		<TechStack technologies={technologies || []} />
	</motion.div>
);

export default memo(AppHero);
