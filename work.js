var works = [
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },
    {
        tieude: " The Girl With Beauty Smile",
        nam: 2022,
        theloai: "Romantics",
        tomtat: "Toptal is a marketplace for top Front-end developers and coders."
    },

]
function viewwork(){
   
    for( var work of works){
        var view = document.createElement("div");

        view.append(creatdom(work));
    }
    
}
viewwork();

function creatdom(work){
    var newdiv = document.createElement("div");
        newdiv.className="flex items-center justify-center pt-5 px-[200px]";
    var newimg = document.createElement("img");
        newimg.src ="./static/pexels-matthew-montrone-1324803.jpg";
        newimg.width="200";
        newimg.height="200";
        newimg.className="rounded-md";
        
        var newdiv1 = document.createElement("div");
        newdiv1.className="flex-col w-3/4 bg-white items-center justify-center px-4 space-y-5 rounded-md hover:bg-blue-50 ";
        var newp = document.createElement("p");
            newp.className = "font-bold text-xl";
        var textNode = document.createTextNode(work.tieude);
            newp.appendChild(textNode);
            newdiv1.appendChild(newp);
        var newdiv2 = document.createElement("div");
        newdiv2.className="flex h-6 justify-start items-center space-x-4";
        var newp2 = document.createElement("p");
        newp2.className = "text-sm bg-black w-8 justify-center items-center rounded-md text-white border";
        var textNode2 = document.createTextNode(work.nam);
        newp2.appendChild(textNode2);
        var newp3 = document.createElement("p");
        newp3.className="bg-opacity-100";
        var textNode3 = document.createTextNode(work.theloai);
        var textNode4 =document.createTextNode(" |");
        var newp5 = document.createElement("p");
        newp5.className="w-3/4 justify-center items-center ";
        var textNode5 =document.createTextNode(work.tomtat);
        var newpbtn = document.createElement("a");
            newpbtn.href = "./workchitet.html";
            newpbtn.className="text-black rounded-md text-bold mt-10 underline";
        var textNode6 =document.createTextNode("For Details");
            newpbtn.appendChild(textNode6);
            newdiv1.appendChild(newpbtn);
        newp5.appendChild(textNode5);
        newp3.appendChild(textNode4);
        newp3.appendChild(textNode3);
        newdiv2.appendChild(newp2);
        newdiv2.appendChild(newp3);
        newdiv1.appendChild(newdiv2);
        newdiv1.appendChild(newp5);
        
        

            
            
            
            
        //


        newdiv.appendChild(newimg);
        newdiv.appendChild(newdiv1);

        document.getElementById("work_1").appendChild(newdiv);
       

       
}

 
    

