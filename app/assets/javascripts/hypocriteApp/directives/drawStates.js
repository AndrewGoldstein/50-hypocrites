hypocriteApp.directive('drawStates', function (HypocritesService) {

  return {
    
    restrict: 'A', 
    
    scope: {
        stateBoundaries : '=',  
        data            : '=',
        modalFunction   : '='    
    },
    
    // templateUrl: "assets/hypocriteApp/templates/states.html",
    
    link: function ($scope, element, attrs) { 
    
      // Get data from rails back end 
      HypocritesService.getHypocrites().then(
       function success(data){
         $scope.hypocrites = data;

          // Still using static data, but rails route is hooked up. Uncomment section where $scope.data[state] is assigned for dynamic data
          // @andrew @date 3/25

          var people       = [" John Boehner "," Ted Cruz "," Michelle Bachmann "," Mark Krikorian "," Susana Martinez "," George Borjas "," Joe Arpaio "," Buck McKeon "," Peter Brimelow "," Phyllis Schafly "," Tom Tancredo "," John Tanton "," Bobby Jindal "," Virginia Abernethy "," Steven Palazzo "," Lou Barletta "," Jeff Sessions "," Rick Santelli "," Brian Sandoval "," Lisa Murkowski "," John Thune ","  "," Sam Brownback "," John Barrasso "," Peter King "," Virginia Foxx"," Bob Goodlatte "," Michael Burgess "," Johnny Isakson "," Dan Coats ","  ","  "," Nikki Haley "," Charles Djou "," Jamie Herrera Beutler "," Andrew Goldstein "," Jim Risch "," Jon Tester "," Mitch McConnell "," Laura Ingraham ","  "," Rodney Frelinghuysen "," Randy Terrill ","  "," Mia Love "," Alex Mooney "," Susan Collins ","  "," Frank Guinta "," Ron Johnson "," Steven King "]
          var images       = ["assets/John_Boehner.jpg"," assets/Ted_Cruz.jpg "," assets/Michele_Bachmann.jpg "," assets/Mark_Krikorian.jpg "," assets/Susana_Martinez.jpg "," assets/George_Borjas.jpg "," assets/Joe_Arpaio.jpg "," assets/Buck_Mckeon.jpg "," assets/Peter_Brimelow.jpg "," assets/Phyllis_Schafly.jpg "," assets/Tom_Tancredo.jpg "," assets/John_Tanton.jpg "," assets/Bobby_Jindal.jpg "," assets/Virginia_Abernethy.jpg "," assets/Steven_Palazzo.jpg "," assets/Lou_Barletta.jpg "," assets/Jeff_Sessions.jpg "," assets/Rick_Santelli.jpg "," assets/Brian_Sandoval.jpg "," assets/Lisa_Murkowski.jpg "," assets/John_Thune.jpg ","  "," assets/Sam_Brownback.jpg "," assets/John_Barrasso.jpg ","assets/Peter_King.jpg "," assets/Virginia_Foxx.jpg "," assets/Bob_Goodlatte.jpg "," assets/Michael_Burgess.jpg "," assets/Johnny_Isakson.jpg"," assets/Dan_Coats.jpg ","  ","  "," assets/Nikki_Haley.jpg "," assets/Charles_Djou.jpg ","assets/Jamie_Beutler.jpg"," assets/Andrew_Goldstein.jpg "," assets/Jim_Risch.jpg "," assets/Jon_Tester.jpg "," assets/Mitch_Mcconnell.jpg","assets/Laura_Ingraham.jpg","  "," assets/Rodney_Freling.jpg "," assets/Randy_Terrill.jpg ","  "," assets/Mia_Love.jpg "," assets/Alex_Mooney.jpg "," assets/Susan_Collins.jpg ","  "," assets/Frank_Guinta.jpg "," assets/Ron_Johnson.jpg "," assets/Steven_King.jpg "]
          var states_names = [" Ohio "," Florida "," Minnesota "," District of Columbia "," New Mexico "," Massachusetts "," Arizona "," California "," Connecticut "," Missouri "," Colorado "," Michigan "," Louisiana "," Tennessee "," Mississippi "," Pennsylvania "," Alabama "," Illinois "," Nevada "," Alaska "," South Dakota "," North Dakota "," Kansas "," Wyoming "," New York "," North Carolina "," Virginia "," Texas "," Georgia "," Indiana "," Arkansas "," Rhode Island "," South Carolina "," Hawaii "," Washington "," Oregon "," Idaho "," Montana "," Kentucky "," Maryland "," Delaware "," New Jersey "," Oklahoma "," Nebraska "," Utah "," West Virginia "," Maine "," Vermont "," New Hampshire "," Wisconsin "," Iowa "]
          var professions  = [" US House of Representatives "," US House of Representatives "," US House of Representatives "," Executive director of the Center for Immigration Studies, a think-tank in Maryland that promotes stricter immigration control and enforcement "," Governor of New Mexico "," Professor of Economics and Social Policy at the Harvard Kennedy School "," Sheriff of Maricopa County, Arizona "," Former U.S House of Representatives; Businessman "," Writer "," Activist "," Formerly in US House of Representatives, Colorado Gubernatorial Candidate 2014 "," Retired Doctor; Environmental Activist "," Governor of Louisiana "," Professor Emerita at Vanderbilt University best known for work on population demography and for being a white separatist "," US House of Representatives "," US House of Representatives "," US Senate "," CNBC Commentator "," Governor of Nevada "," US Senate "," US Senate ","  "," Governor of Kansas "," US Senate "," US House of Representatives "," Congresswoman - US House of Representatives "," US House of Representatives "," US House of Representatives "," Senator "," Senator ","  ","  "," Governor of South Carolina "," Former member of the U.S. House of Representatives from Hawaii's 1st district "," U.S. Representative for Washington's 3rd congressional district "," Data Scientist, URX "," Senator "," Senator "," Senator and Senate Majority Leader "," Conservative radio talk show host based in Washington DC ","  "," U.S. Representative for New Jersey's 11th congressional district "," Oklahoma state Representative and author of HB1804 ","  "," U.S. Representative from Utah's 4th congressional district "," U.S. Representative for West Virginia's 2nd congressional district "," Senator ","  "," U.S. House of Representatives from New Hampshire's 1st district "," Senator "," US House of Representatives "]
          var descriptions = [" Boehner is of German descent "," Cruz was born in Canada and immigrated to USA "," Bachmann is of Norweigan descent "," Krikorian was born in Armenia and immigrated to USA "," Martinez's grandparents immigrated from Mexico "," Borjas was born in Cuba and immigrated to USA "," Arpaio's parents emigrated from Italy "," Irish Descent "," Brimelow was born in England and immigrated to USA  "," Great-Grandfather immigrated from England "," All 4 grandparents immigrated from Italy "," Father immigrated from Canada and Grandfather immigrated from Germany "," Parents immigrated from India "," Abernathy was born in Cuba and immigrated to USA "," Palazzo is of Italian descent "," Barletta is of Italian descent "," Sessions is of English, Scottish, and Irish descent "," Santelli is of Italian descent "," Sandoval is of Mexican descent "," Murkowski is of Polish, Irish, and French Canadian descent ","  ","  "," Brownback is of German descent ","  "," King is of Irish and Welsh descent "," Foxx is the granddaughter of Italian immigrants "," Goodlatte's Maternal Grandfather from Latvia "," Burgess' Paternal family from Nova Scotia "," Isakson's paternal grandparents were of Swedish descent, and his paternal grandfather was born in �stersund "," Coats' father was of English and German descent, and his maternal grandparents immigrated from Sweden. ","  ","  "," Haley was born Nimrata Nikki Randhawa and her parents were both immigrants from India "," Born to a Chinese-American father and a Thai-American mother "," Herrera-Beutler's great-grandparents on her father's side immigrated from Mexico "," Goldstein is of Polish and German Descent"," Risch's father was of German descent, and his mother was of Irish, Scottish, and English ancestry. "," Tester's father was of English descent and his mother of Swedish ancestry "," McConnell is married to Elaine Chao, who was born in Taiwan to Chinese parents and was the former Secretary of Labor under George W. Bush. "," Ingram's maternal grandparents were Polish immigrants ","  "," Frelinghuysen is of Dutch descent "," Terrill is of English/Irish descent ","  "," Both of Love's parents emigrated from Haiti in 1973"," Mooney's mother was a Cuban refugee and his father is of Irish descent "," Collins has Irish and English ancestry ","  "," Guinta is of Italian descent "," Johnson is of Norwegian and German descent ","  "]

          var stateAbbrevs = ["OH", "FL", "MN", "DC", "NM", "MA", "AZ", "CA", "CT", "MO", "CO", "MI", "LS", "TN", "MS", "PA", "AL", "IL", "NV", "AK", "SD", "ND", "KS", "WY", "NY", "NC", "VA", "TX", "GA", "IN", "AR", "RI", "SC", "HI", "WA", "OR", "ID", "MT", "KY", "MD", "DE", "NJ", "OK", "NE", "UT", "WV", "ME", "VT", "NH", "WI", "IA"];

          var i = 0;
          $scope.data = {};

          stateAbbrevs.forEach(function(state){ 

            var r = Math.round(255 * Math.random());
            var g = Math.round(255 * Math.random());
            var b = Math.round(255 * Math.random());

            $scope.data[state] = 

              {
                peo       : people[i], 
                desc      : descriptions[i], 
                //image     : "assets/" + split(people[i])[0] + "_" + split(people[i])[1] + ".jpg"
                image     : images[i], 
                stateName : states_names[i],
                prof      : professions[i], 
                //color : d3.interpolate("#FF0000", "#0000FF")(random/100)}; 
                color : d3.rgb(r, g, b)
              };

            // DATA FROM RAILS SERVER 

            // {
            //   peo : $scope.hypocrites[i].name,
            //   desc : $scope.hypocrites[i].descent,
            //   image : $scope.hypocrites[i].image_path,
            //   stateName : $scope.hypocrites[i].state_id,
            //   prof : $scope.hypocrites[i].current_position,
            //   color : d3.rgb(r, g, b)
            // };

            i = i + 1;

          });

          // Set up twitter widget for modal

          $scope.open          = false;
          $scope.twitterLink   = "<a href='https://twitter.com/intent/tweet?screen_name=50hypocrites&text=How%20could%20you%20not%20support%20immigration%20reform%3F%20bit.ly%2F1Brm2Ot' class='twitter-mention-button'>Tweet to @50hypocrites</a>";
          $scope.twitterScript = "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>";
          $scope.twitterLoad   = "<script> twttr.widgets.load()</script>";

          /* GENERATE MODAL FUNCTION DEFINITION 
           * @desc Function generates html template with hypocrite data, is invoked when toggleModal is invoked on the map
           */

          $scope.generateModal = function(stateData) {
            // If no image, use default. Refactor this
            if(stateData.image == "  "){
              console.log("NO IMAGE")
              stateData.image = "assets/shame_on_you.png";
            }

            return   "<div id='state-modal-container'>"+
              "<p class='modal-header'>"+(stateData.peo)+"<p>"+
              "<img src='"+(stateData.image)+"' style='width:250px'>"+
              "<table id='table-content'>"+
                "<tr class='table-row'><td class='first-column'>Profession:</td><td class='second-column'>"+(stateData.prof)+"</td></tr>"+
                "<tr class='table-row'><td class='first-column'>State:</td><td class='second-column'>"+(stateData.stateName)+"</td></tr>"+
                "<tr class='table-row'><td class='first-column'>Heritage:</td><td class='second-column'>"+(stateData.desc)+"</td></tr>"+
              "</table>"+ 
              $scope.twitterLink +
              $scope.twitterScript +
              $scope.twitterLoad +
              "</div>"
          }

          /* DRAW MAP FUNCTION DEFINITION
           * 1. modal logic defined, used on map
           * 2. D3 logic to actually draw the map
          */

          $scope.drawMap = function(mapId, data){
            
            // 1. Define modal toggling functions to be used on map once it's drawn

            function showModal(stateData){

              var hypStateData = data[stateData.id];

              d3.select("#state-modal").transition().duration(200).style("opacity", .99);             
              $("#state-modal").html($scope.generateModal(hypStateData));  
              d3.select("#state-modal").style("left", (d3.event.pageX) - 120 + "px").style("top", (d3.event.pageY - 180) + "px");      
              $scope.open = true;

            }
            
            function hideModal(){
              console.log("hide modal invoked")
              d3.select("#state-modal").transition().duration(200).style("opacity", 0);      
              $scope.open = false;
            } 

            function toggleModal(stateData) {
              console.log("toggle modal invoked")
              if($scope.open) {
                hideModal();
              } else {
                showModal(stateData);
              }
            }
            
            // 2. Draw the map based on stateBoundaries, styles, use modal logic defined above

            d3.select(mapId).selectAll(".state")
              .data($scope.stateBoundaries)
              .enter().append("path")
              .attr("class","state")
              .attr("d", 
                function(stateData){ 
                  return stateData.d;
              })
              .style("fill",function(stateData){ 

                return $scope.data[stateData.id].color; 
              })
              .on("click", toggleModal)
              .on("mouseover", function(){
                console.log("hover over state")
                console.log(this)
            });
          }

          // Invoke drawMap() to create the map with data populated in $scope.data

          $scope.drawMap("#statesvg", $scope.data);

        },

        function error(data){
          console.log("Error getting data from server")
        }

      );
    }
  };
});