// ===== Telefone Loja =====
const WHATSAPP = "5511930819623";

// ===== CATEGORIAS =====
const CATEGORIAS = [
  { id: "cama", nome: "Cama", emoji: "🛏️" },
  { id: "banho", nome: "Banho", emoji: "🛁" },
  { id: "mesa", nome: "Mesa", emoji: "🍽️" },
  { id: "cozinha", nome: "Cozinha", emoji: "🍳" },
  { id: "presentes", nome: "Presentes", emoji: "🎁" },
  { id: "decoracao", nome: "Decoração", emoji: "🪴" },
  { id: "sala", nome: "Sala", emoji: "🛋️" },
  { id: "quarto-solteiro", nome: "Quarto Solteiro", emoji: "🧸" },
  { id: "estofados", nome: "Estofados", emoji: "🪑" },
  { id: "complemento", nome: "Complemento", emoji: "🧺" },
  { id: "times", nome: "Times", emoji: "⚽" },
];

// ===== PRODUTOS =====
// COMEÇO (id, nome, preco, grupo, categorias, emoji, tags, imagem)
// grupo: "geral" aparece em ITENS | "time" aparece em TIMES | "catalogo" só em categorias e busca
// categorias: lista com os ids da lista CATEGORIAS acima
// imagem: opcional, ex.: "img/caneca-spfc.jpg" (se a imagem não aparecer, vai aparecer emoji da categoria)
const P = (id, nome, preco, grupo, cat, emoji, tags = "", imagem = "") =>
  ({ id, nome, preco, grupo, cat, emoji, tags, imagem });

const PRODUTOS = [
  P(1, "Jogo de Lençol Casal", 129.90, "geral", ["cama"], "🛏️", "lencol", "img/lencol-casal.webp"),
  P(2, "Toalha de Banho", 49.90, "geral", ["banho"], "🛁", "toalha", "img/toalha-de-banho.webp"),
  P(3, "Jogo Americano", 39.90, "geral", ["mesa"], "🍽️", "", "img/jogo-americano.webp"),
  P(4, "Caneca Presente", 24.90, "geral", ["presentes", "mesa"], "🎁", "caneca", "img/caneca-presente.webp"),
  P(5, "Caneca São Paulo", 34.90, "time", ["times", "mesa"], "☕", "caneca tricolor spfc", "img/caneca-sao-paulo.webp"),
  P(6, "Caneca Palmeiras", 34.90, "time", ["times", "mesa"], "☕", "caneca verdao", "img/caneca-palmeiras.webp"),
  P(7, "Caneca Corinthians", 34.90, "time", ["times", "mesa"], "☕", "caneca timao", "img/caneca-corinthians.webp"),
  P(8, "Toalha de Banho São Paulo", 59.90, "time", ["times", "banho"], "🛁", "toalha tricolor", "img/toalha-sao-paulo.webp"),
  P(9, "Toalha de Banho Palmeiras", 59.90, "time", ["times", "banho"], "🛁", "toalha verdao", "img/toalha-palmeiras.webp"),
  P(10, "Copo Térmico Corinthians", 69.90, "time", ["times", "cozinha"], "🥤", "copo termico timao", "img/copo-corinthians.webp"),
  P(11, "Cobertor Microfibra", 89.90, "catalogo", ["cama"], "🧣", "manta", "img/cobertor-microfibra.webp"),
  P(12, "Fronha Avulsa", 19.90, "catalogo", ["cama"], "🛏️", "travesseiro", "img/fronha-avulsa.webp"),
  P(13, "Edredom Casal", 199.90, "catalogo", ["cama"], "🛏️", "edredon", "img/edredom-casal.webp"),
  P(14, "Toalha de Rosto", 29.90, "catalogo", ["banho"], "🧼", "toalha", "img/toalha-de-rosto.webp"),
  P(15, "Roupão de Banho", 119.90, "catalogo", ["banho"], "🥼", "roupao", "img/roupao-de-banho.webp"),
  P(16, "Tapete de Banheiro", 44.90, "catalogo", ["banho"], "🛁", "", "img/tapete-de-banheiro.webp"),
  P(17, "Toalha de Mesa", 59.90, "catalogo", ["mesa"], "🍽️", "", "img/toalha-xadrez.webp"),
  P(18, "Porta-copos (kit 6)", 22.90, "catalogo", ["mesa"], "🥂", "", "img/porta-copos.webp"),
  P(19, "Pano de Prato", 12.90, "catalogo", ["cozinha"], "🍳", "", "img/pano-de-prato.webp"),
  P(20, "Kit de Utensílios", 79.90, "catalogo", ["cozinha"], "🥄", "colher espatula", "img/kit-utensilios.webp"),
  P(21, "Kit Presente Banho", 99.90, "catalogo", ["presentes", "banho"], "🎁", "toalha", "img/kit-presente-banho.webp"),
  P(22, "Vela Aromática", 34.90, "catalogo", ["presentes", "decoracao"], "🕯️", "", "img/vela-aromatica.webp"),
  P(23, "Quadro Decorativo", 69.90, "catalogo", ["decoracao"], "🖼️", "", "img/quadro-decorativo.webp"),
  P(24, "Vaso Decorativo", 54.90, "catalogo", ["decoracao"], "🪴", "planta", "img/vaso-decorativo.webp"),
  P(25, "Almofada", 39.90, "catalogo", ["sala"], "🛋️", "", "img/almofada.webp"),
  P(26, "Manta de Sofá", 74.90, "catalogo", ["sala"], "🧣", "", "img/manta-de-sofa.webp"),
  P(27, "Jogo de Lençol Solteiro", 99.90, "catalogo", ["quarto-solteiro", "cama"], "🛏️", "lencol", "img/lencol-solteiro.jpeg"),
  P(28, "Edredom Solteiro", 149.90, "catalogo", ["quarto-solteiro", "cama"], "🛏️", "edredon", "img/edredom-solteiro.webp"),
  P(29, "Puff", 129.90, "catalogo", ["estofados"], "🪑", "", "img/puff.webp"),
  P(30, "Capa de Sofá", 109.90, "catalogo", ["estofados", "sala"], "🛋️", "", "img/capa-de-sofa.webp"),
  P(31, "Cesto Organizador", 34.90, "catalogo", ["complemento"], "🧺", "", "img/cesto-organizador.webp"),
  P(32, "Kit de Cabides", 24.90, "catalogo", ["complemento"], "🧥", "", "img/kit-de-cabides.webp"),
];

function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

function cartaoProduto(p) {
  const foto = p.imagem ? '<img src="' + p.imagem + '" alt="' + p.nome + '">' : p.emoji;
  return '<article class="item">' +
    '<div class="foto-item">' + foto + "</div>" +
    "<h3>" + p.nome + "</h3>" +
    '<p class="preco">' + formatarPreco(p.preco) + "</p>" +
    '<button class="btn-add" data-id="' + p.id + '">Adicionar ao carrinho</button>' +
    "</article>";
}

function desenharProdutos(idGrade, lista) {
  document.getElementById(idGrade).innerHTML = lista.map(cartaoProduto).join("");
}

desenharProdutos("grade-itens", PRODUTOS.filter((p) => p.grupo === "geral"));
desenharProdutos("grade-times", PRODUTOS.filter((p) => p.grupo === "time"));

// ===== PAGINAS =====
const PAGINAS = ["times", "busca", "sobre", "categorias"];

function mostrarPagina() {
  const id = location.hash.slice(1);
  const [base, extra] = id.split("/");
  const pagina = PAGINAS.includes(base) ? base : "home";

  document.querySelectorAll(".pagina").forEach((p) => {
    p.classList.toggle("ativa", p.id === "pagina-" + pagina);
  });

  if (pagina === "categorias") mostrarCategoria(extra);

  const alvo = pagina === "home" && id ? document.getElementById(id) : null;
  if (alvo) alvo.scrollIntoView();
  else window.scrollTo(0, 0);
}

window.addEventListener("hashchange", mostrarPagina);

// ===== BUSCA =====
const IGNORAR = ["do", "da", "de", "dos", "das", "e", "ou", "um", "uma", "o", "a"];

function limpar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function buscar(termo) {
  const palavras = limpar(termo).split(/\s+/).filter((w) => w && !IGNORAR.includes(w));
  const resumo = document.getElementById("resumo-busca");
  let achados = [];

  if (palavras.length) {
    const pontuados = PRODUTOS.map((p) => {
      const nomesCat = p.cat.map((id) => CATEGORIAS.find((c) => c.id === id).nome).join(" ");
      const texto = limpar(p.nome + " " + p.tags + " " + nomesCat);
      return { p, pontos: palavras.filter((w) => texto.includes(w)).length };
    });
    // primeiro tenta itens que têm TODAS as palavras
    achados = pontuados.filter((x) => x.pontos === palavras.length);
    // se não achar, mostra os que têm ALGUMA palavra (mais parecidos primeiro)
    if (!achados.length) {
      achados = pontuados.filter((x) => x.pontos > 0).sort((a, b) => b.pontos - a.pontos);
    }
    achados = achados.map((x) => x.p);
  }

  resumo.textContent = achados.length
    ? achados.length + " resultado(s) para \"" + termo + "\""
    : "Nada encontrado para \"" + termo + "\". Tente outra palavra.";
  desenharProdutos("grade-busca", achados);

  if (location.hash === "#busca") mostrarPagina();
  else location.hash = "busca";
}

document.querySelectorAll(".form-busca").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const termo = form.querySelector("input").value.trim();
    if (termo) buscar(termo);
  });
});

// ===== MENU E CARRINHO (paineis) =====
const menuLateral = document.getElementById("menu-lateral");
const painelCarrinho = document.getElementById("carrinho");
const fundo = document.getElementById("fundo-escuro");

function abrirPainel(painel) {
  painel.classList.add("aberto");
  fundo.classList.add("ativo");
}

function fecharPaineis() {
  menuLateral.classList.remove("aberto");
  painelCarrinho.classList.remove("aberto");
  fundo.classList.remove("ativo");
}

document.getElementById("btn-menu").addEventListener("click", () => abrirPainel(menuLateral));
document.getElementById("btn-carrinho").addEventListener("click", () => abrirPainel(painelCarrinho));
fundo.addEventListener("click", fecharPaineis);
document.querySelectorAll(".fechar").forEach((b) => b.addEventListener("click", fecharPaineis));
document.querySelectorAll("#menu-lateral a").forEach((a) => a.addEventListener("click", fecharPaineis));

// ===== CARRINHO =====
let carrinho = []; // [{ id, qtd }]

const listaCarrinho = document.getElementById("lista-carrinho");

function desenharCarrinho() {
  listaCarrinho.innerHTML = "";
  let total = 0;
  let quantidade = 0;

  carrinho.forEach((c) => {
    const p = PRODUTOS.find((x) => x.id === c.id);
    total += p.preco * c.qtd;
    quantidade += c.qtd;

    const li = document.createElement("li");
    li.innerHTML =
      "<span>" + p.nome + "<br><small>" + formatarPreco(p.preco) + "</small></span>" +
      '<span class="qtd"><button data-acao="menos">−</button> ' + c.qtd +
      ' <button data-acao="mais">+</button> <button data-acao="remover">🗑</button></span>';
    li.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => mudarQuantidade(c.id, b.dataset.acao));
    });
    listaCarrinho.appendChild(li);
  });

  const vazio = carrinho.length === 0;
  document.getElementById("carrinho-vazio").style.display = vazio ? "block" : "none";
  document.getElementById("resumo-carrinho").style.display = vazio ? "none" : "block";
  document.getElementById("total-carrinho").textContent = "Total: " + formatarPreco(total);
  document.getElementById("total-pix").textContent = "No PIX (5% off): " + formatarPreco(total * 0.95);
  document.getElementById("contador").textContent = quantidade;
}

function mudarQuantidade(id, acao) {
  const item = carrinho.find((c) => c.id === id);
  if (acao === "mais") item.qtd++;
  if (acao === "menos") item.qtd--;
  if (acao === "remover" || item.qtd <= 0) carrinho = carrinho.filter((c) => c.id !== id);
  desenharCarrinho();
}

function adicionar(id) {
  const item = carrinho.find((c) => c.id === id);
  if (item) item.qtd++;
  else carrinho.push({ id: id, qtd: 1 });
  desenharCarrinho();
  abrirPainel(painelCarrinho);
}

// um clique em qualquer botao "Adicionar ao carrinho"
document.addEventListener("click", (e) => {
  const botao = e.target.closest(".btn-add");
  if (botao) adicionar(Number(botao.dataset.id));
});

// ===== FINALIZAR COMPRA (envia o pedido pelo WhatsApp da loja) =====
document.getElementById("btn-finalizar").addEventListener("click", () => {
  let total = 0;
  let msg = "Olá! Quero finalizar este pedido:\n\n";
  carrinho.forEach((c) => {
    const p = PRODUTOS.find((x) => x.id === c.id);
    total += p.preco * c.qtd;
    msg += c.qtd + "x " + p.nome + " - " + formatarPreco(p.preco * c.qtd) + "\n";
  });
  msg += "\nTotal: " + formatarPreco(total);
  msg += "\nNo PIX (5% off): " + formatarPreco(total * 0.95);
  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank");
});

desenharCarrinho();

// ===== PÁGINA DE CATEGORIAS =====
const listaCategorias = document.getElementById("lista-categorias");
const filtroCategorias = document.getElementById("filtro-categorias");
let categoriaAtual = "";

function desenharCategorias() {
  const filtro = limpar(filtroCategorias.value.trim());
  const html = CATEGORIAS
    .filter((c) => limpar(c.nome).includes(filtro))
    .map((c) => '<a href="#categorias/' + c.id + '" class="chip' + (c.id === categoriaAtual ? " ativa" : "") + '">' + c.emoji + " " + c.nome + "</a>")
    .join("");
  listaCategorias.innerHTML = html || "<p>Nenhuma categoria encontrada.</p>";
}

function mostrarCategoria(id) {
  categoriaAtual = id || "";
  desenharCategorias();

  const cat = CATEGORIAS.find((c) => c.id === categoriaAtual);
  const titulo = document.getElementById("titulo-categoria");

  if (!cat) {
    titulo.textContent = "Escolha uma categoria acima";
    document.getElementById("grade-categoria").innerHTML = "";
    return;
  }
  const lista = PRODUTOS.filter((p) => p.cat.includes(cat.id));
  titulo.textContent = cat.emoji + " " + cat.nome + " (" + lista.length + " itens)";
  desenharProdutos("grade-categoria", lista);
}

filtroCategorias.addEventListener("input", desenharCategorias);

mostrarPagina();
