// einleitung
let fuemms = "fümms";
let boe = "bö";
let woe = "wö";
let taeae = "tää";
let zaeae = "zää";
let uu = "uu";
let poegiff = "pögiff";
let kwii_ee = "kwii Ee";
let oooo = "ooooooooooooooooooooooooooooooo";
let dll = "dll";
let rrr = "rrrrrr";
let bee = "beeeee";
let einleitung_vers03_array01 = [dll, rrr, bee, boe];
let einleitung_vers03_array02 = [fuemms, boe, woe, taeae, zaeae, uu];

let einleitung_vers01 = `${fuemms} ${boe} ${woe} ${taeae} ${zaeae} ${uu}, ${poegiff}, ${kwii_ee}.`;
let einleitung_vers02 = `${oooo}`
let einleitung_vers03 = `${setup_einleitung_vers03()}`;

let einleitung = `${einleitung_vers01}</br>${einleitung_vers02},</br>${einleitung_vers03}`;
let erster_teil = `${einleitung_vers01}</br>`;

let section_einleitung = document.getElementById("einleitung");
let paragraph_einleitung = document.createElement('p');
paragraph_einleitung.innerHTML = einleitung;
let paragraph_erster_teil = document.createElement('p');
paragraph_erster_teil.innerHTML = erster_teil;
section_einleitung.appendChild(paragraph_einleitung);
section_einleitung.appendChild(paragraph_erster_teil);

// creating each line
function setup_einleitung_vers03_zeile(array1, array2, line) {
    let zeile;
    let mapped_array1 = array1.filter((element, index) =>
        index > (line - 3)
    );
    if (line === 1){
        zeile = add_whitespaces_to_line_except_last(mapped_array1);
    }
    else {
        zeile = add_whitespaces_to_line(mapped_array1);
    }
    if (line > 1){
        let mapped_array2 = array2.filter((element, index) =>
            index <= (line -1)
        );
        zeile += add_whitespaces_to_line_except_last(mapped_array2);
    }
    return zeile;
}
// creating block
function setup_einleitung_vers03(){
    let line = 1;
    let max_line = 6;
    let result = '';
    while (line <= max_line){
        result += `${setup_einleitung_vers03_zeile(einleitung_vers03_array01, einleitung_vers03_array02, line)},</br>`;
        line ++;
    }
    return result;
}

// adds whitespace after each element
function add_whitespaces_to_line(array) {
    let line = '';
    array.forEach(function (element, index) {
        line += `${element} `;
    });
    return line;
}
// adds whitespace after each element, except for the last one for adding . or , at the ending
function add_whitespaces_to_line_except_last(array) {
    let line = '';
    array.forEach(function (element, index) {
        if(index < (array.length -1)) {
            line += `${element} `;
        }
        else line += `${element}`;
    });
    return line;
}
