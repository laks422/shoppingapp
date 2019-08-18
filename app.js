const Express=require('express');
var app=new Express();
app.set('view engine','ejs');
app.use(Express.static(__dirname+"/public"));

var items=[{name:"Samsung Galaxy Note 10+",
img:"/images/gal1.jpg",
price:"89,000 Rs.",
description:"Aura Black, 8GB RAM, 256GB Storage",
review:"Cost effective"

},
{name:"OnePlus 7",
img:"/images/gal2.jpg",
price:"37900 Rs.",
description:"Mirror Grey, 8GB RAM, 256GB Storage",
review:"Good Battery life"
},
{name:"Samsung Galaxy M20",
img:"/images/gal3.jpg",
price:"11999 Rs.",
description:"Ocean Blue, 4+64GB",
review:"good camera quality and cost effective"
},

{name:"Samsung Galaxy M10",
img:"/images/gal4.jpg",
price:"7900  Rs.",
description:"Ocean Blue, 3+32GB",
review:" front camera is pretty cool"
},
{name:"Samsung Galaxy M30",
img:"/images/gal5.jpg",
price:"15900 Rs.",
description:"Gradation Blue, 6+128 GB",
review:"Camera is good but fingerlock is not working properly"

},
{name:"Realme U1",
img:"/images/gal6.jpg",
price:"16900 Rs.",
description:"Ambitious Black, 3GB RAM, 32GB Storage Gradation Black, 6+128 GB",
review:"good camera quality and cost effective"
},
{name:"Samsung Galaxy A80",
img:"/images/gal7.jpg",
price:"47900 Rs.",
description:"Phantom Black, 8GB RAM, 128GB Storage",
review:"camera is above average"


},

{name:"Samsung Galaxy s10",
img:"/images/gal8.jpg",
price:"76000 Rs.",
description:"White, 8GB RAM, 512GB Storage",
review:"very powerful features and performance"
},

{name:"Nokia 6.1 Plus",
img:"/images/gal9.jpg",
price:"9000 Rs.",
description:"Black,6GB RAM,64GB",
review:"Rear camera is pretty cool"

},
{name:"Samsung Galaxy M40",
img:"/images/gal10.jpg",
price:"19200 Rs.",
description:"Midnight Blue, 6GB RAM, 128GB Storage",
review:"high memory with No Cost EMI/Additional Exchange Offer"
},
{name:"Honor 8X",
img:"/images/gal11.jpg",
price:"12000 Rs.",
description:"Red, 4GB RAM, 64GB Storage",
review:"Loudspeaker quality is just like radio, but the normal ear piece sound is very great,loud and clear too."
},

{name:"Redmi Y3",
img:"/images/gal12.jpg",
price:"11999 Rs.",
description:"Prime Black, 4GB RAM, 64GB Storage",
review:"great Display with Good Storage.."
},
{name:"Realme U1",
img:"/images/gal13.jpg",
price:"9000 Rs.",
description:"Ambitious Black, 3GB RAM, 32GB Storage",
review:"Very long battery life and good phone"
},
{name:"Xiaomi Mi A2",
img:"/images/gal14.jpg",
price:"11000 Rs.",
description:"Black, 4GB RAM, 64GB Storage",
review:"Loudspeaker sound quality is very great,loud and clear too."
},
{name:"OPPO A5s",
img:"/images/gal15.jpg",
price:"15000 Rs.",
description:"Gold, 64 GB  4 GB RAM.",
review:"powerful display and features"
},

{name:"Samsung Galaxy A50",
img:"/images/gal16.jpg",
price:"18900 Rs.",
description:"Blue, 4GB RAM, 64GB Storage",
review:"Not upto the mark,poor performance but camera is pretty cool"
},
{name:"OPPO F11",
img:"/images/gal17.jpg",
price:"17900 Rs.",
description:"Fluorite Purple, 6GB RAM, 128GB Storage",
review:"Average phone with high battery life"
},

{name:"Honor 10 Lite",
img:"/images/gal18.jpg",
price:"12900 Rs.",
description:"Midnight Black, 4GB RAM, 64GB Storage",
review:"Excellent features with low cost"
},
{name:"Samsung Galaxy A50",
img:"/images/gal16.jpg",
price:"18900 Rs.",
description:"Blue, 4GB RAM, 64GB Storage",
review:"very good memory capacity and cost effective"
},
{name:"Vivo y17 ",
img:"/images/gal19.jpg",
price:"16900 Rs.",
description:"Mineral Blue, 4GB RAM, 128GB Storage",
review:"high memory with No Cost EMI/Additional Exchange Offer"
},
{name:"Samsung Galaxy A10",
img:"/images/gal20.jpg",
price:"7800 Rs.",
description:"Black, 2GB RAM and 32GB storage",
review:"cost effective with good features"

}]

app.get('/',(req,res)=>{
    res.render('index',{items});




});
app.get('/buynow/:id',(req,res)=>{
    const x=req.params.id;
    res.render('buynow',{items,"bynow":items[x]});
    

});
    

    

app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on 3000");
});