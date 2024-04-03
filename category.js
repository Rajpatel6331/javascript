let arr = [];

const addData = () => {
  let data = JSON.parse(localStorage.getItem("catin"));
  let catname = document.catfrm.catname.value;
  let catid = document.catfrm.catid.value;
  let obj = "";
  if (catid != "") {
    data.map((i) => {
      if (i.id == catid) {
        i.name = catname;
      }
    });
    localStorage.setItem("catin", JSON.stringify(data));
  } else {
    if (data != null) {
      obj = {
        id: data.length + 1,
        name: catname,
      };
      arr = data;
    } else {
      obj = {
        id: 1,
        name: catname,
      };
    }
    arr.push(obj);
    localStorage.setItem("catin", JSON.stringify(arr));
  }
  document.catfrm.catname.value = "";
  document.catfrm.catid.value = "";

  display();

};
let display = () => {

  let data = JSON.parse(localStorage.getItem("catin"));
  let tr = "";
  data.map((i) => {
    tr += `<tr> 
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>
        <a href="#" class="btn btn-primary" onclick="edicat(${i.id})">Edit</a>
        <a href="#" class="btn btn-danger" onclick="delcat(${i.id})">Delet</a>
        </td>
      </tr>`;
  });
  document.getElementById("allCatData").innerHTML = tr;
};

const delcat = (id) => {
  let data = JSON.parse(localStorage.getItem("catin"));
  data.splice(id - 1, 1);
  let j = 1;
  data.map((i) => {
    i.id = j++;
  });
  localStorage.setItem("catin", JSON.stringify(data));
  display();
};

const edicat = (id) => {
  let data = JSON.parse(localStorage.getItem("catin"));
  let cat = data.filter((i) => {
    return i.id == id;
  });
  document.catfrm.catname.value = cat[0].name;
  document.catfrm.catid.value = cat[0].id;
  id = document.catfrm.catid.value;
  document.getElementById("btnsave").innerHTML = id != "" ? "Update" : "Save";
};
display();
