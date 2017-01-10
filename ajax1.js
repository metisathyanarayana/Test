/*
var xhr;
function ajaxCall(){

	xhr = new XMLHttpRequest();
	xhr.open("Get","data.json",true); //http://10.209.64.54/test/json/data.json //CORS..Cross Origion Resoure Sharing
	xhr.onreadystatechange=callback;
	xhr.send();
}

function callback(){

	if(xhr.readyState==4 && xhr.status==200){
		var jsonData = xhr.responseText;

		var data =JSON.parse(jsonData);
		var itemList = data.items;
		var output="<ul>";
		for(var i=0;i<itemList.length;i++){

			output+="<li>";
			output+='<a href=" '+itemList[i].link+'">';
			output+=itemList[i].title+"</a>";
			output+="</li>";
		}
		output+="</ul>";
		var container = document.createElement('div');
		container.innerHTML = output;
		document.body.appendChild(container);
	}
}
   
*/

//Through IIFE
/* 

function ajaxCall(){
var xhr = new XMLHttpRequest();
xhr.onreadystatechange =(function(myxhr){
return function(){
callback(myxhr);
}
})(xhr);

xhr.open("Get","data.json ",true);// Here true means A synchronous
//http://10.209.64.54/test/json/data.json //CORS..Cross Origion Resoure Sharings
xhr.setRequestHeader('X-Custom-Header','allow');
xhr.send();
}

 function callback(xhr){

if(xhr.readyState==4 && xhr.status==200){
var jsonData = xhr.responseText;

		var data =JSON.parse(jsonData);
		var itemList = data.items;
		var output="<ul>";
		for(var i=0;i<itemList.length;i++){

			output+="<li>";
			output+='<a href=" '+itemList[i].link+'">';
			output+=itemList[i].title+"</a>";
			output+="</li>";
		}
		output+="</ul>";
		var container = document.createElement('div');
		container.innerHTML = output;
		document.body.appendChild(container);
}
}

*/

// Accessing JSON data Through CORS (Accessing Data from Another Machine) 

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}


function ajaxCall(){

            var xhr=createCORSRequest("Get","data.json");

			//http://10.209.64.54/test/json/data.json

            //xhr.open("Get","http://localhost/test/day18+19/ajax/data.json",true);

           

            xhr.onreadystatechange=(function(myxhr){

             return function(){

                callback(myxhr);

               }

            })(xhr);
	// xhr.open("Get","http://10.209.64.54/test/json/data.json",true);

            xhr.send();

}

function callback(xhr){ 
        if(xhr.readyState==4 && xhr.status==200){ 
          var jsonData = xhr.responseText; 

          var data = JSON.parse(jsonData); 
          var itemList = data.items;
          console.log(itemList); 

          var output="<ul>"; 
          for(var i = 0; i<itemList.length;i++){ 
                output+="<li>"; 
                output+='<a href="'+itemList[i].link+'">'; 
                output+= itemList[i].title+"</a>"; 
                output+= "</li>"; 
        } 
        output+="</ul>"; 
        var container = document.createElement('div'); 
        container.innerHTML= output; 
        document.body.appendChild(container); 
    } 
}

