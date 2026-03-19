import RatingStars from "@reviews/RatingStars";
import type { AppInfoProps } from "@t/components";
import { useState, memo } from "react";

const AppInfo = ({ name, description, fullDescription, logo, rating, downloads, version, minimumOS, releaseDate }: AppInfoProps) => {
    // 1. DECLARACIONES (Esto está bien)
    const [isExpanded, setIsExpanded] = useState(false);
    console.log("¿Llega la descripción larga?:", fullDescription);

    // 2. ¡FALTABA ESTE RETURN! 
    return ( 
        <div className="flex flex-1 flex-col md:flex-row gap-8 items-start text-center md:text-left">
            <div className="flex-shrink-0 self-center md:self-start">
                {/* ... resto del código del logo ... */}
                <div className="group/icon rounded-2xl border border-gray-200/50 dark:border-white/10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.02] dark:to-white/[0.05] p-7 w-56 h-56 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                 src={logo} 
                 alt={`${name} Icon`} 
                     /* Cambiamos h-48 por h-32 y object-cover por object-contain */
                 className="h-32 w-32 rounded-2xl object-contain group-hover/icon:scale-105 transition-transform duration-300" 
                   />
                </div>
            </div>

            <div className="flex flex-1 flex-col">
                <h1 className="text-4xl font-bold text-heading mb-3">{name}</h1>

                {/* Línea de Rating y Descargas */}
              {/*}  <div className="flex items-center gap-3 mb-4 justify-center md:justify-start flex-wrap">
                    <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-white/[0.05] px-2 py-1 rounded-md">
                        <RatingStars rating={rating?.score || 0} />
                        <span className="text-sm font-bold text-heading ml-1">{rating?.score || 0}</span>
                        <span className="text-xs text-body">({rating?.count || 0})</span>
                    </div>
                    
                    {downloads && (
                        <div className="px-2 py-1 rounded-md border border-blue-200 dark:border-blue-900/30 bg-blue-50 dark:bg-blue-900/20 text-xs font-bold text-blue-600 dark:text-blue-400">
                            {downloads} descargas
                        </div>
                    )}
                </div> 
              */}

                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    {version && <span>Versión {version}</span>}
                    {releaseDate && <span>• Lanzamiento: {releaseDate}</span>}
                </div>

                <div className="text-lg text-body leading-relaxed max-w-2xl mx-auto md:mx-0">
                    <div> 
                        <span>{description}</span>
                        {fullDescription && (
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsExpanded(!isExpanded);
                                }}
                                className="ml-2 text-blue-500 font-bold hover:underline text-sm inline-block cursor-pointer"
                            >
                                {isExpanded ? "Leer menos" : "Ver detalles del proyecto"}
                            </button>
                        )}
                    </div>

                  {isExpanded && fullDescription && (
    <div className="mt-4 p-5 text-left bg-white dark:bg-white/[0.02] rounded-xl border border-gray-100 dark:border-white/5 text-sm text-gray-700 dark:text-gray-300 shadow-inner">
        {/* Cambiamos la forma de renderizar fullDescription */}
        <div 
            className="animate-in fade-in slide-in-from-top-2 duration-300"
            dangerouslySetInnerHTML={{ __html: fullDescription }}
        />
    </div>
)}
                </div>
            </div>
        </div>
    ); // Fin del return
};
export default memo(AppInfo);
