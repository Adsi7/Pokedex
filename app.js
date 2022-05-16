
$(function(){
    var pokemon;
    var pokemonstart="1";
    var defaultPokemondata;

    var initFunc= function () {
        defaultPokemondata = $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${pokemonstart}/`,
            method: "GET",
        })
        defaultPokemondata.done(function(data ) {
                defaultPokemondata=data;
                $(".loading-container").removeClass("active");
                $(".pokedex").removeClass("hide");
                $(".pokedex h3").text(data.name.toUpperCase());
                $(".poke-img img").attr("src", data.sprites.front_default)
                  console.log(data)
          })
        defaultPokemondata.fail(function( jqXHR, textStatus ) {
              alert("Error" + textStatus);
              });
        }

        $("input").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
          alert("please search with the button");  
        }
      }); 
   
   
   
      let click =()=>{
      $(".btn").on("click", function(){
          $(".poke-list").removeClass("hide").addClass("test");
          $(".pokedex").addClass("test2");
        pokemon= $("input[type=text]").val();
        var request = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
        method: "GET",
      });
       
      request.done(function(data ) {
          $(".pokedex h3").text(data.name.toUpperCase());
          $(".poke-img img").attr("src", data.sprites.front_default)
            console.log(data)
    });
       
      request.fail(function( jqXHR, textStatus ) {
        alert( "english name or number 1-811");
      
      });
    }) }
    
    let initList=()=>{
    $(".menu h4").on("click", function(){
/*      $(".poke-list img").addClass("hide");*/
     $("#passiv").removeClass("hide"); 
      console.log("btn geht");
      var pokelist = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/?limit=811`
        ,
        method: "GET",
       
      });
       
      pokelist.done(function(data ) {
              for(let i=0; i<811; i++){
              const pokename= data.results[i].name
              $(".poke-list ul").append("<li>   #"+(i+1)+"    "+pokename+"</li>")
              }
    });
      
      pokelist.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
      });
    })}


    let initListClick=()=>{
      $(".poke-list ul").on("click",e=>{
       let pokesearch =e.target.innerText.replace(/[^\d.]/g, '');
      console.log(pokesearch);

      var request = $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokesearch}/`
        ,
        method: "GET",
        /* data: { id : menuId },
        dataType: "html" */
      });
       
      request.done(function(data ) {
          $(".pokedex h3").text(data.name.toUpperCase());
          $(".poke-img img").attr("src", data.sprites.front_default)
          $("input[type=text").val("");
          
    });
       
      request.fail(function( jqXHR, textStatus ) {
        //alert( "Request failed: " + textStatus );
      });
    
    })}



  
    initFunc();
    click();
    initList();
    initListClick();


  })

 