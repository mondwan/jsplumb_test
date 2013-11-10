var demo = window.demo ? window.demo : {};


/**
* Intialization must be run after page loaded
*
*/
demo.init = function () {
	console.log("demo.init()");

	/* setup jsPlumb defaults. */
	jsPlumb.importDefaults({
		DragOptions : { cursor: 'pointer', zIndex:2000 },
		PaintStyle : { strokeStyle:'#666' },
		EndpointStyle : { width:20, height:16, strokeStyle:'#666' },
		Anchors : ["TopCenter", "TopCenter"]
	});  

	var jq_tool_add_button = $("#add_router");
	var jq_main = $("#main");
	var router_base = 0;
	var link_from = null;

	/**
	 * Add a draggable routers on main div when u click add button
	 * 
	 */
	jq_tool_add_button.click(function(){
		var r = document.createElement("div");
		r.id = "r" + (router_base++);
		r.className = "router";
		jq_main[0].appendChild(r);
		jsPlumb.addEndpoint($(r), {
			anchor:"TopCenter",
			dropOptions:{activeClass:'dragActive'},
			isTarget:true,
			endpoint:["Dot", {radius:8}]
		});
		jsPlumb.addEndpoint($(r),{
			anchor:"BottomCenter",
			dropOptions:{activeClass:'dragActive'},
			isSource:true,
			endpoint:["Dot", {radius:8}]
		});
		jsPlumb.draggable($(r), { containment: jq_main });
		//$(r).click(conn);
	});
};
