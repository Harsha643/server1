  
        let get=document.getElementById("item1")
        let containerf=document.createElement("div")
         
            containerf.id="containers"
        
        get.addEventListener("click", async ()=>{
            
            let data= await fetch("https://server-g8jm.onrender.com/products")
            let res=await data.json()
            console.log(res)
           
            // container.style.display = "none"; 
          

            res.forEach(ele=>{
                let fake=document.createElement("div")
                fake.className="fake"
                fake.innerHTML=
                `
                <img src="${ele.image}" width=200px />
                <h2>Category :${ele.category}</h2>
                <h3>price:$${ele.price}</h3>
                <p style="display:"none"">${ele.description}</p>
                `
                containerf.append(fake)
            })


            
        })
        document.body.append(containerf)


        let post=document.getElementById("item2")
        let container=document.createElement("div")
         container.id="container"



        post.addEventListener("click",async()=>{
            let data= await fetch("https://server-g8jm.onrender.com/quotes",{method:"POST"})
            let res=await data.json()
        
         
            res.quotes.forEach(element => {
                console.log(element) 
                let  subcontainer=document.createElement("div")
                subcontainer.className="list"
                
                subcontainer.innerHTML=
                `
                <h2>${element.author}</h1>
                <p> <h3>quote :</h3>${element.quote}</p>
                `   
                container.appendChild(subcontainer)
            });
            
          
           
        })
        document.body.append(container)

    