
    let url='https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';

    let appended=document.getElementById("data");

     let DATA;

    async function fetchdata(){
  
     let res=await fetch(url);
     let result=await res.json();
     DATA=result;
    
       getdata(result); 
    }



    function getdata(i){
        // console.log(i)
        i.map((item)=>{

         let tr=document.createElement('tr');
         let td_1=document.createElement('td');
         let td_2=document.createElement('td');
         let td_3=document.createElement('td');
         let td_4=document.createElement('td');
        
         td_1.innerHTML=`<input type="checkbox" name="" id="">`
         td_2.innerText=item.name;
         td_3.innerText=item.email;
         td_4.innerText=item.role;


         let span=document.createElement('span');
         let span1=document.createElement('span');

         span.innerHTML=`<i class="uil uil-edit"></i>`
         span1.innerHTML=`<i class="uil uil-trash"></i>`;
       
          span.addEventListener('click',()=>{
            Edit(item.id)
        });

    
         span1.addEventListener('click',()=>{
             Delete(item.id)}
             );

         tr.append(td_1,td_2,td_3,td_4,span,span1);
         appended.append(tr);
        })
    
    function getdata1(i){
        appended.innerHTML="";
        i.map((item)=>{

         let tr=document.createElement('tr');
         let td_1=document.createElement('td');
         let td_2=document.createElement('td');
         let td_3=document.createElement('td');
         let td_4=document.createElement('td');
        
         td_1.innerHTML=`<input type="checkbox" name="" id="">`
         td_2.innerText=item.name;
         td_3.innerText=item.email;
         td_4.innerText=item.role;


         let span=document.createElement('span');
         let span1=document.createElement('span');

         span.innerHTML=`<i class="uil uil-edit"></i>`
         span1.innerHTML=`<i class="uil uil-trash"></i>`;
       
          span.addEventListener('click',()=>{
            Edit(item.id)
        });

    
         span1.addEventListener('click',()=>{
             Delete(item.id)}
             );

         tr.append(td_1,td_2,td_3,td_4,span,span1);
         appended.append(tr);
        })
    
    }
  

const Edit=(id)=>{
      
      console.log(id);
  }
  
const Delete=(index)=>{

   DATA.slice(index,1);
   getdata1(DATA);
   
}

    }





  