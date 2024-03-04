let multi3 = 0
let multi5 = 0

for (i = 0; i < 1000; i++){
    multi3 += (i % 3 == 0) ? i : 0
    multi5 += (i % 5 == 0) ? i : 0
}
soma = multi3 + multi5
console.log("Os múltiplos de 3 são: " + multi3)
console.log("Os múltiplos de 5 são: " + multi5)
console.log("A soma dos multiplos de 3 e 5 é: " + soma)
