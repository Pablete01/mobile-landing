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

"uk-fuels": `
    <p class="mb-4">Herramienta móvil enfocada en el mercado del Reino Unido, diseñada para optimizar el gasto de combustible (gasolina y diésel) mediante un mapa interactivo en tiempo real. Funciona de manera <strong>100% anónima y privada</strong>, garantizando la privacidad del usuario al no requerir creación de cuenta ni recolección de datos personales.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Adaptación integral del producto (UI/UX) a los estándares y métricas del conductor británico.</li>
      <li>Desarrollo de un <strong>Planificador Inteligente de Rutas</strong> que permite personalizar el radio de búsqueda para descubrir las mejores ofertas a pocos minutos de autopistas y vías principales.</li>
      <li>Implementación de <strong>Perfiles de Vehículo</strong> (capacidad del tanque y tipo de combustible) que, combinados con filtros de marcas (Tesco, ASDA, Shell, BP, etc.), calculan el coste exacto de llenar el depósito incluyendo descuentos de fidelización.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Procesamiento avanzado de datos e integración de APIs para sincronizar precios precisos en tiempo real para todos los tipos de combustible local (Unleaded E10/E5, Diesel B7 y Premium).</li>
      <li>Arquitectura e implementación de un sistema de <strong>Alertas de Precios personalizadas</strong>, enviando notificaciones push instantáneas a los usuarios ante caídas de tarifas en sus estaciones favoritas.</li>
      <li>Gestión de caché local (<strong>Room Database</strong>) y arquitectura reactiva (<strong>MVVM con StateFlow</strong>) para asegurar transiciones fluidas en el mapa interactivo y soporte offline en zonas rurales con baja cobertura.</li>
      <li>Construcción de un motor de búsqueda geoespacial optimizado en el cliente para aplicar múltiples filtros simultáneos (distancia, marca, combustible) sin impacto en el rendimiento.</li>
    </ul>
  `,


"donde-repostar": `
    <p class="mb-4">Herramienta móvil diseñada para consultar los precios actualizados en España de gasolina, diésel, GLP y otros combustibles. Funciona de manera <strong>100% anónima y privada</strong>, maximizando el ahorro del conductor a través de un mapa interactivo sin requerir registro ni cesión de datos personales.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Creación de una solución integral respaldada por experiencia internacional en el desarrollo de herramientas de movilidad (Argentina, Chile, Portugal y Reino Unido).</li>
      <li>Integración de un <strong>Planificador de Rutas</strong> para visualizar y comparar gasolineras disponibles a lo largo de un trayecto específico (origen-destino).</li>
      <li>Sistema de <strong>Gestión de Tarjetas de Descuento</strong> (Repsol Waylet, Cepsa Gow, Galp, etc.) que permite a los usuarios configurar sus planes de fidelización para calcular estimaciones precisas del precio final por litro.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Consumo y normalización masiva de datos abiertos oficiales (<strong>Geoportal del Ministerio</strong>), procesando horarios y fechas exactas de actualización para más de 11.000 gasolineras a nivel nacional.</li>
      <li>Desarrollo de un algoritmo visual en el mapa interactivo (<strong>Clustering y Código de Colores</strong>) que calcula y compara en tiempo real el precio de cada estación frente a la media de su provincia.</li>
      <li>Arquitectura e implementación de un sistema de <strong>Alertas de Precios mediante Notificaciones Push</strong>, permitiendo a los usuarios monitorear variaciones de tarifas en sus estaciones favoritas.</li>
      <li>Construcción de un sistema reactivo con <strong>Coroutines y Flow</strong> para optimizar los datos del conductor, integrando Intents nativos de navegación (Google Maps, Waze) sin latencia.</li>
    </ul>
  `
  ,



  
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
  "buscoturno": `
    <p class="mb-4">Plataforma SaaS integral diseñada para optimizar la gestión de agendas y reservas online. Resuelve la fricción operativa de los prestadores de servicios al automatizar la toma de turnos y centralizar la comunicación con los clientes en un solo lugar.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Liderazgo en el diseño de producto y UI/UX, logrando una experiencia de reserva en tres pasos para maximizar la tasa de conversión de los usuarios finales.</li>
      <li>Desarrollo de un panel de administración multirubro que permite a los profesionales configurar horarios, servicios, duración de turnos y excepciones de agenda.</li>
      <li>Implementación de un sistema de gestión de clientes (CRM básico) con historial de asistencias y preferencias personalizadas.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafíos Técnicos</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Arquitectura robusta basada en <strong>React y Firebase</strong>, utilizando <strong>Firestore</strong> para la sincronización de turnos en tiempo real y prevención de colisiones (double-booking).</li>
      <li>Desarrollo de un algoritmo de disponibilidad dinámica que calcula los huecos libres basándose en la intersección de horarios laborales, duración de servicios y turnos ya existentes.</li>
      <li>Integración de lógica de servidor mediante <strong>Cloud Functions</strong> para el envío automatizado de notificaciones y recordatorios, reduciendo drásticamente el ausentismo (no-show).</li>
      <li>Diseño de una base de datos escalable para manejar múltiples comercios bajo una misma infraestructura SaaS, garantizando la privacidad y seguridad de los datos de cada cliente.</li>
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
    <p class="mb-4">Plataforma móvil totalmente rediseñada para el mercado de Portugal, orientada a maximizar el ahorro diario en combustible (Gasolina 95/98, Diésel, GLP). Con una interfaz moderna y 100% gratuita, ayuda a los conductores a localizar las estaciones más económicas en tiempo real.</p>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Proyecto y Producto</h4>
    <ul class="list-disc pl-5 space-y-1.5 mb-4 marker:text-blue-500">
      <li>Renovación integral de UI/UX, incorporando cartografía en modo oscuro y un <strong>Modo Conducción</strong> que desplaza automáticamente el mapa siguiendo la ubicación del usuario en ruta.</li>
      <li>Desarrollo de un sistema de <strong>Gestión Inteligente de Descuentos</strong> que permite configurar tarjetas de fidelidad y cupones, proyectando el precio final real directamente sobre el mapa.</li>
      <li>Integración de <strong>Estadísticas e Inteligencia Artificial (IA)</strong> para generar sugerencias de abastecimiento personalizadas y visualizar comparativas del precio actual frente a la media.</li>
      <li>Implementación de filtros avanzados (BP, Galp, Repsol, Prio, Auchan, Intermarché, E.Leclerc) y gestión de favoritos para un acceso ágil a históricos de precios.</li>
    </ul>
    
    <h4 class="text-sm font-bold text-blue-500 dark:text-blue-400 mb-2 mt-4 uppercase tracking-wider">Desafío Técnico</h4>
    <ul class="list-disc pl-5 space-y-1.5 marker:text-blue-500">
      <li>Arquitectura e implementación de un sistema de <strong>Alertas de Precios</strong> mediante notificaciones push, configurables por estación y tipo de combustible para advertir caídas de tarifas.</li>
      <li>Desarrollo de un motor de renderizado dinámico en el mapa que recalcula en tiempo real el costo por litro tras aplicar la lógica matemática de cupones y descuentos cruzados.</li>
      <li>Procesamiento en el cliente para la ingesta de datos actualizados y la generación de métricas comparativas impulsadas por IA sin comprometer el rendimiento de la aplicación.</li>
      <li>Uso de <strong>Kotlin Coroutines y StateFlow</strong> para garantizar transiciones fluidas de la UI, sincronización reactiva de la ubicación GPS y actualizaciones de precios sin latencia.</li>
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