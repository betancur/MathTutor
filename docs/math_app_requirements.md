# Documento de Requisitos del Producto (PDR)
## App de Matemáticas con Reconocimiento de Imagen

### 1. Objetivo del Producto

Desarrollar una aplicación móvil que ayude a estudiantes a reforzar el aprendizaje de matemáticas mediante el reconocimiento de ejercicios fotografiados y la implementación de un sistema de guía paso a paso basado en el método socrático.

**Problema a resolver:** Los estudiantes necesitan apoyo adicional para entender conceptos matemáticos sin que se les proporcione la solución directa, fomentando su propio proceso de aprendizaje.

### 2. Funcionalidades Principales

#### 2.1 Reconocimiento de Ejercicios
- Captura fotográfica de ejercicios matemáticos escritos a mano o impresos
- Procesamiento OCR para extraer texto matemático y símbolos
- Identificación automática del tipo de ejercicio matemático

#### 2.2 Perfil del Estudiante
- Captura de edad del estudiante (6-18 años)
- Captura de curso académico actual
- Sistema agnóstico al sistema educativo específico

#### 2.3 Sistema de Guía Socrático
- Generación de pistas progresivas basadas en el método socrático
- Adaptación automática del nivel de explicación según edad/curso
- Interacción paso a paso: una pista → espera respuesta → siguiente pista
- Retroalimentación positiva para respuestas correctas parciales

#### 2.4 Tipos de Ejercicios Soportados
- Aritmética básica (sumas, restas, multiplicaciones, divisiones)
- Álgebra (ecuaciones, sistemas de ecuaciones)
- Geometría (cálculo de áreas, teoremas)
- Cálculo (derivadas, integrales)
- Estadística y probabilidad
- Trigonometría

### 3. Flujo de Usuario

1. **Inicio:** Usuario abre la aplicación
2. **Registro/Perfil:** Ingresa edad y curso académico
3. **Captura:** Toma fotografía del ejercicio matemático
4. **Procesamiento:** App reconoce y analiza el ejercicio
5. **Guía Interactiva:**
   - App muestra primera pista adaptada al nivel del estudiante
   - Estudiante responde
   - App evalúa respuesta y proporciona retroalimentación
   - Si la respuesta es correcta/parcialmente correcta: retroalimentación positiva
   - Si la respuesta es incorrecta: pista adicional o explicación del error
   - Proceso continúa hasta resolución completa

### 4. Características Técnicas

#### 4.1 Adaptación de Nivel
- **Versión 1.0:** Adaptación automática basada en edad/curso ingresado
- **Versión 2.0:** Consideración adicional de la complejidad del ejercicio fotografiado

#### 4.2 Gestión de Respuestas
- Reconocimiento de respuestas correctas parciales
- Retroalimentación positiva inmediata
- Manejo de respuestas incorrectas con pistas adicionales
- Soporte para múltiples intentos

#### 4.3 Datos del Usuario
- **Información mínima requerida:** Edad y curso
- **Almacenamiento:** [POR DEFINIR - Pendiente de especificar]
- **Historial:** [POR DEFINIR - Pendiente de especificar]
- **Progreso:** [POR DEFINIR - Pendiente de especificar]

### 5. Requisitos Técnicos

#### 5.1 Plataforma
- [POR DEFINIR - Móvil (iOS/Android), Web, o ambas]

#### 5.2 Tecnologías Clave
- Reconocimiento óptico de caracteres (OCR) para matemáticas
- Procesamiento de lenguaje natural
- Algoritmos de análisis matemático
- Sistema de generación de pistas progresivas

#### 5.3 Rendimiento
- [POR DEFINIR - Tiempos de respuesta, precisión de OCR]

### 6. Pendientes por Definir

1. **Gestión de datos:** Tipo de información a almacenar del usuario
2. **Plataforma objetivo:** Móvil, web, o ambas
3. **Requisitos de rendimiento:** Tiempos de respuesta específicos
4. **Métricas de éxito:** KPIs para medir efectividad del aprendizaje
5. **Casos extremos:** Manejo de ejercicios muy complejos o fuera del rango de edad
6. **Interfaz de usuario:** Diseño específico y experiencia visual
7. **Monetización:** Modelo de negocio (freemium, suscripción, etc.)

### 7. Criterios de Éxito

- El estudiante debe poder resolver el ejercicio por sí mismo siguiendo las pistas
- La app no debe proporcionar la solución directa
- Las pistas deben ser apropiadas para el nivel de edad/curso del estudiante
- La retroalimentación debe mantener al estudiante motivado y comprometido

---

**Versión:** 1.0  
**Fecha:** Julio 2025  
**Estado:** Borrador - Pendiente de completar requisitos técnicos y de negocio
