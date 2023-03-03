var blogs = [
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
function viewblog(){
   
    for( var blog of blogs){
        var viewblog = document.createElement("div");

        viewblog.append(creatdom(blog));
    }
    
}
viewblog();

function creatdom(blog){
    var newdiv = document.createElement("div");
        newdiv.className="flex space-x-2 mt-10 pt-10  ";
    var newimg = document.createElement("img");
        newimg.src ="./static/pexels-matthew-montrone-1324803.jpg";
        newimg.width="200";
        newimg.height="200";
        newimg.className="rounded-md";
        var newdiv1 = document.createElement("div");
        newdiv1.className=" flex-col hover:bg-white px-2 space-y-4";
        var newp = document.createElement("p");
            newp.className = "font-bold text-xl";
        var textNode = document.createTextNode(blog.tieude);
            newp.appendChild(textNode);
            newdiv1.appendChild(newp);
        var newdiv2 = document.createElement("div");
        newdiv2.className="flex h-6 justify-start items-center space-x-4";
        var newp2 = document.createElement("p");
        newp2.className = "text-sm bg-black justify-center items-center rounded-md text-white w-8";
        var textNode2 = document.createTextNode(blog.nam);
        newp2.appendChild(textNode2);
        var newp3 = document.createElement("p");
        var textNode3 = document.createTextNode(blog.theloai);
        var textNode4 =document.createTextNode(" |");
       
        var newpbtn = document.createElement("a");
            newpbtn.href = "./workchitet.html";
            newpbtn.className="text-black rounded-md text-bold mt-10 underline";
        var textNode6 =document.createTextNode("For Details");
            newpbtn.appendChild(textNode6);
            newdiv1.appendChild(newpbtn);
        var newp5 = document.createElement("p");
            newp5.className="text-sm ";
        var textNode5 =document.createTextNode(blog.tomtat);
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

        document.getElementById("blog_2").appendChild(newdiv);
       

       
}

 
    