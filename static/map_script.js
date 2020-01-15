
        var map_bcc481e3943c4d33954fa4781d2c57b7 = L.map(
            "map_bcc481e3943c4d33954fa4781d2c57b7",
            {
                center: [48.0, -102.0],
                crs: L.CRS.EPSG3857,
                zoom: 3,
                zoomControl: true,
                preferCanvas: false,
            }
        );





        var tile_layer_ca04c753f9cd47d6917dc420ce6cc324 = L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
        ).addTo(map_bcc481e3943c4d33954fa4781d2c57b7);


        var choropleth_9d022eb837d24d5ba515e134fd50d6bf = L.featureGroup(
            {}
        ).addTo(map_bcc481e3943c4d33954fa4781d2c57b7);


    function geo_json_a68f8ced307d48dea30c978ef0a6feba_styler(feature) {
        switch(feature.properties.admin) {
            case "Canada": case "Chile": case "Austria": case "Spain": case "United Kingdom": case "Greece": case "Romania":
                return {"color": "black", "fillColor": "#ffffcc", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
            case "Argentina": case "Uruguay": case "Tunisia":
                return {"color": "black", "fillColor": "#d9f0a3", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
            case "Panama": case "Armenia": case "Japan": case "Kenya": case "Poland":
                return {"color": "black", "fillColor": "#addd8e", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
            case "Kazakhstan": case "Finland":
                return {"color": "black", "fillColor": "#78c679", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
            case "Uganda":
                return {"color": "black", "fillColor": "#31a354", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
            case "Estonia":
                return {"color": "black", "fillColor": "#006837", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
            default:
                return {"color": "black", "fillColor": "white", "fillOpacity": 0.7, "opacity": 0.2, "weight": 1};
        }
    }
    function geo_json_a68f8ced307d48dea30c978ef0a6feba_onEachFeature(feature, layer) {
        layer.on({
            click: function(e) {
                map_bcc481e3943c4d33954fa4781d2c57b7.fitBounds(e.target.getBounds());
            }
        });
    };
    var big_json = require('./big_json.json');
    var geo_json_a68f8ced307d48dea30c978ef0a6feba = L.geoJson(null, {
            onEachFeature: geo_json_a68f8ced307d48dea30c978ef0a6feba_onEachFeature,

            style: geo_json_a68f8ced307d48dea30c978ef0a6feba_styler,
    }).addTo(choropleth_9d022eb837d24d5ba515e134fd50d6bf);
        geo_json_a68f8ced307d48dea30c978ef0a6feba.addData(big_json);


var color_map_eb50437a661b4fd79e96196bc85b9196 = {};


color_map_eb50437a661b4fd79e96196bc85b9196.color = d3.scale.threshold()
          .domain([2.5, 2.509202802768658, 2.518405605537316, 2.5276084083059738, 2.5368112110746317, 2.5460140138432896, 2.555216816611947, 2.564419619380605, 2.573622422149263, 2.582825224917921, 2.592028027686579, 2.6012308304552367, 2.6104336332238947, 2.6196364359925526, 2.6288392387612105, 2.6380420415298684, 2.647244844298526, 2.656447647067184, 2.6656504498358418, 2.6748532526044997, 2.6840560553731576, 2.6932588581418155, 2.7024616609104735, 2.7116644636791314, 2.7208672664477893, 2.7300700692164472, 2.739272871985105, 2.748475674753763, 2.757678477522421, 2.7668812802910785, 2.7760840830597364, 2.7852868858283943, 2.7944896885970523, 2.80369249136571, 2.812895294134368, 2.822098096903026, 2.831300899671684, 2.840503702440342, 2.8497065052089994, 2.8589093079776573, 2.8681121107463152, 2.877314913514973, 2.886517716283631, 2.895720519052289, 2.904923321820947, 2.914126124589605, 2.9233289273582628, 2.9325317301269207, 2.9417345328955786, 2.9509373356642365, 2.960140138432894, 2.969342941201552, 2.97854574397021, 2.987748546738868, 2.9969513495075257, 3.0061541522761837, 3.0153569550448416, 3.0245597578134995, 3.033762560582157, 3.042965363350815, 3.052168166119473, 3.0613709688881308, 3.0705737716567887, 3.0797765744254466, 3.0889793771941045, 3.0981821799627625, 3.1073849827314204, 3.1165877855000783, 3.1257905882687362, 3.134993391037394, 3.144196193806052, 3.1533989965747096, 3.1626017993433675, 3.1718046021120254, 3.1810074048806833, 3.1902102076493413, 3.199413010417999, 3.208615813186657, 3.217818615955315, 3.227021418723973, 3.2362242214926304, 3.2454270242612884, 3.2546298270299463, 3.2638326297986042, 3.273035432567262, 3.28223823533592, 3.291441038104578, 3.300643840873236, 3.309846643641894, 3.3190494464105518, 3.3282522491792097, 3.3374550519478676, 3.3466578547165255, 3.3558606574851835, 3.365063460253841, 3.374266263022499, 3.383469065791157, 3.3926718685598147, 3.4018746713284727, 3.4110774740971306, 3.4202802768657885, 3.4294830796344464, 3.4386858824031044, 3.447888685171762, 3.4570914879404198, 3.4662942907090777, 3.4754970934777356, 3.4846998962463935, 3.4939026990150515, 3.5031055017837094, 3.5123083045523673, 3.5215111073210252, 3.530713910089683, 3.539916712858341, 3.549119515626999, 3.5583223183956565, 3.5675251211643144, 3.5767279239329723, 3.5859307267016303, 3.595133529470288, 3.604336332238946, 3.613539135007604, 3.622741937776262, 3.63194474054492, 3.6411475433135774, 3.6503503460822353, 3.6595531488508932, 3.668755951619551, 3.677958754388209, 3.687161557156867, 3.696364359925525, 3.705567162694183, 3.7147699654628408, 3.7239727682314987, 3.7331755710001566, 3.7423783737688145, 3.7515811765374725, 3.7607839793061304, 3.7699867820747883, 3.7791895848434462, 3.788392387612104, 3.7975951903807617, 3.806797993149419, 3.816000795918077, 3.825203598686735, 3.834406401455393, 3.843609204224051, 3.8528120069927088, 3.8620148097613667, 3.8712176125300246, 3.8804204152986825, 3.8896232180673405, 3.8988260208359984, 3.9080288236046563, 3.9172316263733142, 3.926434429141972, 3.93563723191063, 3.944840034679288, 3.954042837447946, 3.963245640216604, 3.9724484429852613, 3.9816512457539193, 3.990854048522577, 4.000056851291236, 4.009259654059893, 4.018462456828551, 4.0276652595972084, 4.036868062365866, 4.046070865134524, 4.055273667903182, 4.06447647067184, 4.073679273440498, 4.082882076209156, 4.092084878977814, 4.101287681746472, 4.11049048451513, 4.119693287283788, 4.128896090052446, 4.1380988928211035, 4.1473016955897615, 4.156504498358419, 4.165707301127076, 4.174910103895735, 4.184112906664392, 4.193315709433051, 4.202518512201708, 4.211721314970367, 4.220924117739024, 4.230126920507682, 4.23932972327634, 4.248532526044998, 4.257735328813656, 4.266938131582314, 4.2761409343509715, 4.2853437371196295, 4.294546539888287, 4.303749342656945, 4.312952145425603, 4.322154948194261, 4.331357750962919, 4.340560553731577, 4.349763356500235, 4.358966159268893, 4.368168962037551, 4.377371764806209, 4.386574567574867, 4.395777370343524, 4.404980173112182, 4.4141829758808395, 4.4233857786494974, 4.432588581418155, 4.441791384186813, 4.450994186955471, 4.460196989724129, 4.469399792492787, 4.478602595261445, 4.487805398030103, 4.497008200798761, 4.506211003567419, 4.515413806336077, 4.524616609104735, 4.5338194118733925, 4.5430222146420505, 4.552225017410708, 4.561427820179366, 4.570630622948024, 4.579833425716682, 4.589036228485339, 4.598239031253998, 4.607441834022655, 4.616644636791313, 4.625847439559971, 4.635050242328629, 4.644253045097287, 4.653455847865945, 4.662658650634603, 4.6718614534032605, 4.6810642561719185, 4.690267058940576, 4.699469861709234, 4.708672664477892, 4.71787546724655, 4.727078270015208, 4.736281072783866, 4.745483875552524, 4.754686678321182, 4.76388948108984, 4.773092283858498, 4.782295086627155, 4.791497889395814, 4.800700692164471, 4.809903494933129, 4.8191062977017864, 4.828309100470445, 4.837511903239102, 4.84671470600776, 4.855917508776418, 4.865120311545076, 4.874323114313734, 4.883525917082392, 4.89272871985105, 4.901931522619708, 4.911134325388366, 4.920337128157024, 4.9295399309256815, 4.9387427336943395, 4.947945536462997, 4.957148339231654, 4.966351142000313, 4.97555394476897, 4.984756747537629, 4.993959550306286, 5.003162353074945, 5.012365155843602, 5.021567958612261, 5.030770761380918, 5.039973564149577, 5.049176366918234, 5.0583791696868925, 5.0675819724555495, 5.076784775224208, 5.085987577992865, 5.095190380761523, 5.104393183530181, 5.113595986298838, 5.122798789067497, 5.132001591836154, 5.141204394604813, 5.15040719737347, 5.159610000142129, 5.168812802910786, 5.178015605679445, 5.187218408448102, 5.1964212112167605, 5.2056240139854175, 5.214826816754076, 5.224029619522733, 5.233232422291392, 5.242435225060049, 5.251638027828708, 5.260840830597365, 5.270043633366024, 5.279246436134681, 5.288449238903339, 5.297652041671997, 5.306854844440655, 5.316057647209313, 5.32526044997797, 5.3344632527466285, 5.3436660555152855, 5.352868858283944, 5.362071661052601, 5.37127446382126, 5.380477266589917, 5.389680069358576, 5.398882872127233, 5.408085674895892, 5.417288477664549, 5.426491280433208, 5.435694083201865, 5.444896885970523, 5.454099688739181, 5.4633024915078385, 5.4725052942764965, 5.481708097045154, 5.490910899813812, 5.50011370258247, 5.509316505351128, 5.518519308119786, 5.527722110888444, 5.536924913657102, 5.54612771642576, 5.555330519194418, 5.564533321963076, 5.573736124731733, 5.582938927500392, 5.592141730269049, 5.601344533037707, 5.610547335806364, 5.619750138575022, 5.62895294134368, 5.638155744112338, 5.647358546880996, 5.656561349649654, 5.665764152418312, 5.67496695518697, 5.684169757955628, 5.693372560724286, 5.702575363492944, 5.711778166261602, 5.7209809690302595, 5.7301837717989175, 5.739386574567575, 5.748589377336233, 5.757792180104891, 5.766994982873549, 5.776197785642207, 5.785400588410864, 5.794603391179523, 5.80380619394818, 5.813008996716838, 5.822211799485496, 5.831414602254154, 5.840617405022812, 5.84982020779147, 5.8590230105601275, 5.8682258133287855, 5.877428616097443, 5.886631418866101, 5.895834221634759, 5.905037024403417, 5.914239827172075, 5.923442629940733, 5.932645432709391, 5.941848235478049, 5.951051038246707, 5.960253841015364, 5.969456643784023, 5.97865944655268, 5.9878622493213385, 5.9970650520899955, 6.006267854858654, 6.015470657627311, 6.02467346039597, 6.033876263164627, 6.043079065933286, 6.052281868701943, 6.061484671470601, 6.070687474239259, 6.079890277007917, 6.089093079776575, 6.098295882545233, 6.107498685313891, 6.1167014880825485, 6.1259042908512065, 6.1351070936198635, 6.144309896388522, 6.153512699157179, 6.162715501925838, 6.171918304694495, 6.181121107463154, 6.190323910231811, 6.19952671300047, 6.208729515769127, 6.217932318537786, 6.227135121306443, 6.236337924075102, 6.245540726843759, 6.254743529612417, 6.2639463323810745, 6.273149135149733, 6.28235193791839, 6.291554740687048, 6.300757543455706, 6.309960346224363, 6.319163148993022, 6.328365951761679, 6.337568754530338, 6.346771557298995, 6.355974360067654, 6.365177162836311, 6.3743799656049696, 6.383582768373627, 6.392785571142285, 6.401988373910942, 6.411191176679601, 6.420393979448258, 6.429596782216917, 6.438799584985574, 6.448002387754233, 6.45720519052289, 6.466407993291548, 6.475610796060206, 6.484813598828864, 6.494016401597522, 6.50321920436618, 6.5124220071348375, 6.5216248099034955, 6.530827612672153, 6.540030415440811, 6.549233218209469, 6.558436020978127, 6.567638823746785, 6.576841626515443, 6.586044429284101, 6.595247232052759, 6.604450034821417, 6.613652837590075, 6.622855640358733, 6.632058443127391, 6.6412612458960485, 6.650464048664706, 6.659666851433364, 6.668869654202022, 6.678072456970679, 6.687275259739337, 6.696478062507995, 6.705680865276653, 6.71488366804531, 6.724086470813968, 6.733289273582626, 6.742492076351284, 6.751694879119942, 6.7608976818886, 6.770100484657258, 6.779303287425916, 6.7885060901945735, 6.797708892963231, 6.806911695731889, 6.816114498500547, 6.825317301269205, 6.834520104037863, 6.843722906806521, 6.852925709575179, 6.862128512343837, 6.871331315112495, 6.880534117881153, 6.889736920649811, 6.898939723418469, 6.9081425261871265, 6.9173453289557845, 6.926548131724442, 6.9357509344931, 6.944953737261758, 6.954156540030416, 6.963359342799074, 6.972562145567732, 6.98176494833639, 6.990967751105048, 7.000170553873706, 7.009373356642364, 7.018576159411022, 7.02777896217968, 7.0369817649483375, 7.0461845677169945, 7.0553873704856525, 7.06459017325431, 7.073792976022968, 7.082995778791626, 7.092198581560284])
          .range(['#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#ffffcc', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#d9f0a3', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#addd8e', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#78c679', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#31a354', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837', '#006837']);


color_map_eb50437a661b4fd79e96196bc85b9196.x = d3.scale.linear()
          .domain([2.5, 7.092198581560284])
          .range([0, 400]);

color_map_eb50437a661b4fd79e96196bc85b9196.legend = L.control({position: 'topright'});
color_map_eb50437a661b4fd79e96196bc85b9196.legend.onAdd = function (map) {var div = L.DomUtil.create('div', 'legend'); return div};
color_map_eb50437a661b4fd79e96196bc85b9196.legend.addTo(map_bcc481e3943c4d33954fa4781d2c57b7);

color_map_eb50437a661b4fd79e96196bc85b9196.xAxis = d3.svg.axis()
    .scale(color_map_eb50437a661b4fd79e96196bc85b9196.x)
    .orient("top")
    .tickSize(1)
    .tickValues([2.5, 3.2653664302600474, 4.030732860520095, 4.796099290780142, 5.561465721040189, 6.326832151300237, 7.092198581560284]);

color_map_eb50437a661b4fd79e96196bc85b9196.svg = d3.select(".legend.leaflet-control").append("svg")
    .attr("id", 'legend')
    .attr("width", 450)
    .attr("height", 40);

color_map_eb50437a661b4fd79e96196bc85b9196.g = color_map_eb50437a661b4fd79e96196bc85b9196.svg.append("g")
    .attr("class", "key")
    .attr("transform", "translate(25,16)");

color_map_eb50437a661b4fd79e96196bc85b9196.g.selectAll("rect")
    .data(color_map_eb50437a661b4fd79e96196bc85b9196.color.range().map(function(d, i) {
      return {
        x0: i ? color_map_eb50437a661b4fd79e96196bc85b9196.x(color_map_eb50437a661b4fd79e96196bc85b9196.color.domain()[i - 1]) : color_map_eb50437a661b4fd79e96196bc85b9196.x.range()[0],
        x1: i < color_map_eb50437a661b4fd79e96196bc85b9196.color.domain().length ? color_map_eb50437a661b4fd79e96196bc85b9196.x(color_map_eb50437a661b4fd79e96196bc85b9196.color.domain()[i]) : color_map_eb50437a661b4fd79e96196bc85b9196.x.range()[1],
        z: d
      };
    }))
  .enter().append("rect")
    .attr("height", 10)
    .attr("x", function(d) { return d.x0; })
    .attr("width", function(d) { return d.x1 - d.x0; })
    .style("fill", function(d) { return d.z; });

color_map_eb50437a661b4fd79e96196bc85b9196.g.call(color_map_eb50437a661b4fd79e96196bc85b9196.xAxis).append("text")
    .attr("class", "caption")
    .attr("y", 21)
    .text('Percentage of Respondents');

        var layer_control_b68fe4fddcac48fc8278d909fc5a6a40 = {
            base_layers : {
                "openstreetmap" : tile_layer_ca04c753f9cd47d6917dc420ce6cc324,
            },
            overlays :  {
                "Choropleth" : choropleth_9d022eb837d24d5ba515e134fd50d6bf,
            },
        };
        L.control.layers(
            layer_control_b68fe4fddcac48fc8278d909fc5a6a40.base_layers,
            layer_control_b68fe4fddcac48fc8278d909fc5a6a40.overlays,
            {"autoZIndex": true, "collapsed": true, "position": "topright"}
        ).addTo(map_bcc481e3943c4d33954fa4781d2c57b7);