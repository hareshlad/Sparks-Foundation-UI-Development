var html='<nav class="nav">'+
'<div>'+
  ' <a href="index.html"  class="nav__link">' +
    ' <i class="bx bx-home nav__logo-icon"></i>'  + 
   '  <span class="nav__logo-name">Welcome</span>'  + 
  ' </a>' +
 '<a href="students.html" class="nav__link">' +  
   '<i class="bx bx-user nav__logo-icon"></i>'     +
   '<span class="nav__name">Students</span>'+     
  ' </a>' +
   
 '<a href="lesson.html" class="nav__link">'   +
  ' <i class="bx bx-book nav__logo-icon" ></i>'    + 
  '<span class="nav__name">Lesson Plan</span>'  +    
 '</a>'   +

 '<a href="settings.html" class="nav__link">'   +
  ' <i class="bx bx-wrench nav__logo-icon"></i>'  +   
  ' <span class="nav__name">Settings</span>'     +
  '</a>'  + 
'</div></div>'+
'</nav>';
document.getElementById('nav').innerHTML = html;