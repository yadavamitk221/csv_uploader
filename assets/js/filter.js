console.log("hello");

document.addEventListener('DOMContentLoaded', ()=> {
	var searchBox = document.getElementById("searchBox");
searchBox.addEventListener("keyup",function(){
	var keyword = this.value;
	keyword = keyword.toUpperCase();
	var table = document.getElementById("table");
	var all_tr = document.getElementsByTagName("tr");
	for(var i=0; i<all_tr.length; i++){
			var all_columns = all_tr[i].getElementsByTagName("td");
		  for(j=0;j<all_columns.length; j++){
				if(all_columns[j]){
					var column_value = all_columns[j].textContent || all_columns[j].innerText;
					
					column_value = column_value.toUpperCase();
					if(column_value.indexOf(keyword) > -1){
						all_tr[i].style.display = ""; // show
						break;
					}else{
						all_tr[i].style.display = "none"; // hide
					}
				}
			}
		}
});
});

