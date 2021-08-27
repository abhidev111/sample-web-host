

var mydate = new Date();
document.getElementsByTagName("h5")[0].innerText=mydate;

document.getElementsByClassName("container")[0].style.background ="yellow";
function clicked(){
    var arr=[];
    var i=0;
    var sum=0;
    for( i=0; i<9;i++)
    {
        typeof i;
        arr[i]=parseInt(document.getElementById("sub"+i).value);
        console.log("initial :"+ i+"  " + arr[i]);
        if(arr[i]>100 || arr[i]<0)
        {
            alert("invalid marks");
            return;
        }
        else{
            if(arr[i]==100)
                arr[i]= arr[i]/10;
            
            else
                arr[i]= Math.floor(arr[i]/10)+1;
        }
        console.log("after floor :"+ i+"  " + arr[i]);

        if(i==0)
            arr[i]= arr[i]*4;
        else if(i==6 || i==7)
            arr[i]=arr[i]*2;
        else if(i==8)
            arr[i]=arr[i]*1;
        else
            arr[i]=arr[i]*3;
        console.log("after * credits :"+ i +"  "+ arr[i]);
       
        sum +=arr[i];
        console.log("after summing :"+ i +"  "+ sum);
    }
    
   

    var res = sum/24;
    if(Number.isNaN(res)){
        alert("Please Enter valid input")
    }
    else{
    document.getElementById("result").innerHTML = "Congratulations, Your CGPA is :"+ res.toFixed(2);
    for( i=0; i<9;i++)
        document.getElementById("sub"+i).value ="";
    }


    
    
    
   
}


