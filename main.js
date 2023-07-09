function showDiv() {
    var x = document.getElementById("focus");
    x.style.display = "flex";
    // console.log('div should be visible now')
}

function hideDiv() {
    var x = document.getElementById("focus");
    x.style.display = "none";
    // console.log('div should be NOT visible now')
}

function get_link() {
    link = prompt('Please insert link address', 'https://....')
    if (link.startsWith("http")) {
        console.log(link)
        return link
    } else {
        link = "https://" + link
    }
    console.log(link)
    return link
}

function redirect() {
    window.location.href = link;
}

function tableRun() {
    const table = document.getElementById("table");
    var newtable = document.createElement("table");
    newtable.setAttribute("id", "newtable");
    newtable.setAttribute("border", "3");
    table.appendChild(newtable);
    for (let i = 1; i <= 10; i++) {
        row = document.createElement("tr");
        rowid = "row" + i;
        row.setAttribute("id", rowid);
        document.getElementById("newtable").appendChild(row);
        for (let i = 1; i <= 10; i++) {
            td = document.createElement("td");
            td.textContent = i;
            document.getElementById(rowid).appendChild(td);
        }
    }
}

function getRandomInt(min = 1, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randomImg() {
    if (document.getElementById("digit")) {
        const img_nmbr = getRandomInt();
        path = "/img/" + img_nmbr + ".jpg"
        img.setAttribute("src", path)
    } else {
        const img_nmbr = getRandomInt();
        img = document.createElement("img")
        path = "/img/" + img_nmbr + ".jpg"
        img.setAttribute("src", path)
        img.setAttribute("id", "digit")
        document.getElementById("img_div").appendChild(img)
    }
}

