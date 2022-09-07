var proximo = window.document.getElementById("proximojs")
var body = window.document.getElementById("body")
var transição = window.document.getElementById("transição")
var botao = window.document.getElementById("botao")
var entrada= window.document.getElementById("entrada")
var header = window.document.getElementById("header")

var main1 = window.document.getElementById("main1")
var main2 = window.document.getElementById("main2")

botao.addEventListener("click", iniciar)

function iniciar() {
    entrada.style.opacity = "0%"
    setTimeout(function sumirentrada() {
        entrada.style.display = "none"
    }, 3000);
    setTimeout(function oneshot() {
        header.style.opacity = "1"
        header.style.transition = "1s"
    }, 2000);
    setTimeout(function aparecer() {
        main1.style.transition = "1s"
        main1.style.opacity = "1"
        
    }, 3000);
    
    proximo.addEventListener("mouseenter", Mar1)
    function Mar1() {
        
        proximo.style.transition = "1s"
        proximo.style.opacity = "1"
    }
        proximo.addEventListener("mouseout", Mar2)
        function Mar2() {
                    
                    proximo.style.transition = "1s"
                    proximo.style.opacity = "0"
    }
            proximo.addEventListener("click", clicar)
            function clicar() {
                        
                        transição.style.transition = "2s"
                        transição.style.margin = "-30.46% 0% 0% -0.8%"
                        setTimeout(function mudançaparamar() {
                            body.style.backgroundImage = "url(mar1366x768.jpg)"
                            transição.style.display = "none"
                            main1.style.display = "none"
                            header.style.display = "none"
                            proximo.style.display = "none"
                        }, 3000);
                        setTimeout(function textodamudançamar() {
                            main2.style.display = "block"
                            setTimeout(() => {
                            main2.style.opacity = "1"
                            }, 1000);
                        }, 1500);
                        
                    }
    }
    