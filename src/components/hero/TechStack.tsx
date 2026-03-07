import { memo } from "react";

interface TechStackProps {
    technologies: readonly string[] | string[];
}

const TechStack = ({ technologies }: TechStackProps) => {
    if (!technologies || technologies.length === 0) return null;

    return (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3 className="text-[14px] font-black text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">
                    Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span 
                            key={tech}
                            className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg text-s font-bold border border-gray-200 dark:border-gray-700 shadow-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default memo(TechStack);