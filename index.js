
    
    let url='https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
    
    let appended=document.getElementById("data");
    let thead=document.getElementById("thead");
    let main_pagination=document.querySelector(".main_pagination");
    let Data;
    
    async function fetchdata(){
        let res=await fetch(url);
        Data=await res.json();
        
        pagination(Data,0,10)
     
        
      
        
    }
    fetchdata()
  
    
    
    function pagination(Data,s,e){
        let S=[];
        
        
        let total=Data.length;
        let perPage=Math.ceil(total/10);
        console.log('total:', total)
        console.log('perPage:', perPage)
    for(var i=s;i<e;i++){
            
            S.push(Data[i]);
               
        }
     
        getdata(S)
        Data=S;
        console.log('Data:', Data)
        
    } 
    
   
    
    
    
// <------Starting to showing  the data of items------>
function getdata(item){
    appended.innerHTML="";
    // if(item.length==0){
    //         main_pagination.style.display="none";
    //         thead.innerHTML='';
    //         appended.innerHTML="Data is Processing....";
    //     }
        item.map((item,i)=>{
            let div=document.createElement('div');
            div.setAttribute("class","line");
            
            appended.append(div)
            
            let tr=document.createElement('tr');
            tr.setAttribute('id','row')
            
            let td_1=document.createElement('td');
            let td_2=document.createElement('td');
            let td_3=document.createElement('td');
            let td_4=document.createElement('td');
            td_1.innerHTML=`<input type="checkbox" name="" id=""
            >`
            td_2.innerText=item.name;
            td_2.setAttribute('id','valueChange_1')
            
            td_3.innerText=item.email;
            td_3.setAttribute('id','valueChange_2')
            
            td_4.innerText=item.role;
            td_4.setAttribute('id','valueChange_3')
         
            
            let td_5=document.createElement('td');
            let span=document.createElement('span');
            let span1=document.createElement('span');
            
            span.innerHTML=`<i class="uil uil-edit"></i>`
            span1.innerHTML=`<i class="uil uil-trash" style="color:red"></i>`;
            
            span.addEventListener('click',()=>{
                Edit(tr)
                
            });
            
            
            span1.addEventListener('click',()=>{
                Delete(i)});
                
                
                td_5.append(span,span1)
                tr.append(td_1,td_2,td_3,td_4,td_5);
                appended.append(tr);
            }) 
            main_pagination.style.display="grid";
        }
        
// <------Ending to showing  the data of items------>
        
        
        
        
        //  <------Starting of Edit items----------> 
    const Edit=(index)=>{
        console.log('index:', index)
        
        
        index.innerText='';
        
        
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        
        td1.innerHTML=`<input type='checkbox' style='width:100px' id='check'/>`
        td2.innerHTML=`<input type="text" id='name' style="width:100px"/>`
        td3.innerHTML=`<input type="email" id='email'style="width:100px"/>`
        td4.innerHTML=`<input type="text" id='role' style="width:100px"/>`
        console.log(td1)
        
        let td5=document.createElement('td');
        let span=document.createElement('span');
        
        
        span.innerHTML=`<button>save</button>`
        span.addEventListener('click',()=>{
            Save(index)
        });
        
        index.append(td1,td2,td3,td4);
            td5.append(span)
         index.append(td5);
        }
    
//<--------- Ending  of Edit function -------->
    
    
    
// <--------Starting of search item------>
let a=[];
function SearchingItem(){
    let search=document.getElementById('Search').value;
    Data.map((val,i)=>{
        if(search===val.name[0] 
            ||  search==val.email[0] 
            || search==val.role[0]
            ||search===val.name
            ||  search==val.email
            || search==val.role){
            
            a.push(val)
        }
        
    })
    
    getdata(a);
    a=[];
}


  
//   const SearchingItem = debounce(() => saveInput());





//<---Ending of search item----->


//   <-----starting of delete item------->
    const Delete=(index)=>{

        console.log('Data:', Data)
        delete S[index-1];
        console.log('S:',S)
        getdata(S);
        
    }
//   <-----Ending of delete item------->
    
    const Save=(x)=>{
        console.log('save',x)
}
    
// <------Starting of The Pagination ------>





// <------Ending of The Pagination ------>





  