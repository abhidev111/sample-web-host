
// function avg(a,b){
//     return (a+b)/2;
// }

// console.log(avg(3,6));
// console.log(avg(1,2));
var mydate = new Date();
document.getElementsByTagName("h5")[0].innerText=mydate;

document.getElementsByClassName("container")[1].style.background ="yellow";
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
    
    document.getElementById("result").innerHTML = "Your CGPA is :"+ res;

    for( i=0; i<9;i++)
    document.getElementById("sub"+i).value ="";

    
    
    //result = document.createElement('p');
   



   
    // console.log("clicked");
    // const ans = parseInt(document.getElementById("num1").value)   + parseInt(document.getElementById("num2").value);
    // document.getElementsByTagName("span")[0].innerText = "solution is :"+ans;
    // result = document.createElement('p');
    
    // result.innerText= ans;
    // document.getElementById("calc").appendChild(result);
   
}


