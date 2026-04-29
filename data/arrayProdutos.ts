//Sandubas vao até o id 10.  0-10
//Bebibas vao até o id 21.   11-21

import { prodType } from "@/types/prodType";

export const sandubas : prodType[]= [
    {id: 0, titulo: "Dempsey Roll", descricao:"Pão com gergelim, carne bovina, queijo, cebola caramelizada, molho, folhas verdes, pepino",
         preco: "R$11,50", imagem:require("../assets/images/Hamburguer1.png") },
    {id: 1, titulo: "Smash Miyata", descricao:"Pão com gergelim, frango empanado, queijo, alface, cebola roxa, pepino, molho",
         preco: "R$15,50", imagem:require("../assets/images/Hamburguer2.png") },
    {id: 2, titulo: "Counter Date", descricao:"Pão com gergelim, carne bovina, queijo, molho escuro (barbecue), cebola roxa, folhas verdes, pepino",
         preco: "R$16,50", imagem:require("../assets/images/Hamburguer3.png") },
    {id: 3, titulo: "White Fang", descricao:"Pão com gergelim, frango empanado, repolho (coleslaw), pepino, molho",
         preco: "R$13,50", imagem:require("../assets/images/Hamburguer4.png")},
    {id: 4, titulo: "Liver Blow Deluxe", descricao:"Pão com gergelim, carne bovina, queijo, cebola caramelizada, molho, folhas verdes",
         preco: "R$19,50", imagem:require("../assets/images/Hamburguer5.png")},
    {id: 5, titulo: "Speed Star", descricao:"Pão com gergelim, frango empanado, queijo, abacate, repolho, molho",
         preco: "R$17,50", imagem:require("../assets/images/Hamburguer6.png")},
    {id: 6, titulo: "Champion Takamura", descricao:"Pão com gergelim, carne bovina, queijo, bacon, tomate, alface, cebola roxa",
         preco: "R$25,50", imagem:require("../assets/images/Hamburguer7.png")},
]

export const bebidas : prodType[]= [
     {id: 11, titulo: "Uppercut Elixir", descricao:"Energético cítrico gaseificado para agilidade e explosão.",
         preco: "R$4,50", imagem:require("../assets/images/bebida1.png") },
     {id: 12, titulo: "Punch-Out", descricao:"Smoothie de frutas vermelhas e proteína para recuperação muscular pós-treino.",
         preco: "R$5,00", imagem:require("../assets/images/bebida2.png") },
     {id: 13, titulo: "Perfect Clarity", descricao:"Chá gelado de gengibre e mel para foco mental e concentração total.",
         preco: "R$6,80", imagem:require("../assets/images/bebida3.png") },
     {id: 14, titulo: "Power Punch Reserve", descricao:"Shot potente de guaraná e café na garrafa colecionável em formato de luva.",
     preco: "R$10,20", imagem:require("../assets/images/bebida4.png") },
]