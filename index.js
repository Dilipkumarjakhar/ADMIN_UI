
    let start;
    let end;
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
      
        i.map((item)=>{
            //    if(item.id<=10){
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
             Delete(item.id)});
             
             
             tr.append(td_1,td_2,td_3,td_4,span,span1);
             appended.append(tr);
            }
        
            )

            let span_prev2=document.createElement('span');
            span_prev2.innerHTML=`<button><i class="uil uil-angle-double-left"></i></button>`;
            span_prev2.addEventListener('click',()=>{
                handelChange(-4)
            })
            appended.append(span_prev2);
            
            let span_prev1=document.createElement('span');
            span_prev1.innerHTML=`<button><i class="uil uil-angle-left"></i></button>`;
            span_prev2.addEventListener('click',()=>{
                handelChange(-2)
            })
            appended.append(span_prev1);

            let span_num1=document.createElement('span');
            span_num1.innerHTML=`<button>1</button>`;
            span_num1.addEventListener('click',()=>{
                handelChange(1)
            })
            appended.append(span_num1);

            let span_num2=document.createElement('span');
            span_num2.innerHTML=`<button>2</button>`;
            span_num2.addEventListener('click',()=>{
                handelChange(2)
            })
            appended.append(span_num2);
            
            let span_num3=document.createElement('span');
            span_num3.innerHTML=`<button>3</button>`;
            span_num3.addEventListener('click',()=>{
                handelChange(3)
            })
            appended.append(span_num3);
            
            let span_next1=document.createElement('span');
            span_next1.innerHTML=`<button><i class="uil uil-angle-right"></i></button>`;
            span_next1.addEventListener('click',()=>{
                handelChange(4)
            })
            appended.append(span_next1);

            let span_next2=document.createElement('span');
            span_next2.innerHTML=`<button><i class="uil uil-angle-double-right"></i></button>`;
            span_next2.addEventListener('click',()=>{
                handelChange(5)
            })
            appended.append(span_next2);
        
        }



    function getdata1(i,start,end){
        appended.innerHTML="";
        console.log(i.length)
        i.map((item,start,end)=>{
            // if(item.id-1>=start && item.id-1<=end){
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
             Delete(item.id)
            });

            
            tr.append(td_1,td_2,td_3,td_4,span,span1);
            appended.append(tr);
        // }
        })
        let span_prev2=document.createElement('span');
        span_prev2.innerHTML=`<button><i class="uil uil-angle-double-left"></i></button>`;
        span_prev2.addEventListener('click',()=>{
            handelChange(-4)
        })
        appended.append(span_prev2);
        
        let span_prev1=document.createElement('span');
        span_prev1.innerHTML=`<button><i class="uil uil-angle-left"></i></button>`;
        span_prev2.addEventListener('click',()=>{
            handelChange(-2)
        })
        appended.append(span_prev1);

        let span_num1=document.createElement('span');
        span_num1.innerHTML=`<button>1</button>`;
        span_num1.addEventListener('click',()=>{
            handelChange(1)
        })
        appended.append(span_num1);

        let span_num2=document.createElement('span');
        span_num2.innerHTML=`<button>2</button>`;
        span_num2.addEventListener('click',()=>{
            handelChange(2)
        })
        appended.append(span_num2);

        let span_num3=document.createElement('span');
        span_num3.innerHTML=`<button>3</button>`;
        span_num3.addEventListener('click',()=>{
            handelChange(3)
        })
        appended.append(span_num3);

        let span_next1=document.createElement('span');
        span_next1.innerHTML=`<button><i class="uil uil-angle-right"></i></button>`;
        span_next1.addEventListener('click',()=>{
            handelChange(4)
        })
        appended.append(span_next1);

        let span_next2=document.createElement('span');
        span_next2.innerHTML=`<button><i class="uil uil-angle-double-right"></i></button>`;
        span_next2.addEventListener('click',()=>{
            handelChange(5)
        })

        appended.append(span_next2);

        let btn=document.createElement('button');
        btn.innerText="Deleteall";
        appended.append(btn);
    }
  

const Edit=(id)=>{
      
      console.log(id);
  }
//   ---------------here we have to delete item----------------
const Delete=(index)=>{

//    DATA.splice(index,1);
   delete DATA[index-1];
   getdata1(DATA);
   
}

    
// ------pagination formula ---------------


const handelChange=(v)=>{
      console.log(start,end)
       start=10*(v-1);
       end=10*v;
 getdata1(DATA,start,end);
}





  