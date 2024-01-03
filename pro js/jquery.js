$(document).ready(function(){
$('.showAll').click(function(){
$('.card').show(2000)
})
});
$(document).ready(function(){
$('.web').click(function(){
$('#card3').show(2000)
$('#card6').show(2000)
$('#card1').show(2000)
$('#card4').hide(2000)
$('#card2').hide(2000)
$('#card5').hide(2000)
})
});
$(document).ready(function(){
$('.Dev').click(function(){
$('#card3').hide(2000)
$('#card6').hide(2000)
$('#card1').hide(2000)
$('#card4').show(2000)
$('#card2').show(2000)
$('#card5').show(2000)
})
});
$(document).ready(function(){
$('.Word ').click(function(){
$('#card3').show(2000)
$('#card5').show(2000)
$('#card6').show(2000)
$('#card4').hide(2000)
$('#card2').hide(2000)
$('#card1').hide(2000)
})
});

function icons(a,b,c,d,e,f,j,h,i,g,k,l,m,q,w,r) {
$(document).ready(function(){
$(a).click(function(){
$(b).css({'visibility':'visible','transition':' 0.5s'})
$(c).css({'height':'160px','margin':'10px','transition':' 0.5s'})  
$(d).css({'visibility':'visible','transition':' 0.5s'})  
$(a).css({'visibility':'hidden','transition':' 0.1s'})  
$(e).css({'height':'60px'})  
$(f).css({'height':'60px'})  
$(j).css({'height':'60px'})  
$(h).css({'visibility':'hidden'})  
$(i).css({'visibility':'hidden'})  
$(g).css({'visibility':'hidden'}) 
$(k).css({'visibility':'hidden'})  
$(l).css({'visibility':'hidden'})  
$(m).css({'visibility':'hidden'}) 
$(q).css({'visibility':'visible'})  
$(w).css({'visibility':'visible'})  
$(r).css({'visibility':'visible'}) 
})
});

$(document).ready(function(){
$(d).click(function(){
$(b).css({'visibility':'hidden','transition':' 0.1s'})
$(c).css({'height':'60px','margin':'10px','transition':' 0.5s'})  
$(d).css({'visibility':'hidden','transition':' 0.1s'})  
$(a).css({'visibility':'visible','transition':' 0.5s'})   
})
});
}
icons('#icons1','#p1','#quation1','#icons11','#quation2','#quation3','#quation4','#p2','#p3','#p4','#icons22','#icons33','#icons44','#icons2','#icons3','#icons4')
icons('#icons2','#p2','#quation2','#icons22','#quation1','#quation3','#quation4','#p1','#p3','#p4','#icons11','#icons33','#icons44','#icons1','#icons3','#icons4')
icons('#icons3','#p3','#quation3','#icons33','#quation2','#quation1','#quation4','#p2','#p1','#p4','#icons22','#icons11','#icons44','#icons2','#icons1','#icons4')
icons('#icons4','#p4','#quation4','#icons44','#quation2','#quation3','#quation1','#p2','#p3','#p1','#icons22','#icons33','#icons11','#icons2','#icons3','#icons1')


function hovring(x,y,z) {
    $(document).ready(function(){
    $(x).mouseover(function(){
    $(y).css({'width':'150px','height':' 150px','transition':' 0.5s'}) 
    $(z).css({'color':' rgb(200, 0, 231 )','transition':' 0.5s','font-weight':'600'}) 
    })
    });

$(document).ready(function(){
    $(x).mouseout(function(){
    $(y).css({'width':'110px','height':' 110px','transition':' 0.5s'}) 
    $(z).css({'color':'black','transition':' 0.5s','font-weight':'normal'}) 
    })
    });
}
hovring('#card1','#dd1','#h41')
hovring('#card2','#dd2','#h42')
hovring('#card3','#dd3','#h43')
hovring('#card4','#dd4','#h44')
hovring('#card5','#dd5','#h45')
hovring('#card6','#dd6','#h46')


function hovr(a,b) {
    $(document).ready(function(){
    $(a).mouseover(function(){
    $(b).css({'top':'-20px','transition':' 0.5s'}) 
    })
    });

$(document).ready(function(){
    $(a).mouseout(function(){
    $(b).css({'top':'0px','transition':' 0.5s'}) 
    })
    });
}

hovr('#card111','.card-img-top1')
hovr('#card222','.card-img-top2')
hovr('#card333','.card-img-top3')
hovr('#card444','.card-img-top4')

function ccardss(a,b,c,d,e,f,g) {
    $(document).ready(function(){
    $(a).click(function(){
    $(b).slideUp(600)
    $(c).slideUp(600)
    $(d).slideUp(600)
    $(e).slideUp(600)
    $(f).css({'width':'50px','transition':' 1.4s','margin-left':'81%','overflow': 'hidden'}) 
    $(g).css({'display':'block','transition':' 0.5s'}) 
    $(a).css({'display':'none','transition':' 0.5s'}) 
    })
    });

        $(document).ready(function(){
        $(g).click(function(){
        $(b).slideDown(600)
        $(c).slideDown(600)
        $(d).slideDown(600)
        $(e).slideDown(600)
        $(f).css({'width':'80%','transition':' 1.4s','margin-left':'0px'}) 
        $(g).css({'display':'none','transition':' 0.5s'}) 
        $(a).css({'display':'block','transition':' 0.5s'}) 
        })
        });

    
}

ccardss("#bt1","#po1","#h31","#im1","#ddv1","#on1","#bt12")
ccardss("#bt2","#po2","#h32","#im2","#ddv2","#on2","#bt22")
ccardss("#bt3","#po3","#h33","#im3","#ddv3","#on3","#bt31")



