
// Const captures two elements
const menu = document.querySelectorAll( "nav a" );
// function gets an argument equivalent to the array parsed onto foreach
function ativarLink (menu)
{
    //ref receives href from nav a
    const ref = menu.href;
    //url gets href from document
    const url = document.location.href
    // compares the two links
    if ( ref === url )
    {
        menu.style.backgroundColor = "black";
        menu.style.color = "white";
    }
}
//gets nav a elements and parse onto foreach to active function
menu.forEach( ativarLink )

const tamanho = document.querySelector( "main > div" );
tamanho.style.maxWidth = 1200 + "px";
tamanho.style.margin = 0 + " " + "auto";
tamanho.style.boxSizing = "border-box";

const footer = document.querySelector( "footer" );
footer.style.maxWidth = 1200 + "px";
footer.style.margin = 0 + " " + "auto";
footer.style.boxSizing = "border-box";

const banner = document.querySelector( "wrap" );
banner.style.maxWidth = 1200 + "px";
banner.style.margin = 0 + " " + "auto";
banner.style.boxSizing = "border-box";