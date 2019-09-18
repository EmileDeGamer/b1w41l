let kaas = prompt('Is de kaas geel?')

if (kaas == "ja"){
    let gaten = prompt('Zitten er gaten in?')
    if (gaten == "ja"){
        let duur = prompt('Is de kaas belachelijk duur?')
        if(duur == "ja"){
            kaas = "Emmenthaler"
            document.write(kaas)
        }
        else if (duur == "nee"){
            kaas = "Leerdammer"
            document.write(kaas)
        }
    }
    else if (gaten == "nee"){
        let hard = prompt('Is de kaas hard als steen?')
        if (hard == "ja"){
            kaas = "Panmigiano Reggiano"
            document.write(kaas)
        }
        else if (hard == "nee") {
            kaas = "Goudse Kaas"
            document.write(kaas)
        }
    }
}
else if (kaas == "nee"){
    let schimmel = prompt('Heeft de kaas blauwe schimmels?')
    if (schimmel = "ja"){
        let korst = prompt('Heeft de kaas een korst?')
        if (korst == "ja"){
            kaas = "Blue de Rochbaron"
            document.write(kaas)
        }
        else if (korst == "nee"){
            kaas = "Founme d'Ambert"
            document.write(kaas)
        }
    }
    else if (schimmel == "nee"){
        let korst = prompt('Heeft de kaas een korst?')
        if (korst == "ja"){
            kaas = "Camembert"
            document.write(kaas)
        }
        else if (korst == "nee"){
            kaas = "Mozzarella"
            document.write(kaas)
        }
    }
}
/*
function main(){
    let kaas = prompt('Is de kaas geel?', "ja/nee")
    if (kaas == "ja"){
        gaten()
    }
    else if (kaas == "nee"){
        schimmel()
    }
}

function duur(){
    let duur = prompt('Is de kaas belachelijk duur?', "ja/nee")
    if(duur == "ja"){
        kaas = "Emmenthaler"
        document.write(kaas)
    }
    else if (duur == "nee"){
        kaas = "Leerdammer"
        document.write(kaas)
    }
}

function hard(){
    let hard = prompt('Is de kaas hard als steen?', "ja/nee")
    if (hard == "ja"){
        kaas = "Panmigiano Reggiano"
        document.write(kaas)
    }
    else if (hard == "nee") {
        kaas = "Goudse Kaas"
        document.write(kaas)
    }
}

function korst(){
    let korst = prompt('Heeft de kaas een korst?', "ja/nee")
    if (korst == "ja"){
        kaas = "Blue de Rochbaron"
        document.write(kaas)
    }
    else if (korst == "nee"){
        kaas = "Founme d'Ambert"
        document.write(kaas)
    }
}

function korst2(){
    let korst = prompt('Heeft de kaas een korst?', "ja/nee")
    if (korst == "ja"){
        kaas = "Camembert"
        document.write(kaas)
    }
    else if (korst == "nee"){
        kaas = "Mozzarella"
        document.write(kaas)
    }
}

function schimmel(){
    let schimmel = prompt('Heeft de kaas blauwe schimmels?', "ja/nee")
    if (schimmel = "ja"){
        korst()
    }
    else if (schimmel == "nee"){
        korst2()
    }
}

function gaten(){
    let gaten = prompt('Zitten er gaten in?', "ja/nee")
    if (gaten == "ja"){
        duur()
    }
    else if (gaten == "nee"){
        hard()
    }
}*/