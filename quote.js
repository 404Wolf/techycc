function random(list) {
    return list[Math.floor((Math.random()*list.length))];
}

let head =
`<div class="box box-overlay">
    <h2 style="text-align: center; margin-bottom: -30px; margin-left: 10px; margin-right: 10px">`

let foot =
`
        <h2 style="text-align: right; margin-right: 30px">
            -Linus Torvalds
        </h2>
    </a>
</div>`

let quotes = [
    [
        "Intelligence is the ability to avoid doing work, yet getting the work done.",
        "Linus Torvalds",
        "https://twitter.com/Linus__Torvalds/status/296333706828849153?ref_src=twsrc%5Etfw"],
    [
        "(created random quote generator but need to actually add more quotes)",
        "Wolf",
        "https://techy.cc"
    ]
]

let quote = random(quotes)

document.getElementById("quote").innerHTML = 
`
<div class="box box-overlay">
    <h2 style="text-align: center; margin-bottom: -30px; margin-left: 10px; margin-right: 10px">`+
        quote[0]+
    `</h2>

    <br>
    
    <a rel="noreferrer noopener" target="_blank" href="`+quote[2]+`">
        <h2 style="text-align: right; margin-right: 30px">
            -`+quote[1]+
        `</h2>
    </a>
    
</div>`;