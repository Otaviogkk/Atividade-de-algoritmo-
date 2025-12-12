/* Complete a implementação do aplicativo de Rede Social do livro */

// =====================================================
// Classe Usuario
// =====================================================
class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.posts = [];
        this.seguindo = [];
        this.seguidores = [];
        this.mensagens = [];
    }

    criarPost(conteudo) {
        const post = new Post(this, conteudo);
        this.posts.push(post);
        return post;
    }

    seguir(usuario) {
        if (usuario.id === this.id) return;

        if (!this.seguindo.includes(usuario)) {
            this.seguindo.push(usuario);
            usuario.seguidores.push(this);
        }
    }

    enviarMensagem(destinatario, conteudo) {
        const mensagem = new Mensagem(this, destinatario, conteudo);
        destinatario.mensagens.push(mensagem);
        return mensagem;
    }

    receberMensagem(mensagem) {
        this.mensagens.push(mensagem);
    }

    listarPosts() {
        return this.posts.map(p => p.exibir());
    }

    listarMensagens() {
        return this.mensagens.map(m => m.exibir());
    }
}


// =====================================================
// Classe Post
// =====================================================
class Post {
    constructor(autor, conteudo) {
        this.autor = autor;
        this.conteudo = conteudo;
        this.data = new Date();
        this.curtidas = [];
        this.comentarios = [];
    }

    curtir(usuario) {
        if (!this.curtidas.includes(usuario)) {
            this.curtidas.push(usuario);
        }
    }

    comentar(usuario, texto) {
        const comentario = new Comentario(usuario, texto);
        this.comentarios.push(comentario);
        return comentario;
    }

    exibir() {
        return `
Post de ${this.autor.nome}: ${this.conteudo}
Curtidas: ${this.curtidas.length}
Comentários: ${this.comentarios.length}
        `;
    }
}


// =====================================================
// Classe Comentario
// =====================================================
class Comentario {
    constructor(usuario, texto) {
        this.usuario = usuario;
        this.texto = texto;
        this.data = new Date();
    }

    exibir() {
        return `${this.usuario.nome}: ${this.texto}`;
    }
}


// =====================================================
// Classe Mensagem Privada
// =====================================================
class Mensagem {
    constructor(remetente, destinatario, conteudo) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.conteudo = conteudo;
        this.data = new Date();
        this.lida = false;
    }

    marcarComoLida() {
        this.lida = true;
    }

    exibir() {
        return `
De: ${this.remetente.nome}
Para: ${this.destinatario.nome}
Mensagem: ${this.conteudo}
Lida: ${this.lida}
        `;
    }
}


// =====================================================
// Classe RedeSocial
// =====================================================
class RedeSocial {
    constructor() {
        this.usuarios = [];
        this.usuarioAtual = null;
        this.nextId = 1;
    }

    cadastrarUsuario(nome, email, senha) {
        const usuario = new Usuario(this.nextId++, nome, email, senha);
        this.usuarios.push(usuario);
        return usuario;
    }

    login(email, senha) {
        const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
        if (usuario) {
            this.usuarioAtual = usuario;
            return true;
        }
        return false;
    }

    logout() {
        this.usuarioAtual = null;
    }

    buscarUsuarioPorId(id) {
        return this.usuarios.find(u => u.id === id);
    }

    listarUsuarios() {
        return this.usuarios.map(u => `${u.id} - ${u.nome}`);
    }

    criarPost(conteudo) {
        if (!this.usuarioAtual) {
            return "Você precisa estar logado.";
        }
        return this.usuarioAtual.criarPost(conteudo);
    }

    seguir(idUsuario) {
        if (!this.usuarioAtual) return;

        const usuario = this.buscarUsuarioPorId(idUsuario);
        if (usuario) {
            this.usuarioAtual.seguir(usuario);
        }
    }

    feed() {
        if (!this.usuarioAtual) return [];

        const posts = [];

        this.usuarioAtual.seguindo.forEach(usuario => {
            usuario.posts.forEach(post => posts.push(post));
        });

        posts.sort((a, b) => b.data - a.data);

        return posts.map(p => p.exibir());
    }
}


// =====================================================
// EXEMPLO DE USO
// =====================================================

// Criar rede
const rede = new RedeSocial();

// Cadastro
const ana = rede.cadastrarUsuario("Ana", "ana@email.com", "123");
const joao = rede.cadastrarUsuario("João", "joao@email.com", "456");

// Login
rede.login("ana@email.com", "123");

// Seguir
rede.seguir(joao.id);

// Criar posts
joao.criarPost("Hoje é um ótimo dia!");
joao.criarPost("Estudando JavaScript.");

// Ver feed
console.log("FEED DE ANA:");
console.log(rede.feed().join("\n"));

// Comentar e curtir
const post = joao.posts[0];
post.curtir(ana);
post.comentar(ana, "Verdade!");

// Mensagens privadas
ana.enviarMensagem(joao, "Oi João, tudo bem?");
console.log(joao.listarMensagens().join("\n"));
