const skillsContent = document.getElementsByClassName('skills_content');
  skillsHeader = document.querySelectorAll('.skills_header')

  function toggleskills(){
      let itemClass = this.parentNode.className
      for(i = 0; i < skillsContent.length; i++){
          skillsContent[i].className = 'skills_content skills_close'
      }
      if(itemClass === 'skills_content skills_close'){
          this.parentNode.className = 'skills_content skills_open'
      }

  }

  skillsHeader.forEach((el) => {
     el.addEventListener('click', toggleskills )
  })





             // menu//



       


        //   let btntag =document.querySelector(".menu");
//   let btntag1 =document.querySelector(".nav");
//   btntag.addEventListener("click" ,()=>{
//       btntag1.classList.toggle("active");
//   },
//   );


     








        




