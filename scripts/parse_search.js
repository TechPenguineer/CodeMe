function search_function()
{
    var search_bar_value = document.getElementById("search_input").value;
    const search_bar_value_arr = search_bar_value.split(" ")
    const search_value = search_bar_value_arr.join("+")
    console.log(search_value)
}