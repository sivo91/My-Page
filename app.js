
/*  document.addEventListener('readystatechange', (e)=> {
  if(e.target.readyState === 'complete') {
    console.log('readyState: complete')
  }
}) */
 

  /* SCROLLING BTN */
 /*   let mybutton = document.getElementById("myBtn");

   window.onscroll = function() {
    scrollFunction()
  };  */
  
   /* function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  } 
  
   function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }   */


  // GSAP
   /*  gsap.from('ul' , { duration: 1.4, y: '-100px', ease: 'bounce'})
  gsap.from('.im', { duration: 10 , opacity: 0 })
  gsap.from('.title', { duration : 14, x: '40px', ease: 'back' })
  gsap.from('p', { duration : 14, x: '-40px', ease: 'expo.out' })
  

 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.rcard',
      start: 'top 70%'
    }
  })  */ 

 // tl.to('h1', {duration:3, x: '450', ease: 'bounce'})
  /*  tl.from('.boxCard', { x: 20, duration: 1}) 
   .from('.box2', { y:50})  */
  
  
 const cards = document.querySelectorAll('.boxCard')
const infos = document.querySelectorAll('.hiddtext')

// show hiden text by cards
cards.forEach(function(card){
  //console.log(btn)

  const btn = card.querySelector('.seemore')
 
  btn.addEventListener('click', function() {
   // toggle hidden text
    btn.nextElementSibling.classList.toggle('show')
    

    infos.forEach(function(inf) {
      //console.log(inf)
      if( inf != btn.nextElementSibling) {
        inf.classList.remove('show')
      }
    })
  })
}) 

// ************************************

/* constainer3 */

// data arr obj stats
const datastats = [
  {
    id: 1,
    club: "Orlando Solar Bears",
    year: 14/15,
    country: 'USA / Florida',
    league: 'ECHL',
    seassons : 5,
    games: 50,
    goals:5,
    asst:5,
    points: 55
  },
  {
    id: 2,
    club: "Alaska Aces",
    year: 13/15/16,
    country: 'USA / Alaska',
    league: 'ECHL',
    seassons : 3,
    games: 171,
    goals:86,
    asst:182,
    points: 268
  },
  {
    id: 3,
    club: "Fort Wayne Komets",
    year: 10/20,
    country: 'USA / Indiana',
    league: 'ECHL',
    seassons : 1,
    games: 10,
    goals:2,
    asst:6,
    points:8 
  },
  {
    id: 4,
    club: "Rapid City Rush",
    year: 17/18,
    country: 'USA / South Dakota',
    league: 'ECHL',
    seassons : 1,
    games: 58,
    goals:26,
    asst:34,
    points: 60
  },
  {
    id: 5,
    club: "Orlando Solar Bears",
    year: 10/20,
    country: 'USA / Florida',
    league: 'ECHL',
    seassons : 5,
    games: 50,
    goals:5,
    asst:5,
    points: 55
  },
  {
    id: 6,
    club: "San Diego Gulls",
    year: 18/19,
    country: 'USA / California',
    league: 'ECHL',
    seassons : 1,
    games: 1,
    goals: 0,
    asst: 0,
    points: 0
  },
  {
    id: 7,
    club: "San Francisco Bulls",
    year: 12/13,
    country: 'USA / California',
    league: 'ECHL',
    seassons : 1,
    games: 64,
    goals: 33,
    asst: 23,
    points: 56
  },
  {
    id: 8,
    club: "Stockton Thunders",
    year: 14/15,
    country: 'USA / California',
    league: 'ECHL',
    seassons : 1,
    games: 29,
    goals:10,
    asst:16,
    points: 26
  },
  {
    id: 9,
    club: "Dukla Trencin",
    year: 01/07,
    country: 'EU / Slovakia',
    league: 'Slovakia',
    seassons : 6,
    games: 254,
    goals: 39,
    asst: 33,
    points: 72
  },
  {
    id: 10,
    club: "Tulsa Oilers",
    year: 18/19,
    country: 'USA / Oklahoma',
    league: 'ECHL',
    seassons : 1,
    games: 10,
    goals:5,
    asst:3,
    points: 8
  },
  {
    id: 11,
    club: "Utah Grizzlies",
    year: 10/20,
    country: 'USA / Utah',
    league: 'ECHL',
    seassons : 1,
    games: 4,
    goals:0,
    asst:1,
    points: 1
  },
  {
    id: 12,
    club: "Worcester Sharks",
    year: 12/13,
    country: 'USA / Massachusetts',
    league: 'AHL',
    seassons : 1,
    games: 9,
    goals:4,
    asst:1,
    points: 5
  },
  {
    id: 13,
    club: "Orlando NEED Solar Bears",
    year: 10/20,
    country: 'USA / Florida',
    league: 'ECHL',
    seassons : 5,
    games: 50,
    goals:5,
    asst:5,
    points: 55
  },
  {
    id: 14,
    club: "Orlando Solar Bears",
    year: 10/20,
    country: 'USA / Florida',
    league: 'ECHL',
    seassons : 5,
    games: 50,
    goals:5,
    asst:5,
    points: 55
  },
  {
    id: 15,
    club: "Orlando Solar Bears",
    year: 14/15,
    country: 'USA / Florida',
    league: 'ECHL',
    seassons : 1,
    games: 25,
    goals:5,
    asst:15,
    points: 20
  },
  {
    id: 16,
    club: "Orlando Solar Bears",
    year: 10/20,
    country: 'USA / Florida',
    league: 'ECHL',
    seassons : 5,
    games: 50,
    goals:5,
    asst:5,
    points: 55,
    eu: 12,
    usa: 8,
    total: 20,
    champ: 2 
  }
]

// data arr obj jersy
 const jersy = [
   {
     imagejersy: "./imgs/dress.png",
     imagelogo: "./imgs/ORLANDO_SOLAR_BEARS.png",
     id:1
   },
   {
    imagejersy: "./imgs/dress.png",
    imagelogo: "./imgs/ak.png",
    id:2
  },
   {
    imagejersy: "./imgs/dress.png",
    imagelogo: "./imgs/60.png",
    id:3
  },
  {
   imagejersy: "./imgs/dress.png",
   imagelogo: "./imgs/rapid.png",
   id:4
 },
 {
  imagejersy: "./imgs/dress.png",
  imagelogo: "./imgs/sd.png",
  id:5
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/sf.png",
 id:6
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/stockton.png",
 id:7
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/tn.png",
 id:8
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/tulsa.png",
 id:9
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/utah.png",
 id:10
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/shark.png",
 id:11
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/za.png",
 id:12
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/psg-zlin.png",
 id:13
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/abb.png",
 id:14
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/HKM logo_classic_PNG.png",
 id:15
},
{
 imagejersy: "./imgs/dress.png",
 imagelogo: "./imgs/170990.jpg",
 id:16
}
 ] 

 //zatial nehaj uvidis
 const logostatspop = [
   {
     id:1,
     name: 'Orlando Solar Bears',
     state: 'Florida, Orlando',
     yr: 15/16,
     games: 5,
     goals: 1,
     as: 4,
   },
   {
    id:2,
    name: 'Alaska Aces',
    state: 'Alaska, Anchorage',
    yr: 15/16,
    games: 5,
    goals: 1,
    as: 4,
  }
 ]

 
 
  // box dresov
 const logos = document.querySelectorAll('.logoteams')
 const seemore = document.querySelector('.seemorebtn')
 const jerseys = document.querySelector('.boxabout')
 const dress = document.querySelectorAll('.logo')
 const modul = document.querySelector('.modul')
 


window.addEventListener('DOMContentLoaded', function(e) {
    
   // see-more-btn show jersy * line 105 in html
   seemore.addEventListener('click', function() {
     const dresy = document.querySelector('.boxabout')
     //toggle jersy container
     dresy.classList.toggle('show')

     // func to show jersy line 112 html
      displayjersy(jersy) 
   }) 

   //container dresy a logo
    jerseys.addEventListener('click', function(e) {
     
     const currentlogo = e.target.dataset.id  
        console.log(currentlogo)
       if(currentlogo == 1){
          statsBox()               
        }  
         
   })
  

    //calling functions about europ - us 
   aboustats()
   logost()
})

// show jersy 
 function displayjersy(jersyItem) {
  let displayjersy = jersyItem.map(function(item) {
    return `
    <div class="logo" > 
                 <img src="${item.imagejersy}" class="dress" alt="dress">
                 <img src="${item.imagelogo}"  class="logoteams" data-id="${item.id}" alt="orlando">
            </div>
    `
  })
  //console.log(displayjersy) unformated
   displayjersy = displayjersy.join('')
  //console.log(displayjersy) formated
   jerseys.innerHTML = displayjersy
} 

// showing europe & us 
function aboustats(){
  const btns = document.querySelectorAll('.btnabout')
  const popupeur = document.querySelector('.popupeur')
  const popus = document.querySelector('.popus')
  const awardstotal = document.querySelector('.awardstotal')
  const closebtn = document.querySelectorAll('.btncls')


  //open container 
  btns.forEach(function(btn){
    btn.addEventListener('click',function(e) {
          const currentbtn = e.currentTarget.dataset.id
          console.log(currentbtn)
          if(currentbtn === 'eu'){
           popupeur.classList.add('showpop')
          } 
           if(currentbtn === 'us') {
            popus.classList.add('showpop')
          } 
           if(currentbtn === 'aw') {
             awardstotal.classList.add('showpop')
          }
    })
  })


  // close modal
  closebtn.forEach(function(btn) {
     btn.addEventListener('click',function(e) {
      const currentbtn = e.currentTarget.dataset.id
      //console.log(currentbtn)
        if(currentbtn === 'cls1'){
          popupeur.classList.remove('showpop')
        }
        if(currentbtn === 'cls2') {
          popus.classList.remove('showpop')
        } 
        if(currentbtn === 'cls3') {
          awardstotal.classList.remove('showpop')
       }
     })
  })

    // open link fastest score 
    const openlink = document.querySelector('.openlink')
    openlink.addEventListener('click', function() {
       window.open('https://en.wikipedia.org/wiki/Peter_Siv%C3%A1k', 'google', 'width=300px height= 300px') 
    })
    
 
}

//pop up after click to logo
 function statsBox(){
   const logo = document.querySelector('.boxabout')

   const box = document.createElement('li')
   box.className = 'stats'
   box.innerHTML = `
          <ul> 
          <li><i class="fas fa-times-circle statsbtnclose""></i></li>          
           <li> Orlando Solar Bears </li>
           <li> USA / FL </li>
           <li> games: 5 </li>
           <li> goals: 4 </li>
           <li> assists: 7 </li>
           
                           </ul> `
   logo.appendChild(box)

     setTimeout(function(){
       document.querySelector('.stats').remove();
     },3000)
}
 


 
  //dont work to select each logo
function logost() {
   const jerseys = document.querySelector('.boxabout')

   document.addEventListener('click', function(e) {
   
       // let logos = document.querySelector('.boxabout').children
        
       

      //const dress = document.querySelectorAll('.logo')

     /* dress.forEach(function(logo1) {
       console.log(logo1.id)
        
     }) 
 */

   /*   const logos = document.querySelectorAll('.logoteams')
     logos.forEach(function(item) {
       //console.log(item)
        const pa = e.currentTarget.dataset.id
       if(item.dataset.id === 1) {
         console.log('sadfsdasfd')
          
       } 

       
     }) */
  }) 
  
} 





