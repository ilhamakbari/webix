const header = {
    view:"toolbar",
    css:"webix_dark tool_flex",
    cols:[
        { view:"label", label:"The App", autowidth:true},
        {},
		{id:"add_btn", height: 40, type:"icon", icon:"wxi-plus-circle",  view:"button", label:"Add", width:100, css:"webix_transparent tool_right"},
		{id:"edit_btn", height: 40, type:"icon", icon:"wxi-pencil",  view:"button", label:"Edit", width:100, css:"webix_transparent tool_right"},
		{id:"delete_btn", height: 40, type:"icon", icon:"wxi-trash",  view:"button", label:"Delete", width:100, css:"webix_transparent tool_right"}
    ]
}