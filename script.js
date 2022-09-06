const students = [
    {
        name: "Matheus",
        res1: 9,
        res2: 10,
    },
    {
        name: "Maycow",
        res1: 8,
        res2: 7,
    },
    {
        name: "Herick",
        res1: 3,
        res2: 8,
    },
]

function calcAvarege(res1, res2) {
    let avarege = (res1 + res2) / 2;
    return avarege
}

function result() {
    for (let student of students) {
        let avarege = calcAvarege(student.res1, student.res2)
        let message = ""

        if (avarege >= 7) {
            message = `Parabéns, ${student.name}! você foi aprovado(a) no concurso!`
        } else {
            message = `não foi dessa vez, ${student.name} tente outra vez!`
        }
        alert(`A média do aluno(a) ${student.name} é ${avarege} \n ${message}`)

    }
}
result()