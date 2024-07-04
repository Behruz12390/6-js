let a = +prompt('Birinchi sonni kiriting')
let n = +prompt('Ikkinchi sonni kiriting')
let kir = prompt('Amalni tanlang' + '\n1.Qoshish' + '\n2,Ayirish' + '\n3.Kopaytirish' + '\n4.Bolish')

if(kir == 1){
    console.log(`${a} + ${n} = ${a + n}`)
}else if(kir == 2){
    console.log(`${a} - ${n} = ${a - n}`);
}else if(kir == 3){
    console.log(`${a} * ${n} = ${a * n}`);
}else if(kir == 4){
    console.log(`${a} / ${n} = ${a / n}`);
}