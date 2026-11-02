/**
 * Apps Script – Confiabilidad y Disponibilidad GPM
 * Pegar en Extensiones > Apps Script del Google Sheets que contiene BASE, EVENTOS y CONFIG.
 * Implementar > Nueva implementación > Aplicación web
 *   Ejecutar como: Yo · Quién tiene acceso: Cualquier usuario (o el dominio de la empresa)
 * Copiar la URL /exec en FUENTE.appsScriptUrl dentro de index.html.
 */
function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const leer = n => { const sh = ss.getSheetByName(n); return sh ? sh.getDataRange().getValues() : []; };
  const out = { BASE: leer('BASE'), EVENTOS: leer('EVENTOS'), CONFIG: leer('CONFIG'), generado: new Date().toISOString() };
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
