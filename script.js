let fuemms = "Fümms";
let boe = "bö";
let woe = "wö";
let taeae = "tää";
let zaeae = "zää";
let uu = "Uu";
let poegiff = "pögiff";
let kwii_ee = "kwii Ee";
let oooo = "Ooooooooooooooooooooooooooooooo";
let dll = "dll";
let rrr = "rrrrrr";
let bee = "beeeee";

let einleitung_vers03_array01 = [dll, rrr, bee, boe];
let einleitung_vers03_array02 = [fuemms, boe, woe, taeae, zaeae, uu];

let einleitung_vers01 = `${fuemms} ${boe} ${woe} ${taeae} ${zaeae} ${uu}, ${poegiff}, ${kwii_ee}.`;
let einleitung_vers02 = `${oooo}`
let einleitung_vers03 = `${setup_vers01()}`;

let einleitung = `${einleitung_vers01}</br>${einleitung_vers02},</br>${einleitung_vers03}`;
console.log(einleitung);

let paragraph_einleitung = document.getElementById("einleitung");
paragraph_einleitung.innerHTML = einleitung;

function setup_vers01_zeile(array, line) {
    let zeile;
    if (line <= 2) {
        zeile = add_whitespaces_to_line(array)
    }
    else {
        array.shift();
        zeile = add_whitespaces_to_line(array);
    }
    return zeile;
}

function setup_vers01(){
    let number_of_row = 1;
    let count = 6;
    let result = '';
    while (number_of_row <= count){
        switch (number_of_row){
            case 1: result += `${setup_vers01_zeile(einleitung_vers03_array01, 1)},</br>`;
                break;
            case 2: result += `${setup_vers01_zeile(einleitung_vers03_array01, 2)} ${fuemms} ${boe},</br>`;
                break;
            case 3: result += `${setup_vers01_zeile(einleitung_vers03_array01, 3)} ${fuemms} ${boe} ${woe},</br>`;
                break;
            case 4: result += `${setup_vers01_zeile(einleitung_vers03_array01, 4)} ${fuemms} ${boe} ${woe} ${taeae},</br>`;
                break;
            case 5: result += `${setup_vers01_zeile(einleitung_vers03_array01, 5)} ${fuemms} ${boe} ${woe} ${taeae} ${zaeae},</br>`;
                break;
            case 6: result += `${setup_vers01_zeile(einleitung_vers03_array01, 6)} ${fuemms} ${boe} ${woe} ${taeae} ${zaeae} ${uu},</br>`;
                break;
        }
        number_of_row ++;
    }

    return result;
}

function add_whitespaces_to_line(array) {
    let line = '';
    array.forEach(function (element, index) {
        if(index < (array.length -1)) {
            line += `${element} `;
        }
        else line += `${element}`;
    });
    return line;
}
