import { useState, useRef, useEffect, useMemo } from "react";
import {
  ScatterChart, Scatter, LineChart, Line, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from "recharts";

const DATA = {"totalTime":6322510,"totalAccesses":5249861,"totalObjects":1072649,"cacheSize":10000,"windowSize":100000,"trace":[{"x":16180,"y":16173},{"x":30853,"y":14761},{"x":348984,"y":12816},{"x":369386,"y":24057},{"x":384630,"y":38292},{"x":401885,"y":44699},{"x":416847,"y":58259},{"x":437322,"y":71361},{"x":455646,"y":84360},{"x":475755,"y":97225},{"x":493037,"y":110378},{"x":506385,"y":123574},{"x":519537,"y":136718},{"x":532729,"y":149883},{"x":545936,"y":163026},{"x":559239,"y":176128},{"x":572735,"y":189278},{"x":586146,"y":202453},{"x":599550,"y":215572},{"x":612777,"y":228757},{"x":626079,"y":241973},{"x":639387,"y":255087},{"x":652565,"y":268399},{"x":665726,"y":281618},{"x":678889,"y":294812},{"x":692721,"y":308036},{"x":710326,"y":321198},{"x":724030,"y":352468},{"x":741103,"y":324163},{"x":754232,"y":700702},{"x":769623,"y":309448},{"x":782761,"y":293189},{"x":795929,"y":280088},{"x":870685,"y":870682},{"x":937003,"y":936998},{"x":999028,"y":999019},{"x":1079034,"y":1079003},{"x":1142841,"y":1142831},{"x":1216287,"y":1216285},{"x":1295355,"y":1295278},{"x":1351704,"y":254282},{"x":1364839,"y":241267},{"x":1378041,"y":230493},{"x":1391301,"y":217161},{"x":1404488,"y":202117},{"x":1417850,"y":188220},{"x":1431329,"y":1391056},{"x":1444715,"y":164005},{"x":1458304,"y":151567},{"x":1471664,"y":138326},{"x":1485015,"y":725774},{"x":1498276,"y":111057},{"x":1511632,"y":101184},{"x":1524969,"y":92221},{"x":1538244,"y":83928},{"x":1551650,"y":74226},{"x":1565126,"y":414},{"x":1581753,"y":341156},{"x":1595815,"y":1765},{"x":1608956,"y":53603},{"x":1622329,"y":43026},{"x":1635973,"y":35541},{"x":1649442,"y":13603},{"x":1664944,"y":4860},{"x":1683306,"y":824358},{"x":1704630,"y":1059114},{"x":1726872,"y":1054654},{"x":1748392,"y":1125934},{"x":1771367,"y":806642},{"x":1791628,"y":1108922},{"x":1812922,"y":728514},{"x":1829471,"y":818529},{"x":1846158,"y":837001},{"x":1862035,"y":855609},{"x":1876998,"y":875909},{"x":1892103,"y":860301},{"x":1905531,"y":914841},{"x":1918872,"y":937979},{"x":1932769,"y":958356},{"x":1946307,"y":979503},{"x":1959585,"y":1000093},{"x":1972973,"y":1017332},{"x":1987849,"y":1036684},{"x":2002783,"y":865164},{"x":2018224,"y":1077957},{"x":2032409,"y":1100070},{"x":2046661,"y":1120669},{"x":2060457,"y":1141039},{"x":2075615,"y":1162555},{"x":2091328,"y":1184256},{"x":2105969,"y":1202956},{"x":2121008,"y":1224421},{"x":2136224,"y":728616},{"x":2152385,"y":1705555},{"x":2166564,"y":1286835},{"x":2181732,"y":1307438},{"x":2196575,"y":1327547},{"x":2211329,"y":1241},{"x":2225693,"y":370782},{"x":2240913,"y":258033},{"x":2256537,"y":1716078},{"x":2271766,"y":830132},{"x":2287217,"y":847814},{"x":2302850,"y":1165800},{"x":2318713,"y":1704435},{"x":2334602,"y":1031490},{"x":2348327,"y":1108269},{"x":2362019,"y":873390},{"x":2375344,"y":977839},{"x":2388585,"y":1166589},{"x":2402251,"y":1185073},{"x":2416145,"y":926040},{"x":2429736,"y":1222409},{"x":2443445,"y":1241493},{"x":2457911,"y":1234853},{"x":2471270,"y":1265693},{"x":2485159,"y":1032709},{"x":2499173,"y":1225654},{"x":2513152,"y":1335734},{"x":2527210,"y":333290},{"x":2540394,"y":320623},{"x":2553523,"y":696888},{"x":2566651,"y":298881},{"x":2579850,"y":726653},{"x":2593503,"y":277859},{"x":2606706,"y":264965},{"x":2619889,"y":252433},{"x":2633044,"y":239831},{"x":2646175,"y":226068},{"x":2659346,"y":212780},{"x":2672470,"y":200032},{"x":2685661,"y":187878},{"x":2698785,"y":174403},{"x":2711951,"y":160468},{"x":2725094,"y":147393},{"x":2738218,"y":134828},{"x":2751343,"y":121163},{"x":2764623,"y":803603},{"x":2778726,"y":106018},{"x":2792847,"y":482192},{"x":2806650,"y":830324},{"x":2819887,"y":95242},{"x":2833130,"y":92337},{"x":2846414,"y":1792168},{"x":2859894,"y":861013},{"x":2873454,"y":868640},{"x":2887241,"y":878319},{"x":2900989,"y":1803258},{"x":2914568,"y":897945},{"x":2928186,"y":908466},{"x":2942132,"y":919537},{"x":2955892,"y":882709},{"x":2969684,"y":2320547},{"x":2983491,"y":50774},{"x":2997228,"y":47900},{"x":3011440,"y":42409},{"x":3025587,"y":1676802},{"x":3039463,"y":995451},{"x":3053263,"y":366220},{"x":3067250,"y":728157},{"x":3080920,"y":1022638},{"x":3094552,"y":1030510},{"x":3108794,"y":1039338},{"x":3122183,"y":1573874},{"x":3136011,"y":1127},{"x":3149897,"y":872931},{"x":3164537,"y":923292},{"x":3178403,"y":1069047},{"x":3192704,"y":1040909},{"x":3206862,"y":1121570},{"x":3221840,"y":3188187},{"x":3236437,"y":3146634},{"x":3250919,"y":1704538},{"x":3264572,"y":2099584},{"x":3277959,"y":806494},{"x":3292301,"y":1109071},{"x":3307278,"y":2307191},{"x":3321202,"y":1118336},{"x":3335761,"y":1096355},{"x":3350326,"y":1147398},{"x":3363843,"y":1166640},{"x":3377005,"y":1184575},{"x":3390736,"y":1151299},{"x":3404612,"y":1222031},{"x":3418365,"y":728056},{"x":3432118,"y":1779453},{"x":3446097,"y":1278110},{"x":3459481,"y":1029459},{"x":3474005,"y":1315387},{"x":3487930,"y":1335238},{"x":3501940,"y":333607},{"x":3515064,"y":320508},{"x":3528188,"y":310784},{"x":3541312,"y":298294},{"x":3554436,"y":284087},{"x":3567649,"y":270548},{"x":3581432,"y":727671},{"x":3594809,"y":249510},{"x":3607933,"y":237194},{"x":3621057,"y":222880},{"x":3634191,"y":211115},{"x":3647315,"y":198183},{"x":3660439,"y":184549},{"x":3673563,"y":171654},{"x":3686687,"y":158823},{"x":3699811,"y":145172},{"x":3712935,"y":132354},{"x":3726059,"y":118893},{"x":3739183,"y":489218},{"x":3752307,"y":97319},{"x":3765639,"y":935120},{"x":3779110,"y":816848},{"x":3793452,"y":457924},{"x":3807743,"y":834583},{"x":3821988,"y":445573},{"x":3835693,"y":73703},{"x":3849273,"y":860410},{"x":3862442,"y":429361},{"x":3875597,"y":62961},{"x":3888750,"y":886226},{"x":3901895,"y":1126196},{"x":3915076,"y":905355},{"x":3929293,"y":46578},{"x":3943238,"y":928062},{"x":3956929,"y":2259482},{"x":3970223,"y":385310},{"x":3983566,"y":35461},{"x":3997040,"y":969258},{"x":4010808,"y":350906},{"x":4024194,"y":12408},{"x":4037890,"y":998757},{"x":4051544,"y":6078},{"x":4064755,"y":1571209},{"x":4078034,"y":1564771},{"x":4091301,"y":1686537},{"x":4104524,"y":1050326},{"x":4117737,"y":1035875},{"x":4131005,"y":1153528},{"x":4144298,"y":1777948},{"x":4157490,"y":979607},{"x":4170728,"y":1125199},{"x":4183964,"y":726540},{"x":4197169,"y":1018059},{"x":4210418,"y":2323368},{"x":4223738,"y":3225493},{"x":4237513,"y":1082092},{"x":4250871,"y":895835},{"x":4264446,"y":1685739},{"x":4278022,"y":728059},{"x":4291721,"y":1788842},{"x":4304902,"y":1136427},{"x":4318105,"y":956911},{"x":4331366,"y":728256},{"x":4344640,"y":1191679},{"x":4357888,"y":1210882},{"x":4371129,"y":1228619},{"x":4384691,"y":16444},{"x":4398172,"y":1263514},{"x":4411782,"y":1283883},{"x":4425720,"y":3195198},{"x":4441107,"y":1322964},{"x":4455067,"y":1343081},{"x":4468612,"y":6439},{"x":4481736,"y":13685},{"x":4494860,"y":371911},{"x":4507989,"y":44768},{"x":4521113,"y":56096},{"x":4534237,"y":65133},{"x":4547409,"y":74433},{"x":4560533,"y":83144},{"x":4573726,"y":611},{"x":4586852,"y":12207},{"x":4599976,"y":37313},{"x":4613100,"y":49887},{"x":4626295,"y":63133},{"x":4639419,"y":76422},{"x":4652554,"y":89649},{"x":4665746,"y":98897},{"x":4678895,"y":491554},{"x":4692031,"y":121908},{"x":4705189,"y":135070},{"x":4718427,"y":147491},{"x":4731610,"y":160661},{"x":4744783,"y":173800},{"x":4757923,"y":186685},{"x":4771047,"y":199840},{"x":4787413,"y":803091},{"x":4801473,"y":819713},{"x":4815194,"y":2191591},{"x":4829518,"y":851496},{"x":4842699,"y":867277},{"x":4855886,"y":885501},{"x":4870303,"y":907008},{"x":4884500,"y":928920},{"x":4898296,"y":832800},{"x":4911852,"y":969572},{"x":4925370,"y":990435},{"x":4938843,"y":997243},{"x":4952137,"y":1026941},{"x":4965516,"y":1044856},{"x":4979093,"y":1060936},{"x":4992898,"y":901205},{"x":5007139,"y":1101837},{"x":5020696,"y":1048853},{"x":5033971,"y":1141059},{"x":5047341,"y":1934524},{"x":5060478,"y":1178586},{"x":5073657,"y":1195561},{"x":5086795,"y":1214180},{"x":5099927,"y":1233870},{"x":5113245,"y":1252119},{"x":5126424,"y":1268289},{"x":5139762,"y":1287966},{"x":5153124,"y":1306284},{"x":5166609,"y":1323887},{"x":5179987,"y":1343066},{"x":5194933,"y":3479},{"x":5208631,"y":5078},{"x":5221858,"y":13726},{"x":5235125,"y":35284},{"x":5248309,"y":399966},{"x":5261593,"y":54739},{"x":5274778,"y":64570},{"x":5288023,"y":74310},{"x":5301242,"y":83813},{"x":5314498,"y":93875},{"x":5327642,"y":107227},{"x":5340819,"y":729690},{"x":5353958,"y":139086},{"x":5367082,"y":154503},{"x":5380244,"y":328680},{"x":5393673,"y":704478},{"x":5406798,"y":326949},{"x":5419923,"y":704985},{"x":5433048,"y":314725},{"x":5446172,"y":296338},{"x":5459296,"y":282950},{"x":5472420,"y":270852},{"x":5485579,"y":260054},{"x":5498704,"y":246845},{"x":5511828,"y":236329},{"x":5524973,"y":16444},{"x":5538446,"y":217409},{"x":5551570,"y":203446},{"x":5564695,"y":191369},{"x":5577839,"y":177809},{"x":5590964,"y":165455},{"x":5604088,"y":152522},{"x":5617212,"y":138569},{"x":5630336,"y":456706},{"x":5643461,"y":114028},{"x":5656585,"y":102765},{"x":5669709,"y":93437},{"x":5682833,"y":85021},{"x":5695957,"y":443763},{"x":5709081,"y":430616},{"x":5722206,"y":417026},{"x":5735330,"y":47559},{"x":5748454,"y":384413},{"x":5761578,"y":15939},{"x":5774757,"y":804644},{"x":5788178,"y":1228349},{"x":5801704,"y":1571372},{"x":5815225,"y":1714396},{"x":5828555,"y":3048152},{"x":5841863,"y":830581},{"x":5855041,"y":961461},{"x":5868177,"y":835529},{"x":5881371,"y":1756108},{"x":5894546,"y":931168},{"x":5907693,"y":1251374},{"x":5920843,"y":845589},{"x":5934043,"y":1076271},{"x":5947377,"y":3803462},{"x":5960724,"y":2349327},{"x":5973907,"y":725453},{"x":5987059,"y":951846},{"x":6001185,"y":894498},{"x":6017321,"y":919825},{"x":6033216,"y":989592},{"x":6049645,"y":967915},{"x":6063590,"y":866645},{"x":6079499,"y":1012585},{"x":6093291,"y":1029545},{"x":6107040,"y":1048062},{"x":6120858,"y":1064961},{"x":6134430,"y":1083933},{"x":6147659,"y":1783824},{"x":6161662,"y":1124631},{"x":6175987,"y":1145462},{"x":6189144,"y":1164292},{"x":6202518,"y":1182817},{"x":6215649,"y":1199796},{"x":6228787,"y":990598},{"x":6241930,"y":727954},{"x":6255329,"y":1255619},{"x":6268599,"y":1272939},{"x":6281996,"y":4276981},{"x":6295271,"y":1309902},{"x":6308826,"y":1328466},{"x":6322140,"y":1347363}],"windowed":[{"t":0.016,"missRatio":0.9986,"hits":20,"misses":14302,"evictions":4302,"unique":14302,"startT":16180,"endT":116180},{"t":0.116,"missRatio":0.5714,"hits":24,"misses":32,"evictions":32,"unique":56,"startT":116180,"endT":216180},{"t":0.216,"missRatio":0.9947,"hits":1,"misses":186,"evictions":186,"unique":187,"startT":216180,"endT":316180},{"t":0.316,"missRatio":0.9493,"hits":3220,"misses":60352,"evictions":60352,"unique":41418,"startT":316180,"endT":416180},{"t":0.416,"missRatio":0.9987,"hits":101,"misses":75896,"evictions":75896,"unique":75890,"startT":416180,"endT":516180},{"t":0.516,"missRatio":0.9998,"hits":18,"misses":98548,"evictions":98548,"unique":98529,"startT":516180,"endT":616180},{"t":0.616,"missRatio":0.9999,"hits":13,"misses":94279,"evictions":94279,"unique":94275,"startT":616180,"endT":716180},{"t":0.716,"missRatio":0.8723,"hits":10224,"misses":69808,"evictions":69808,"unique":69401,"startT":716180,"endT":816180},{"t":0.816,"missRatio":0.8402,"hits":2387,"misses":12553,"evictions":12553,"unique":12895,"startT":816180,"endT":916180},{"t":0.916,"missRatio":0.895,"hits":2167,"misses":18464,"evictions":18464,"unique":17633,"startT":916180,"endT":1016180},{"t":1.016,"missRatio":0.8569,"hits":2519,"misses":15082,"evictions":15082,"unique":15983,"startT":1016180,"endT":1116180},{"t":1.116,"missRatio":0.9237,"hits":1411,"misses":17085,"evictions":17085,"unique":16371,"startT":1116180,"endT":1216180},{"t":1.216,"missRatio":0.8797,"hits":1942,"misses":14204,"evictions":14204,"unique":14917,"startT":1216180,"endT":1316180},{"t":1.316,"missRatio":0.9965,"hits":259,"misses":73852,"evictions":73852,"unique":73796,"startT":1316180,"endT":1416180},{"t":1.416,"missRatio":0.998,"hits":192,"misses":97794,"evictions":97794,"unique":97674,"startT":1416180,"endT":1516180},{"t":1.516,"missRatio":0.9217,"hits":7399,"misses":87117,"evictions":87117,"unique":82059,"startT":1516180,"endT":1616180},{"t":1.616,"missRatio":0.9987,"hits":106,"misses":78578,"evictions":78578,"unique":78515,"startT":1616180,"endT":1716180},{"t":1.716,"missRatio":0.9914,"hits":528,"misses":60764,"evictions":60764,"unique":60650,"startT":1716180,"endT":1816180},{"t":1.816,"missRatio":0.9831,"hits":1463,"misses":84995,"evictions":84995,"unique":83362,"startT":1816180,"endT":1916180},{"t":1.916,"missRatio":0.9809,"hits":1772,"misses":90894,"evictions":90894,"unique":89052,"startT":1916180,"endT":2016180},{"t":2.016,"missRatio":0.9897,"hits":920,"misses":88784,"evictions":88784,"unique":87016,"startT":2016180,"endT":2116180},{"t":2.116,"missRatio":0.9908,"hits":806,"misses":86430,"evictions":86430,"unique":84984,"startT":2116180,"endT":2216180},{"t":2.216,"missRatio":0.9252,"hits":6383,"misses":78996,"evictions":78996,"unique":80503,"startT":2216180,"endT":2316180},{"t":2.316,"missRatio":0.9855,"hits":1362,"misses":92566,"evictions":92566,"unique":90510,"startT":2316180,"endT":2416180},{"t":2.416,"missRatio":0.9897,"hits":977,"misses":93685,"evictions":93685,"unique":91784,"startT":2416180,"endT":2516180},{"t":2.516,"missRatio":0.9654,"hits":3413,"misses":95087,"evictions":95087,"unique":93024,"startT":2516180,"endT":2616180},{"t":2.616,"missRatio":0.9992,"hits":82,"misses":99660,"evictions":99660,"unique":99628,"startT":2616180,"endT":2716180},{"t":2.716,"missRatio":0.9816,"hits":1784,"misses":95316,"evictions":95316,"unique":95282,"startT":2716180,"endT":2816180},{"t":2.816,"missRatio":0.9464,"hits":5203,"misses":91912,"evictions":91912,"unique":91297,"startT":2816180,"endT":2916180},{"t":2.916,"missRatio":0.9625,"hits":3545,"misses":91106,"evictions":91106,"unique":90813,"startT":2916180,"endT":3016180},{"t":3.016,"missRatio":0.9501,"hits":4734,"misses":90068,"evictions":90068,"unique":89929,"startT":3016180,"endT":3116180},{"t":3.116,"missRatio":0.9545,"hits":4210,"misses":88277,"evictions":88277,"unique":86137,"startT":3116180,"endT":3216180},{"t":3.216,"missRatio":0.9464,"hits":4951,"misses":87424,"evictions":87424,"unique":85519,"startT":3216180,"endT":3316180},{"t":3.316,"missRatio":0.9637,"hits":3427,"misses":90984,"evictions":90984,"unique":88858,"startT":3316180,"endT":3416180},{"t":3.416,"missRatio":0.9791,"hits":1990,"misses":93167,"evictions":93167,"unique":90584,"startT":3416180,"endT":3516180},{"t":3.516,"missRatio":0.9797,"hits":2005,"misses":96994,"evictions":96994,"unique":96950,"startT":3516180,"endT":3616180},{"t":3.616,"missRatio":1.0,"hits":4,"misses":99986,"evictions":99986,"unique":99949,"startT":3616180,"endT":3716180},{"t":3.716,"missRatio":0.9881,"hits":1148,"misses":95129,"evictions":95129,"unique":95087,"startT":3716180,"endT":3816180},{"t":3.816,"missRatio":0.9362,"hits":6284,"misses":92155,"evictions":92155,"unique":91600,"startT":3816180,"endT":3916180},{"t":3.916,"missRatio":0.9514,"hits":4667,"misses":91378,"evictions":91378,"unique":91113,"startT":3916180,"endT":4016180},{"t":4.016,"missRatio":0.9392,"hits":5973,"misses":92206,"evictions":92206,"unique":90613,"startT":4016180,"endT":4116180},{"t":4.116,"missRatio":0.9594,"hits":4022,"misses":95080,"evictions":95080,"unique":93178,"startT":4116180,"endT":4216180},{"t":4.216,"missRatio":0.9687,"hits":3051,"misses":94329,"evictions":94329,"unique":90311,"startT":4216180,"endT":4316180},{"t":4.316,"missRatio":0.9849,"hits":1479,"misses":96559,"evictions":96559,"unique":94563,"startT":4316180,"endT":4416180},{"t":4.416,"missRatio":0.9966,"hits":324,"misses":95478,"evictions":95478,"unique":95461,"startT":4416180,"endT":4516180},{"t":4.516,"missRatio":1.0,"hits":0,"misses":99853,"evictions":99853,"unique":98326,"startT":4516180,"endT":4616180},{"t":4.616,"missRatio":0.9999,"hits":10,"misses":99683,"evictions":99683,"unique":99630,"startT":4616180,"endT":4716180},{"t":4.716,"missRatio":0.9833,"hits":1589,"misses":93420,"evictions":93420,"unique":92623,"startT":4716180,"endT":4816180},{"t":4.816,"missRatio":0.9832,"hits":1598,"misses":93536,"evictions":93536,"unique":91473,"startT":4816180,"endT":4916180},{"t":4.916,"missRatio":0.9849,"hits":1455,"misses":94972,"evictions":94972,"unique":93033,"startT":4916180,"endT":5016180},{"t":5.016,"missRatio":0.9835,"hits":1634,"misses":97566,"evictions":97566,"unique":95719,"startT":5016180,"endT":5116180},{"t":5.116,"missRatio":0.9363,"hits":6139,"misses":90303,"evictions":90303,"unique":84937,"startT":5116180,"endT":5216180},{"t":5.216,"missRatio":0.9993,"hits":69,"misses":99104,"evictions":99104,"unique":99090,"startT":5216180,"endT":5316180},{"t":5.316,"missRatio":0.9907,"hits":930,"misses":98638,"evictions":98638,"unique":82159,"startT":5316180,"endT":5416180},{"t":5.416,"missRatio":0.9826,"hits":1737,"misses":98205,"evictions":98205,"unique":89548,"startT":5416180,"endT":5516180},{"t":5.516,"missRatio":0.9797,"hits":2022,"misses":97606,"evictions":97606,"unique":97487,"startT":5516180,"endT":5616180},{"t":5.616,"missRatio":0.9988,"hits":117,"misses":99882,"evictions":99882,"unique":99791,"startT":5616180,"endT":5716180},{"t":5.716,"missRatio":0.9911,"hits":875,"misses":97966,"evictions":97966,"unique":97931,"startT":5716180,"endT":5816180},{"t":5.816,"missRatio":0.985,"hits":1489,"misses":97899,"evictions":97899,"unique":96706,"startT":5816180,"endT":5916180},{"t":5.916,"missRatio":0.9555,"hits":4255,"misses":91266,"evictions":91266,"unique":87785,"startT":5916180,"endT":6016180},{"t":6.016,"missRatio":0.9882,"hits":1041,"misses":87404,"evictions":87404,"unique":85481,"startT":6016180,"endT":6116180},{"t":6.116,"missRatio":0.9864,"hits":1315,"misses":95510,"evictions":95510,"unique":93727,"startT":6116180,"endT":6216180},{"t":6.216,"missRatio":0.9858,"hits":1402,"misses":97171,"evictions":97171,"unique":95324,"startT":6216180,"endT":6316180},{"t":6.316,"missRatio":0.9883,"hits":72,"misses":6077,"evictions":6077,"unique":6096,"startT":6316180,"endT":6416180}],"perObject":[{"obj":726925,"freq":332,"times":[728062,729573,761533,761554,766517,803002,808075,811576,815609,842185,859183,862061]},{"obj":16443,"freq":295,"times":[726926,728063,729574,761534,761555,766518,803017,804288,806215,808076,809309,812774]},{"obj":16444,"freq":264,"times":[726928,728065,729576,761536,761557,766520,806645,986658,991585,996466,999935,1003336]},{"obj":726797,"freq":252,"times":[727177,728841,729445,761272,761276,766501,859181,873517,877777,881754,884995,888206]},{"obj":726929,"freq":246,"times":[728066,729577,761537,761558,766521,1002464,1004058,1046300,1096741,1101508,1105860,1110601]},{"obj":726946,"freq":238,"times":[728830,729594,764114,764115,764116,802995,804283,807682,809306,811567,834081,837413]},{"obj":726945,"freq":228,"times":[728829,729593,763808,763844,804281,805521,807679,809305,810443,815138,819636,821958]},{"obj":726947,"freq":228,"times":[729595,764137,2245329,2301230,2302429,2306335,2310742,2314952,2317772,2319961,2322045,2328144]},{"obj":726927,"freq":226,"times":[728064,729575,761535,761556,766519,803761,804289,808906,812775,884998,891096,977055]},{"obj":16442,"freq":210,"times":[726824,727717,729472,761300,761303,766509,808070,816242,864589,867220,873518,877778]},{"obj":726931,"freq":210,"times":[728068,728842,729579,761539,761560,766523,803535,806722,809281,813967,818585,842195]},{"obj":726930,"freq":201,"times":[728067,729578,761538,761559,766522,955612,986655,990144,991582,996459,999627,999930]},{"obj":726955,"freq":182,"times":[728834,729603,764230,821959,821961,825499,837414,842198,859189,862064,864592,870016]},{"obj":726940,"freq":160,"times":[728354,729588,763771,763797,804280,805499,806730,809303,810439,815130,819628,821956]},{"obj":726932,"freq":158,"times":[728069,728843,729580,761540,761561,766524,804267,842196,844149,846164,848784,851676]},{"obj":726769,"freq":154,"times":[727173,728838,729417,766493,804285,804287,808068,809308,811569,816120,981872,986656]},{"obj":726933,"freq":142,"times":[728070,728844,729581,761541,761562,766525,813875,813971,819627,821955,825496,855263]},{"obj":16445,"freq":138,"times":[726950,728833,729598,764162,802998,802999,804284,808067,809307,811568,831586,877781]},{"obj":726941,"freq":136,"times":[728355,729589,763772,763798,810440,815028,815131,819635,821948,821957,824344,825497]},{"obj":726944,"freq":132,"times":[728828,729592,763807,763843,1003273,1186086,1188754,1197363,1202568,1205831,1210420,1813569]},{"obj":726943,"freq":108,"times":[728357,729591,763800,805502,1811184,1813568,1814465,2243821,2244837,2245325,2248186,2250334]},{"obj":726935,"freq":102,"times":[728073,728846,729108,729583,761652,761659,766527,802911,804272,805496,806729,1003126]},{"obj":726866,"freq":94,"times":[727720,729514,761442,761446,766511,811572,816243,834085,888208,1003835,1053351,1211532]},{"obj":726934,"freq":91,"times":[728071,728845,729582,761542,761563,766526,766665,809296,1002469,1004063,1210295,1813486]},{"obj":726614,"freq":87,"times":[729262,761657,857697,859192,859194,862065,870017,914818,919378,932718,936110,939908]},{"obj":726607,"freq":86,"times":[729254,761648,851709,902046,907121,907122,910672,914805,921929,925876,945887,948958]},{"obj":726911,"freq":85,"times":[727731,729559,761483,761484,766516,808073,811575,1003849,1211544,1812566,1825670,2242753]},{"obj":726942,"freq":84,"times":[728356,729590,763773,763799,1003171,1210406,1813567,2243820,2245324,2250333,2255757,2275419]},{"obj":726720,"freq":80,"times":[729368,864593,864594,867227,1101516,1105862,1122589,1126864,1871881,2036613,2038803,2049608]},{"obj":727256,"freq":75,"times":[728949,765979,765993,847283,908514,981560,1023700,1091538,1165604,1210542,1273296,1346259]},{"obj":723576,"freq":74,"times":[728734,765414,765426,840776,900342,972820,1016426,1082258,1157523,1210298,1264577,1337886]},{"obj":723872,"freq":74,"times":[728735,765415,765427,840777,900343,972821,1016427,1082259,1157524,1210299,1264578,1337887]},{"obj":723897,"freq":74,"times":[728736,765416,765428,840778,900344,972941,1016428,1082260,1157525,1210300,1264579,1337888]},{"obj":723909,"freq":74,"times":[728737,765417,765429,840838,900435,972942,1016429,1082760,1157526,1210301,1264988,1337889]},{"obj":723927,"freq":74,"times":[728738,765418,765430,840839,900436,972943,1016458,1082761,1157527,1210302,1264989,1337890]},{"obj":723928,"freq":74,"times":[728739,765431,765444,840840,900437,973211,1016480,1082762,1157528,1210303,1264990,1337892]},{"obj":724112,"freq":74,"times":[728740,765432,765445,840841,900453,973212,1016515,1082763,1157529,1210304,1264991,1338209]},{"obj":724116,"freq":74,"times":[728741,765433,765446,841286,900454,973213,1016516,1082764,1157784,1210305,1264992,1338210]},{"obj":724117,"freq":74,"times":[728742,765434,765447,841287,900455,973398,1016634,1082765,1157785,1210306,1264993,1338211]},{"obj":724118,"freq":74,"times":[728743,765435,765448,841288,900456,973399,1016635,1082884,1157786,1210307,1264994,1338212]},{"obj":724342,"freq":74,"times":[728744,765436,765449,841289,900468,973400,1016636,1082885,1157787,1210308,1265120,1338343]},{"obj":724347,"freq":74,"times":[728745,765437,765450,841290,900469,973401,1016637,1082886,1157788,1210309,1265121,1338344]},{"obj":724348,"freq":74,"times":[728746,765451,765465,841291,900681,973511,1016638,1082887,1157789,1210310,1265122,1338345]},{"obj":724371,"freq":74,"times":[728747,765452,765466,841292,900682,973512,1016639,1082979,1157790,1210311,1265123,1338346]},{"obj":724383,"freq":74,"times":[728748,765453,765467,841478,900683,973513,1016640,1082980,1157915,1210312,1265124,1338425]},{"obj":724384,"freq":74,"times":[728749,765454,765468,841479,900684,973514,1016641,1082981,1157916,1210313,1265125,1338426]},{"obj":724385,"freq":74,"times":[728750,765455,765469,841480,900685,973572,1016699,1082982,1157917,1210314,1265126,1338427]},{"obj":724659,"freq":74,"times":[728751,765456,765470,841481,900686,973573,1016700,1083049,1157918,1210315,1265127,1338428]},{"obj":724661,"freq":74,"times":[728752,765457,765471,841482,900807,973574,1016701,1083050,1157919,1210316,1265128,1338429]},{"obj":724663,"freq":74,"times":[728753,765472,765486,841483,900808,973577,1017000,1083051,1157920,1210317,1265452,1338467]}]};

const L=55, R=20, T=10, B=30;
const OBJ_MAX  = 4500000;
const AVG_MISS = DATA.windowed.reduce((a,w)=>a+w.missRatio,0)/DATA.windowed.length;
const MISS_MIN = Math.floor(Math.min(...DATA.windowed.map(w=>w.missRatio))*20)/20;

function inRange(s,e){ const a=s*DATA.totalTime,b=e*DATA.totalTime; return DATA.windowed.filter(w=>w.endT>a&&w.startT<b); }
function zoomPts(s,e){ const a=s*DATA.totalTime,b=e*DATA.totalTime; return DATA.trace.filter(p=>p.x>=a&&p.x<=b); }

/* ── dual-handle drag factory (works for both horizontal and vertical) ── */
function makeDrag({ trackRef, vertical, onMove }) {
  return (handle) => (ev) => {
    ev.preventDefault();
    const move = (mv) => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const client = mv.touches ? (vertical ? mv.touches[0].clientY : mv.touches[0].clientX)
                                : (vertical ? mv.clientY : mv.clientX);
      const size   = vertical ? rect.height : rect.width;
      const offset = vertical ? rect.top    : rect.left;
      let frac = Math.min(1, Math.max(0, (client - offset) / size));
      if (vertical) frac = 1 - frac; // invert: top = 1, bottom = 0
      onMove(handle, frac);
    };
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup",   up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend",  up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend",  up);
  };
}

export default function CacheDashboard() {
  const [tab,      setTab]      = useState("overview");
  const [tRange,   setTRange]   = useState([0, 0.35]);   // [0,1] fracs of totalTime
  const [yRange,   setYRange]   = useState([0, OBJ_MAX]); // object ID range
  const [selected, setSelected] = useState(null);
  const [chartPx,  setChartPx]  = useState(600);          // chart div pixel width

  const [ts, te] = tRange;
  const winData  = useMemo(()=>inRange(ts,te),[ts,te]);
  const zoomData = useMemo(()=>zoomPts(ts,te),[ts,te]);

  /* measure card for red band */
  const cardRef  = useRef(null);  // outer card (for tab remount detection)
  const chartRef = useRef(null); // inner chart div (for band measurement)
  useEffect(()=>{
    if(!chartRef.current) return;
    const read = ()=>setChartPx(chartRef.current.getBoundingClientRect().width);
    read();
    const obs = new ResizeObserver(read);
    obs.observe(chartRef.current);
    return ()=>obs.disconnect();
  },[tab]);

  /* horizontal time slider */
  const tTrackRef = useRef(null);
  const dragT = makeDrag({
    trackRef: tTrackRef,
    vertical: false,
    onMove: (h, f) => setTRange(([a,b])=>
      h==="lo" ? [Math.min(f, b-0.02), b]
               : [a, Math.max(f, a+0.02)]
    )
  });

  /* vertical Y slider */
  const yTrackRef = useRef(null);
  const YTRACK_H = 174; // chart height minus top/bottom margins minus label space
  const dragY = makeDrag({
    trackRef: yTrackRef,
    vertical: true,
    onMove: (h, f) => {
      const val = Math.round(f * OBJ_MAX / 50000) * 50000;
      setYRange(([lo,hi])=>
        h==="hi" ? [lo, Math.max(val, lo+100000)]
                 : [Math.min(val, hi-100000), hi]
      );
    }
  });

  /* per-object timeline */
  const timeline = useMemo(()=>{
    if(!selected) return [];
    const o = DATA.perObject.find(x=>x.obj===selected);
    if(!o) return [];
    const N=40, bins=Array(N).fill(0);
    o.times.forEach(t=>{ bins[Math.min(N-1,Math.floor(t/DATA.totalTime*N))]++; });
    return bins.map((c,i)=>({t:((i/N)*DATA.totalTime/1e6).toFixed(2),count:c}));
  },[selected]);

  const fmtT   = v=>(v/1e6).toFixed(2)+"M";
  const fmtObj = v=>v>=1e6?(v/1e6).toFixed(2)+"M":(v/1000).toFixed(0)+"k";
  const fmtK   = v=>v>=1000?(v/1000).toFixed(0)+"k":String(v);

  /* red band pixel positions */
  const plotW = Math.max(0, chartPx - L - R);
  const bandL = L + ts * plotW;

  /* Y bar fill & handle positions (fraction of YTRACK_H from top) */
  const yHiPct  = (1 - yRange[1]/OBJ_MAX)*100;
  const yLoPct  = (1 - yRange[0]/OBJ_MAX)*100;

  const card = {background:"#fff",border:"1.5px solid #c8d6e5",borderRadius:6,padding:"12px 14px"};
  const lbl  = {margin:"0 0 6px",fontSize:12,fontWeight:600,letterSpacing:0.3};
  const ax   = {tick:{fontSize:9},tickLine:false,axisLine:{stroke:"#e2e8f0"}};

  /* key trick: changing this forces recharts to fully remount the Y axis with new domain */
  const yKey = yRange[0]+"-"+yRange[1];

  return (
    <div style={{fontFamily:"'IBM Plex Mono',monospace",background:"#f0f4f8",minHeight:"100vh",padding:16,color:"#1a2332"}}>

      {/* header */}
      <div style={{...card,display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
        <div>
          <h2 style={{margin:0,fontSize:15,fontWeight:700}}>Cache Behavior Analysis Dashboard</h2>
          <p style={{margin:"3px 0 0",fontSize:10,color:"#888"}}>
            {(DATA.totalAccesses/1e6).toFixed(2)}M accesses · {(DATA.totalObjects/1e6).toFixed(2)}M unique objects · LRU cache: {DATA.cacheSize.toLocaleString()} slots
          </p>
        </div>
        <div style={{display:"flex",gap:8}}>
          {[["overview","Overview"],["perObject","Per-Object View"]].map(([v,l])=>(
            <button key={v} onClick={()=>setTab(v)} style={{
              padding:"5px 14px",fontSize:11,fontFamily:"inherit",fontWeight:600,
              borderRadius:4,cursor:"pointer",border:"1.5px solid",
              borderColor:tab===v?"#2979ff":"#c8d6e5",
              background:tab===v?"#2979ff":"#fff",
              color:tab===v?"#fff":"#555",
            }}>{l}</button>
          ))}
        </div>
      </div>

      {tab==="overview" && (<>

        {/* ── full trace + Y bar ── */}
        <div ref={cardRef} style={{...card, position:"relative", paddingRight:52}}>
          <p style={lbl}>Full Request Trace
            <span style={{fontWeight:400,color:"#999",fontSize:10}}> — drag bar on right to zoom Object ID axis</span>
          </p>

          {/* chart — full width of card minus right padding for Y bar */}
          <div ref={chartRef} style={{position:"relative", height:240}}>
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart key={"trace-"+yKey} margin={{top:T,right:R,bottom:B,left:L}}>
                <CartesianGrid strokeDasharray="2 4" stroke="#e8edf2"/>
                <XAxis dataKey="x" type="number" domain={[0,DATA.totalTime]}
                  padding={{ left: 6, right: 6 }}
                  tickFormatter={fmtT} {...ax}
                  label={{value:"Virtual Time",position:"insideBottom",offset:-12,fontSize:10,fill:"#888"}}/>
                <YAxis dataKey="y" type="number"
                  domain={[yRange[0], yRange[1]]}
                  allowDataOverflow={true}
                  padding={{ top: 6, bottom: 6 }}
                  tickFormatter={fmtObj} {...ax}
                  label={{value:"Object ID",angle:-90,position:"insideLeft",offset:18,fontSize:10,fill:"#888"}}/>
                <Tooltip formatter={(v,n)=>[v.toLocaleString(),n==="y"?"Object ID":"Time"]} labelFormatter={()=>""}/>
                <Scatter data={DATA.trace} fill="#3b82f6" opacity={0.5} r={1.5}/>
              </ScatterChart>
            </ResponsiveContainer>

            {/* red selection band */}
            {chartPx>0 && (
              <div style={{
                position:"absolute", top:T, bottom:B,
                left:bandL,
                width:Math.max(2, plotW*(te-ts)),
                background:"rgba(239,68,68,0.06)",
                border:"1.5px solid #ef4444",
                pointerEvents:"none", borderRadius:2,
              }}>
                <span style={{
                  position:"absolute", top:-16, left:"50%", transform:"translateX(-50%)",
                  fontSize:9, color:"#ef4444", fontWeight:700, whiteSpace:"nowrap",
                  background:"rgba(255,255,255,0.92)", padding:"0 4px", borderRadius:2,
                }}>Selected Window</span>
              </div>
            )}
          </div>

          {/* ── Y zoom bar — absolutely positioned on right edge ── */}
          <div style={{
            position:"absolute",
            right:14, top:"50%", transform:"translateY(-50%)",
            display:"flex", flexDirection:"column", alignItems:"center",
            width:28, height:240, paddingTop:T, paddingBottom:B,
            userSelect:"none",
          }}>
            <span style={{fontSize:8,color:"#3b82f6",fontWeight:700,marginBottom:3,whiteSpace:"nowrap"}}>
              {fmtObj(yRange[1])}
            </span>
            <div ref={yTrackRef} style={{
              flex:1, width:8, borderRadius:4,
              background:"#e2e8f0", position:"relative", cursor:"ns-resize",
            }}>
              <div style={{
                position:"absolute", left:0, right:0, borderRadius:4, background:"#3b82f6",
                top:yHiPct+"%", bottom:(100-yLoPct)+"%",
              }}/>
              <div onMouseDown={dragY("hi")} onTouchStart={dragY("hi")} style={{
                position:"absolute", left:"50%", top:yHiPct+"%",
                transform:"translate(-50%,-50%)",
                width:16, height:16, borderRadius:"50%",
                background:"#fff", border:"2.5px solid #3b82f6",
                boxShadow:"0 1px 5px rgba(59,130,246,0.45)",
                cursor:"ns-resize", zIndex:4,
              }}/>
              <div onMouseDown={dragY("lo")} onTouchStart={dragY("lo")} style={{
                position:"absolute", left:"50%", top:yLoPct+"%",
                transform:"translate(-50%,-50%)",
                width:16, height:16, borderRadius:"50%",
                background:"#fff", border:"2.5px solid #3b82f6",
                boxShadow:"0 1px 5px rgba(59,130,246,0.45)",
                cursor:"ns-resize", zIndex:4,
              }}/>
            </div>
            <span style={{fontSize:8,color:"#3b82f6",fontWeight:700,marginTop:3,whiteSpace:"nowrap"}}>
              {fmtObj(yRange[0])}
            </span>
          </div>
        </div>

        {/* ── horizontal time slider ── */}
        <div style={{...card,marginTop:12}}>
          <p style={lbl}>Selected Time Window</p>
          <div style={{paddingLeft:L,paddingRight:R,paddingTop:4}}>
            <div ref={tTrackRef} style={{
              position:"relative",height:4,borderRadius:2,
              background:"#dde3ea",margin:"16px 0 10px",
            }}>
              <div style={{
                position:"absolute",top:0,bottom:0,borderRadius:2,
                left:(ts*100)+"%",width:((te-ts)*100)+"%",background:"#3b82f6",
              }}/>
              {[["lo",ts],["hi",te]].map(([h,f])=>(
                <div key={h} onMouseDown={dragT(h)} onTouchStart={dragT(h)} style={{
                  position:"absolute",top:"50%",left:(f*100)+"%",
                  transform:"translate(-50%,-50%)",
                  width:14,height:14,borderRadius:"50%",
                  background:"#fff",border:"2px solid #3b82f6",
                  boxShadow:"0 1px 4px rgba(59,130,246,0.4)",
                  cursor:"grab",zIndex:3,userSelect:"none",
                }}/>
              ))}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:10,color:"#888"}}>
              <span>{fmtT(ts*DATA.totalTime)}</span>
              <span>{fmtT(te*DATA.totalTime)}</span>
            </div>
          </div>
        </div>

        {/* ── 3 detail charts ── */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12}}>

          {/* miss ratio — tall left */}
          <div style={{...card,gridRow:"span 2"}}>
            <p style={lbl}>Miss Ratio Over Time</p>
            <p style={{fontSize:10,color:"#888",margin:"0 0 8px"}}>Misses ÷ requests · Y zoomed to actual range</p>
            <ResponsiveContainer width="100%" height={278}>
              <LineChart data={DATA.windowed} margin={{top:5,right:12,bottom:35,left:48}}>
                <CartesianGrid strokeDasharray="2 4" stroke="#e8edf2"/>
                <XAxis dataKey="t" type="number"
                  tickFormatter={v=>v.toFixed(1)+"M"} {...ax}
                  label={{value:"Virtual Time (M)",position:"insideBottom",offset:-16,fontSize:9,fill:"#888"}}/>
                <YAxis domain={[MISS_MIN-0.02, 1.0]}
                  tickFormatter={v=>(v*100).toFixed(0)+"%"} {...ax}
                  label={{value:"Miss Ratio",angle:-90,position:"insideLeft",offset:14,fontSize:10,fill:"#888"}}/>
                <Tooltip formatter={v=>[(v*100).toFixed(2)+"%","Miss Ratio"]} labelFormatter={v=>"t="+Number(v).toFixed(2)+"M"}/>
                <ReferenceLine y={AVG_MISS} stroke="#94a3b8" strokeDasharray="4 3"
                  label={{value:"avg",position:"right",fontSize:8,fill:"#94a3b8"}}/>
                <Line type="monotone" dataKey="missRatio" stroke="#2563eb" dot={false} strokeWidth={1.5}/>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* hits */}
          <div style={card}>
            <p style={lbl}>Cache Hits Per Window</p>
            <p style={{fontSize:10,color:"#888",margin:"0 0 4px"}}>Absolute hit count — shows when cache is most effective</p>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={winData} margin={{top:4,right:10,bottom:22,left:48}}>
                <CartesianGrid strokeDasharray="2 4" stroke="#e8edf2"/>
                <XAxis dataKey="t" type="number"
                  tickFormatter={v=>v.toFixed(1)+"M"} {...ax}
                  label={{value:"Virtual Time (M)",position:"insideBottom",offset:-8,fontSize:9,fill:"#888"}}/>
                <YAxis tickFormatter={fmtK} {...ax}
                  label={{value:"Hits",angle:-90,position:"insideLeft",offset:14,fontSize:9,fill:"#888"}}/>
                <Tooltip formatter={v=>[v.toLocaleString(),"Cache Hits"]} labelFormatter={v=>"t="+Number(v).toFixed(2)+"M"}/>
                <Bar dataKey="hits" fill="#10b981" radius={[2,2,0,0]}/>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* zoomed trace */}
          <div style={card}>
            <p style={lbl}>Zoomed Request View</p>
            <p style={{fontSize:10,color:"#888",margin:"0 0 4px"}}>Selected window · same Y zoom applied</p>
            <ResponsiveContainer width="100%" height={120}>
              <ScatterChart key={"zoom-"+yKey} margin={{top:4,right:10,bottom:22,left:48}}>
                <CartesianGrid strokeDasharray="2 4" stroke="#e8edf2"/>
                <XAxis dataKey="x" type="number" tickFormatter={fmtT} {...ax}
                  label={{value:"Virtual Time",position:"insideBottom",offset:-8,fontSize:9,fill:"#888"}}/>
                <YAxis dataKey="y" type="number"
                  domain={[yRange[0],yRange[1]]}
                  allowDataOverflow={true}
                  tickFormatter={fmtObj} {...ax}
                  label={{value:"Object ID",angle:-90,position:"insideLeft",offset:14,fontSize:9,fill:"#888"}}/>
                <Tooltip formatter={(v,n)=>[v.toLocaleString(),n==="y"?"Object ID":"Time"]} labelFormatter={()=>""}/>
                <Scatter data={zoomData} fill="#3b82f6" opacity={0.55} r={1.5}/>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{textAlign:"center",marginTop:10,fontSize:10,color:"#aaa"}}>
          {DATA.totalAccesses.toLocaleString()} total accesses · {DATA.totalObjects.toLocaleString()} unique objects · cache: {DATA.cacheSize.toLocaleString()} slots
        </div>
      </>)}

      {/* ══ PER-OBJECT ══ */}
      {tab==="perObject" && (
        <div style={{display:"grid",gridTemplateColumns:"240px 1fr",gap:12,alignItems:"start"}}>
          <div style={card}>
            <p style={lbl}>Top 50 Hottest Objects</p>
            <p style={{fontSize:10,color:"#888",margin:"0 0 8px"}}>Ranked by total accesses. Click to inspect.</p>
            <div style={{maxHeight:560,overflowY:"auto"}}>
              {DATA.perObject.map((o,i)=>(
                <div key={o.obj} onClick={()=>setSelected(o.obj===selected?null:o.obj)} style={{
                  display:"flex",justifyContent:"space-between",alignItems:"center",
                  padding:"4px 8px",marginBottom:2,borderRadius:4,cursor:"pointer",
                  background:selected===o.obj?"#eff6ff":"#f7f9fb",
                  border:"1.5px solid "+(selected===o.obj?"#3b82f6":"#e0e7ef"),
                  fontSize:11,
                }}>
                  <span style={{color:"#94a3b8",minWidth:22,fontSize:10}}>#{i+1}</span>
                  <span style={{flex:1}}>Obj <b>{o.obj}</b></span>
                  <span style={{color:"#2563eb",fontWeight:700}}>{o.freq}×</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {selected ? (<>
              <div style={card}>
                <p style={lbl}>Object {selected} — Access Timeline</p>
                <p style={{fontSize:10,color:"#888",margin:"0 0 8px"}}>
                  {DATA.perObject.find(o=>o.obj===selected)?.freq} accesses · binned across full trace
                </p>
                <ResponsiveContainer width="100%" height={170}>
                  <BarChart data={timeline} margin={{top:5,right:10,bottom:28,left:45}}>
                    <CartesianGrid strokeDasharray="2 4" stroke="#e8edf2"/>
                    <XAxis dataKey="t" tick={{fontSize:9}} tickLine={false}
                      label={{value:"Virtual Time (M)",position:"insideBottom",offset:-12,fontSize:9,fill:"#888"}}/>
                    <YAxis tick={{fontSize:9}} tickLine={false}
                      label={{value:"Accesses",angle:-90,position:"insideLeft",offset:12,fontSize:9,fill:"#888"}}/>
                    <Tooltip formatter={v=>[v,"Accesses"]}/>
                    <Bar dataKey="count" fill="#3b82f6" radius={[2,2,0,0]}/>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={card}>
                <p style={lbl}>Virtual Access Timestamps — Object {selected}</p>
                <p style={{fontSize:10,color:"#888",margin:"0 0 8px"}}>First 12 access timestamps</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {DATA.perObject.find(o=>o.obj===selected)?.times.map((t,i)=>(
                    <div key={i} style={{background:"#eff6ff",border:"1px solid #bfdbfe",color:"#1d4ed8",
                      borderRadius:4,padding:"4px 10px",fontSize:11,fontFamily:"monospace"}}>
                      <div style={{fontSize:9,color:"#94a3b8",marginBottom:1}}>t{i+1}</div>
                      {t.toLocaleString()}
                    </div>
                  ))}
                </div>
              </div>
            </>) : (
              <div style={{...card,display:"flex",alignItems:"center",justifyContent:"center",
                height:180,color:"#aaa",fontSize:12,flexDirection:"column",gap:8}}>
                <span style={{fontSize:24}}>←</span>
                <span>Select an object from the list to inspect it</span>
              </div>
            )}
            <div style={card}>
              <p style={lbl}>Top 5 Hottest Objects — Summary</p>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                <thead>
                  <tr style={{background:"#f8fafc"}}>
                    {["Rank","Object ID","Total Accesses","First Access","Last Access"].map(h=>(
                      <th key={h} style={{padding:"7px 10px",textAlign:"left",fontWeight:700,
                        borderBottom:"2px solid #e2e8f0",color:"#64748b",fontSize:10}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DATA.perObject.slice(0,5).map((o,i)=>(
                    <tr key={o.obj} onClick={()=>setSelected(o.obj)}
                      style={{cursor:"pointer",background:selected===o.obj?"#eff6ff":i%2?"#f8fafc":"#fff"}}>
                      <td style={{padding:"6px 10px",color:"#94a3b8"}}>#{i+1}</td>
                      <td style={{padding:"6px 10px",fontWeight:600}}>{o.obj}</td>
                      <td style={{padding:"6px 10px",color:"#2563eb",fontWeight:700}}>{o.freq}</td>
                      <td style={{padding:"6px 10px",color:"#64748b",fontSize:10}}>{o.times[0]?.toLocaleString()}</td>
                      <td style={{padding:"6px 10px",color:"#64748b",fontSize:10}}>{o.times[o.times.length-1]?.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}