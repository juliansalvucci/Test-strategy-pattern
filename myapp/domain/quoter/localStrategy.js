function localStrategy(){
    this.quote = function(amount,gain){
        return amount * gain;
    }
}

module.exports = localStrategy;