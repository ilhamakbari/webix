const form = {
    view:"form", 
    id:'film_form',
    width: 350,

    elements:[
        { type:"section", template:"Edit films"},
        { view:"text", name:"title", label:"Title", invalidMessage:"Must be filled in"},
        { view:"text", name:"year", label:"Year", invalidMessage:"Should be between 1970 and current" },
        { view:"text", name:"rating", label:"Rating", invalidMessage:"Cannot be empty or 0" },
        { view:"text", name:"votes", label:"Votes", invalidMessage:"Must be less than 100000" }, 
        {
            margin:10, cols:[
                { view:"button", id:"btn_add", minWidth:65, value:"Add new", css:"webix_primary", click:addItem},
                { view:"button", id:"btn_clear", minWidth:65, value:"Clear", click:clearForm}
            ]
        },

        {}
    ],
    rules:{
        title: webix.rules.isNotEmpty,
        rating:function(value){
            if(value!=0){
                return true;
            }
        },
        votes: function(value){
            return value < 1000000 && value >= 1;
        },
        year: function(value){
            return value>=1970 && value <= new Date();
        }
    }
}