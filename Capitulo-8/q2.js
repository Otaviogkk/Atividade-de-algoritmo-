export function usoCommonJSvsESM(){
  resposta = "CommonJS (CJS): Foi o formato padrão do Node.js por muitos anos, usando require e module.exports. Ainda é amplamente utilizado, principalmente em projetos antigos e sistemas que dependem de ferramentas como webpack, eslint e versões antigas do Jest. Apesar de menos comum em novos projetos, continua relevante devido ao grande legado existente.\n\nMódulos JavaScript (ESM): É o padrão oficial da linguagem JavaScript, utilizando import e export. Nos últimos 5 anos, tornou-se o formato moderno adotado pela comunidade. Navegadores oferecem suporte nativo e, desde o Node.js 14+, o Node passou a suportar ESM completamente. Atualmente, a maioria das novas bibliotecas e frameworks é escrita em ESM.";
  return resposta;
}
