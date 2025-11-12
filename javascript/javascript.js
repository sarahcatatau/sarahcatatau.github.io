/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function mudarFonte(fonte) {
    document.body.style.fontFamily = `'${fonte}', sans-serif`;
}

const imagens = [
    {scr:"imagem/1.png",
        titulo: "Modelagem 3d- Haruki Ren",
        data: "04/2025 - Em desenvolvimento",
        descricao: "Haruki é o protagonista do jogo Martial Spirit, modelado em 3D no Blender com estilo low poly inspirado em Tunic. Representa um jovem asiático introspectivo de 14 anos, vestindo uma camiseta vermelha vibrante e calças pretas, refletindo coragem, disciplina e simplicidade. Seu modelo já conta com animações básicas como caminhada e idle, com planos futuros para golpes de Karate-Do. Haruki simboliza crescimento e superação, sendo um elo visual e emocional entre jogador e narrativa.",
        largura: "250px",
        altura:"auto",
    },
    { scr:"imagem/2.png",
        titulo: "Martial Spirit - Jogo",
        data:"04/2025 - Em andamento",
        descricao: "Martial Spirit conta a jornada de Haruki, um garoto de 14 anos que enfrenta bullying e insegurança em sua vila. Após encontrar um livro sobre o Caminho do Guerreiro, ele busca superação por meio do Karate-Do. Treinando no Dojo Seishin, aprende que a verdadeira força está no respeito e no autocontrole. Sua maior conquista é enfrentar desafios internos e externos sem violência, evoluindo como pessoa. No projeto do jogo, sou responsável pela modelagem e animação dos personagens, junto a uma equipe de programadores e modeladores.",
        largura: "250px",
        altura: "auto",
    },
    {scr:"imagem/3.png",
        titulo:"Colapso Cósmico - Jogo",
        data: "11/2024 - 01/2025",
        descricao: "Colapso Cósmico acompanha a nave Aurora, enviada para abastecer a colônia humana em Nova Terra. Após ser atingida por um meteoro, a nave sofre danos críticos, deixando a maioria da tripulação morta ou ferida. O jogador controla o Capitão Alex Torres, único capaz de salvar a missão. Com o oxigênio acabando e sistemas falhando, ele precisa resolver puzzles, restaurar os sistemas e salvar os sobreviventes. O objetivo é estabilizar a nave e garantir o pouso seguro antes da destruição total.",
        largura: "250px",
        altura:"auto",
        },
    {scr:"imagem/4.png",
        titulo:"Autoscópio - Jogo",
        data:" 05/2024  -11/2024",
        descricao:"Autoscópio é um jogo 3D em primeira pessoa que propõe uma jornada introspectiva baseada nas memórias e personalidade do desenvolvedor. Dividido em três fases simbólicas, o jogador explora ambientes repletos de enigmas e significados pessoais. Cada fase representa uma etapa do autoconhecimento, desde a busca por sentido até a tomada de decisões conscientes. A experiência convida o jogador a compreender o criador e, indiretamente, a si mesmo. Mais que um jogo, Autoscópio é um espelho narrativo interativo.",
        largura:"250px",
        altura:"auto",
    },
    {scr:"imagem/5.png",
        titulo: "Link para o Menu Principal", 
        linkExterno: "menu.html" // Atualizado o nome do arquivo
    }
];

let indiceAtual = 0;
const imagensPorTela = 3;

function exibirImagens() {
    const container = document.getElementById("carrossel-imagens");
    container.innerHTML = "";

    for (let i = 0; i < imagensPorTela; i++) {
        const index = (indiceAtual + i) % imagens.length;
        const imgInfo =imagens[index];
        const img = document.createElement("img");

        img.src = imgInfo.scr;
        img.alt = imgInfo.titulo || "Imagem Sem Título"; 
        img.title = imgInfo.descricao || "Clique para abrir detalhes."; 

        img.onclick = function()
        {
            // 1. VERIFICAÇÃO DE LINK EXTERNO (ABRIR NA MESMA PÁGINA)
            if (imgInfo.linkExterno) {
                // REDIRECIONA PARA O NOVO ARQUIVO NA MESMA ABA
                window.location.href = imgInfo.linkExterno;
                return; // Para a execução
            }

            // 2. Lógica para abrir o pop-up detalhado (para imagens que não têm linkExterno)
            const popup = window.open("", `popup${index}`, "width=850,height=700,resizable=yes,scrollbars=yes");
            if(popup){
                popup.document.write(`
                    <html>
                        <head>
                            <title>${imgInfo.titulo}</title>
                            <style>
                            body{
                            font-family: Arial, sans-serif;
                            padding: 20px;
                            }
                            img{
                            width: ${imgInfo.largura};
                            height: ${imgInfo.altura};
                            border-radius: 8px;
                            display:block;
                            margin-bottom: 15px;
                            }
                            h1 {
                            margin-top: 0;
                            }
                            .info {
                            margin-bottom: 10px;
                            }
                            </style>
                        </head>
                        <body>
                        <h1>${imgInfo.titulo}</h1>
                        <div class="info"><strong>Data de criação:</strong> ${imgInfo.data}</div>
                        <img src="${imgInfo.scr}" alt="${imgInfo.titulo}">
                        <p><strong>Descrição:</strong> ${imgInfo.descricao}</p>
                        </body>
                    </html>
                `)
                popup.document.close();
                popup.focus();
            }else {
                alert("Por favor, permita pop-ups para visualizar as informações.");
            }
        };
        container.appendChild(img);
    }
}

function mudarImagens(direcao) {
    indiceAtual = (indiceAtual + direcao * imagensPorTela + imagens.length) % imagens.length;
    exibirImagens();
}

// Inicializar carrossel ao carregar a página

document.addEventListener("DOMContentLoaded", exibirImagens)
