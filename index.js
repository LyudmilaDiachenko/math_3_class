let win = 0,
    loose = 0, 
    random = (min, max) => Math.round((max - min) * Math.random() + min),
    generate = () => {
    let a = random(1, 10),
        b = random(1, 10),
        c = random(1, 10),
        d = random(1, 10),
        arr = [
            // *+
            [
                a * b + c * d,
                `${a} * ${b} + ${c} * ${d} =`
            ],
            [
                a * b + c * d,
                `${a} * ${b} + ${c * d} =`
            ],
            [
                a * b + c * d,
                `${a * b} + ${c} * ${d} = `
            ],
            // *-
            [
                a * b - c * d,
                `${a} * ${b} - ${c} * ${d} =`
            ],
            [
                a * b - c * d,
                `${a} * ${b} - ${c * d} =`
            ],
            [
                a * b - c * d,
                `${a * b} - ${c} * ${d} = `
            ],
            // /+
            [
                a + c * d,
                `${a * b} : ${b} + ${c} * ${d} =`
            ],
            [
                a + c,
                `${a * b} : ${b} + ${c * d} : ${d} =`
            ],
            [
                a * b + c,
                `${a * b} + ${c * d} : ${d} = `
            ],
            // /-
            [
                a - c,
                `${a * b} : ${b} - ${c * d} : ${d} =`
            ],
            [
                a * b - c,
                `${a * b} - ${c * d} : ${d} = `
            ]
        ]    
        return arr.sort(() => Math.random() - .5)[random(1, arr.length - 1)];
    },
    start = () => {
        let [answer, question] = generate(),
        answers = [answer, Math.round(answer * 2 * Math.random()), random(-99, 99), random(1, 99)].sort(() => Math.random() - .5);
        
        document.querySelector('.question').innerText = question;
        document.querySelector('.answer').innerHTML = answers.map(el => `<button value='${el}'>${el}</button>`).join('')
        document.querySelector('.results').innerHTML = `Вірних відповідей: ${win} <br /> Невірних відповідей: ${loose}`;
        return answer;
    }

document.querySelector('.answer').addEventListener('click', e => {
    if (e.target.value == answer) win++;
    else loose++;

    answer = start();
})

let answer = start()
