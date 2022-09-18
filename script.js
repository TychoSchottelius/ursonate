let ursonate = [];
/*  ----------
    einleitung
    ----------
*/
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
ursonate.push(einleitung);

// creating each line
function setup_einleitung_vers03_zeile(array1, array2, line) {
    let zeile;
    let mapped_array1 = array1.filter((element, index) =>
        index > (line - 3)
    );
    zeile = add_whitespaces_to_line(mapped_array1, true);
    if (line > 1){
        let mapped_array2 = array2.filter((element, index) =>
            index <= (line -1)
        );
        zeile += add_whitespaces_to_line(mapped_array2, true);
    }
    return zeile.trim();
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

/*  ----------
    erster Teil
    ----------
*/
let erster_teil_vers02_start = 'dedesnn nn rrrrrr';
let erster_teil_vers02_mid = 'li ee';
let erster_teil_vers02_end = 'mpiff tillff too, tillll, jüü kaa';
let kete = 'kete';
let ra = 'ra';
let rinnz = 'rinnz';
let krmue = 'krrmüü';
let ziuenzeziu = 'ziiuu ennze ziiuu';
let erster_teil_vers04 = 'rrummpff tillff toooo';

let erster_teil_vers02 = `${erster_teil_vers02_start}, ${erster_teil_vers02_mid}, ${erster_teil_vers02_end}?`
let erster_teil_vers03 = setup_erster_teil_vers03();
let erster_teil = `${einleitung_vers01}</br>${erster_teil_vers02}</br>${erster_teil_vers03}</br>${erster_teil_vers04}?`;
ursonate.push(erster_teil);

function setup_erster_teil_vers03() {
    return `${rinnz}e${kete} ${multiply_string("bee", 2)} ${rinnz.slice(2, 5)}${krmue}? ${ziuenzeziu} ${rinnz}${krmue}, ${ra}${kete} ${multiply_string('bee', 2)}.`;
}
function multiply_string(string, factor){
    let resultString = '';
    for(let i=0; i<factor; i++){
        resultString += `${string} `;
    }
    return resultString.trim();
}

// create Ursonate
let section_ursonate = document.getElementById("ursonate");
ursonate.forEach(function (element) {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = element;
    section_ursonate.appendChild(paragraph);
});

// adds whitespace after each element
function add_whitespaces_to_line(array, trim) {
    let line = '';
    array.forEach(function (element) {
        line += `${element} `;
    });
    if(trim){
        line.trim()
    }
    return line;
}

