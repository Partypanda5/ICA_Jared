const beginBtn = document.querySelector('#btn-begin');
var overlayText = document.querySelector('.overlayText');
const audio = document.querySelector('#overall-audio');

beginBtn.addEventListener('click', () => 
{
    overlay.style.opacity = 0;
    audio.play();
    setTimeout(() => 
    {
       overlay.style.display = 'none';
    }, 1000);
});

var book = L.icon(
{
    iconUrl: 'assets/images/book.png',
    iconSize:     [55, 55],
    iconAnchor:   [0, 0],
    className: 'normal'
});

var bookBlinking = L.icon(
{
    iconUrl: 'assets/images/book.png',
    iconSize:     [60, 60],
    iconAnchor:   [0, 0],
    className: 'blinking'
});

var bench = L.icon(
{
    iconUrl: 'assets/images/bench.png',
    iconSize:     [55, 55],
    iconAnchor:   [0, 0],
    className: 'normal'
});

var benchBlinking = L.icon(
{
    iconUrl: 'assets/images/bench.png',
    iconSize:     [60, 60],
    iconAnchor:   [0, 0],
    className: 'blinking'
});

var building = L.icon(
{
    iconUrl: 'assets/images/government.png',
    iconSize:     [55, 55],
    iconAnchor:   [0, 0],
    className: 'normal'
});

var buildingBlinking = L.icon(
{
    iconUrl: 'assets/images/government.png',
    iconSize:     [60, 60],
    iconAnchor:   [0, 0],
    className: 'blinking'
});

var foot = L.icon(
{
    iconUrl: 'assets/images/footprint-1.png',
    iconSize:     [55, 55],
    iconAnchor:   [0, 0],
    className: 'normal'
});

var footBlinking = L.icon(
{
    iconUrl: 'assets/images/footprint-1.png',
    iconSize:     [60, 60],
    iconAnchor:   [0, 0],
    className: 'blinking'
});

var foot2 = L.icon(
{
    iconUrl: 'assets/images/footprint-2.png',
    iconSize:     [55, 55],
    iconAnchor:   [0, 0],
    className: 'normal'
});
    
var footBlinking2 = L.icon(
{
    iconUrl: 'assets/images/footprint-2.png',
    iconSize:     [60, 60],
    iconAnchor:   [0, 0],
    className: 'blinking'
});

var house = L.icon(
{
    iconUrl: 'assets/images/factory.png',
    iconSize:     [55, 55],
    iconAnchor:   [0, 0],
    className: 'normal'
});

var houseBlinking = L.icon(
{
    iconUrl: 'assets/images/factory.png',
    iconSize:     [60, 60],
    iconAnchor:   [0, 0],
    className: 'blinking'
});


var mymap = L.map('mapid', 
{
    minZoom: 13,
    maxNativeZoom: 19,
    maxZoom: 14
});

mymap.setView([-1.285024, 36.826006], 13);
var markerOne = L.marker([-1.285024, 36.826006], {icon: buildingBlinking}).addTo(mymap);
var markerTwo = L.marker([-1.311143, 36.789767], {icon: foot}).addTo(mymap);
//var markerThree = L.marker([-1.280616,  36.818430], {icon: bench}).addTo(mymap);
var markerFour = L.marker([-1.282060, 36.817807], {icon: bench}).addTo(mymap);
//var markerFive = L.marker([-1.282694, 36.816604], {icon: bench}).addTo(mymap);
var markerSix = L.marker([-1.262301, 36.879242], {icon: book}).addTo(mymap);
var markerSeven = L.marker([-1.268062, 36.881560], {icon: foot2}).addTo(mymap);
var markerEight = L.marker([-1.305411, 36.860908], {icon: house}).addTo(mymap);

function on() 
{
    document.getElementById("contentOverlay").style.display = "block";
}

function off() 
{
    document.getElementById("contentOverlay").style.display = "none";
}

markerOne.addEventListener('click', () => 
{
on();
audio.pause();
markerOne.setIcon(buildingBlinking);
overlayText.innerHTML = 
    `<div class="container-fluid">
        <div class="row">
            <div class="col-6 offset-6 text-center">
                <h1 id="contentTitle">The Kenya National Archive</h1>
                <p id="contentText">
                <iframe id="video1" class="videos" src="https://player.vimeo.com/video/489429712" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </p>
                <a id="GoToPointTwo" class="travel" href="#">Click Here To Travel To The Kibera Slum</a> <br><br>
            </div>
        </div>
    </div>`;

    mymap.setView([-1.285024, 36.839999], 14);
    mymap.touchZoom.disable();
    mymap.doubleClickZoom.disable();
    mymap.scrollWheelZoom.disable();
    mymap.boxZoom.disable();
    mymap.keyboard.disable();
    mymap.dragging.disable();
    $(".leaflet-control-zoom").css("visibility", "hidden");

    var clickPointTwo = document.getElementById("GoToPointTwo");

    clickPointTwo.addEventListener('click', () => 
    {
        mymap.setView([-1.311143, 36.799767], 14);
        markerOne.setIcon(building);
        markerTwo.setIcon(footBlinking);
        overlayText.innerHTML = 
            `<div class="container-fluid">
                <div class="row">
                    <div class="col-6 offset-6 text-center">
                        <h1 id="contentTitle">The Kibera Slum</h1> <br><br>
                        <p id="contentText">
                        <iframe id="video2" class="videos" src="https://player.vimeo.com/video/488813595" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </p>
                        <a id="GoToPointThree" class="travel" href="#">Click Here To Travel To 37 Muindi Mbingu Street</a> <br><br>
                    </div>
                </div>
            </div>`;

        var clickPointThree = document.getElementById("GoToPointThree");   

     clickPointThree.addEventListener('click', () => 
            {
                mymap.setView([-1.282060, 36.817807], 14);
                markerTwo.setIcon(foot);
                markerFour.setIcon(benchBlinking);
                overlayText.innerHTML = 
                    `<div class="container-fluid">
                        <div class="row">
                            <div class="col-6 offset-6 text-center">
                                <h1 id="contentTitle">37 Muindi Mbingu Street, 37 26 Koinange Street & The Hawkers Bazaar</h1><br> <br>
                                <p id="contentText">There are layers of meanings to walking.  In the streets, pedestrians - groups of bodies constantly pass through, push and bump into each other while bringing with them their memories and histories, each constituting a particular bodily  trace, a footprint or a mark. This bodily mark, trace or footprint is an excess that is experienced alongside every actual production of meaning in an instant of walking. With this notion of pedestrian walk, you realise that walk is not only a simple activity of moving through the city landscape, but a complex multiplicity that constantly moulds and remoulds the city-fabric and the very bodies of its occupants. <span id="dots">...</span><span id="more"><br> <br>
                                Walking in contemporary dance is often loaded with meaning, and perceived as a „carrier of messages and emotions”. As dancers we are trained in many ways „how to walk on stage”, as it is directly related to our performative presence. Some cultures have idealised walking as a leisurely activity, which helps the walker to indulge in the surrounding environment and dwell in his or her own being.<br> <br>
                                Walking is also how we affirm our freedom of movement.<br> <br>
                                Now, social distancing choreographs public spaces by ordering pedestrians to observe the two metres apart rule. This affects how we walk, behave around ourselves and how far one can go. Quarantines and lockdowns are instituted not only to order walking in public space but so that if possible to remove the presence of humans altogether from these spaces.<br> <br>

                                 </p><button onclick="readMore()" id="myBtn">Read more</button><br> <br>
                                
                                <iframe id="video4" class="videos" style="margin-top: 0"; src="https://player.vimeo.com/video/489430094" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                </p>
                                <a id="GoToPointSix" class="travel" href="#">Click Here To Travel To The Hawkers Bazaar</a> <br> <br>
                            </div>
                        </div>
                    </div>`;
    
                  var clickPointSix = document.getElementById("GoToPointSix");

                  clickPointSix.addEventListener('click', () => 
                  {
                        mymap.setView([-1.262301, 36.879242], 14);
                        markerFour.setIcon(bench);
                        markerSix.setIcon(bookBlinking);
                        overlayText.innerHTML = 
                            `<div class="container-fluid">
                                <div class="row">
                                    <div class="col-6 offset-6 text-center">
                                        <h1 id="contentTitle">Outer - Ring / Juja Road Round About</h1>
                                        <p id="contentText"><br> <br>
                                        The Outer-ring road branches off from the Thika road and cuts across all the way towards Embakasi to Airport North Road in what must have been a perfect design to seclude the areas it encloses from the slums around it.  <br> <br> 
                                        The Outering road encloses within the areas on the east of Uhuru Highway; Makongeni, Jericho, Makadara, Buru Buru, Kimathi Estate, Kaloleni, Shauri Moyo, Jericho, Maringo, Majengo and Ofafa Jericho. Though today these neighbourhoods are much-maligned, in these areas lived Kenyans who were in comparatively privileged positions as their services were very necessary and irreplaceable for the smooth running of the colonial factories in the sixties.They constituted the well-to-do class, and employees of the Kenya Railway Company, Kenya Pipeline Company, Kenya Power and Lighting Company, Nairobi city council staffs, the now defunct Kenya Bus Service drivers and conductors, public hospital nurses and staffs, factory and city engineers, airport and aviation staffs and so on. Equally, their way of looking at things were relatively tied to the proximity of the colonial gaze - their masters.<span id="dots">...</span><span id="more"> <br> <br>

                                        But beyond, on the outside of the Outer Ring road are the areas that were abandoned by the colonial rule, and continued to remain out of order (till just recently when the slum upgrading scheme was launched to devolve development services to all areas of  every county). The areas includes Korogocho, Kariobangi, Dandora, Soweto, Baba Dogo, Kayole, Kariadudu etc all of which extends as low income habitations for masses whose only means of survival (during the 1970s and 80s) was by crossing over, or transgressing the exclusive Outer-Ring road, to walk long distances to work at the Nairobi’s Industrial Area commonly known as Viwandani. 
                                        
                                        <br> <br>
                                        To put it in Marxists terms, these were labourers who lived only so long as they found work, and who found work only so long as their labour increased capital. These labourers had to sell themselves piecemeal, as a commodity, and therefore were exposed to all manner of unpleasant competitions and to the fluctuations of the market. Which made them sink deeper and deeper below the conditions of existence of their own class, rendering them desperate and dependable, as their conditions worsened even more rapidly. 
                                        <br> <br>
                                        In the late 1990s, and with the increasing city population plus the daily challenges posed by city roads, (which of course is still a traffic nightmare) the majority of them gave up the crossing over routine in order to walk to search for work in Viwandani. And instead they resorted to creatively devise their own living which also demanded them to redirect the skills and experiences they had already in welding, motor vehicle mechanics, tailoring, plumbing, electrical wiring etc 
                                        <br> <br>
                                        In those days, in the early stages of developments of new ways - of living, thinking and working - their desperate manoeuvres became laboratories for explorations, experimenting and practicing repairs. Daily, they had to spend long hours toiling under the hot sun, which birthed the name “Jua Kali'', which literally translates to “hot sun” - or   ‘working under hot sun’ if you wish. <br> <br>
                                        From this one can note that Jua Kali as an innovative practice came from people living in the informal settlements beyond the exclusive Outer Ring road. People who got tired of daily exploitations and routine of having to walk long distances to the established colonial factories. This was not the case with the Kenyans living within areas enclosed by the Outer Ring road as they enjoyed the comforts and benefits their employment offered them  - they needed no alternative living as did the Jua Kali practitioners. Today though, Jua Kali has become a way of thinking. Many enterprises spread across the city  embrace it as an independent way of thinking and an independent mode of life.


                                        </p><button onclick="readMore()" id="myBtn">Read more</button><br> <br>

                                        <audio id="RingRoadAudio" class="players" controls>
                                       <source src="assets/audio/OuterRingSoundFile_01.mp3" type="audio/mpeg">
                                            Your browser does not support the audio element.
                                        </audio><br> <br>

                                        <a id="GoToPointSeven" class="travel" href="#">Click Here To Travel To Point The Sivo Estate</a><br> <br>
                                    </div>
                                </div>
                            </div>`;
                            const audio2 = document.querySelector('#RingRoadAudio');
                            audio2.play();
        
                    var clickPointSeven = document.getElementById("GoToPointSeven");

                    clickPointSeven.addEventListener('click', () => 
                    {
                          mymap.setView([-1.268062, 36.881560], 14);
                          markerSix.setIcon(book);
                          markerSeven.setIcon(footBlinking2);
                          overlayText.innerHTML = 
                              `<div class="container-fluid">
                                  <div class="row">
                                      <div class="col-6 offset-6 text-center">
                                          <h1 id="contentTitle">The Sivo Estate</h1><br> <br>
                                          <p id="contentText">
                                          <iframe id="video5" class="videos" src="https://player.vimeo.com/video/489429256" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                          </p>
                                          <a id="GoToPointEight" class="travel" href="#">Click Here To Travel To Viwanda.</a><br><br>
                                      </div>
                                  </div>
                              </div>`;

                              var clickPointEight = document.getElementById("GoToPointEight");

                        clickPointEight.addEventListener('click', () => 
                        {
                            mymap.setView([-1.305411, 36.860908], 14);
                            markerSeven.setIcon(foot2);
                            markerEight.setIcon(houseBlinking);
                            overlayText.innerHTML = 
                                `<div class="container-fluid">
                                    <div class="row">
                                        <div class="col-6 offset-6 text-center">
                                            <h1 id="contentTitle">Viwandani</h1>
                                            <p id="contentText"> <br> <br>
                                            I live in Nairobi, where every early morning I see groups of people criss-cross the city, making long journeys to their workplaces. And in the dim lights of the Nairobi streets at sunset, the exact reverse happens.  <br> <br>

                                            The majority of Nairobi residents walk on foot daily. They are generally labelled the „Walking Nation”. <br> <br>

                                            Historically, Nairobi’s urban planning is a colonial design which was meant to create a distinct separation between the colonies and the native Africans. Workers enduring long itineraries to their workplaces today are a direct consequence of this hierarchical plan.<span id="dots">...</span><span id="more"><br> <br>

                                           The industrial area which used to be colonial economic property is located at a great distance from its workers’ quarters. It takes at least four hours walking to and fro on foot which is a huge cost on production time. This is regardless of whether one rides on a bus because still, the road traffic and long winding routes complicates it even more. And so, many Nairobians prefer to walk hence the metaphor „Walking Nation”, meaning long hours walking and less productive working hours.  <br> <br>

                                           These colonial designs induce a whole series of effects in the urban public sphere; they have crystallised into institutions and inform individual behaviours while at the same time acting as grids for the perception and evaluation of our everyday city life. For example: it is just not practical to sit on benches within the Nairobi Central Business District (Jevanjee Gardens) to rest or read in public parks, as a social practice like it is so common in other cities around the world. There is simply no time for it, as the time is taken up by walking. <br> <br>

                                            </p><button onclick="readMore()" id="myBtn">Read more</button><br> <br>

                                            <iframe id="video5" class="videos" style="margin-top: 0";  src="https://player.vimeo.com/video/489477260" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                                            </p> <br> <br>
                                            <a id="GoToPointOne" class="travel" href="#">Click Here To View Entire Map.</a> <br><br>
                                        </div>
                                    </div>
                                </div>`;
                                var clickPointHome = document.getElementById("GoToPointOne");

                                clickPointHome.addEventListener('click', () => 
                                {
                                    off();
                                    markerEight.setIcon(house);
                                    markerOne.setIcon(buildingBlinking);
                                    mymap.setView([-1.285024, 36.826006], 13);
                                    mymap.touchZoom.enable();
                                    mymap.doubleClickZoom.enable();
                                    mymap.scrollWheelZoom.enable();
                                    mymap.boxZoom.enable();
                                    mymap.keyboard.enable();
                                    mymap.dragging.enable();
                                    $(".leaflet-control-zoom").css("visibility", "visible");

                                    audio.play();
                                });
                      });
                    });
                  });
                });
              });
            });

function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
    }

L.tileLayer('https://api.mapbox.com/styles/v1/partypanda5/ckih6nsh869wd19s440sngeut/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGFydHlwYW5kYTUiLCJhIjoiY2praTU5ano3MHhkODNrbzZmNzI4cTU2ZiJ9.CVV7rMsvp9BNa-sWK-3EUQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 14,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicGFydHlwYW5kYTUiLCJhIjoiY2praTU5ano3MHhkODNrbzZmNzI4cTU2ZiJ9.CVV7rMsvp9BNa-sWK-3EUQ'
}).addTo(mymap);
