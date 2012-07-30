function fibanocciNumber(id, data){
  
  
  var n = [0,1,1], x, number = data.number*1;
  
  if(number === 0){
    alert('0'); 
    return;
  }else if(number === 1){
    alert('1'); 
    return;
  }else if(number === 2){
    alert('1'); 
    return;
  }else if(number > 2){
    var f;
    for(x=3; x<number+1; x++){
      var s = n[x-2] + n[x-1];
      n.push(s);
    }
    f = n.length-1;
    alert('fibanocciSequence : ' + n + '\nfibanocciNumber : ' + n[f]);
  }

}

(function($){
	$.fn.fibanocciNumber = function(options){
		var id	= $(this), opts;
  	$.fn.fibanocciNumber.defaults = {
      number: 10
  	};
		
		opts = $.extend({}, $.fn.fibanocciNumber.defaults, options);

    fibanocciNumber(id, opts);
    
		return this;	
	};

})(jQuery);

