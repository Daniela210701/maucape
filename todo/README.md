# 📝 To-Do List Application

Una aplicación de lista de tareas moderna, interactiva y funcional con almacenamiento local.

## ✨ Características

### Funcionalidades Principales
- ✅ **Agregar tareas** con texto personalizado
- 🎯 **Prioridades** (Baja, Media, Alta)
- ☑️ **Marcar como completada** tareas
- ✏️ **Editar tareas** existentes
- 🗑️ **Eliminar tareas** individuales
- 🔍 **Filtrar tareas** por estado y prioridad
- 💾 **Almacenamiento Local** - Persisten los datos
- 📊 **Estadísticas** en tiempo real (Total, Completadas, Pendientes)
- 🔔 **Notificaciones Toast** para acciones
- ⚠️ **Modal de confirmación** para acciones destructivas

### Filtros Disponibles
- 📋 Todas las tareas
- ⏳ Solo tareas pendientes
- ✔️ Solo tareas completadas
- 🔥 Solo tareas de alta prioridad

### Acciones por Lote
- 🧹 Limpiar todas las tareas completadas
- 🧹 Limpiar todas las tareas

## 🎨 Interfaz

### Diseño
- Tema oscuro con gradientes modernos
- Diseño 100% responsive
- Animaciones suaves
- Interfaz intuitiva

### Colores
- **Primario**: #667eea (Azul Púrpura)
- **Secundario**: #764ba2 (Púrpura Oscuro)
- **Éxito**: #10b981 (Verde)
- **Advertencia**: #f59e0b (Amarillo)
- **Peligro**: #ef4444 (Rojo)

## 🚀 Cómo Usar

### 1. Agregar una Tarea
```
1. Escribe el texto de la tarea en el campo de entrada
2. Selecciona la prioridad (Baja, Media, Alta)
3. Haz clic en el botón "+" o presiona Enter
```

### 2. Marcar como Completada
```
Haz clic en el checkbox a la izquierda de la tarea
```

### 3. Editar una Tarea
```
Haz clic en el botón de edición (lápiz)
```

### 4. Eliminar una Tarea
```
Haz clic en el botón de eliminar (papelera)
```

### 5. Filtrar Tareas
```
Haz clic en uno de los botones de filtro:
- Todas
- Pendientes
- Completadas
- Alta Prioridad
```

## 💾 Almacenamiento Local

Las tareas se guardan automáticamente en `localStorage` del navegador. Esto significa:
- ✅ Las tareas persisten al cerrar el navegador
- ✅ No requiere base de datos
- ✅ Funciona offline
- ✅ Los datos se mantienen hasta que los elimines

## 📱 Responsividad

La aplicación es completamente responsive:
- 🖥️ Desktop: Interfaz completa
- 📱 Tablet: Diseño ajustado
- 📲 Mobile: Optimizado para pantallas pequeñas

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Diseño moderno con animaciones
- **JavaScript Vanilla**: Lógica e interactividad
- **Local Storage API**: Persistencia de datos
- **Font Awesome 6**: Iconos

## 📂 Estructura de Archivos

```
todo/
├── index.html      # Estructura HTML
├── styles.css      # Estilos y animaciones
├── script.js       # Lógica y funcionalidades
└── README.md       # Documentación
```

## 🔧 Estructura de Datos

Cada tarea se almacena como objeto:
```javascript
{
    id: 1234567890,           // ID único basado en timestamp
    text: "Mi tarea",         // Texto de la tarea
    completed: false,         // Estado de completación
    priority: "medium",       // Prioridad: low, medium, high
    createdAt: 1234567890000  // Timestamp de creación
}
```

## 🎯 Ejemplos de Uso

### Agregar tarea de alta prioridad
1. Selecciona "Alta" en el selector de prioridad
2. Escribe: "Reunión importante a las 3pm"
3. Presiona Enter

### Filtrar tareas pendientes
1. Haz clic en el botón "Pendientes"
2. Solo verás las tareas no completadas

### Limpiar todas las completadas
1. Haz clic en "Limpiar Completadas"
2. Confirma en el modal
3. Se eliminarán todas las tareas completadas

## 💡 Tips

- 💾 Las tareas se guardan automáticamente
- ⌨️ Presiona Enter para agregar rápidamente
- 🎯 Usa diferentes prioridades para organizar mejor
- 🔍 Filtra por estado para ver lo que necesitas
- 📊 Las estadísticas se actualizan en tiempo real

## 🐛 Solución de Problemas

### Las tareas no se guardan
- Verifica que Local Storage esté habilitado en tu navegador
- Asegúrate de no estar en modo incógnito

### No puedo editar una tarea
- Haz clic en el botón de editar (lápiz)
- Actualiza el texto en la ventana emergente

### ¿Cómo elimino todos los datos?
- Haz clic en "Limpiar Todo"
- O borra el localStorage manualmente desde las DevTools del navegador

## 🚀 Futuras Mejoras

- [ ] Exportar/Importar tareas (JSON, CSV)
- [ ] Categorías personalizadas
- [ ] Fecha de vencimiento
- [ ] Recordatorios
- [ ] Modo oscuro/claro toggle
- [ ] Búsqueda de tareas
- [ ] Subtareas
- [ ] Colaboración en tiempo real

## 📄 Licencia

Libre para usar y modificar

---

**¡Disfruta siendo más productivo! 🎉**