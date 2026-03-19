export const misApps = [
  {
    id: "donde-cargar",
    isFeatured: false,
    name: "Donde cargAR",
    description: "Aplicación líder en Argentina para consulta de precios de combustibles.",
    fullDescription: "",
    logo: "/assets/dondecargar/iconoDondeCargar.png",
    rating: { score: 3.8, count: 593 },
     version: "3.0.1",
    downloads: "220.000+",
    releaseDate: "Abril 2023",
    storeLinks: { 
        apple: "https://apps.apple.com/ar/app/id6738704543",
        google: "https://play.google.com/store/apps/details?id=com.app.dondecargar"
         },
    technologies: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "MVVM", "Dagger Hilt", "Supabase", "Firebase", "Admob"],  },

  {
    id: "onde-abastecer",
    isFeatured: false,
    name: "Onde abastecer",
    description: "Versión para Portugal del ecosistema de precios de combustibles.",
    fullDescription: "",
    logo: "/assets/ondeabastecer/iconoOndeAbastecer.png", // Asegúrate de subirlo a public/assets/
    rating: { score: 4.0, count: 11 },
    downloads: "1400+",
    version: "1.0.5",
    releaseDate: "Octubre 2025",
    technologies: ["Kotlin", "SwiftUI", "MVVM", "Supabase", "Room", "Dagger Hilt", "Admob"],
    screenshots: {
    iphone: [], // Aunque esté vacío, debe ser un array
    ipad: []    // Aunque esté vacío, debe ser un array
  },
    storeLinks: {
      apple: "https://apps.apple.com/ar/app/onde-abastecer/id6740208073",
      google: "https://play.google.com/store/apps/details?id=com.app.ondeabastecer"
    }
},

{
    id: "bencineras-chile",
    isFeatured: false,
    name: "Bencineras de Chile",
    description: "Consulta de precios de combustibles en Chile utilizando datos oficiales.",
    logo: "/assets/bencineraschile/iconobencineras.png", // Asegúrate de subirlo a public/assets/
    rating: { score: 5.0, count: 1 },
    downloads: "1000+",
    version: "1.0.3",
    releaseDate: "Enero 2025",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Supabase", "Room", "Dagger Hilt"], 
    screenshots: {
    iphone: [], // Aunque esté vacío, debe ser un array
    ipad: []    // Aunque esté vacío, debe ser un array
  },
    storeLinks: {
      apple: "",
      google: "https://play.google.com/store/apps/details?id=com.app.bencineraschile"
    }
},

{
    id: "bibl-ia",
    isFeatured: false,
    name: "Bibl-IA",
   description: "Asistente de lectura bíblica con Inteligencia Artificial Generativa.",
    fullDescription: "",
    logo: "/assets/biblia/iconobiblia.png", // Asegúrate de subirlo a public/assets/
    rating: { score: 5.0, count: 1 },
    downloads: "25+",
    version: "1.0.0",
    releaseDate: "Marzo 2026",
    technologies: ["Compose Multiplatform", "Kotlin", "SwiftUI", "Google Gemini API", "AWS S3", "Koin", "Room"],
   screenshots: {
    iphone: [], // Aunque esté vacío, debe ser un array
    ipad: []    // Aunque esté vacío, debe ser un array
  },
    storeLinks: {
      apple: "https://apps.apple.com/app/id6756578124",
      google: "https://play.google.com/store/apps/details?id=com.app.biblia.ia"
    }
},

{
    id: "tanque-cheio",
    isFeatured: false,
    name: "Tanque Cheio",
    description: "App social de estaciones de servicio en Brasil",
    logo: "/assets/tanquecheio/iconoTanqueCheio.png", // Asegúrate de subirlo a public/assets/
    rating: { score: 5.0, count: 1 },
    downloads: "10+",
    version: "1.0.0",
    releaseDate: "Febrero 2026",
    technologies: ["SwiftUI", "Compose Multiplatform", "Kotlin", "Google Gemini API", "Koin", "Room", "Datastore", "Supabase", "Admob"],
   screenshots: {
    iphone: [], // Aunque esté vacío, debe ser un array
    ipad: []    // Aunque esté vacío, debe ser un array
  },
    storeLinks: {
      apple: "https://apps.apple.com/ar/app/tanque-cheio-postos-brasil/id6759508195",
      google: "https://play.google.com/store/apps/details?id=com.app.tanquecheio"
    }
},

{
    id: "crazy-bee",
    isFeatured: false,
    name: "Crazy Bee",
    description: "Emulador de juego arcade desarrollado con tecnología multiplataforma.",
    logo: "/assets/crazybee/bee5.png", // Asegúrate de subirlo a public/assets/
    rating: { score: 5.0, count: 1 },
    downloads: "880+",
    version: "1.0.2",
    releaseDate: "Septiembre 2025",
    technologies: ["Compose Multiplatform", "Kotlin", "UI/UX Design", "AdMob"],
   screenshots: {
    iphone: [], // Aunque esté vacío, debe ser un array
    ipad: []    // Aunque esté vacío, debe ser un array
  },
    storeLinks: {
      apple: "",
      google: "https://play.google.com/store/apps/details?id=com.app.crazybee"
    }
}

];

export const appsEnDesarrollo = [
  {
    id: "proyecto-stockear",
    name: "Stockear - Control de stock",
    description: `
      <p class="mb-4">Solución inteligente de gestión de inventarios para pequeños comercios, diseñada para operar en entornos de alta movilidad mediante procesamiento de lenguaje natural y sincronización en la nube.</p>
      
      <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
        <li>Responsable del ciclo de vida completo: arquitectura de base de datos local, estrategia de monetización <strong>Freemium</strong> y despliegue en Google Play.</li>
        <li>Diseño de interfaz <strong>Material 3</strong> optimizada para la operación con una sola mano, priorizando la velocidad de captura de datos en el punto de venta.</li>
      </ul>
      
      <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
      <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
        <li>Integración de <strong>Inteligencia Artificial (Speech-to-Intent)</strong> para la creación y actualización de existencias mediante comandos de voz.</li>
        <li>Arquitectura <strong>Offline-First</strong> robusta implementando <strong>Room/SQLite</strong>, garantizando que el usuario nunca pierda datos por falta de cobertura.</li>
        <li>Desarrollo de un sistema de exportación y respaldo automatizado en <strong>Google Sheets</strong> para el análisis de inventario externo y auditoría.</li>
        <li>Validación de suscripciones en tiempo real con <strong>RevenueCat</strong> y <strong>Google Cloud Pub/Sub</strong>, asegurando la integridad del modelo de negocio.</li>
        <li>Implementación de seguridad avanzada y ofuscación de código con <strong>R8/ProGuard</strong> para proteger la lógica de negocio y las APIs integradas.</li>
      </ul>
    `,
    progress: 85,
    status: "Fase Beta",
    currentTask: "Pruebas en pasarela de pagos, pulido de UI.",
    stack: ["Compose Multiplatform", "Koin", "Room", "RevenueCat", "Datastore Preferences" ],
    emoji: "🚀"
  },

  {
    id: "miniecu",
    name: "Miniecu - CDI Digital Programable",
description: `
      <p class="mb-4">Sistema de encendido programable (CDI) de alto rendimiento para motocicletas monocilíndricas de competición. Permite el ajuste milimétrico del avance de chispa y la monitorización de telemetría del motor en tiempo real desde un dispositivo móvil.</p>
      
      <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
        <li>Desarrollo integral del ecosistema (Hardware + Software): programación del firmware base para microcontroladores e ingeniería de la aplicación de control en Android.</li>
        <li>Diseño de interfaz de usuario interactiva con gráficos dinámicos y relojes de telemetría analógicos, incluyendo un <strong>"Live Tuning D-Pad"</strong> para que los mecánicos ajusten el motor sin apagarlo (Track-side tuning).</li>
      </ul>
      
      <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
      <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
        <li>Cálculo algorítmico de extrema precisión en <strong>C puro</strong> para predecir calculo de encendido.</li>
        <li>Implementación de un protocolo de comunicación serie bidireccional personalizado a través de <strong>USB-OTG</strong>, garantizando inmunidad total a las severas interferencias electromagnéticas (EMI) del motor.</li>
        <li>Gestión reactiva de flujos de datos a alta velocidad en la app Android utilizando <strong>Kotlin Coroutines</strong> y <strong>StateFlow</strong>, manteniendo la UI de Jetpack Compose fluida y sin bloqueos.</li>
      </ul>
    `,    progress: 65,
    status: "Fase Beta",
    currentTask: "Pruebas en motor, ajustes, desarrollo de app",
    stack: ["Compose Multiplatform", "Koin", "Datastore Prefereces", "Microcontrolador PIC", "MPLAB" ],
    emoji: "🚀"
  },

  {
    id: "Matech",
    name: "Matech",
    description: `
      <p class="mb-4">Ecosistema IoT diseñado para perfeccionar la experiencia del ritual del mate. Combina hardware de precisión y una aplicación móvil para monitorear temperaturas, gestionar rondas y analizar hábitos de consumo en tiempo real.</p>
      
      <h4 class="text-sm font-bold text-emerald-500 dark:text-emerald-400 mb-2 mt-4 uppercase tracking-wider">Ingeniería del Ritual</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-emerald-500">
        <li><strong>Detección Inteligente:</strong> Implementación de una <strong>Máquina de Estados Finita</strong> que alterna la escucha entre sensores térmicos (DS18B20) para distinguir con precisión entre el acto de "cebar" y "tomar".</li>
        <li><strong>Gestión de Rondas:</strong> Lógica distribuida para el manejo de turnos de hasta 10 usuarios con sincronización bidireccional vía Bluetooth Serial.</li>
      </ul>
      
      <h4 class="text-sm font-bold text-emerald-500 dark:text-emerald-400 mb-2 mt-4 uppercase tracking-wider">Desafíos de Hardware</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-6 marker:text-emerald-500">
        <li><strong>UX Sonora y Visual:</strong> Interfaz de usuario en pantalla OLED SSD1306 con feedback auditivo diferenciado para eventos del sistema y alertas de "mate frío" programables.</li>
        <li><strong>Arquitectura Robusta:</strong> Integración de carga Li-Ion vía TP4056 con aislamiento de ruido para proteger la integridad del ESP32 durante los picos de consumo de la antena Bluetooth.</li>
      </ul>

      <div class="mt-8 p-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800/50">
        <h4 class="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2 uppercase tracking-wider flex items-center gap-2">
          <span>En Laboratorio</span> <span>🧉</span>
        </h4>
        <p class="text-sm mb-4 text-gray-700 dark:text-gray-300 italic">
          "El hardware es difícil, pero con mate es más fácil". Explora mas sobre el proyecto.
        </p>
        <a href="/matech" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95">
          Ver detrás de escena
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    `,
    progress: 85, // ¡Le subí el progreso porque ya tienes casi todo!
    status: "Fase Beta Avanzada",
    currentTask: "Optimización de consumo y pulido de UI en App",
    stack: ["Kotlin", "Jetpack Compose", "Firebase Firestore", "C++ (Arduino/ESP32)", "Bluetooth Low Energy"],
    emoji: "🧉"
}
  // En el futuro, simplemente agregás otro objeto acá separado por coma
];