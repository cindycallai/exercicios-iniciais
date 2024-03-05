let aluno = "Caio"
let n1 = 6
let n2 = 3
let n3 = 4

media = (n1 + n2 + n3)/3

console.log("A média do " + aluno + " é " + media)

if (media > 7){
    situacao = "Parabéns! Passou de ano"
} else if (media < 7 && media > 5){
    situacao = "Tente novamente! Você está em recuperação"
} else {
    situacao = "Que pena! Vocês está reprovado"
}
console.log("O aluno " + aluno + " tem média " + media + ". " + situacao)