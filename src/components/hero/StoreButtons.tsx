import { memo } from "react";
import { FaApple, FaGlobe } from "react-icons/fa"; // Importamos FaGlobe para la web

interface StoreLinks {
    apple?: string;
    google?: string;
    web?: string; // 1. Nueva propiedad opcional
}

const StoreButtons = ({ storeLinks }: { storeLinks: StoreLinks }) => {
    const allButtons = [
        { 
            store: "App Store", 
            href: storeLinks?.apple, 
            label: "Download on the", 
            icon: FaApple, 
            isImage: false,
            src: undefined,
            iconSize: "w-7 h-7" 
        },
        { 
            store: "Google Play", 
            href: storeLinks?.google, 
            label: "Get it on", 
            icon: undefined, 
            isImage: true,
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg",
            iconSize: "w-6 h-6" 
        },
        // 2. Agregamos el botón de Website
        { 
            store: "Sitio Web", 
            href: storeLinks?.web, 
            label: "", 
            icon: FaGlobe, 
            isImage: false,
            src: undefined,
            iconSize: "w-6 h-6" 
        }
    ];

    const activeButtons = allButtons.filter(btn => 
        btn.href && 
        btn.href !== "#" && 
        btn.href.trim() !== ""
    );

    if (activeButtons.length === 0) return null;

    return (
        <div className="w-full max-w-md mx-auto grid grid-cols-1 xs:grid-cols-2 gap-3 md:flex md:flex-col md:mx-0 md:w-auto md:flex-shrink-0">
            {activeButtons.map(({ href, icon: Icon, src, isImage, label, store, iconSize }) => (
                <a
                    key={store}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group button-base flex items-center gap-3 px-5 py-4 justify-start hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-200 md:min-w-[200px] border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/[0.03]"
                >
                    <div className="flex items-center justify-center w-7 h-7 flex-shrink-0">
                        {isImage && src ? (
                            <img 
                                src={src} 
                                alt={`${store} logo`} 
                                className={`${iconSize} object-contain transition-transform group-hover:scale-105`} 
                            />
                        ) : (
                            Icon && <Icon className={`text-black dark:text-white ${iconSize} transition-transform group-hover:scale-105`} />
                        )}
                    </div>
                    <span className="text-left min-w-0">
                        <div className="text-[10px] uppercase tracking-wider font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                            {label}
                        </div>
                        <div className="text-base font-semibold tracking-wide text-gray-900 dark:text-white transition-colors">
                            {store}
                        </div>
                    </span>
                </a>
            ))}
        </div>
    );
};

export default memo(StoreButtons);