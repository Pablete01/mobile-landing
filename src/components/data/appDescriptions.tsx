import React from "react";

export const descriptions = {

"donde-cargar": `
    <p class="mb-4">Plataforma móvil para el mercado argentino diseñada para maximizar el ahorro en combustible mediante geolocalización, cálculo predictivo y alertas de precios.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Liderazgo en la creación de una solución integral (UI/UX y desarrollo) adaptada a las necesidades de ahorro rápido de los conductores en Argentina.</li>
      <li>Más de <strong>220.000 descargas orgánicas</strong> y retención de +1.000 usuarios activos diarios.</li>
      <li>Diseño de un sistema de retención de usuarios mediante la personalización de vehículos y la gestión eficiente de estaciones de servicio favoritas.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Arquitectura e implementación de un sistema de <strong>Notificaciones Push en tiempo real (Firebase Cloud Messaging)</strong> para alertar a los usuarios sobre cambios e incrementos en los precios de los combustibles.</li>
      <li>Desarrollo de un motor de cálculo algorítmico en el cliente (app) que proyecta el costo exacto de llenar el tanque basándose en los parámetros del vehículo configurado y la estación seleccionada.</li>
      <li>Construcción de una interfaz dual reactiva (Mapa interactivo y Lista) sincronizada mediante <strong>StateFlow/Coroutines</strong>, permitiendo aplicar múltiples filtros combinados (marca bandera y tipo de combustible) sin latencia.</li>
      <li>Integración de deep linking e Intents de navegación (Google Maps) para guiar al usuario de forma fluida y exacta hacia el POI elegido.</li>
    </ul>
  `,
  "stockear": `
    <p class="mb-4">Gestor de inventario diseñado para eliminar la fricción operativa en pequeños negocios. Permite registrar y actualizar el stock en segundos utilizando la cámara (escáner de códigos de barras) y el micrófono (reconocimiento de voz) del dispositivo.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Responsable del ciclo de vida completo: conceptualización, diseño UI/UX, desarrollo y publicación en Google Play.</li>
      <li>Arquitectura centrada en el enfoque "Offline-First", garantizando velocidad extrema sin depender de conexión a internet.</li>
      <li>Desarrollo de funcionalidades clave: historial de movimientos, alertas de stock bajo y generación inteligente de listas de compras.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafíos Técnicos</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Desarrollo con <strong>Compose Multiplatform</strong>, logrando una interfaz declarativa, moderna y escalable.</li>
      <li>Integración de Google Auth y la API de Google Sheets para crear un sistema de respaldo en la nube transparente para el usuario y con coste de servidor cero.</li>
      <li>Implementación de pasarela de pagos y Paywalls mediante <strong>RevenueCat</strong>, gestionando un modelo Freemium con pase PRO de pago único (Lifetime).</li>
      <li>Manejo de hardware nativo y concurrencia para la captura fluida de datos (Speech-to-Text y escáner).</li>
    </ul>
  `,

  "crazy-bee": `
    <p class="mb-4">Emulador de juego arcade que demuestra el potencial de las tecnologías modernas de UI.</p>
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Detalles del Proyecto</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Desarrollo integral basado en <strong>Compose Multiplatform</strong> para una base de código unificada.</li>
      <li>Diseño UI/UX avanzado orientado a la experiencia del usuario en juegos móviles.</li>
      <li>Implementación de anuncios dinámicos mediante el SDK de AdMob.</li>
    </ul>
  `,

 "bencineras-chile": `
    <p class="mb-4">Herramienta integral para conductores en Chile que optimiza el ahorro de combustible mediante geolocalización interactiva y cálculo de rutas en tiempo real.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Responsable del diseño de producto, UI/UX y publicación en Google Play, enfocándose en la usabilidad rápida y sin fricciones para conductores.</li>
      <li>Creación de un sistema de personalización donde el usuario configura su vehículo para proyectar con precisión el costo de llenado del tanque según los precios actuales.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Integración avanzada de <strong>SDK de Mapas y Geolocalización</strong> para renderizar POIs (estaciones), clustering y un algoritmo de búsqueda de gasolineras a lo largo de una ruta específica.</li>
      <li>Consumo y sincronización eficiente de APIs para manejar grandes volúmenes de datos actualizados (precios, direcciones, servicios y métodos de pago).</li>
      <li>Desarrollo de filtros dinámicos complejos (por marca y tipo de combustible) con actualización de estado instantánea en la interfaz utilizando <strong>flujos reactivos en Kotlin (Coroutines/StateFlow)</strong>.</li>
      <li>Implementación de persistencia de datos local mediante <strong>Room/SQLite</strong> para la gestión rápida del sistema de favoritos y perfiles de vehículos con soporte offline-first.</li>
    </ul>
  `,

  "onde-abastecer": `
    <p class="mb-4">Plataforma móvil enfocada en el mercado de Portugal para ayudar a los conductores a encontrar las estaciones de servicio más económicas y optimizar el costo de combustible mediante geolocalización.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Desarrollo end-to-end y localización de la aplicación para el mercado europeo, asegurando una experiencia de usuario ágil y adaptada a las necesidades de los conductores portugueses.</li>
      <li>Diseño de herramientas centradas en la previsión de gastos, incluyendo la configuración de la capacidad del vehículo para proyecciones precisas y la gestión rápida de estaciones favoritas.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Integración de <strong>SDK de Mapas</strong> con renderizado avanzado de POIs y clustering.</li>
      <li>Implementación de arquitectura reactiva utilizando <strong>Kotlin Coroutines y StateFlow</strong> para ejecutar filtros en tiempo real (por tipo de combustible, marca y distancia).</li>
      <li>Desarrollo de sistema para calcular y proyectar el costo exacto de llenar el tanque, cruzando los datos configurados por el usuario con el consumo de APIs de precios actualizados.</li>
      <li>Estructuración de una base de datos local robusta mediante <strong>Room/SQLite</strong>.</li>
    </ul>
  `,

  // "onde-abastecer": `
  //   <p class="mb-4">Localización y comparativa de precios de combustible para el mercado de Portugal.</p>
  //   <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Destacados</h4>
  //   <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
  //     <li>Soporte bilingüe y adaptación de la interfaz para usuarios de habla portuguesa (C2).</li>
  //     <li>Implementación nativa con <strong>SwiftUI</strong> para garantizar el rendimiento en dispositivos iOS.</li>
  //     <li>Backend escalable con Supabase para la gestión de precios internacionales.</li>
  //   </ul>
  // `,

  "tanque-cheio": `
    <p class="mb-4">Mapa colaborativo para el mercado brasileño que revoluciona el ahorro en combustibles mediante Inteligencia Artificial.</p>
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Responsable del ciclo completo del producto: conceptualización, UI/UX, desarrollo y publicación en App Store y Google Play.</li>
      <li>Diseño de un sistema colaborativo enfocado en la retención de "early adopters" (motoristas de aplicativo) con mecánicas de gamificación.</li>
    </ul>
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Integración de la <strong>API de Google Gemini</strong> para procesamiento OCR, permitiendo extraer y actualizar precios desde la cámara del usuario en tiempo real.</li>
      <li>Desarrollo de la aplicación integrando mapas personalizados y geolocalización de POIs.</li>
      <li>Arquitectura backend serverless robusta utilizando <strong>Supabase</strong> para la sincronización de datos de la comunidad.</li>
      <li>Extacción de datos: mas de 40.000 estaciones de servicio de todo Brasil.</li>
    </ul>
  `,

  "bibl-ia": `
    <p class="mb-4">Aplicación moderna de lectura y estudio bíblico (Reina Valera 1960) que fusiona la tradición con Inteligencia Artificial para ofrecer guía espiritual personalizada.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Responsable del ciclo completo del producto: conceptualización, diseño UI/UX basado en Material 3, desarrollo y publicación en Google Play.</li>
      <li>Diseño de un sistema de perfiles locales (adaptación para niños y adultos) enfocado en la privacidad total del usuario y en personalizar la pedagogía de la IA.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Integración de la <strong>API de Google Gemini</strong> para procesamiento de lenguaje natural, permitiendo chat interactivo, resolución de dudas teológicas y búsqueda semántica basada en emociones.</li>
      <li>Desarrollo con <strong>Compose Multiplatform (Kotlin)</strong>, compartiendo lógica de negocio e interfaz de usuario entre plataformas (Android/Desktop).</li>
      <li>Arquitectura local robusta y eficiente implementando <strong>Room/SQLite</strong> para el manejo offline de las escrituras y <strong>Koin</strong> para la inyección de dependencias.</li>
      <li>Implementación de ofuscación avanzada de código (ProGuard/R8) para proteger la integridad de los datos y configuración de monetización ética con <strong>AdMob</strong>.</li>
    </ul>
  `,

};