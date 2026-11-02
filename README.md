# Confiabilidad y Disponibilidad GPM

Tablero web (GitHub Pages) de confiabilidad y disponibilidad de turbocompresores y motogeneradores de PC Tratayén y PC Salliqueló, y linepack mensual del GPM.

## Archivos
- `index.html` – el tablero (un solo archivo, sin dependencias).
- `Code.gs` – Apps Script que expone el Google Sheets como JSON.
- Base de datos: Google Sheets creado a partir de `BASE_CONF_DISP_GPM.xlsx` (pestañas BASE, EVENTOS, CONFIG).

## Puesta en marcha
1. Subir `BASE_CONF_DISP_GPM.xlsx` a Drive y abrirlo como Google Sheets (Archivo > Guardar como Hojas de cálculo de Google).
2. En ese Sheets: Extensiones > Apps Script, pegar `Code.gs`, Implementar como aplicación web y copiar la URL `/exec`.
3. En `index.html`, completar `const FUENTE = { appsScriptUrl: "https://script.google.com/macros/s/.../exec", sheetId: "" };`
   (alternativa sin Apps Script: compartir el Sheets como "cualquier persona con el enlace puede ver" y poner su ID en `sheetId`).
4. Crear el repo en la organización, subir `index.html`, Settings > Pages > Deploy from branch `main` / root.

## Carga mensual
Completar la fila del mes en BASE (8 porcentajes + linepack) y los eventos en EVENTOS. El tablero toma el último mes con datos como corte y calcula el acumulado ponderado por horas calendario.
Si la URL de datos falla, el tablero muestra la copia embebida y lo indica en la etiqueta "Fuente".
