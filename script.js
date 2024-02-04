

var input_arr=[];
var div_sizes=[];
var divs=[];
var as;
function generate_array(){
    const array_size=document.getElementById("a");
    debugger;
     var cont=document.getElementById("array_container");
        cont.innerHTML="";
        cont.style=" display:flex;flex-direction:row";
     var input_array=array_size.value;
        var input_arrays=input_array.split(",");
     as=input_arr.length;
     
    for(let i=0;i<input_arrays.length;i++){
        input_arr[i]=parseFloat(input_arrays[i]);
        div_sizes[i]=parseFloat(input_arr[i]);
        divs[i]=document.createElement("div");
        divs[i].id="div"+i;
        divs[i].value=input_arr[i];
        cont.appendChild(divs[i]);
        divs[i].style="margin :0.5% 0.5% ; width:20%; height:"+divs[i].value+"%; background-color:#f1828d; ";
        
        
        document.getElementById(divs[i].id).innerHTML=input_arr[i];
       
    }
    var sorts=document.getElementById("sorting_algo");
    var sort=sorts.value;
    switch(sort){
    case "selection":Selection_sort();
        break;
    case "Bubble":Bubble();
        break;
}
    
}

var delay=0;
var speed=document.getElementById("speed").value;
var delay_time=200/speed;
function div_update(cont,height,color,input_height)
{
   
    
    window.setTimeout(function(){
       
        cont.style=" margin:0% 0.5% ; width:" + 20 + "%; height:" + height + "%; background-color:" + color + ";";
        console.log(height);
        document.getElementById(cont.id).textContent=parseFloat(input_height);
        
    },delay+=delay_time);

}
function Bubble()
{
    delay=0;

    for(var i=0;i<as;i++)
    {
        
        for(var j=0;j<as-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"Khaki",input_arr[j]);
            // debugger
            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "Tomato",input_arr[j]);
                div_update(divs[j+1],div_sizes[j+1], "Tomato",input_arr[j+1]);
                
                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;
                
                temp=input_arr[j];
               input_arr[j]=input_arr[j+1];
                input_arr[j+1]=temp;

                div_update(divs[j],div_sizes[j], "Tomato",input_arr[j]);
                div_update(divs[j+1],div_sizes[j+1], "Tomato",input_arr[j+1]);
            }
            div_update(divs[j],div_sizes[j], "LightSkyBlue",input_arr[j]);
        }
        div_update(divs[j],div_sizes[j], "MediumSeaGreen",input_arr[j]);
    }
    div_update(divs[0],div_sizes[0], "MediumSeaGreen",input_arr[0]);

    
}

function Selection_sort()
{
    delay=0;
    debugger;
    for(var i=0;i<input_arr.length-1;i++)
    {
        div_update(divs[i],div_sizes[i],"Tomato",input_arr[i]);

        index_min=i;

        for(let j=i+1;j<input_arr.length;j++)
        {
            div_update(divs[j],div_sizes[j],"Khaki",input_arr[j]);
            
            var x = div_sizes[j];
            var y = div_sizes[index_min];
            if(x<y)
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"LightSkyBlue",input_arr[index_min]);
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"Tomato",input_arr[index_min]);
            }
            else
            {
                div_update(divs[j],div_sizes[j],"LightSkyBlue",input_arr[j]);
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            temp=input_arr[index_min];
            input_arr[index_min]=input_arr[i];
            input_arr[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"Tomato",input_arr[index_min]);
            div_update(divs[i],div_sizes[i],"Tomato",i);
            div_update(divs[index_min],div_sizes[index_min],"LightSkyBlue",input_arr[index_min]);
        }
        div_update(divs[i],div_sizes[i],"MediumSeaGreen",input_arr[i]);
    }
    div_update(divs[i],div_sizes[i],"MediumSeaGreen",input_arr[i]);


    
}



