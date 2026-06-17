# MAUCAPE - Sitio Web Profesional

## Descripción
Sitio web profesional para Maucape, empresa especializada en:
- **BTL (Below The Line)**: Marketing directo y experiencial
- **Desarrollo**: Soluciones tecnológicas personalizadas
- **Creatividad**: Conceptos innovadores y diseño impactante
- **Construcción**: Ejecución de proyectos completos

## Estructura del Proyecto

```
maucape/
├── index.html           # Página principal
├── css/
│   └── styles.css      # Estilos y diseño responsive
├── js/
│   └── script.js       # Funcionalidad e interactividad
├── assets/
│   └── images/         # Carpeta para imágenes
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

## Secciones del Sitio

1. **Navegación**: Menú sticky con links a todas las secciones
2. **Hero Section**: Presentación impactante con call-to-action
3. **Sobre Nosotros**: Información de la empresa y estadísticas
4. **Servicios**: Desarrollo, Creatividad y Construcción
5. **Proyectos**: Portfolio de trabajos realizados
6. **Contacto**: Formulario y datos de contacto
7. **Footer**: Enlaces rápidos y redes sociales

## Características

✅ Diseño **Responsive** (mobile, tablet, desktop)
✅ **Animaciones suave** y efectos hover
✅ **Menú hamburguesa** para dispositivos móviles
✅ **Smooth scroll** en navegación
✅ Formulario de contacto funcional
✅ Colores y tipografía profesionales
✅ **Optimizado** para velocidad

## Tecnologías Usadas

- HTML5
- CSS3 (Flexbox, Grid, Gradientes)
- JavaScript Vanilla
- Font Awesome (iconos)

## Paleta de Colores

- **Primario**: #667eea (Azul Púrpura)
- **Secundario**: #764ba2 (Púrpura Oscuro)
- **Acento**: #f093fb (Rosa)
- **Fondo Oscuro**: #1a1a1a
- **Fondo Claro**: #f8f9fa

## Cómo Personalizar

### 1. Cambiar Información de Contacto
En `index.html`, busca la sección "Contacto" y actualiza:
- Teléfono
- Email
- Ubicación
- Enlaces de redes sociales

### 2. Agregar Proyectos
En la sección de Proyectos, duplica un `project-card` y actualiza:
- Colores del gradiente
- Título del proyecto
- Descripción

### 3. Cambiar Colores
En `css/styles.css`, modifica las variables en `:root`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### 4. Agregar Imágenes
Crea la carpeta `assets/images/` y añade tus imágenes, luego reemplaza los backgrounds en los cards.

## Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/Daniela210701/maucape.git

# Navegar al directorio
cd maucape

# Abrir en tu navegador
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## Próximas Mejoras

- [ ] Integración con backend para formulario de contacto
- [ ] Base de datos de proyectos
- [ ] Blog o sección de noticias
- [ ] Galería de imágenes mejorada
- [ ] SEO optimizado
- [ ] Análisis con Google Analytics

## Contacto

**MAUCAPE**
- 📧 Email: info@maucape.com
- 📱 Teléfono: +57 (1) 2345-6789
- 📍 Ubicación: Bogotá, Colombia

---

**Versión**: 1.0.0  
**Última actualización**: 2024