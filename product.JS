let catlist=JSON.parse(localStorage.getItem("catin"));
let  tr='<option>--- select catgeory---</option>'
catlist.map((i)=>{
    tr +=`<option value=${i.id}>${i.name}</option>`;
})

document.getElementById("catname").innerHTML=tr;

let prdata=[];
const  addproduct=()=>{
    let data = JSON.parse(localStorage.getItem("productinfo"));
    let cid=document.prfrm.catname.value;
    let name=document.prfrm.prname1.value;
    let price=document.prfrm.price.value;
    let descript=document.prfrm.desc.value;
    let catid=document.prfrm.catid.value;
    let obj=''
    
    if (catid!='') {
      data.map((i)=>{
        if(i.id==catid){
          i.name=name
          i.price=price
          i.descript=descript
          i.cid=cid
          

        }
      })
     localStorage.setItem("productinfo",JSON.stringify(data));

    } else {
      if(data != null){
        
        obj={
           id:data.length +1,
           name:name,
           price:price, 
           cid:cid,
           descript:descript,}
           
           prdata=data
           
           
       }else{
   
        obj={
           id:1,
           name:name,
           price:price, 
           cid:cid,
           descript:descript,
       }
       }
   
       // let obj={
       //     id:1,
       //     name:name,
       //     price:price,
       //     cid:cid,
       //     descript:descript,
       // }
     prdata.push(obj);
     localStorage.setItem("productinfo",JSON.stringify(prdata));
    }
    document.prfrm.catid.value=''
    document.prfrm.prname.value='';

  document.getElementById('prfrm').reset();
  display();


}
let display = () => {

    let data = JSON.parse(localStorage.getItem("productinfo"));
    let catdata = JSON.parse(localStorage.getItem("catin"));


    let tr = "";
    data.map((i) => {
      catdata.filter((a)=>{
        if (a.id == i.cid) {
          return i.poname=a.name;

        }

      })
      tr += `<tr> 
          <td>${i.id}</td>
          <td>${i.poname}</td>

          <td>${i.name}</td>
          <td>${i.price}</td>
          
          <td>
          <a href="#" class="btn btn-primary" onclick="edicat(${i.id})">Edit</a>
          <a href="#" class="btn btn-danger" onclick="delcat(${i.id})">Delet</a>
          </td>
        </tr>`;
    });
    document.getElementById("allCatData").innerHTML = tr;
  };


  const delcat = (id) => {
    let data = JSON.parse(localStorage.getItem("productinfo"));
    data.splice(id - 1, 1);
    let j = 1;
    data.map((i) => {
      i.id = j++;
    });
    localStorage.setItem("productinfo", JSON.stringify(data));
    display();
  };    
  
  const edicat = (id) => {
    let data = JSON.parse(localStorage.getItem("productinfo"));
    let cat = data.filter((i) => {
      return i.id == id;
    });
    // console.log(cat);
    document.prfrm.prname.value = cat[0].name;
    document.prfrm.catid.value= cat[0].id;
    document.prfrm.desc.value= cat[0].descript;
    document.prfrm.price.value = cat[0].price
    document.prfrm.catname.value = cat[0].cid
    
  };
   
  display();


  