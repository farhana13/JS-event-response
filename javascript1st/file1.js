
function message(msg)
{
	document.getElementById('output').innerHTML = msg;
}
function displayDate()
{
	document.getElementById("demo").innerHTML=Date();
}
function closeMe()
{
	x=document.getElementById("sh");
	x.style.display="none";
	}
function openMe()
{
	x=document.getElementById("sh");
	x.style.display="block";
	//x.className="closed";
}
function displayId(element){
	console.log(element.id);
}

function upDate(previewPic)
{
	var src = previewPic.getAttribute("src");
	var alt = previewPic.getAttribute("alt");
	document.getElementById('image').style.backgroundImage = "url('" + src + " ')";
	document.getElementById('image').innerHTML = alt;
}
function unDo()
{
	document.getElementById('image').style.backgroundImage = "url('')";
	document.getElementById('image').innerHTML= 'Hover over an image to diaplay here.';
}

