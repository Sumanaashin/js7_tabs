var gettablinks = document.getElementsByClassName('tablinks');
// console.log(gettablinks);
var gettabpanes = document.getElementsByClassName('tab-pane');
// console.log(gettabpanes);
var getbtncloses = document.querySelectorAll('.btn-close');
// console.log(getbtncloses);

var tabpanes = Array.from(gettabpanes);


function gettab(evn,linkid){
    // console.log(linkid);
    // console.log(ev.target);


    // for(var x = 0; x < gettabpanes.length; x++){
    //     gettabpanes[x].style.display = "none";
    // }

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = "none";
    });

    for(var x = 0; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace(' active','');

        getbtncloses[x].addEventListener('click',function(){
            this.parentElement.style.display = 'none';
        });
    }


    document.getElementById(linkid).style.display = "block";

    // console.log(evn.target);
    // console.log(evn.currentTarget);

    // evn.target.className += " active";
    // evn.target.className = evn.target.className.replace('tablinks','tablinks active');
    // evn.target.classList.add('active');

    evn.currentTarget.className += " active";


}

document.getElementById('autoclick').click();

// click() method is unique, so this is class or id must just one. no more.