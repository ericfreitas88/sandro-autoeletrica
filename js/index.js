$(document).ready(function () {
  const comentarios = [
    {
      comentario: "Sandro é um profissional com mais de 30 anos no local em loja que herdou de seu pai. Competência e honestidade. Querido dos taxistas. Chega cedo, a loja costuma estar sempre cheia.",
      autor: "Ulisses Barreto de Freitas"
    },
    {
      comentario: "Atendimento nota 1000. Todos demonstram muito conhecimento e profissionalismo. Não há pressa em te atender. Você sente o interesse em resolver o problema do seu carro. Recomendo essa oficina.",
      autor: "Rodolfo Cintra"
    },
    {
      comentario: "Há mais de 15 anos frequento essa oficina q vem atravessando gerações sem perder a qualidade e o respeito aos clientes. Profissionais super capacitados, corretos e mto cordiais. Parabéns Sandro e equipe. Obrigado sempre.",
      autor: "Riva Ger"
    },
    {
      comentario: "Se honestidade é um diferencial neste ramo. Esta oficina possui. Tratamento ímpar dado pelo dono. Recomendadíssimo. Resolveu o meu problema rápido e com preço justo.",
      autor: "Rafael Teixeira Queiroz"
    },
    {
      comentario: "Fui por recomendação e enquanto esperava a abertura da oficina, todos os clientes que chegavam, falavam muito bem do serviço.",
      autor: "Cezar Valle"
    },
    {
      comentario: "Muito bom Muito honesto recomendo sem medo com certeza fui a primeira vez e irei sempre que precisar. Muito &#128077; bom!",
      autor: "Antônio Rodrigues"
    }/*,
    {
      comentario: "Mesmo chegando com a casa fechando, fui bem atendido, nota mil!!!",
      autor: "João Pedro"
    },
    {
      comentario: "Bom atendimento, presteza e qualidade, o dono da oficina uma pessoa séria e honesta, primeira vez que fui lá e já tive boa impressão, me senti acolhido com toda atenção que pude usufruir tendo todas minhas dúvidas e problemas atendidos e solucionados! Nota 10 recomendo!!",
      autor: "Vinicius machado"
    },
    {
      comentario: "Ótimo, o eletricista mais honesto e correto que conheço, super indico.",
      autor: "Nilson Souza"
    },
    {
      comentario: "Fui muito bem atendida e orientada ao comprar a bateria. Estão de nota 10 !!! Super recomendo!",
      autor: "Telma Barcellos"
    },
    {
      comentario: "Local de excelentes profissionais com preços e prazos bem dentro da nossa realidade, o Sandro é um capítulo à parte (pessoa muito atenciosa e honesta).",
      autor: "Jorge Nelson"
    },
    {
      comentario: "Esse é a melhor Auto Elétrica que conheço a 23 anos. Negócio de Família que passa de Pai pra Filho continuando com Ótima Qualidade no Atendimento e Eficiência entendem Muito Bem do que fazem Show de bola!",
      autor: "Walter Susewind"
    },
    {
      comentario: "Excelente atendimento... Sempre consigo resolver minhas dores de cabeça, que levo para eles... Sempre saio satisfeito. Parabéns!",
      autor: "Carlos Rodrigues"
    },
    {
      comentario: "Honesto. Profissional. Objetivo. Não inventa problema. Preço justo.",
      autor: "Igor Santos"
    }*/
  ];

  function carregar_comentarios() {
    var comentario;
    var autor;
    var box_comentario;

    comentarios.forEach(function (c) {
      comentario = c.comentario;
      autor = c.autor;

      box_comentario = "<div class='box-comentario item'>" +
        "<p class='cometario'>" + comentario + "</p>" +
        "<div class='autor-comentario'>" + autor + "</div>" +
        "</div>"

      $(".container-box-comentarios").append(box_comentario);
    });
  };
  carregar_comentarios();
})