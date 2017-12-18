///Check off Specific Todos by Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

///Click on X to delete TODO
$("ul").on("click", "span", function(event) {
	$(this).parent(). fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation(); ///stop event from bubbling up becuse li click will on
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle(1000);
});