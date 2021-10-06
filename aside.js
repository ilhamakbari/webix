const aside = {
    view: "list",
    id:"mylist",
    scroll:false,
    select:true,
    width:200,
    css:"list_color",
    data:[
        {value:"Dashboard", id:"dashboard"},
        {value:"Products", id:"products"}
    ],
    on:{
        onAfterSelect:function(id){
            $$(id).show();
        }
    }
};
const multi = {
    view: "multiview",
    cells:[
        {id:"dashboard",cols:[table, form ]},
        {id:"products",rows:[products]}
    ]
}