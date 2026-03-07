import { memo } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";


interface StoreLinks {
    apple?: string;
    google?: string;
}

const StoreButtons = ({ storeLinks }: { storeLinks: StoreLinks }) => {
    // 1. Definimos la configuración de ambos botones
    const allButtons = [
        { 
            href: storeLinks?.apple, 
            icon: FaApple, 
            label: "Download on the", 
            store: "App Store", 
            iconSize: "w-6 h-6" 
        },
        { 
            href: storeLinks?.google, 
            icon: FaGooglePlay, 
            label: "Get it on", 
            store: "Google Play", 
            iconSize: "w-5 h-5" 
        }
    ];

    // 2. FILTRADO: Solo mantenemos los botones que tienen un link válido
    // Un link válido NO es: undefined, null, "", o "#"
    const activeButtons = allButtons.filter(btn => 
        btn.href && 
        btn.href !== "#" && 
        btn.href.trim() !== ""
    );

    // 3. Si no hay botones activos, no renderizamos nada (Early return)
    if (activeButtons.length === 0) return null;

    return (
        <div className="w-full max-w-md mx-auto grid grid-cols-1 xs:grid-cols-2 gap-3 md:flex md:flex-col md:mx-0 md:w-auto md:flex-shrink-0">
            {activeButtons.map(({ href, icon: Icon, label, store, iconSize }) => (
                <a
                    key={store}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group button-base flex items-center gap-3 px-5 py-4 justify-start hover:scale-[1.02] hover:shadow-md active:scale-[0.98] transition-all duration-200 md:min-w-[200px] border border-gray-200 dark:border-white/10 rounded-xl bg-white dark:bg-white/[0.03]"
                >
                    <div className="flex items-center justify-center w-7 h-7 flex-shrink-0">
                        <Icon className={`text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white ${iconSize} transition-colors`} />
                    </div>
                    <span className="text-left min-w-0">
                        <div className="text-[10px] uppercase tracking-wider font-medium text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
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
