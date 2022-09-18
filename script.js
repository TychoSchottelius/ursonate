// TODO: switch to Typescript and use enums for text-categories
const ursonate = [];
/*  ----------
    einleitung
    ----------
*/
const fuemms = "fümms";
const boe = "bö";
const woe = "wö";
const taeae = "tää";
const zaeae = "zää";
const uu = "uu";
const poegiff = "pögiff";
const kwii = "kwii";
const ee = 'ee';
const oooo = "ooooooooooooooooooooooooooooooo";
const dll = "dll";
const rrr = "rrrrrr";
const bee = variation_of_ee('b');
const einleitung_vers03_array01 = [dll, rrr, bee, boe];
const einleitung_vers03_array02 = [fuemms, boe, woe, taeae, zaeae, uu];
const einleitung_vers01 = `${fuemms} ${boe} ${woe} ${taeae} ${zaeae} ${uu},</br>${poegiff},</br>${kwii} ${ee}.`;
const einleitung_vers02 = `${oooo}`
const einleitung_vers03 = `${setup_einleitung_vers03()}`;
const einleitung_heading = {'category': 'heading', 'content': 'einleitung'};
const einleitung_content = {'category': 'paragraph', 'content': `${einleitung_vers01}</br>${einleitung_vers02},</br>${einleitung_vers03}`};
ursonate.push(einleitung_heading, einleitung_content);

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
const erster_teil_vers02_start = 'dedesnn nn rrrrrr';
const erster_teil_vers02_mid = `li ${ee}`;
const erster_teil_vers02_end = 'mpiff tillff too,</br>tillll,</br>jüü kaa';
const kete = 'kete';
const ra = 'ra';
const rinnz = 'rinnz';
const krmue = 'krrmüü';
const ziuenzeziu = 'ziiuu ennze ziiuu';
const erster_teil_vers03_a = `${rinnz.slice(2, 5)}${krmue}`;
const erster_teil_vers03_b = `${ziuenzeziu} ${rinnz}${krmue}`
const erster_teil_vers04 = 'rrummpff tillff toooo';

const erster_teil_heading = {'category': 'heading', 'content': 'erster teil'};
const erster_teil_subheading01 = {'category': 'subheading', 'content': 'thema 1'};
const erster_teil_thema01_content = {'category': 'paragraph', 'content': einleitung_vers01};
const erster_teil_subheading02 = {'category': 'subheading', 'content': 'thema 2'};
const erster_teil_thema02_content = {'category': 'paragraph', 'content': `${erster_teil_vers02_start},</br>${erster_teil_vers02_mid},
</br>${erster_teil_vers02_end}?`};
const erster_teil_subheading03 = {'category': 'subheading', 'content': 'thema 3'};
const erster_teil_thema03_content = {'category': 'paragraph', 'content': setup_erster_teil_vers03()}
const erster_teil_subheading04 = {'category': 'subheading', 'content': 'thema 4'};
const erster_teil_thema04_content = {'category': 'paragraph', 'content': `${erster_teil_vers04}?`};

ursonate.push(erster_teil_heading, erster_teil_subheading01, erster_teil_thema01_content, erster_teil_subheading02,
    erster_teil_thema02_content, erster_teil_subheading03, erster_teil_thema03_content, erster_teil_subheading04, erster_teil_thema04_content);

function setup_erster_teil_vers03() {
    return `${rinnz}e${kete} ${repeat_string(bee, 2)} ${erster_teil_vers03_a}?</br>${erster_teil_vers03_b},
</br>${rakete_variation_of_ee('b')}.`;
}

// return 'rakete bee bee' or 'rakete bee (char)ee'
function rakete_variation_of_ee(char){
    let result_string = `${ra}${kete}`;
    let b = 'b';
    if (char === b) {
        result_string += ` ${repeat_string(variation_of_ee(char), 2)}`;
    }
    else {
        result_string += ` ${variation_of_ee(b)} ${variation_of_ee(char)}`;
    }
    return result_string;
}

function variation_of_ee(char){
    return `${char}${ee}`
}

/*  ----------
    überleitung
    ----------
*/
const ueberleitung_heading = {'category': 'heading', 'content': 'überleitung'};
const ueberleitung_vers01 = {'category': 'paragraph', 'content': `${ziuenzeziu} ${erster_teil_vers03_a},</br>${erster_teil_vers03_b},`};
const ueberleitung_vers02 = {'category': 'paragraph', 'content': `${rakete_variation_of_ee('b')}? ${rakete_variation_of_ee('z')}.`};

ursonate.push(ueberleitung_heading, ueberleitung_vers01, ueberleitung_vers02);

// create Ursonate
const section_ursonate = document.getElementById("ursonate");
ursonate.forEach(function (element) {
    let node;
    let category = element.category;
    switch (category){
        case 'heading':
            node = document.createElement('h3');
            break;
        case 'subheading':
            node = document.createElement('h4');
            break;
        case 'paragraph':
            node = document.createElement('p');
            break;
    }
    node.innerHTML = element.content;
    section_ursonate.appendChild(node);
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

function repeat_string(string, factor){
    let resultString = '';
    for(let i=0; i<factor; i++){
        resultString += `${string} `;
    }
    return resultString.trim();
}

