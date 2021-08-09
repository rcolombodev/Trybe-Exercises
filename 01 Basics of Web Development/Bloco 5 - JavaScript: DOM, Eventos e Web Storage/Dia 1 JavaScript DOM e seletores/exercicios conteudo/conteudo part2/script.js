let header = document.getElementById('header-container');
  header.style.backgroundColor = '#14B069';

let emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#FE9F84';

let emergencyTasksh3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksh3.length; index += 1) {
    emergencyTasksh3[index].style.backgroundColor = 'purple';
  }

let noEmergencyTasks = document.querySelector('.no-emergency-tasks');
    noEmergencyTasks.style.backgroundColor = '#F9DB5E';

let noEmergencyTasksh3 = document.querySelectorAll('.no-emergency-tasks h3');
  for(let index = 0; index < noEmergencyTasksh3.length; index +=1) {
    noEmergencyTasksh3[index].style.backgroundColor = 'black';
  }

let footer = document.getElementById('footer-container');
  footer.style.backgroundColor = '#013533';