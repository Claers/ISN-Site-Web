
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    $(".sidenav #text").show(200);
	$(".sidenav #close").show(200);
	$(".sidenav #close #Menu").show(200);
	$(".sidenav #open").hide();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "60px";
    document.getElementById("main").style.marginLeft= "0px";
    $(".sidenav #text").hide();
	$(".sidenav #close").hide();
	$(".sidenav #open").show(100);
}

function presOpen() {
	$(".presSection").slideDown("slow");
	$(".presOpenBar").hide();
}

function presClose(){
	$(".presSection").slideUp("slow");
	$(".presOpenBar").show(800);
}

function OOTOpen(){
	$(".OOTSection").slideDown("slow");
	$(".OOTOpenBar").hide();
}

function OOTClose(){
	$(".OOTSection").slideUp("slow");
	$(".OOTOpenBar").show(800);
}

function MMOpen(){
	$(".MMSection").slideDown("slow");
	$(".MMOpenBar").hide();
}

function MMClose(){
	$(".MMSection").slideUp("slow");
	$(".MMOpenBar").show(800);
}

function TPOpen(){
	$(".TPSection").slideDown("slow");
	$(".TPOpenBar").hide();
}

function TPClose(){
	$(".TPSection").slideUp("slow");
	$(".TPOpenBar").show(800);
}

function SSOpen(){
	$(".SSSection").slideDown("slow");
	$(".SSOpenBar").hide();
}

function SSClose(){
	$(".SSSection").slideUp("slow");
	$(".SSOpenBar").show(800);
}

function Bend(){
	if (confirm("Etes vous sur de vouloir continuer ?") == true){
		document.location.href = "Ben.html";
	}
}