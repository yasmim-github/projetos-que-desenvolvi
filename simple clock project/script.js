let quote = document.getElementById("mew");
let date = new Date();
let hora = Number(date.getHours());
let min = Number(date.getMinutes());
let currentHour = document.getElementById("hours");

currentHour.innerHTML = `Agora são ${hora} horas e ${min} minutos`;


if (hora > 0 && hora < 6) {
    document.querySelector("#current_image").src="img/dawn_img.jpg";
} else if (hora >= 6 && hora < 12) {
    document.querySelector("#current_image").src="img/sunrise_img.jpg";
} else if (hora >= 12 && hora < 18 ) {
    document.querySelector("#current_image").src="img/afternoon_img.jpg";
} else if (hora >= 18 && hora < 24) {
    document.querySelector("#current_image").src="img/night_img.jpg";
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let quotePicker = parseInt(Math.random() * numbers.length) + 1;

switch (quotePicker) {
    case (1) : {
        document.querySelector("#mew").innerHTML = "Está tudo bem?";
        break;
    }
    case (2) : {
        document.querySelector("#mew").innerHTML = "Descanse um pouco, você merece";
        break;
    }
    case (3) : {
        document.querySelector("#mew").innerHTML = "Respire fundo";
        break;
    }
    case (4) : {
        document.querySelector("#mew").innerHTML = "Está tudo bem não estar bem";
        break;
    }
    case (5) : {
        document.querySelector("#mew").innerHTML = "Nada é impossível, se é humanamente alcançável";
        break;
    }
    case (6) : {
        document.querySelector("#mew").innerHTML = "O melhor ainda está por vir";
        break;
    }
    case (7) : {
        document.querySelector("#mew").innerHTML = "Começar algo já é um grande passo";
        break;
    }
    case (8) : {
        document.querySelector("#mew").innerHTML = "Não de chances ao azar";
        break;
    }
    case (9) : {
        document.querySelector("#mew").innerHTML = "Tome um cafezinho e relaxe um pouco";
        break;
    }
    case (10) : {
        document.querySelector("#mew").innerHTML = "Todos somos capazes de algo grande";
        break;
    }
}


console.log(quotePicker);