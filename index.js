import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Necessário para resolver corretamente o caminho atual no ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho da pasta principal
const raiz = __dirname;

// Lê todas as pastas que começam com "Capitulo-"
const capitulos = fs.readdirSync(raiz).filter((pasta) =>
  pasta.startsWith("Capitulo-")
);


for (const cap of capitulos) {
  const pastaCap = path.join(raiz, cap);
  const arquivos = fs
    .readdirSync(pastaCap)
    .filter((arq) => arq.endsWith(".js"))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || 0);
      const numB = parseInt(b.match(/\d+/)?.[0] || 0);
      return numA - numB;
    });

  for (const arquivo of arquivos) {
    const caminho = `./${cap}/${arquivo}`;
    await import(caminho);
    console.log(`✅ Importado: ${caminho}`);
  }
}

