const addItem = () =>{
    var item_data = $$("film_form").getValues();
    $$("film_list").add(item_data);
    webix.message("Movie added successfuly!");
};
function clearForm(){
    webix.confirm({
        title:"All form fields will be cleared",
        text:"Are you sure?"
    }).then(
       function(){
           $$("film_form").clear();
           $$("film_form").clearValidation();
       }
    )
};