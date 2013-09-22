(function ($) {
    var oldId = null;
    
    $.fn.lockFocus = function(cmd) {
        var _this = this;
        if(arguments.length == 0) { // init
            if(oldId != null) $("#"+ oldId).unbind("blur");
            
            this.bind("blur", function(){
                _this.focus();
            });

            this.focus();

            oldId = this[0].id;            
            return this;
            
        } else {
            if(cmd == "unlock") {
                this.unbind("blur");
            }
        }
    };
 
}(jQuery));