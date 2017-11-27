var utilModule = (() => {
    var coins = 247;
    function setSpash(){
        $("body").css({
            overflowY: "hidden"
        })
    }

    return{
        init: () => {
            setSpash();
        },
        getCoins: () => {
            return coins;
        },
        addCoins: (value) => {
            return coins += value;
        },
        rmCoins: (value) => {
            return coins -= value;
        }
    }
})();

$(document).ready(() => {
    utilModule.init();
    setTimeout(() => {
        $(".porco").addClass("porco-noLeft");
    }, 2400);
    setTimeout(() => {
        $(".moneta").addClass("moneta-effect");
    }, 3400)
    $(".google, .facebook, .accedi").on("click", () => {
        uiModule.animation("fadeOut", $(".splashscreen"));
        $("header").addClass("headerShow");
        setTimeout(() => {
            $(".splashscreen").css({
                display: "none"
            })
            uiModule.animation("fadeIn", $(".content .heart"));
            uiModule.animation("fadeIn", $(".content .house"));
            uiModule.animation("fadeIn", $(".content .mobility"));
        },300)
        setTimeout(() => {
            $(".progress-bar").css({
                width: "75%"
            });
            $(".counter").counterUp({
                delay: 10,
                time: 1000
            });
        }, 500);

        Tipped.create('.progress', 'Esperienza per il prossimo livello che aumenterà il tuo moltiplicatore di Enics', {
            position: "top",
            close: false
        });

        Tipped.create('.coins', 'La tua fantastica valuta Enics. Con questa potrei accedere ai nostri fantastici servizi!!', {
            position: "top",
            close: false
        });

        Tipped.create('.volts', 'Ecco la tua energia risparmiata. A momenti sarà disponibile il tuo storico!!', {
            position: "top",
            close: false
        });

    })
})

$(document).on("click", ".enjoy, .carburante, .led, .heating, .heart", function(){
    var classe = $(this).attr("class").split(" ");
    classe = classe[2];
    var _dialog = $("<div/>")
    .addClass("grey-lighten-4 p20h p20w margin-auto dialog fixed z-depth-1 over-top-layer all-ease-in-out dialog-effect-open");
    
    var _close = $("<i/>")
    .addClass("material-icons float-right close")
    .html("close");

    $(_close).on("click", () => {
        $(_dialog).addClass("dialog-effect-close");
        setTimeout(() => {
            $(_dialog).remove();
        }, 300);
    })

    var _title = $("<h2/>")
    .addClass("m5h");
    var _desc = $("<p/>")
    .addClass("desc text-center p10h");
    switch(classe){
        case "enjoy":
            $(_title).html("Trasforma in minuti con Enjoy!");
            $(_desc).html(`
                <span class="bolder font-2em text-grey-darken-4">Paghi</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-money lighter"></i>
                    <span class="lighter">1 Enics Coin</span>
                </div>
                <br>
                <span class="bolder font-2em text-grey-darken-4">Ti offriamo</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-clock-o lighter"></i>
                    <span class="lighter">5 Minuti</span>
                </div>
            `);
            break;
        case "carburante":
            $(_title).html("Acquista carburate Eni!");
            $(_desc).html(`
                <span class="bolder font-2em text-grey-darken-4">Paghi</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-money lighter"></i>
                    <span class="lighter">1 Enics Coin</span>
                </div>
                <br>
                <span class="bolder font-2em text-grey-darken-4">Ti offriamo</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-clock-o lighter"></i>
                    <span class="lighter">€ 0,80</span>
                    <i class="lighter">x</i>
                    <span class="lighter"> Livello</span>
                    <br>
                    <i class="lighter">(Con quest'ultimo puoi creare i tuoi coins più velocemente)</i>                    
                </div>
            `);
            break;
        case "led":
            $(_title).html("Acquista i nostri idea led Eni!");
            $(_desc).html(`
                <span class="bolder font-2em text-grey-darken-4">Quando sarai a</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-money lighter"></i>
                    <span class="lighter">1400 kW/h</span>
                </div>
                <br>
                <span class="bolder font-2em text-grey-darken-4">Potrai comprare</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-clock-o lighter"></i>
                    <span class="lighter">€ 90</span>
                    <i class="lighter">di LED</i>
                </div>
            `);
            break;
        case "heating":
            $(_title).html("Acquista le caldaie Eni!");
            $(_desc).html(`
                <span class="bolder font-2em text-grey-darken-4">Se paghi</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-money lighter"></i>
                    <span class="lighter">1 Enics Coin</span>
                </div>
                <br>
                <span class="bolder font-2em text-grey-darken-4">Avrai solo per te</span>
                <br>
                <div class="font-1-5em m5h text-grey-darken-1">
                    <i class="fa fa-clock-o lighter"></i>
                    <span class="lighter">15.5 kW/h</span>
                </div>
            `);
            break;
        case "heart":
            $(_title).html("Dona");
            $(_desc)
            .removeClass("desc")
            .html(`
                <div class="col-12 p0w text-center">
                    <img class="border-rad col-12 p0w z-depth-1" src="https://images.unsplash.com/photo-1490424660416-359912d314b3?auto=format&fit=crop&w=1500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D">
                    <h3 class="col-12 p0w m0h p10h">Scuola in Zimbabwe</h3>
                    <div class="col-12">
                        <h4 class="text-primary p0w m0h p10h inline-block col-5 text-right">
                            10.340
                        </h4>
                        <h4 class="inline-block p0w m0h p10h col-6 text-left">
                            /15.000 kW/h
                        </h4>
                    </div>
                </div>
            `);
            break;
    }
    var _div = $("<div/>")
    .addClass("col-12 text-center p5h m5h font-1-5em");
    var _labelNumber = $("<label/>")
    .addClass("col-1 text-center p5w p5h")
    .html("1").css({
        verticalAlign: "text-bottom"
    });
    var _addBtn = $("<i/>")
    .addClass("material-icons p5h p5w")
    .html("add");
    var _rmBtn = $("<i/>")
    .addClass("material-icons p5h p5w")
    .html("remove");

    var _button = $("<input type='button'/>").attr({
        value: "ACQUISTA ORA"
    }).addClass("relative bottom col-12 margin-auto p10h p15w primary border-radius-google text-white");
    $(_div).append(_rmBtn, _labelNumber, _addBtn);
    $(_dialog).append(_close, _title, _desc, _div, _button);
    $(_dialog).appendTo("body");
})

$(document).on("click", ".login .subtitled", () => {
    $(".login").eq(1).addClass("accedi z-depth-1").css({
        height: "auto",
        borderRadius: "12px"
    });
    $(".porco, .moneta").css({
        opacity: 0
    });
    $(".login").eq(0).addClass("accedi").css({
        opacity: "0"
    });
    uiModule.animation("fadeOut", $(".porco"));
    setTimeout(() => {
        $(".login").eq(0).css({
            display: "none"
        })
    }, 300)
})