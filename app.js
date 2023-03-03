


function onCreateBtnClick(){
    

    document.getElementById("create_modal").classList.remove("hidden");
}
function cancelfuntion(){
    

    document.getElementById("create_modal").classList.add("hidden");
}
var works = [
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        tl: "Chinh kich",
        tomtat: "dsajdsjdnioadniwdnwidonaadlkawdklmdnklandkwdmskdmskdmasdosadmasodmasdoadmasodmdoasdmsad"
    },
    {
        tieude: " Them mot lan dau",
        nam: 2022,
        tl: "chinh kich",
        tomtat: "adsajdsjdnioadniwdnwidonaadlkawdklmdnklandkwdmskdmskdmasdosadmasodmasdoadmasodmdoasdmsad"
    }
    

]

 
    function createProductDOM(work){
        //tao 1 div chung
        var newdiv = document.createElement("div");
        newdiv.className="flex w-full space-x-2 h-[150px]";
        //chen anh vao div
        var newimg = document.createElement("img");
            newimg.src ="https://photocross.net/wp-content/uploads/2020/03/bo-cuc-chup-anh-chan-dung.jpg";
            newimg.width="300";
            newimg.height="300 rounded-md rounded-sm";
            newdiv.appendChild(newimg);
        var newdiv1 = document.createElement("div");
            newdiv1.className=" flex-col  space-x-2 w-full space-y-2";
            //chen cac thuoc tinh vao div   
        var newp = document.createElement("p");
            newp.className = "text-xl bg-gray-100";
        var textNode = document.createTextNode(work.tieude);
            newp.appendChild(textNode);
            newdiv1.appendChild(newp);
            
        var newp2 = document.createElement("p");
            newp2.className = "text-sm text-black rounded-md border-2 bg-red-300 w-10 ";
        var textNode2 = document.createTextNode(work.nam);
            newp2.appendChild(textNode2)
            newdiv1.appendChild(newp2)
        var newp3 = document.createElement("p");
            newp3.className = "text-xl bg-gray-100";
        var textNode3 = document.createTextNode(work.tl);
            newp3.appendChild(textNode3)
            newdiv1.appendChild(newp3)
        var newp4 = document.createElement("p");
            newp4.className = "text-sm bg-gray-100 w-2/3 ";
        var textNode4 = document.createTextNode(work.tomtat);
            newp4.appendChild(textNode4)
            newdiv1.appendChild(newp4)
        var newpbtn = document.createElement("a");
            newpbtn.href = "./workchitet.html";
            newpbtn.className="text-black rounded-md text-bold mt-10 underline";
        var textNode5 =document.createTextNode("Chi Tiết Bài Viết");
            newpbtn.appendChild(textNode5);
            newdiv1.appendChild(newpbtn);





            //
            newdiv.appendChild(newdiv1);
            document.getElementById("id_1").appendChild(newdiv);
      

            
        }
            
  
    function reloadTable(){
        var table = document.getElementById("id_1");
        
        for(var work of works){
            
           // day div vao html
            table.append(createProductDOM(work));
        }
    }
    reloadTable();
   







