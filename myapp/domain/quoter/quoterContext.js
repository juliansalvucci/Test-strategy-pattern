//Contexto principal.
function quoterContext(strategy,gain){
    this.strategy = strategy;
    this.gain = gain;

    //Modificación en tiempo de ejecución.
    this.setStrategy = function(strategy){
        this.strategy = strategy;
    }

    this.quote = function(amount){
        return this.strategy.quote(amount,this.gain);
    }
}

//para referenciar las rutas.
module.exports = quoterContext;