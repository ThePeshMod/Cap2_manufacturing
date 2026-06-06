/**
 * Simple, robust CSV parser for browser uploads.
 * Handles quoted fields, commas inside quotes, and trims whitespace.
 */
export function parseCSV(text: string): Record<string, string>[] {
  const lines: string[] = [];
  let currentLine: string[] = [];
  let currentField = '';
  let inQuotes = false;
  
  // Normalize line endings
  const cleanText = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  for (let i = 0; i < cleanText.length; i++) {
    const char = cleanText[i];
    const nextChar = cleanText[i + 1];
    
    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          // Escaped quote
          currentField += '"';
          i++; // skip next quote
        } else {
          // End of quoted field
          inQuotes = false;
        }
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        currentLine.push(currentField.trim());
        currentField = '';
      } else if (char === '\n') {
        currentLine.push(currentField.trim());
        if (currentLine.length > 1 || currentLine[0] !== '') {
          lines.push(currentLine.join(',')); // temporary line list
        }
        currentLine = [];
        currentField = '';
      } else {
        currentField += char;
      }
    }
  }
  
  // Push remaining field and line
  if (currentField !== '' || currentLine.length > 0) {
    currentLine.push(currentField.trim());
    lines.push(currentLine.join(','));
  }
  
  if (lines.length === 0) return [];
  
  // Reparse each line into arrays
  const rows: string[][] = lines.map(line => {
    const fields: string[] = [];
    let field = '';
    let quotes = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (quotes) {
        if (c === '"') quotes = false;
        else field += c;
      } else {
        if (c === '"') quotes = true;
        else if (c === ',') {
          fields.push(field.trim());
          field = '';
        } else {
          field += c;
        }
      }
    }
    fields.push(field.trim());
    return fields;
  });
  
  const headers = rows[0].map(h => h.toUpperCase().trim());
  const data: Record<string, string>[] = [];
  
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length === 0 || (row.length === 1 && row[0] === '')) continue;
    
    const obj: Record<string, string> = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] !== undefined ? row[index] : '';
    });
    data.push(obj);
  }
  
  return data;
}

export interface ItemCSVRow {
  CODE: string;
  NAME: string;
  CLASS: string;
}

export interface MfgCSVRow {
  CLASS: string;
  OUTPUT: string;
  OQTY?: string;
  INPUT1?: string;
  IQTY1?: string;
  IQUA1?: string;
  INPUT2?: string;
  IQTY2?: string;
  IQUA2?: string;
  INPUT3?: string;
  IQTY3?: string;
  IQUA3?: string;
  PROD_SPEED?: string;
  MACHINEGFX?: string;
  TECHPERCENT?: string;
}
