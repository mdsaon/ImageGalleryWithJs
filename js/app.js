//Gallery image
let item = document.getElementById('slides');
let btn = document.querySelector('.btn');
let detailInfo = document.querySelector('.imageDetails');
let gallery = document.querySelector('.imageGallery')
let span = document.querySelector('.close');
detailInfo.style.display = "none";
// When the user clicks on <span> (x), close the detailsInfo
span.onclick = function() { 
   detailInfo.style.display = "none";
}
let j = 0;
let gImages = [];

gImages[0] = "images/Rasbin.jpg";
gImages[1] = "images/Aditya.jpg";
gImages[2] = "images/Senad.jpg";
gImages[3] = "images/Mohammed.jpg";
gImages[4] = "images/sanjog.jpg";
gImages[5] = "images/pragya.jpg";
gImages[6] = "images/mohammed_mansoor.jpg";
gImages[7] = "images/anh_vo.jpg";
gImages[8] = "images/tareq.jpg";
gImages[9] = "images/abdirahman.jpg";


function mySlide(param)
{
	if(param === 'next'){
		j++;
		if( j === gImages.length){j = 0}
	}else{
		j--;
		if(j < 0) {j = 0;}
	}
		item.src = gImages[j];
}	
	
			btn.addEventListener("click" ,function(e){	
			e.preventDefault();
			detailInfo.style.display = "block";
			item.src = gImages[j];	
			//console.log("First Name: " + data[j].firstName +"Last Name: " + data[j].lastName);
			//get the items from the JSON file
			let fullName = "Name: " + data[j].firstName + " " + data[j].lastName;
			let title = "Title: " +data[j].title;
			let nationality = "Nationality: " +data[j].nationality;
			let skills = "Skills: "+data[j].skills;
			let wsd = "Why Software Developer: " +data[j].whySofterDeveloper;
			let ltv = "Long Time Vision: " +data[j].longTermVision;
			let mtv = "What Motivates Me: " +data[j]. motivatesMe;
			let fq = "Favorite Quote: " +data[j].favoriteQuote;
			let jn = "Joined On: " +data[j].joinedOn;
			++j;
			
			//Append all the items to the detailsInfo Div
			let text = document.querySelector('.name');
			text.textContent = fullName;
			detailInfo.appendChild(text);

			let text1 = document.querySelector('.title');
			text1.textContent = title;
			detailInfo.appendChild(text1);

			let text2 = document.querySelector('.nationality');
			text2.textContent = nationality;
			detailInfo.appendChild(text2);

			let text3 = document.querySelector('.skills');
			text3.textContent = skills;
			detailInfo.appendChild(text3);

			let text4 = document.querySelector('.wsd');
			text4.textContent = wsd;
			detailInfo.appendChild(text4);

			let text5 = document.querySelector('.ltv');
			text5.textContent = ltv;
			detailInfo.appendChild(text5);

			let text6 = document.querySelector('.mtv');
			text6.textContent = mtv;
			detailInfo.appendChild(text6);

			let text7 = document.querySelector('.fq');
			text7.textContent = fq;
			detailInfo.appendChild(text7);

			let text8 = document.querySelector('.jn');
			text8.textContent = jn;
			detailInfo.appendChild(text8);
		
			

		});
	
//Background image slider
let i = 0; 			// Start Point
let images = [];	// Images Array
let time = 5000;	// Time Between Switch
	 
// Image List
images[0] = "images/group1.jpg";
images[1] = "images/group2.jpg";
images[2] = "images/back3.jpg";

// Change Image
function changeImages(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImages()", time);
}

// Run function when page loads
window.onload=changeImages;

