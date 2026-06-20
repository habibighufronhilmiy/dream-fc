const TEAMS_DATA = {
        eropa: {
          klub: {
            "Real Madrid 2017": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'rm1',name:'Keylor Navas',position:'GK',rating:86},{id:'rm2',name:'Dani Carvajal',position:'DF',rating:85},{id:'rm3',name:'Sergio Ramos',position:'DF',rating:91},{id:'rm4',name:'RaphaÃ«l Varane',position:'DF',rating:87},{id:'rm5',name:'Marcelo',position:'DF',rating:87},{id:'rm6',name:'Casemiro',position:'MD',rating:88},{id:'rm7',name:'Luka ModriÄ‡',position:'MD',rating:92},{id:'rm8',name:'Toni Kroos',position:'MD',rating:91},{id:'rm9',name:'Karim Benzema',position:'FW',rating:89},{id:'rm10',name:'Cristiano Ronaldo',position:'FW',rating:97},{id:'rm11',name:'Gareth Bale',position:'FW',rating:88}
            ]},
            "Real Madrid 1958": {era:"Klasik (1945-1970)",league:"La Liga",players:[
              {id:'rm58_1',name:'Juan Alonso',position:'GK',rating:82},{id:'rm58_2',name:'Marquitos',position:'DF',rating:81},{id:'rm58_3',name:'JosÃ© SantamarÃ­a',position:'DF',rating:86},{id:'rm58_4',name:'Rafael Lesmes',position:'DF',rating:80},{id:'rm58_5',name:'JosÃ© ZÃ¡rraga',position:'DF',rating:83},{id:'rm58_6',name:'Raymond Kopa',position:'MD',rating:89},{id:'rm58_7',name:'JosÃ© MarÃ­a ZÃ¡rraga',position:'MD',rating:83},{id:'rm58_8',name:'HÃ©ctor Rial',position:'MD',rating:85},{id:'rm58_9',name:'Francisco Gento',position:'FW',rating:90},{id:'rm58_10',name:'Alfredo Di StÃ©fano',position:'FW',rating:96},{id:'rm58_11',name:'Ferenc PuskÃ¡s',position:'FW',rating:95}
            ]},
            "Barcelona 2009": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'bar1',name:'VÃ­ctor ValdÃ©s',position:'GK',rating:85},{id:'bar2',name:'Dani Alves',position:'DF',rating:88},{id:'bar3',name:'Gerard PiquÃ©',position:'DF',rating:87},{id:'bar4',name:'Carles Puyol',position:'DF',rating:90},{id:'bar5',name:'Ã‰ric Abidal',position:'DF',rating:83},{id:'bar6',name:'Sergio Busquets',position:'MD',rating:87},{id:'bar7',name:'Xavi HernÃ¡ndez',position:'MD',rating:93},{id:'bar8',name:'AndrÃ©s Iniesta',position:'MD',rating:92},{id:'bar9',name:'Lionel Messi',position:'FW',rating:97},{id:'bar10',name:'Thierry Henry',position:'FW',rating:90},{id:'bar11',name:'Samuel Eto\'o',position:'FW',rating:91}
            ]},
            "Barcelona 2015": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'br15_1',name:'Marc-AndrÃ© ter Stegen',position:'GK',rating:86},{id:'br15_2',name:'Dani Alves',position:'DF',rating:87},{id:'br15_3',name:'Gerard PiquÃ©',position:'DF',rating:88},{id:'br15_4',name:'Javier Mascherano',position:'DF',rating:86},{id:'br15_5',name:'Jordi Alba',position:'DF',rating:87},{id:'br15_6',name:'Sergio Busquets',position:'MD',rating:89},{id:'br15_7',name:'AndrÃ©s Iniesta',position:'MD',rating:91},{id:'br15_8',name:'Ivan RakitiÄ‡',position:'MD',rating:87},{id:'br15_9',name:'Lionel Messi',position:'FW',rating:98},{id:'br15_10',name:'Luis SuÃ¡rez',position:'FW',rating:94},{id:'br15_11',name:'Neymar Jr',position:'FW',rating:93}
            ]},
            "AtlÃ©tico Madrid 2014": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'atm1',name:'Thibaut Courtois',position:'GK',rating:89},{id:'atm2',name:'Juanfran',position:'DF',rating:84},{id:'atm3',name:'Diego GodÃ­n',position:'DF',rating:90},{id:'atm4',name:'JoÃ£o Miranda',position:'DF',rating:86},{id:'atm5',name:'Filipe LuÃ­s',position:'DF',rating:86},{id:'atm6',name:'Gabi',position:'MD',rating:85},{id:'atm7',name:'Tiago',position:'MD',rating:83},{id:'atm8',name:'Koke',position:'MD',rating:85},{id:'atm9',name:'Arda Turan',position:'FW',rating:84},{id:'atm10',name:'Diego Costa',position:'FW',rating:88},{id:'atm11',name:'David Villa',position:'FW',rating:87}
            ]},
            "Manchester United 1999": {era:"Retro (1970-1990)",league:"Premier League",players:[
              {id:'mu1',name:'Peter Schmeichel',position:'GK',rating:93},{id:'mu2',name:'Gary Neville',position:'DF',rating:84},{id:'mu3',name:'Ronny Johnsen',position:'DF',rating:84},{id:'mu4',name:'Jaap Stam',position:'DF',rating:91},{id:'mu5',name:'Denis Irwin',position:'DF',rating:85},{id:'mu6',name:'David Beckham',position:'MD',rating:91},{id:'mu7',name:'Roy Keane',position:'MD',rating:90},{id:'mu8',name:'Paul Scholes',position:'MD',rating:92},{id:'mu9',name:'Ryan Giggs',position:'MD',rating:90},{id:'mu10',name:'Andy Cole',position:'FW',rating:86},{id:'mu11',name:'Dwight Yorke',position:'FW',rating:87}
            ]},
            "Manchester United 2008": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'mu8_1',name:'Edwin van der Sar',position:'GK',rating:89},{id:'mu8_2',name:'Wes Brown',position:'DF',rating:82},{id:'mu8_3',name:'Rio Ferdinand',position:'DF',rating:90},{id:'mu8_4',name:'Nemanja VidiÄ‡',position:'DF',rating:91},{id:'mu8_5',name:'Patrice Evra',position:'DF',rating:87},{id:'mu8_6',name:'Cristiano Ronaldo',position:'MD',rating:96},{id:'mu8_7',name:'Michael Carrick',position:'MD',rating:86},{id:'mu8_8',name:'Paul Scholes',position:'MD',rating:90},{id:'mu8_9',name:'Wayne Rooney',position:'FW',rating:91},{id:'mu8_10',name:'Carlos TÃ©vez',position:'FW',rating:87},{id:'mu8_11',name:'Dimitar Berbatov',position:'FW',rating:85}
            ]},
            "Liverpool 2019": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'liv1',name:'Alisson Becker',position:'GK',rating:91},{id:'liv2',name:'Trent Alexander-Arnold',position:'DF',rating:88},{id:'liv3',name:'JoÃ«l Matip',position:'DF',rating:85},{id:'liv4',name:'Virgil van Dijk',position:'DF',rating:92},{id:'liv5',name:'Andrew Robertson',position:'DF',rating:88},{id:'liv6',name:'Jordan Henderson',position:'MD',rating:86},{id:'liv7',name:'Fabinho',position:'MD',rating:88},{id:'liv8',name:'Georginio Wijnaldum',position:'MD',rating:85},{id:'liv9',name:'Mohamed Salah',position:'FW',rating:92},{id:'liv10',name:'Sadio ManÃ©',position:'FW',rating:90},{id:'liv11',name:'Roberto Firmino',position:'FW',rating:88}
            ]},
            "Liverpool 2005": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'li5_1',name:'Jerzy Dudek',position:'GK',rating:83},{id:'li5_2',name:'Steve Finnan',position:'DF',rating:81},{id:'li5_3',name:'Jamie Carragher',position:'DF',rating:86},{id:'li5_4',name:'Sami HyypiÃ¤',position:'DF',rating:87},{id:'li5_5',name:'Djimi TraorÃ©',position:'DF',rating:78},{id:'li5_6',name:'Xabi Alonso',position:'MD',rating:88},{id:'li5_7',name:'Steven Gerrard',position:'MD',rating:93},{id:'li5_8',name:'Luis GarcÃ­a',position:'MD',rating:84},{id:'li5_9',name:'Harry Kewell',position:'FW',rating:83},{id:'li5_10',name:'Milan BaroÅ¡',position:'FW',rating:81},{id:'li5_11',name:'VladimÃ­r Å micer',position:'FW',rating:80}
            ]},
            "Arsenal 2004": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'ars1',name:'Jens Lehmann',position:'GK',rating:87},{id:'ars2',name:'Lauren',position:'DF',rating:83},{id:'ars3',name:'Sol Campbell',position:'DF',rating:89},{id:'ars4',name:'Kolo TourÃ©',position:'DF',rating:85},{id:'ars5',name:'Ashley Cole',position:'DF',rating:89},{id:'ars6',name:'Gilberto Silva',position:'MD',rating:86},{id:'ars7',name:'Patrick Vieira',position:'MD',rating:91},{id:'ars8',name:'Robert PirÃ¨s',position:'MD',rating:88},{id:'ars9',name:'Freddie Ljungberg',position:'FW',rating:85},{id:'ars10',name:'Dennis Bergkamp',position:'FW',rating:91},{id:'ars11',name:'Thierry Henry',position:'FW',rating:96}
            ]},
            "Chelsea 2005": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'che1',name:'Petr ÄŒech',position:'GK',rating:92},{id:'che2',name:'Paulo Ferreira',position:'DF',rating:83},{id:'che3',name:'John Terry',position:'DF',rating:91},{id:'che4',name:'Ricardo Carvalho',position:'DF',rating:88},{id:'che5',name:'William Gallas',position:'DF',rating:85},{id:'che6',name:'Claude MakÃ©lÃ©lÃ©',position:'MD',rating:88},{id:'che7',name:'Frank Lampard',position:'MD',rating:92},{id:'che8',name:'Arjen Robben',position:'MD',rating:88},{id:'che9',name:'Damien Duff',position:'FW',rating:84},{id:'che10',name:'Didier Drogba',position:'FW',rating:90},{id:'che11',name:'EiÃ°ur GuÃ°johnsen',position:'FW',rating:84}
            ]},
            "Chelsea 2012": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'ch2_1',name:'Petr ÄŒech',position:'GK',rating:90},{id:'ch2_2',name:'Branislav IvanoviÄ‡',position:'DF',rating:85},{id:'ch2_3',name:'John Terry',position:'DF',rating:88},{id:'ch2_4',name:'Gary Cahill',position:'DF',rating:84},{id:'ch2_5',name:'Ashley Cole',position:'DF',rating:87},{id:'ch2_6',name:'Juan Mata',position:'MD',rating:87},{id:'ch2_7',name:'Frank Lampard',position:'MD',rating:89},{id:'ch2_8',name:'Ramires',position:'MD',rating:84},{id:'ch2_9',name:'Fernando Torres',position:'FW',rating:85},{id:'ch2_10',name:'Didier Drogba',position:'FW',rating:88},{id:'ch2_11',name:'Salomon Kalou',position:'FW',rating:81}
            ]},
            "Manchester City 2023": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'mci1',name:'Ederson',position:'GK',rating:89},{id:'mci2',name:'Kyle Walker',position:'DF',rating:86},{id:'mci3',name:'RÃºben Dias',position:'DF',rating:90},{id:'mci4',name:'John Stones',position:'DF',rating:87},{id:'mci5',name:'Nathan AkÃ©',position:'DF',rating:84},{id:'mci6',name:'Rodri',position:'MD',rating:91},{id:'mci7',name:'Kevin De Bruyne',position:'MD',rating:94},{id:'mci8',name:'Bernardo Silva',position:'MD',rating:89},{id:'mci9',name:'Jack Grealish',position:'FW',rating:85},{id:'mci10',name:'Erling Haaland',position:'FW',rating:95},{id:'mci11',name:'Riyad Mahrez',position:'FW',rating:87}
            ]},
            "AC Milan 1989": {era:"Retro (1970-1990)",league:"Serie A",players:[
              {id:'ac1',name:'Giovanni Galli',position:'GK',rating:84},{id:'ac2',name:'Mauro Tassotti',position:'DF',rating:84},{id:'ac3',name:'Alessandro Costacurta',position:'DF',rating:86},{id:'ac4',name:'Franco Baresi',position:'DF',rating:94},{id:'ac5',name:'Paolo Maldini',position:'DF',rating:92},{id:'ac6',name:'Angelo Colombo',position:'MD',rating:82},{id:'ac7',name:'Carlo Ancelotti',position:'MD',rating:85},{id:'ac8',name:'Frank Rijkaard',position:'MD',rating:90},{id:'ac9',name:'Roberto Donadoni',position:'MD',rating:85},{id:'ac10',name:'Ruud Gullit',position:'FW',rating:91},{id:'ac11',name:'Marco van Basten',position:'FW',rating:95}
            ]},
            "AC Milan 2007": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'ac7_1',name:'Dida',position:'GK',rating:85},{id:'ac7_2',name:'Massimo Oddo',position:'DF',rating:81},{id:'ac7_3',name:'Alessandro Nesta',position:'DF',rating:90},{id:'ac7_4',name:'Paolo Maldini',position:'DF',rating:89},{id:'ac7_5',name:'Marek Jankulovski',position:'DF',rating:82},{id:'ac7_6',name:'Gennaro Gattuso',position:'MD',rating:86},{id:'ac7_7',name:'Andrea Pirlo',position:'MD',rating:91},{id:'ac7_8',name:'Clarence Seedorf',position:'MD',rating:88},{id:'ac7_9',name:'KakÃ¡',position:'FW',rating:94},{id:'ac7_10',name:'Filippo Inzaghi',position:'FW',rating:87},{id:'ac7_11',name:'Alberto Gilardino',position:'FW',rating:83}
            ]},
            "Inter Milan 2010": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'int1',name:'JÃºlio CÃ©sar',position:'GK',rating:88},{id:'int2',name:'Maicon',position:'DF',rating:87},{id:'int3',name:'LÃºcio',position:'DF',rating:87},{id:'int4',name:'Walter Samuel',position:'DF',rating:87},{id:'int5',name:'Javier Zanetti',position:'DF',rating:88},{id:'int6',name:'Esteban Cambiasso',position:'MD',rating:87},{id:'int7',name:'Wesley Sneijder',position:'MD',rating:90},{id:'int8',name:'Thiago Motta',position:'MD',rating:84},{id:'int9',name:'Diego Milito',position:'FW',rating:89},{id:'int10',name:'Samuel Eto\'o',position:'FW',rating:90},{id:'int11',name:'Goran Pandev',position:'FW',rating:82}
            ]},
            "Juventus 1996": {era:"Retro (1970-1990)",league:"Serie A",players:[
              {id:'juv1',name:'Angelo Peruzzi',position:'GK',rating:88},{id:'juv2',name:'Ciro Ferrara',position:'DF',rating:86},{id:'juv3',name:'Paolo Montero',position:'DF',rating:85},{id:'juv4',name:'Pietro Vierchowod',position:'DF',rating:85},{id:'juv5',name:'Gianluca Pessotto',position:'DF',rating:82},{id:'juv6',name:'Didier Deschamps',position:'MD',rating:87},{id:'juv7',name:'Paulo Sousa',position:'MD',rating:84},{id:'juv8',name:'Zinedine Zidane',position:'MD',rating:94},{id:'juv9',name:'Alessandro Del Piero',position:'FW',rating:92},{id:'juv10',name:'Gianluca Vialli',position:'FW',rating:87},{id:'juv11',name:'Alen BokÅ¡iÄ‡',position:'FW',rating:84}
            ]},
            "Napoli 1990": {era:"Retro (1970-1990)",league:"Serie A",players:[
              {id:'nap1',name:'Giovanni Galli',position:'GK',rating:83},{id:'nap2',name:'Ciro Ferrara',position:'DF',rating:84},{id:'nap3',name:'Giancarlo Corradini',position:'DF',rating:79},{id:'nap4',name:'Marco Baroni',position:'DF',rating:78},{id:'nap5',name:'Giovanni Francini',position:'DF',rating:78},{id:'nap6',name:'Alemao',position:'MD',rating:82},{id:'nap7',name:'Massimo Crippa',position:'MD',rating:80},{id:'nap8',name:'Luca Fusi',position:'MD',rating:80},{id:'nap9',name:'Diego Maradona',position:'FW',rating:98},{id:'nap10',name:'Careca',position:'FW',rating:87},{id:'nap11',name:'Andrea Carnevale',position:'FW',rating:82}
            ]},
            "Bayern Munich 2020": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'bay1',name:'Manuel Neuer',position:'GK',rating:92},{id:'bay2',name:'Joshua Kimmich',position:'DF',rating:89},{id:'bay3',name:'JÃ©rÃ´me Boateng',position:'DF',rating:86},{id:'bay4',name:'David Alaba',position:'DF',rating:87},{id:'bay5',name:'Alphonso Davies',position:'DF',rating:85},{id:'bay6',name:'Thiago AlcÃ¢ntara',position:'MD',rating:88},{id:'bay7',name:'Leon Goretzka',position:'MD',rating:86},{id:'bay8',name:'Thomas MÃ¼ller',position:'MD',rating:88},{id:'bay9',name:'Serge Gnabry',position:'FW',rating:85},{id:'bay10',name:'Robert Lewandowski',position:'FW',rating:94},{id:'bay11',name:'Kingsley Coman',position:'FW',rating:84}
            ]},
            "Bayern Munich 2013": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'by2_1',name:'Manuel Neuer',position:'GK',rating:91},{id:'by2_2',name:'Philipp Lahm',position:'DF',rating:93},{id:'by2_3',name:'JÃ©rÃ´me Boateng',position:'DF',rating:85},{id:'by2_4',name:'Dante',position:'DF',rating:84},{id:'by2_5',name:'David Alaba',position:'DF',rating:86},{id:'by2_6',name:'Javi MartÃ­nez',position:'MD',rating:86},{id:'by2_7',name:'Bastian Schweinsteiger',position:'MD',rating:89},{id:'by2_8',name:'Thomas MÃ¼ller',position:'MD',rating:87},{id:'by2_9',name:'Franck RibÃ©ry',position:'FW',rating:91},{id:'by2_10',name:'Mario MandÅ¾ukiÄ‡',position:'FW',rating:86},{id:'by2_11',name:'Arjen Robben',position:'FW',rating:90}
            ]},
            "Borussia Dortmund 1997": {era:"Retro (1970-1990)",league:"Bundesliga",players:[
              {id:'dor1',name:'Stefan Klos',position:'GK',rating:83},{id:'dor2',name:'Stefan Reuter',position:'DF',rating:84},{id:'dor3',name:'JÃ¼rgen Kohler',position:'DF',rating:87},{id:'dor4',name:'Matthias Sammer',position:'DF',rating:90},{id:'dor5',name:'Bodo Schmidt',position:'DF',rating:79},{id:'dor6',name:'Andreas MÃ¶ller',position:'MD',rating:87},{id:'dor7',name:'Paulo Sousa',position:'MD',rating:84},{id:'dor8',name:'Michael Zorc',position:'MD',rating:83},{id:'dor9',name:'StÃ©phane Chapuisat',position:'FW',rating:84},{id:'dor10',name:'Karl-Heinz Riedle',position:'FW',rating:86},{id:'dor11',name:'Lars Ricken',position:'FW',rating:82}
            ]},
            "Borussia Dortmund 2012": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'do2_1',name:'Roman Weidenfeller',position:'GK',rating:85},{id:'do2_2',name:'Åukasz Piszczek',position:'DF',rating:85},{id:'do2_3',name:'Neven SubotiÄ‡',position:'DF',rating:83},{id:'do2_4',name:'Mats Hummels',position:'DF',rating:88},{id:'do2_5',name:'Marcel Schmelzer',position:'DF',rating:82},{id:'do2_6',name:'Ä°lkay GÃ¼ndoÄŸan',position:'MD',rating:86},{id:'do2_7',name:'Sebastian Kehl',position:'MD',rating:84},{id:'do2_8',name:'Mario GÃ¶tze',position:'MD',rating:86},{id:'do2_9',name:'Kevin GroÃŸkreutz',position:'FW',rating:81},{id:'do2_10',name:'Robert Lewandowski',position:'FW',rating:90},{id:'do2_11',name:'Marco Reus',position:'FW',rating:88}
            ]},
            "Marseille 1993": {era:"Retro (1970-1990)",league:"Ligue 1",players:[
              {id:'mar1',name:'Fabien Barthez',position:'GK',rating:89},{id:'mar2',name:'Jocelyn Angloma',position:'DF',rating:84},{id:'mar3',name:'Basile Boli',position:'DF',rating:86},{id:'mar4',name:'Marcel Desailly',position:'DF',rating:88},{id:'mar5',name:'Ã‰ric Di Meco',position:'DF',rating:81},{id:'mar6',name:'Franck SauzÃ©e',position:'MD',rating:84},{id:'mar7',name:'Didier Deschamps',position:'MD',rating:86},{id:'mar8',name:'Abedi PelÃ©',position:'MD',rating:85},{id:'mar9',name:'Jean-Pierre Papin',position:'FW',rating:89},{id:'mar10',name:'Alen BokÅ¡iÄ‡',position:'FW',rating:85},{id:'mar11',name:'Rudi VÃ¶ller',position:'FW',rating:87}
            ]},
            "PSG 2020": {era:"Modern (2000-2026)",league:"Ligue 1",players:[
              {id:'psg1',name:'Keylor Navas',position:'GK',rating:87},{id:'psg2',name:'Thilo Kehrer',position:'DF',rating:80},{id:'psg3',name:'Marquinhos',position:'DF',rating:88},{id:'psg4',name:'Presnel Kimpembe',position:'DF',rating:85},{id:'psg5',name:'Juan Bernat',position:'DF',rating:82},{id:'psg6',name:'Marco Verratti',position:'MD',rating:89},{id:'psg7',name:'Leandro Paredes',position:'MD',rating:82},{id:'psg8',name:'Ãngel Di MarÃ­a',position:'MD',rating:88},{id:'psg9',name:'Kylian MbappÃ©',position:'FW',rating:94},{id:'psg10',name:'Neymar Jr',position:'FW',rating:93},{id:'psg11',name:'Mauro Icardi',position:'FW',rating:85}
            ]},
            "Ajax 1995": {era:"Retro (1970-1990)",league:"Eredivisie",players:[
              {id:'aja1',name:'Edwin van der Sar',position:'GK',rating:88},{id:'aja2',name:'Michael Reiziger',position:'DF',rating:83},{id:'aja3',name:'Danny Blind',position:'DF',rating:85},{id:'aja4',name:'Frank de Boer',position:'DF',rating:87},{id:'aja5',name:'Winston Bogarde',position:'DF',rating:80},{id:'aja6',name:'Clarence Seedorf',position:'MD',rating:85},{id:'aja7',name:'Edgar Davids',position:'MD',rating:88},{id:'aja8',name:'Jari Litmanen',position:'MD',rating:89},{id:'aja9',name:'Finidi George',position:'FW',rating:84},{id:'aja10',name:'Patrick Kluivert',position:'FW',rating:87},{id:'aja11',name:'Marc Overmars',position:'FW',rating:87}
            ]},
            "PSV 1988": {era:"Retro (1970-1990)",league:"Eredivisie",players:[
              {id:'psv1',name:'Hans van Breukelen',position:'GK',rating:86},{id:'psv2',name:'Eric Gerets',position:'DF',rating:84},{id:'psv3',name:'Ivan Nielsen',position:'DF',rating:81},{id:'psv4',name:'Jan Heintze',position:'DF',rating:82},{id:'psv5',name:'Berry van Aerle',position:'DF',rating:82},{id:'psv6',name:'Gerald Vanenburg',position:'MD',rating:85},{id:'psv7',name:'SÃ¸ren Lerby',position:'MD',rating:84},{id:'psv8',name:'Edward Linskens',position:'MD',rating:80},{id:'psv9',name:'Ruud Gullit',position:'FW',rating:90},{id:'psv10',name:'Wim Kieft',position:'FW',rating:83},{id:'psv11',name:'Hans Gillhaus',position:'FW',rating:81}
            ]},
            "Benfica 1962": {era:"Klasik (1945-1970)",league:"Primeira Liga",players:[
              {id:'ben1',name:'Costa Pereira',position:'GK',rating:84},{id:'ben2',name:'Ã‚ngelo Martins',position:'DF',rating:82},{id:'ben3',name:'Germano',position:'DF',rating:83},{id:'ben4',name:'Humberto Fernandes',position:'DF',rating:80},{id:'ben5',name:'Fernando Cruz',position:'DF',rating:80},{id:'ben6',name:'MÃ¡rio Coluna',position:'MD',rating:88},{id:'ben7',name:'JosÃ© Augusto',position:'MD',rating:85},{id:'ben8',name:'Domiciano CavÃ©m',position:'MD',rating:82},{id:'ben9',name:'EusÃ©bio',position:'FW',rating:96},{id:'ben10',name:'JosÃ© Ãguas',position:'FW',rating:85},{id:'ben11',name:'AntÃ³nio SimÃµes',position:'FW',rating:83}
            ]},
            "PSG 2025": {era:"Modern (2000-2026)",league:"Ligue 1",players:[
              {id:'psg25_0',name:'G. Donnarumma',position:'GK',rating:89},
              {id:'psg25_1',name:'A. Hakimi',position:'DF',rating:89},
              {id:'psg25_2',name:'Marquinhos',position:'DF',rating:87},
              {id:'psg25_3',name:'Nuno Mendes',position:'DF',rating:87},
              {id:'psg25_4',name:'W. Pacho',position:'DF',rating:86},
              {id:'psg25_5',name:'Vitinha',position:'MD',rating:89},
              {id:'psg25_6',name:'Fabian Ruiz',position:'MD',rating:85},
              {id:'psg25_7',name:'Joao Neves',position:'MD',rating:85},
              {id:'psg25_8',name:'O. Dembele',position:'FW',rating:90},
              {id:'psg25_9',name:'K. Kvaratskhelia',position:'FW',rating:87},
              {id:'psg25_10',name:'B. Barcola',position:'FW',rating:84}
            ]},
            "Barcelona 2025": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'bar25_0',name:'M. ter Stegen',position:'GK',rating:86},
              {id:'bar25_1',name:'J. Kounde',position:'DF',rating:87},
              {id:'bar25_2',name:'P. Cubarsi',position:'DF',rating:82},
              {id:'bar25_3',name:'Raphinha',position:'MD',rating:89},
              {id:'bar25_4',name:'Pedri',position:'MD',rating:89},
              {id:'bar25_5',name:'Lamine Yamal',position:'MD',rating:89},
              {id:'bar25_6',name:'F. de Jong',position:'MD',rating:87},
              {id:'bar25_7',name:'Dani Olmo',position:'MD',rating:85},
              {id:'bar25_8',name:'R. Lewandowski',position:'FW',rating:88},
              {id:'bar25_9',name:'F. Torres',position:'FW',rating:81},
              {id:'bar25_10',name:'Joan Garcia',position:'GK',rating:84}
            ]},
            "Real Madrid 2025": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'rm25_0',name:'T. Courtois',position:'GK',rating:89},
              {id:'rm25_1',name:'A. Rudiger',position:'DF',rating:86},
              {id:'rm25_2',name:'T. Alexander-Arnold',position:'DF',rating:86},
              {id:'rm25_3',name:'Carvajal',position:'DF',rating:85},
              {id:'rm25_4',name:'J. Bellingham',position:'MD',rating:90},
              {id:'rm25_5',name:'F. Valverde',position:'MD',rating:89},
              {id:'rm25_6',name:'L. Modric',position:'MD',rating:84},
              {id:'rm25_7',name:'E. Camavinga',position:'MD',rating:83},
              {id:'rm25_8',name:'K. Mbappe',position:'FW',rating:91},
              {id:'rm25_9',name:'Vini Jr.',position:'FW',rating:89},
              {id:'rm25_10',name:'Rodrygo',position:'FW',rating:85}
            ]},
            "Liverpool 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'liv25_0',name:'Alisson',position:'GK',rating:89},
              {id:'liv25_1',name:'V. van Dijk',position:'DF',rating:90},
              {id:'liv25_2',name:'I. Konate',position:'DF',rating:86},
              {id:'liv25_3',name:'A. Robertson',position:'DF',rating:84},
              {id:'liv25_4',name:'M. Salah',position:'MD',rating:91},
              {id:'liv25_5',name:'F. Wirtz',position:'MD',rating:89},
              {id:'liv25_6',name:'A. Mac Allister',position:'MD',rating:87},
              {id:'liv25_7',name:'R. Gravenberch',position:'MD',rating:85},
              {id:'liv25_8',name:'D. Szoboszlai',position:'MD',rating:82},
              {id:'liv25_9',name:'A. Isak',position:'FW',rating:88},
              {id:'liv25_10',name:'G. Mamardashvili',position:'GK',rating:84}
            ]},
            "Arsenal 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'ars25_0',name:'David Raya',position:'GK',rating:87},
              {id:'ars25_1',name:'Gabriel',position:'DF',rating:88},
              {id:'ars25_2',name:'W. Saliba',position:'DF',rating:87},
              {id:'ars25_3',name:'B. White',position:'DF',rating:83},
              {id:'ars25_4',name:'M. Odegaard',position:'MD',rating:87},
              {id:'ars25_5',name:'D. Rice',position:'MD',rating:87},
              {id:'ars25_6',name:'T. Partey',position:'MD',rating:81},
              {id:'ars25_7',name:'B. Saka',position:'FW',rating:88},
              {id:'ars25_8',name:'V. Gyokeres',position:'FW',rating:87},
              {id:'ars25_9',name:'Gabriel Jesus',position:'FW',rating:83},
              {id:'ars25_10',name:'Neto',position:'GK',rating:79}
            ]},
            "Inter Milan 2025": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'int25_0',name:'Y. Sommer',position:'GK',rating:87},
              {id:'int25_1',name:'A. Bastoni',position:'DF',rating:87},
              {id:'int25_2',name:'F. Dimarco',position:'DF',rating:85},
              {id:'int25_3',name:'F. Acerbi',position:'DF',rating:83},
              {id:'int25_4',name:'D. Dumfries',position:'DF',rating:82},
              {id:'int25_5',name:'N. Barella',position:'MD',rating:87},
              {id:'int25_6',name:'H. Calhanoglu',position:'MD',rating:86},
              {id:'int25_7',name:'H. Mkhitaryan',position:'MD',rating:82},
              {id:'int25_8',name:'L. Martinez',position:'FW',rating:88},
              {id:'int25_9',name:'M. Thuram',position:'FW',rating:85},
              {id:'int25_10',name:'M. Arnautovic',position:'FW',rating:78}
            ]},
            "Manchester City 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'mci25_0',name:'S. Ortega',position:'GK',rating:82},
              {id:'mci25_1',name:'R. Dias',position:'DF',rating:86},
              {id:'mci25_2',name:'M. Akanji',position:'DF',rating:83},
              {id:'mci25_3',name:'J. Gvardiol',position:'DF',rating:84},
              {id:'mci25_4',name:'Rodri',position:'MD',rating:90},
              {id:'mci25_5',name:'T. Reijnders',position:'MD',rating:86},
              {id:'mci25_6',name:'M. Kovacic',position:'MD',rating:82},
              {id:'mci25_7',name:'E. Haaland',position:'FW',rating:90},
              {id:'mci25_8',name:'P. Foden',position:'FW',rating:85},
              {id:'mci25_9',name:'O. Marmoush',position:'FW',rating:84},
              {id:'mci25_10',name:'J. Doku',position:'FW',rating:82}
            ]},
            "Bayern Munich 2025": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'bay25_0',name:'M. Neuer',position:'GK',rating:86},
              {id:'bay25_1',name:'J. Tah',position:'DF',rating:87},
              {id:'bay25_2',name:'D. Upamecano',position:'DF',rating:85},
              {id:'bay25_3',name:'Kim Min-jae',position:'DF',rating:83},
              {id:'bay25_4',name:'J. Kimmich',position:'MD',rating:89},
              {id:'bay25_5',name:'J. Musiala',position:'MD',rating:88},
              {id:'bay25_6',name:'M. Olise',position:'MD',rating:86},
              {id:'bay25_7',name:'L. Goretzka',position:'MD',rating:84},
              {id:'bay25_8',name:'L. Diaz',position:'MD',rating:85},
              {id:'bay25_9',name:'H. Kane',position:'FW',rating:89},
              {id:'bay25_10',name:'L. Sane',position:'FW',rating:83}
            ]},
            "Atletico Madrid 2025": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'atm25_0',name:'J. Oblak',position:'GK',rating:88},
              {id:'atm25_1',name:'J. Alvarez',position:'FW',rating:87},
              {id:'atm25_2',name:'A. Griezmann',position:'FW',rating:85},
              {id:'atm25_3',name:'Alex Baena',position:'MD',rating:84},
              {id:'atm25_4',name:'J. Gimenez',position:'DF',rating:84},
              {id:'atm25_5',name:'N. Molina',position:'DF',rating:82},
              {id:'atm25_6',name:'R. De Paul',position:'MD',rating:83},
              {id:'atm25_7',name:'A. Witsel',position:'MD',rating:81},
              {id:'atm25_8',name:'S. Lino',position:'FW',rating:80},
              {id:'atm25_9',name:'C. Azpilicueta',position:'DF',rating:81},
              {id:'atm25_10',name:'Rodrigo Riquelme',position:'MD',rating:79}
            ]},
            "Borussia Dortmund 2025": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'bvb25_0',name:'S. Guirassy',position:'FW',rating:87},
              {id:'bvb25_1',name:'G. Kobel',position:'GK',rating:86},
              {id:'bvb25_2',name:'N. Schlotterbeck',position:'DF',rating:85},
              {id:'bvb25_3',name:'J. Ryerson',position:'DF',rating:79},
              {id:'bvb25_4',name:'E. Can',position:'MD',rating:82},
              {id:'bvb25_5',name:'J. Brandt',position:'MD',rating:84},
              {id:'bvb25_6',name:'K. Adeyemi',position:'FW',rating:80},
              {id:'bvb25_7',name:'N. Sule',position:'DF',rating:83},
              {id:'bvb25_8',name:'M. Sabitzer',position:'MD',rating:82},
              {id:'bvb25_9',name:'D. Malen',position:'FW',rating:82},
              {id:'bvb25_10',name:'R. Bensebaini',position:'DF',rating:80}
            ]},
            "Chelsea 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'che25_0',name:'M. Caicedo',position:'MD',rating:87},
              {id:'che25_1',name:'C. Palmer',position:'MD',rating:87},
              {id:'che25_2',name:'R. James',position:'DF',rating:83},
              {id:'che25_3',name:'L. Colwill',position:'DF',rating:81},
              {id:'che25_4',name:'M. Cucurella',position:'DF',rating:81},
              {id:'che25_5',name:'E. Fernandez',position:'MD',rating:82},
              {id:'che25_6',name:'C. Gallagher',position:'MD',rating:83},
              {id:'che25_7',name:'M. Mudryk',position:'FW',rating:78},
              {id:'che25_8',name:'N. Jackson',position:'FW',rating:82},
              {id:'che25_9',name:'R. Sterling',position:'FW',rating:84},
              {id:'che25_10',name:'R. Sanchez',position:'GK',rating:80}
            ]},
            "Manchester United 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'mun25_0',name:'Bruno Fernandes',position:'MD',rating:87},
              {id:'mun25_1',name:'B. Mbeumo',position:'FW',rating:85},
              {id:'mun25_2',name:'A. Onana',position:'GK',rating:83},
              {id:'mun25_3',name:'L. Martinez',position:'DF',rating:84},
              {id:'mun25_4',name:'R. Varane',position:'DF',rating:84},
              {id:'mun25_5',name:'D. Dalot',position:'DF',rating:81},
              {id:'mun25_6',name:'K. Mainoo',position:'MD',rating:78},
              {id:'mun25_7',name:'M. Mount',position:'MD',rating:82},
              {id:'mun25_8',name:'M. Rashford',position:'FW',rating:84},
              {id:'mun25_9',name:'R. Hojlund',position:'FW',rating:80},
              {id:'mun25_10',name:'A. Garnacho',position:'FW',rating:79}
            ]},
            "AC Milan 2025": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'mil25_0',name:'M. Maignan',position:'GK',rating:87},
              {id:'mil25_1',name:'T. Hernandez',position:'DF',rating:85},
              {id:'mil25_2',name:'F. Tomori',position:'DF',rating:84},
              {id:'mil25_3',name:'M. Gabbia',position:'DF',rating:78},
              {id:'mil25_4',name:'R. Leao',position:'FW',rating:87},
              {id:'mil25_5',name:'C. Pulisic',position:'MD',rating:82},
              {id:'mil25_6',name:'R. Loftus-Cheek',position:'MD',rating:80},
              {id:'mil25_7',name:'Y. Fofana',position:'MD',rating:81},
              {id:'mil25_8',name:'A. Morata',position:'FW',rating:83},
              {id:'mil25_9',name:'S. Chukwueze',position:'FW',rating:80},
              {id:'mil25_10',name:'D. Calabria',position:'DF',rating:82}
            ]},
            "Napoli 2025": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'nap25_0',name:'K. De Bruyne',position:'MD',rating:87},
              {id:'nap25_1',name:'S. McTominay',position:'MD',rating:85},
              {id:'nap25_2',name:'A. Meret',position:'GK',rating:83},
              {id:'nap25_3',name:'G. Di Lorenzo',position:'DF',rating:84},
              {id:'nap25_4',name:'A. Rrahmani',position:'DF',rating:82},
              {id:'nap25_5',name:'M. Olivera',position:'DF',rating:79},
              {id:'nap25_6',name:'S. Lobotka',position:'MD',rating:84},
              {id:'nap25_7',name:'M. Politano',position:'FW',rating:82},
              {id:'nap25_8',name:'R. Lukaku',position:'FW',rating:84},
              {id:'nap25_9',name:'G. Raspadori',position:'FW',rating:81},
              {id:'nap25_10',name:'D. Neres',position:'FW',rating:81}
            ]},
            "Newcastle United 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'new25_0',name:'Bruno Guimaraes',position:'MD',rating:86},
              {id:'new25_1',name:'S. Tonali',position:'MD',rating:86},
              {id:'new25_2',name:'N. Pope',position:'GK',rating:84},
              {id:'new25_3',name:'K. Trippier',position:'DF',rating:85},
              {id:'new25_4',name:'S. Botman',position:'DF',rating:84},
              {id:'new25_5',name:'D. Burn',position:'DF',rating:81},
              {id:'new25_6',name:'J. Lascelles',position:'DF',rating:78},
              {id:'new25_7',name:'J. Willock',position:'MD',rating:80},
              {id:'new25_8',name:'H. Barnes',position:'FW',rating:82},
              {id:'new25_9',name:'C. Wilson',position:'FW',rating:83},
              {id:'new25_10',name:'M. Almiron',position:'FW',rating:80}
            ]},
            "Aston Villa 2025": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'avl25_0',name:'E. Martinez',position:'GK',rating:85},
              {id:'avl25_1',name:'Y. Tielemans',position:'MD',rating:85},
              {id:'avl25_2',name:'P. Torres',position:'DF',rating:84},
              {id:'avl25_3',name:'E. Konsa',position:'DF',rating:82},
              {id:'avl25_4',name:'L. Digne',position:'DF',rating:82},
              {id:'avl25_5',name:'M. Cash',position:'DF',rating:81},
              {id:'avl25_6',name:'J. McGinn',position:'MD',rating:83},
              {id:'avl25_7',name:'B. Kamara',position:'MD',rating:82},
              {id:'avl25_8',name:'L. Bailey',position:'FW',rating:84},
              {id:'avl25_9',name:'O. Watkins',position:'FW',rating:85},
              {id:'avl25_10',name:'J. Duran',position:'FW',rating:78}
            ]},
            "PSG 2026": {era:"Modern (2000-2026)",league:"Ligue 1",players:[
              {id:'psg26_0',name:'G. Donnarumma',position:'GK',rating:89},
              {id:'psg26_1',name:'A. Hakimi',position:'DF',rating:90},
              {id:'psg26_2',name:'Marquinhos',position:'DF',rating:87},
              {id:'psg26_3',name:'L. Beraldo',position:'DF',rating:86},
              {id:'psg26_4',name:'Nuno Mendes',position:'DF',rating:87},
              {id:'psg26_5',name:'Vitinha',position:'MD',rating:89},
              {id:'psg26_6',name:'Joao Neves',position:'MD',rating:87},
              {id:'psg26_7',name':'Warren Zaire-Emery',position:'MD',rating:86},
              {id:'psg26_8',name:'O. Dembele',position:'FW',rating:90},
              {id:'psg26_9',name:'K. Kvaratskhelia',position:'FW',rating:89},
              {id:'psg26_10',name:'B. Barcola',position:'FW',rating:86}
            ]},
            "Barcelona 2026": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'bar26_0',name:'M. ter Stegen',position:'GK',rating:85},
              {id:'bar26_1',name:'P. Cubarsi',position:'DF',rating:85},
              {id:'bar26_2',name:'J. Kounde',position:'DF',rating:87},
              {id:'bar26_3',name:'A. Balde',position:'DF',rating:84},
              {id:'bar26_4',name:'Pedri',position:'MD',rating:90},
              {id:'bar26_5',name:'Lamine Yamal',position:'MD',rating:91},
              {id:'bar26_6',name:'F. de Jong',position:'MD',rating:87},
              {id:'bar26_7',name:'Raphinha',position:'MD',rating:88},
              {id:'bar26_8',name:'R. Lewandowski',position:'FW',rating:86},
              {id:'bar26_9',name:'Joan Garcia',position:'GK',rating:85},
              {id:'bar26_10',name:'V. Roque',position:'FW',rating:83}
            ]},
            "Real Madrid 2026": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'rm26_0',name:'T. Courtois',position:'GK',rating:89},
              {id:'rm26_1',name:'A. Rudiger',position:'DF',rating:86},
              {id:'rm26_2',name:'T. Alexander-Arnold',position:'DF',rating:87},
              {id:'rm26_3',name:'E. Militao',position:'DF',rating:86},
              {id:'rm26_4',name:'J. Bellingham',position:'MD',rating:91},
              {id:'rm26_5',name:'F. Valverde',position:'MD',rating:89},
              {id:'rm26_6',name:'E. Camavinga',position:'MD',rating:85},
              {id:'rm26_7',name:'A. Tchouameni',position:'MD',rating:86},
              {id:'rm26_8',name:'K. Mbappe',position:'FW',rating:92},
              {id:'rm26_9',name:'Vini Jr.',position:'FW',rating:90},
              {id:'rm26_10',name:'Rodrygo',position:'FW',rating:86}
            ]},
            "Liverpool 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'liv26_0',name:'Alisson',position:'GK',rating:89},
              {id:'liv26_1',name:'V. van Dijk',position:'DF',rating:89},
              {id:'liv26_2',name:'I. Konate',position:'DF',rating:87},
              {id:'liv26_3',name:'A. Robertson',position:'DF',rating:84},
              {id:'liv26_4',name:'M. Salah',position:'MD',rating:90},
              {id:'liv26_5',name:'F. Wirtz',position:'MD',rating:90},
              {id:'liv26_6',name:'A. Mac Allister',position:'MD',rating:87},
              {id:'liv26_7',name:'R. Gravenberch',position:'MD',rating:86},
              {id:'liv26_8',name:'D. Szoboszlai',position:'MD',rating:83},
              {id:'liv26_9',name:'C. Gakpo',position:'FW',rating:85},
              {id:'liv26_10',name:'J. Quansah',position:'DF',rating:82}
            ]},
            "Arsenal 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'ars26_0',name:'David Raya',position:'GK',rating:87},
              {id:'ars26_1',name:'W. Saliba',position:'DF',rating:89},
              {id:'ars26_2',name:'Gabriel',position:'DF',rating:88},
              {id:'ars26_3',name:'M. Odegaard',position:'MD',rating:88},
              {id:'ars26_4',name:'D. Rice',position:'MD',rating:88},
              {id:'ars26_5',name:'B. Saka',position:'FW',rating:89},
              {id:'ars26_6',name:'M. Merino',position:'MD',rating:85},
              {id:'ars26_7',name:'R. Calafiori',position:'DF',rating:84},
              {id:'ars26_8',name:'V. Gyokeres',position:'FW',rating:88},
              {id:'ars26_9',name:'E. Nwaneri',position:'MD',rating:80},
              {id:'ars26_10',name:'K. Havertz',position:'FW',rating:84}
            ]},
            "Manchester City 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'mci26_0',name:'E. Haaland',position:'FW',rating:91},
              {id:'mci26_1',name:'Rodri',position:'MD',rating:91},
              {id:'mci26_2',name:'R. Dias',position:'DF',rating:87},
              {id:'mci26_3',name:'J. Gvardiol',position:'DF',rating:85},
              {id:'mci26_4',name:'P. Foden',position:'FW',rating:86},
              {id:'mci26_5',name:'T. Reijnders',position:'MD',rating:87},
              {id:'mci26_6',name:'J. Doku',position:'FW',rating:83},
              {id:'mci26_7',name:'M. Akanji',position:'DF',rating:83},
              {id:'mci26_8',name:'N. Gonzalez',position:'MD',rating:82},
              {id:'mci26_9',name:'S. Ortega',position:'GK',rating:82},
              {id:'mci26_10',name:'O. Bobb',position:'FW',rating:80}
            ]},
            "Bayern Munich 2026": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'bay26_0',name:'J. Musiala',position:'MD',rating:90},
              {id:'bay26_1',name:'J. Kimmich',position:'MD',rating:89},
              {id:'bay26_2',name:'H. Kane',position:'FW',rating:89},
              {id:'bay26_3',name:'J. Tah',position:'DF',rating:87},
              {id:'bay26_4',name:'D. Upamecano',position:'DF',rating:85},
              {id:'bay26_5',name:'M. Olise',position:'MD',rating:87},
              {id:'bay26_6',name:'L. Diaz',position:'MD',rating:86},
              {id:'bay26_7',name:'A. Kimmich',position:'DF',rating:84},
              {id:'bay26_8',name:'P. Wanner',position:'MD',rating:80},
              {id:'bay26_9',name:'M. Neuer',position:'GK',rating:85},
              {id:'bay26_10',name:'L. Sane',position:'FW',rating:84}
            ]},
            "Inter Milan 2026": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'int26_0',name:'Y. Sommer',position:'GK',rating:86},
              {id:'int26_1',name:'A. Bastoni',position:'DF',rating:88},
              {id:'int26_2',name:'F. Dimarco',position:'DF',rating:86},
              {id:'int26_3',name:'N. Barella',position:'MD',rating:88},
              {id:'int26_4',name:'H. Calhanoglu',position:'MD',rating:86},
              {id:'int26_5',name:'L. Martinez',position:'FW',rating:88},
              {id:'int26_6',name:'M. Thuram',position:'FW',rating:86},
              {id:'int26_7',name:'P. Zielinski',position:'MD',rating:84},
              {id:'int26_8',name:'Y. Bisseck',position:'DF',rating:83},
              {id:'int26_9',name:'C. Augusto',position:'DF',rating:81},
              {id:'int26_10',name:'J. Martinez',position:'FW',rating:80}
            ]},
            "Chelsea 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'che26_0',name:'C. Palmer',position:'MD',rating:89},
              {id:'che26_1',name:'M. Caicedo',position:'MD',rating:87},
              {id:'che26_2',name:'R. James',position:'DF',rating:84},
              {id:'che26_3',name:'L. Colwill',position:'DF',rating:84},
              {id:'che26_4',name:'M. Cucurella',position:'DF',rating:82},
              {id:'che26_5',name:'E. Fernandez',position:'MD',rating:83},
              {id:'che26_6',name:'N. Jackson',position:'FW',rating:84},
              {id:'che26_7',name:'C. Nkunku',position:'FW',rating:86},
              {id:'che26_8',name:'R. Sanchez',position:'GK',rating:81},
              {id:'che26_9',name:'A. Anselmino',position:'DF',rating:79},
              {id:'che26_10',name:'K. Dewsbury-Hall',position:'MD',rating:81}
            ]},
            "Manchester United 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'mun26_0',name:'Bruno Fernandes',position:'MD',rating:87},
              {id:'mun26_1',name:'B. Mbeumo',position:'FW',rating:86},
              {id:'mun26_2',name:'A. Onana',position:'GK',rating:84},
              {id:'mun26_3',name:'L. Martinez',position:'DF',rating:84},
              {id:'mun26_4',name:'K. Mainoo',position:'MD',rating:82},
              {id:'mun26_5',name:'R. Hojlund',position:'FW',rating:82},
              {id:'mun26_6',name:'A. Garnacho',position:'FW',rating:82},
              {id:'mun26_7',name:'D. Dalot',position:'DF',rating:82},
              {id:'mun26_8',name:'M. De Ligt',position:'DF',rating:85},
              {id:'mun26_9',name:'J. Zirkzee',position:'FW',rating:81},
              {id:'mun26_10',name:'M. Ugarte',position:'MD',rating:84}
            ]},
            "AC Milan 2026": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'mil26_0',name:'M. Maignan',position:'GK',rating:88},
              {id:'mil26_1',name:'T. Hernandez',position:'DF',rating:86},
              {id:'mil26_2',name:'F. Tomori',position:'DF',rating:84},
              {id:'mil26_3',name:'R. Leao',position:'FW',rating:88},
              {id:'mil26_4',name:'C. Pulisic',position:'MD',rating:83},
              {id:'mil26_5',name:'Y. Fofana',position:'MD',rating:82},
              {id:'mil26_6',name:'S. Gimenez',position:'FW',rating:84},
              {id:'mil26_7',name:'T. Reijnders',position:'MD',rating:86},
              {id:'mil26_8',name:'K. Walker',position:'DF',rating:83},
              {id:'mil26_9',name:'A. Jimenez',position:'DF',rating:78},
              {id:'mil26_10',name:'F. Bondo',position:'MD',rating:79}
            ]},
            "Atletico Madrid 2026": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'atm26_0',name:'J. Oblak',position:'GK',rating:88},
              {id:'atm26_1',name:'J. Alvarez',position:'FW',rating:88},
              {id:'atm26_2',name:'A. Griezmann',position:'FW',rating:85},
              {id:'atm26_3',name:'J. Gimenez',position:'DF',rating:85},
              {id:'atm26_4',name:'N. Molina',position:'DF',rating:83},
              {id:'atm26_5',name:'R. De Paul',position:'MD',rating:84},
              {id:'atm26_6',name:'P. Barrios',position:'MD',rating:82},
              {id:'atm26_7',name:'G. Simeone',position:'DF',rating:80},
              {id:'atm26_8',name':'Alex Baena',position:'MD',rating:85},
              {id:'atm26_9',name:'S. Lino',position:'FW',rating:82},
              {id:'atm26_10',name:'R. Riquelme',position:'MD',rating:81}
            ]},
            "Tottenham 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'tot26_0',name:'G. Vicario',position:'GK',rating:85},
              {id:'tot26_1',name:'C. Romero',position:'DF',rating:86},
              {id:'tot26_2',name:'M. van de Ven',position:'DF',rating:85},
              {id:'tot26_3',name:'P. Porro',position:'DF',rating:83},
              {id:'tot26_4',name:'J. Maddison',position:'MD',rating:85},
              {id:'tot26_5',name:'D. Kulusevski',position:'MD',rating:84},
              {id:'tot26_6',name:'Y. Bissouma',position:'MD',rating:83},
              {id:'tot26_7',name:'Son Heung-min',position:'FW',rating:87},
              {id:'tot26_8',name:'B. Johnson',position:'FW',rating:82},
              {id:'tot26_9',name:'J. Gray',position:'MD',rating:78},
              {id:'tot26_10',name:'A. Dragusin',position:'DF',rating:81}
            ]},
            "Borussia Dortmund 2026": {era:"Modern (2000-2026)",league:"Bundesliga",players:[
              {id:'bvb26_0',name:'G. Kobel',position:'GK',rating:87},
              {id:'bvb26_1',name:'N. Schlotterbeck',position:'DF',rating:86},
              {id:'bvb26_2',name:'W. Anton',position:'DF',rating:84},
              {id:'bvb26_3',name:'J. Ryerson',position:'DF',rating:80},
              {id:'bvb26_4',name:'R. Bensebaini',position:'DF',rating:81},
              {id:'bvb26_5',name:'E. Can',position:'MD',rating:82},
              {id:'bvb26_6',name:'J. Brandt',position:'MD',rating:85},
              {id:'bvb26_7',name:'M. Sabitzer',position:'MD',rating:83},
              {id:'bvb26_8',name:'K. Adeyemi',position:'FW',rating:83},
              {id:'bvb26_9',name:'S. Guirassy',position:'FW',rating:87},
              {id:'bvb26_10',name:'J. Bynoe-Gittens',position:'FW',rating:82}
            ]},
            "Napoli 2026": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'nap26_0',name:'A. Meret',position:'GK',rating:83},
              {id:'nap26_1',name:'G. Di Lorenzo',position:'DF',rating:84},
              {id:'nap26_2',name:'A. Rrahmani',position:'DF',rating:83},
              {id:'nap26_3',name:'M. Olivera',position:'DF',rating:80},
              {id:'nap26_4',name:'S. McTominay',position:'MD',rating:85},
              {id:'nap26_5',name:'S. Lobotka',position:'MD',rating:84},
              {id:'nap26_6',name:'K. De Bruyne',position:'MD',rating:87},
              {id:'nap26_7',name:'M. Politano',position:'FW',rating:82},
              {id:'nap26_8',name:'R. Lukaku',position:'FW',rating:84},
              {id:'nap26_9',name:'G. Raspadori',position:'FW',rating:82},
              {id:'nap26_10',name:'D. Neres',position:'FW',rating:82}
            ]},
            "Newcastle United 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'new26_0',name:'Bruno Guimaraes',position:'MD',rating:87},
              {id:'new26_1',name:'S. Tonali',position:'MD',rating:86},
              {id:'new26_2',name:'N. Pope',position:'GK',rating:84},
              {id:'new26_3',name:'S. Botman',position:'DF',rating:85},
              {id:'new26_4',name:'T. Livramento',position:'DF',rating:82},
              {id:'new26_5',name:'K. Trippier',position:'DF',rating:83},
              {id:'new26_6',name:'L. Hall',position:'DF',rating:80},
              {id:'new26_7',name:'J. Willock',position:'MD',rating:81},
              {id:'new26_8',name:'A. Isak',position:'FW',rating:89},
              {id:'new26_9',name:'H. Barnes',position:'FW',rating:83},
              {id:'new26_10',name:'M. Almiron',position:'FW',rating:80}
            ]},
            "Aston Villa 2026": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'avl26_0',name:'E. Martinez',position:'GK',rating:86},
              {id:'avl26_1',name:'P. Torres',position:'DF',rating:85},
              {id:'avl26_2',name:'E. Konsa',position:'DF',rating:83},
              {id:'avl26_3',name:'L. Digne',position:'DF',rating:82},
              {id:'avl26_4',name:'Y. Tielemans',position:'MD',rating:85},
              {id:'avl26_5',name:'J. McGinn',position:'MD',rating:84},
              {id:'avl26_6',name:'B. Kamara',position:'MD',rating:83},
              {id:'avl26_7',name:'M. Rogers',position:'MD',rating:82},
              {id:'avl26_8',name:'O. Watkins',position:'FW',rating:86},
              {id:'avl26_9',name:'L. Bailey',position:'FW',rating:84},
              {id:'avl26_10',name:'J. Duran',position:'FW',rating:81}
            ]},
            "Tottenham 2019": {era:"Modern (2000-2026)",league:"Premier League",players:[
              {id:'tot1',name:'H. Lloris',position:'GK',rating:88},{id:'tot2',name:'K. Trippier',position:'DF',rating:84},{id:'tot3',name:'T. Alderweireld',position:'DF',rating:87},{id:'tot4',name:'J. Vertonghen',position:'DF',rating:86},{id:'tot5',name:'D. Rose',position:'DF',rating:83},{id:'tot6',name:'M. Sissoko',position:'MD',rating:82},{id:'tot7',name:'H. Winks',position:'MD',rating:81},{id:'tot8',name:'C. Eriksen',position:'MD',rating:90},{id:'tot9',name:'Son Heung-min',position:'FW',rating:89},{id:'tot10',name:'H. Kane',position:'FW',rating:91},{id:'tot11',name:'Lucas Moura',position:'FW',rating:83}
            ]},
            "AS Roma 2022": {era:"Modern (2000-2026)",league:"Serie A",players:[
              {id:'rom1',name:'Rui Patricio',position:'GK',rating:85},{id:'rom2',name:'G. Mancini',position:'DF',rating:83},{id:'rom3',name:'C. Smalling',position:'DF',rating:84},{id:'rom4',name:'R. Ibanez',position:'DF',rating:82},{id:'rom5',name:'L. Spinazzola',position:'DF',rating:84},{id:'rom6',name:'L. Pellegrini',position:'MD',rating:86},{id:'rom7',name:'B. Cristante',position:'MD',rating:81},{id:'rom8',name:'N. Zaniolo',position:'MD',rating:82},{id:'rom9',name:'P. Dybala',position:'FW',rating:88},{id:'rom10',name:'T. Abraham',position:'FW',rating:83},{id:'rom11',name:'L. Matic',position:'MD',rating:80}
            ]},
            "FC Porto 2004": {era:"Modern (2000-2026)",league:"Primeira Liga",players:[
              {id:'por1',name:'V. Baia',position:'GK',rating:85},{id:'por2',name:'P. Ferreira',position:'DF',rating:83},{id:'por3',name:'J. Costa',position:'DF',rating:85},{id:'por4',name:'R. Carvalho',position:'DF',rating:87},{id:'por5',name:'N. Valente',position:'DF',rating:82},{id:'por6',name:'Costinha',position:'MD',rating:84},{id:'por7',name:'Maniche',position:'MD',rating:86},{id:'por8',name:'Deco',position:'MD',rating:91},{id:'por9',name:'Pedro Mendes',position:'MD',rating:81},{id:'por10',name:'B. McCarthy',position:'FW',rating:84},{id:'por11',name:'C. Alberto',position:'FW',rating:82}
            ]},
            "Sevilla 2016": {era:"Modern (2000-2026)",league:"La Liga",players:[
              {id:'sev1',name:'S. Rico',position:'GK',rating:81},{id:'sev2',name:'Mariano',position:'DF',rating:80},{id:'sev3',name:'A. Rami',position:'DF',rating:82},{id:'sev4',name:'D. Carrico',position:'DF',rating:80},{id:'sev5',name:'S. Escudero',position:'DF',rating:81},{id:'sev6',name:'V. Iborra',position:'MD',rating:83},{id:'sev7',name:'S. Nzonzi',position:'MD',rating:84},{id:'sev8',name:'E. Banega',position:'MD',rating:86},{id:'sev9',name:'Vitolo',position:'FW',rating:84},{id:'sev10',name:'K. Gameiro',position:'FW',rating:84},{id:'sev11',name:'Coke',position:'DF',rating:81}
            ]},
            "Celtic 1967": {era:"Klasik (1945-1970)",league:"Scottish Premiership",players:[
              {id:'cel1',name:'R. Simpson',position:'GK',rating:82},{id:'cel2',name:'J. Craig',position:'DF',rating:80},{id:'cel3',name:'B. McNeill',position:'DF',rating:85},{id:'cel4',name:'J. Clark',position:'DF',rating:80},{id:'cel5',name:'T. Gemmell',position:'DF',rating:83},{id:'cel6',name:'B. Murdoch',position:'MD',rating:84},{id:'cel7',name:'B. Auld',position:'MD',rating:82},{id:'cel8',name:'C. Gallagher',position:'MD',rating:80},{id:'cel9',name:'J. Johnstone',position:'FW',rating:85},{id:'cel10',name:'W. Wallace',position:'FW',rating:83},{id:'cel11',name:'S. Chalmers',position:'FW',rating:82}
            ]},
            "Galatasaray 2000": {era:"Modern (2000-2026)",league:"Super Lig",players:[
              {id:'gal1',name:'C. Taffarel',position:'GK',rating:86},{id:'gal2',name:'B. Korkmaz',position:'DF',rating:84},{id:'gal3',name:'G. Popescu',position:'DF',rating:85},{id:'gal4',name:'E. Asik',position:'DF',rating:81},{id:'gal5',name:'E. Penbe',position:'DF',rating:81},{id:'gal6',name:'O. Buruk',position:'MD',rating:82},{id:'gal7',name:'S. Kaya',position:'MD',rating:80},{id:'gal8',name:'G. Hagi',position:'MD',rating:90},{id:'gal9',name:'H. Sukur',position:'FW',rating:87},{id:'gal10',name:'A. Erdem',position:'FW',rating:82},{id:'gal11',name:'U. Davala',position:'MD',rating:81}
            ]},
            "Red Star 1991": {era:"Retro (1970-1990)",league:"Serbian SuperLiga",players:[
              {id:'red1',name:'S. Stojanovic',position:'GK',rating:83},{id:'red2',name:'M. Belodedici',position:'DF',rating:86},{id:'red3',name:'S. Marovic',position:'DF',rating:82},{id:'red4',name:'R. Sabanadzovic',position:'DF',rating:80},{id:'red5',name:'G. Vasilijevic',position:'DF',rating:81},{id:'red6',name:'V. Jugovic',position:'MD',rating:85},{id:'red7',name:'D. Savicevic',position:'MD',rating:89},{id:'red8',name:'R. Prosinecki',position:'MD',rating:88},{id:'red9',name:'D. Pancev',position:'FW',rating:86},{id:'red10',name:'D. Binic',position:'FW',rating:82},{id:'red11',name:'I. Najdoski',position:'DF',rating:79}
            ]},
            "Nottingham Forest 1979": {era:"Retro (1970-1990)",league:"Premier League",players:[
              {id:'nfo1',name:'P. Shilton',position:'GK',rating:89},{id:'nfo2',name:'V. Anderson',position:'DF',rating:83},{id:'nfo3',name:'L. Lloyd',position:'DF',rating:84},{id:'nfo4',name:'K. Burns',position:'DF',rating:83},{id:'nfo5',name:'F. Clark',position:'DF',rating:82},{id:'nfo6',name:'J. McGovern',position:'MD',rating:80},{id:'nfo7',name:'I. Bowyer',position:'MD',rating:81},{id:'nfo8',name:'A. Gemmill',position:'MD',rating:83},{id:'nfo9',name:'J. Robertson',position:'FW',rating:85},{id:'nfo10',name:'T. Francis',position:'FW',rating:84},{id:'nfo11',name:'G. Birtles',position:'FW',rating:82}
            ]},
            "Ajax 1972": {era:"Klasik (1945-1970)",league:"Eredivisie",players:[
              {id:'aj72_1',name:'H. Stuy',position:'GK',rating:81},{id:'aj72_2',name:'W. Suurbier',position:'DF',rating:83},{id:'aj72_3',name:'B. Hulshoff',position:'DF',rating:84},{id:'aj72_4',name:'J. Neeskens',position:'DF',rating:86},{id:'aj72_5',name:'R. Krol',position:'DF',rating:85},{id:'aj72_6',name:'A. Haan',position:'MD',rating:84},{id:'aj72_7',name:'G. Muhren',position:'MD',rating:85},{id:'aj72_8',name:'J. Cruyff',position:'MD',rating:97},{id:'aj72_9',name:'S. Swart',position:'FW',rating:82},{id:'aj72_10',name:'J. Rep',position:'FW',rating:85},{id:'aj72_11',name:'P. Keizer',position:'FW',rating:85}
            ]}
          },
          tim_nasional: {
            "Jerman": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'ger1',name:'M. Neuer',position:'GK',rating:89},{id:'ger2',name:'J. Tah',position:'DF',rating:87},{id:'ger3',name:'A. Rudiger',position:'DF',rating:86},{id:'ger4',name:'N. Schlotterbeck',position:'DF',rating:85},{id:'ger5',name:'D. Raum',position:'DF',rating:82},{id:'ger6',name:'I. Gundogan',position:'MD',rating:87},{id:'ger7',name:'J. Musiala',position:'MD',rating:88},{id:'ger8',name:'F. Wirtz',position:'MD',rating:89},{id:'ger9',name:'L. Sane',position:'FW',rating:85},{id:'ger10',name:'K. Havertz',position:'FW',rating:84},{id:'ger11',name:'N. Fullkrug',position:'FW',rating:83}
            ]},
            "Prancis": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'fra1',name:'H. Lloris',position:'GK',rating:87},{id:'fra2',name:'J. Kounde',position:'DF',rating:87},{id:'fra3',name:'D. Upamecano',position:'DF',rating:85},{id:'fra4',name:'W. Saliba',position:'DF',rating:87},{id:'fra5',name:'T. Hernandez',position:'DF',rating:85},{id:'fra6',name:'A. Tchouameni',position:'MD',rating:86},{id:'fra7',name:'E. Camavinga',position:'MD',rating:83},{id:'fra8',name:'O. Dembele',position:'MD',rating:90},{id:'fra9',name:'K. Mbappe',position:'FW',rating:91},{id:'fra10',name:'A. Griezmann',position:'FW',rating:85},{id:'fra11',name:'M. Olise',position:'MD',rating:86}
            ]},
            "Spanyol": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'spa1',name:'U. Simon',position:'GK',rating:86},{id:'spa2',name:'D. Carvajal',position:'DF',rating:85},{id:'spa3',name:'P. Cubarsi',position:'DF',rating:82},{id:'spa4',name:'A. Laporte',position:'DF',rating:84},{id:'spa5',name:'M. Cucurella',position:'DF',rating:81},{id:'spa6',name:'Rodri',position:'MD',rating:91},{id:'spa7',name:'Pedri',position:'MD',rating:89},{id:'spa8',name:'F. Ruiz',position:'MD',rating:85},{id:'spa9',name:'L. Yamal',position:'FW',rating:89},{id:'spa10',name:'N. Williams',position:'FW',rating:84},{id:'spa11',name:'A. Morata',position:'FW',rating:83}
            ]},
            "Inggris": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'eng1',name:'J. Pickford',position:'GK',rating:84},{id:'eng2',name:'K. Walker',position:'DF',rating:86},{id:'eng3',name:'J. Stones',position:'DF',rating:87},{id:'eng4',name:'M. Guehi',position:'DF',rating:84},{id:'eng5',name:'B. Chilwell',position:'DF',rating:83},{id:'eng6',name:'D. Rice',position:'MD',rating:87},{id:'eng7',name:'J. Bellingham',position:'MD',rating:90},{id:'eng8',name:'C. Palmer',position:'MD',rating:87},{id:'eng9',name:'B. Saka',position:'FW',rating:88},{id:'eng10',name:'H. Kane',position:'FW',rating:91},{id:'eng11',name:'P. Foden',position:'FW',rating:85}
            ]},
            "Portugal": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'prn1',name:'D. Costa',position:'GK',rating:85},{id:'prn2',name:'R. Dias',position:'DF',rating:86},{id:'prn3',name:'Nuno Mendes',position:'DF',rating:87},{id:'prn4',name:'G. Inacio',position:'DF',rating:83},{id:'prn5',name:'J. Cancelo',position:'DF',rating:86},{id:'prn6',name:'B. Fernandes',position:'MD',rating:87},{id:'prn7',name:'J. Neves',position:'MD',rating:85},{id:'prn8',name:'Vitinha',position:'MD',rating:89},{id:'prn9',name:'B. Silva',position:'MD',rating:89},{id:'prn10',name:'R. Leao',position:'FW',rating:87},{id:'prn11',name:'Diogo Jota',position:'FW',rating:85}
            ]},
            "Belanda": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'ned1',name:'B. Verbruggen',position:'GK',rating:82},{id:'ned2',name:'V. van Dijk',position:'DF',rating:90},{id:'ned3',name:'M. de Ligt',position:'DF',rating:84},{id:'ned4',name:'N. Ake',position:'DF',rating:84},{id:'ned5',name:'D. Dumfries',position:'DF',rating:82},{id:'ned6',name:'F. de Jong',position:'MD',rating:87},{id:'ned7',name:'T. Reijnders',position:'MD',rating:86},{id:'ned8',name:'X. Simons',position:'MD',rating:84},{id:'ned9',name:'C. Gakpo',position:'FW',rating:84},{id:'ned10',name:'D. Malen',position:'FW',rating:82},{id:'ned11',name:'W. Weghorst',position:'FW',rating:79}
            ]},
            "Italia": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'ita1',name:'G. Donnarumma',position:'GK',rating:89},{id:'ita2',name:'A. Bastoni',position:'DF',rating:87},{id:'ita3',name:'G. Scalvini',position:'DF',rating:83},{id:'ita4',name:'F. Acerbi',position:'DF',rating:83},{id:'ita5',name:'G. Di Lorenzo',position:'DF',rating:84},{id:'ita6',name:'N. Barella',position:'MD',rating:87},{id:'ita7',name:'S. Tonali',position:'MD',rating:86},{id:'ita8',name:'L. Pellegrini',position:'MD',rating:86},{id:'ita9',name:'F. Chiesa',position:'FW',rating:84},{id:'ita10',name:'C. Immobile',position:'FW',rating:84},{id:'ita11',name:'G. Raspadori',position:'FW',rating:81}
            ]},
            "Kroasia": {era:"Modern (2000-2026)",league:"Tim Nasional UEFA",players:[
              {id:'cro1',name:'D. Livakovic',position:'GK',rating:84},{id:'cro2',name:'J. Gvardiol',position:'DF',rating:84},{id:'cro3',name:'J. Stanisic',position:'DF',rating:80},{id:'cro4',name:'M. Erlic',position:'DF',rating:78},{id:'cro5',name:'B. Sosa',position:'DF',rating:80},{id:'cro6',name:'L. Modric',position:'MD',rating:84},{id:'cro7',name:'M. Kovacic',position:'MD',rating:82},{id:'cro8',name:'M. Brozovic',position:'MD',rating:83},{id:'cro9',name:'A. Kramaric',position:'FW',rating:83},{id:'cro10',name:'I. Perisic',position:'FW',rating:81},{id:'cro11',name:'B. Petkovic',position:'FW',rating:80}
            ]}
          }
        },
        amerika_selatan: {
          klub: {
            "Santos 1962": {era:"Klasik (1945-1970)",league:"BrasileirÃ£o SÃ©rie A",players:[
              {id:'san1',name:'Gilmar',position:'GK',rating:88},{id:'san2',name:'Lima',position:'DF',rating:82},{id:'san3',name:'Mauro',position:'DF',rating:85},{id:'san4',name:'Calvet',position:'DF',rating:83},{id:'san5',name:'Dalmo',position:'DF',rating:81},{id:'san6',name:'Zito',position:'MD',rating:87},{id:'san7',name:'MengÃ¡lvio',position:'MD',rating:85},{id:'san8',name:'Dorval',position:'MD',rating:84},{id:'san9',name:'Coutinho',position:'FW',rating:89},{id:'san10',name:'PelÃ©',position:'FW',rating:98},{id:'san11',name:'Pepe',position:'FW',rating:86}
            ]},
            "Flamengo 1981": {era:"Retro (1970-1990)",league:"BrasileirÃ£o SÃ©rie A",players:[
              {id:'fla1',name:'Raul',position:'GK',rating:81},{id:'fla2',name:'Leandro',position:'DF',rating:84},{id:'fla3',name:'Marinho',position:'DF',rating:82},{id:'fla4',name:'JosÃ© Rocha',position:'DF',rating:80},{id:'fla5',name:'JÃºnior',position:'DF',rating:87},{id:'fla6',name:'Andrade',position:'MD',rating:83},{id:'fla7',name:'AdÃ­lio',position:'MD',rating:84},{id:'fla8',name:'Zico',position:'MD',rating:95},{id:'fla9',name:'Tita',position:'FW',rating:83},{id:'fla10',name:'Nunes',position:'FW',rating:84},{id:'fla11',name:'Lico',position:'FW',rating:80}
            ]},
            "SÃ£o Paulo 1993": {era:"Retro (1970-1990)",league:"BrasileirÃ£o SÃ©rie A",players:[
              {id:'sao1',name:'Zetti',position:'GK',rating:84},{id:'sao2',name:'Cafu',position:'DF',rating:89},{id:'sao3',name:'AntÃ´nio Carlos',position:'DF',rating:83},{id:'sao4',name:'Valber',position:'DF',rating:81},{id:'sao5',name:'Ronaldo LuÃ­s',position:'DF',rating:81},{id:'sao6',name:'Dinho',position:'MD',rating:82},{id:'sao7',name:'RaÃ­',position:'MD',rating:88},{id:'sao8',name:'Leonardo',position:'MD',rating:86},{id:'sao9',name:'MÃ¼ller',position:'FW',rating:83},{id:'sao10',name:'Palhinha',position:'FW',rating:84},{id:'sao11',name:'ElivÃ©lton',position:'FW',rating:80}
            ]},
            "River Plate 1996": {era:"Modern (2000-2026)",league:"Liga Profesional Argentina",players:[
              {id:'riv1',name:'GermÃ¡n Burgos',position:'GK',rating:83},{id:'riv2',name:'HernÃ¡n DÃ­az',position:'DF',rating:82},{id:'riv3',name:'Celso Ayala',position:'DF',rating:85},{id:'riv4',name:'Eduardo Berizzo',position:'DF',rating:83},{id:'riv5',name:'Juan Pablo SorÃ­n',position:'DF',rating:84},{id:'riv6',name:'Leonardo Astrada',position:'MD',rating:84},{id:'riv7',name:'Marcelo Gallardo',position:'MD',rating:88},{id:'riv8',name:'Ariel Ortega',position:'MD',rating:88},{id:'riv9',name:'Enzo Francescoli',position:'FW',rating:90},{id:'riv10',name:'HernÃ¡n Crespo',position:'FW',rating:90},{id:'riv11',name:'RamÃ³n Medina Bello',position:'FW',rating:84}
            ]},
            "Boca Juniors 2007": {era:"Modern (2000-2026)",league:"Liga Profesional Argentina",players:[
              {id:'boc1',name:'Mauricio Caranta',position:'GK',rating:79},{id:'boc2',name:'Hugo Ibarra',position:'DF',rating:81},{id:'boc3',name:'Daniel DÃ­az',position:'DF',rating:82},{id:'boc4',name:'Claudio Morel RodrÃ­guez',position:'DF',rating:80},{id:'boc5',name:'Clemente RodrÃ­guez',position:'DF',rating:80},{id:'boc6',name:'SebastiÃ¡n Battaglia',position:'MD',rating:83},{id:'boc7',name:'Fernando Gago',position:'MD',rating:84},{id:'boc8',name:'Juan RomÃ¡n Riquelme',position:'MD',rating:91},{id:'boc9',name:'Rodrigo Palacio',position:'FW',rating:84},{id:'boc10',name:'MartÃ­n Palermo',position:'FW',rating:85},              {id:'boc11',name:'Mauro Boselli',position:'FW',rating:81}
            ]},
            "Gremio 1995": {era:"Retro (1970-1990)",league:"Brasileirao Serie A",players:[
              {id:'gre1',name:'Danrlei',position:'GK',rating:82},{id:'gre2',name:'Arilson',position:'DF',rating:81},{id:'gre3',name:'Adilson',position:'DF',rating:83},{id:'gre4',name:'Rivarola',position:'DF',rating:82},{id:'gre5',name:'Roger',position:'DF',rating:83},{id:'gre6',name:'Dinho',position:'MD',rating:82},{id:'gre7',name:'C. Miguel',position:'MD',rating:84},{id:'gre8',name:'Goiano',position:'MD',rating:81},{id:'gre9',name:'P. Nunes',position:'FW',rating:85},{id:'gre10',name:'Jardel',position:'FW',rating:87},{id:'gre11',name:'Zinho',position:'MD',rating:83}
            ]},
            "Penarol 1966": {era:"Klasik (1945-1970)",league:"Uruguayan Primera Division",players:[
              {id:'pen1',name:'L. Mazurkiewicz',position:'GK',rating:87},{id:'pen2',name:'J. Lezcano',position:'DF',rating:82},{id:'pen3',name:'N. Diaz',position:'DF',rating:81},{id:'pen4',name:'L. Varela',position:'DF',rating:80},{id:'pen5',name:'T. Gonzalez',position:'DF',rating:80},{id:'pen6',name:'N. Goncalves',position:'MD',rating:85},{id:'pen7',name:'J. Abbadie',position:'MD',rating:84},{id:'pen8',name:'P. Rocha',position:'MD',rating:87},{id:'pen9',name:'J. Joya',position:'FW',rating:83},{id:'pen10',name:'J. SasÃ­a',position:'FW',rating:84},{id:'pen11',name:'A. Spencer',position:'FW',rating:88}
            ]},
            "Palmeiras 1999": {era:"Retro (1970-1990)",league:"Brasileirao Serie A",players:[
              {id:'pal1',name:'Marcos',position:'GK',rating:85},{id:'pal2',name:'Cesar',position:'DF',rating:80},{id:'pal3',name:'Roque Junior',position:'DF',rating:84},{id:'pal4',name:'Cleber',position:'DF',rating:82},{id:'pal5',name:'Junior',position:'DF',rating:83},{id:'pal6',name:'C. Sampaio',position:'MD',rating:84},{id:'pal7',name:'Rogerio',position:'MD',rating:82},{id:'pal8',name:'Alex',position:'MD',rating:85},{id:'pal9',name:'Euller',position:'FW',rating:81},{id:'pal10',name:'Luizao',position:'FW',rating:85},{id:'pal11',name:'Oseas',position:'FW',rating:82}
            ]}
          },
          tim_nasional: {
            "Brasil": {era:"Modern (2000-2026)",league:"Tim Nasional CONMEBOL",players:[
              {id:'bra1',name:'Alisson',position:'GK',rating:89},{id:'bra2',name:'Marquinhos',position:'DF',rating:87},{id:'bra3',name:'E. Militao',position:'DF',rating:85},{id:'bra4',name:'Gabriel',position:'DF',rating:88},{id:'bra5',name:'Danilo',position:'DF',rating:82},{id:'bra6',name:'Casemiro',position:'MD',rating:85},{id:'bra7',name:'Bruno Guimaraes',position:'MD',rating:86},{id:'bra8',name:'Raphinha',position:'MD',rating:89},{id:'bra9',name:'Vini Jr.',position:'FW',rating:89},{id:'bra10',name:'Rodrygo',position:'FW',rating:85},{id:'bra11',name:'Endrick',position:'FW',rating:81}
            ]},
            "Argentina": {era:"Modern (2000-2026)",league:"Tim Nasional CONMEBOL",players:[
              {id:'arg1',name:'E. Martinez',position:'GK',rating:85},{id:'arg2',name:'C. Romero',position:'DF',rating:86},{id:'arg3',name:'N. Molina',position:'DF',rating:82},{id:'arg4',name:'G. Pezzella',position:'DF',rating:81},{id:'arg5',name:'M. Acuna',position:'DF',rating:82},{id:'arg6',name:'L. Messi',position:'FW',rating:88},{id:'arg7',name:'E. Fernandez',position:'MD',rating:82},{id:'arg8',name:'A. Mac Allister',position:'MD',rating:87},{id:'arg9',name:'J. Alvarez',position:'FW',rating:87},{id:'arg10',name:'L. Martinez',position:'FW',rating:83},{id:'arg11',name:'P. Dybala',position:'FW',rating:88}
            ]},
            "Uruguay": {era:"Modern (2000-2026)",league:"Tim Nasional CONMEBOL",players:[
              {id:'uru1',name:'S. Rochet',position:'GK',rating:83},{id:'uru2',name:'R. Araujo',position:'DF',rating:86},{id:'uru3',name:'J. Gimenez',position:'DF',rating:84},{id:'uru4',name:'M. Olivera',position:'DF',rating:79},{id:'uru5',name:'N. Nandez',position:'DF',rating:79},{id:'uru6',name:'M. Ugarte',position:'MD',rating:83},{id:'uru7',name:'F. Valverde',position:'MD',rating:89},{id:'uru8',name:'G. De Arrascaeta',position:'MD',rating:85},{id:'uru9',name:'F. Pellistri',position:'FW',rating:80},{id:'uru10',name:'D. Nunez',position:'FW',rating:84},{id:'uru11',name:'B. Rodriguez',position:'FW',rating:81}
            ]},
            "Kolombia": {era:"Modern (2000-2026)",league:"Tim Nasional CONMEBOL",players:[
              {id:'col1',name:'C. Vargas',position:'GK',rating:81},{id:'col2',name:'D. Munoz',position:'DF',rating:81},{id:'col3',name:'Y. Mina',position:'DF',rating:82},{id:'col4',name:'C. Cuesta',position:'DF',rating:80},{id:'col5',name:'J. Mojica',position:'DF',rating:79},{id:'col6',name:'J. Rodriguez',position:'MD',rating:84},{id:'col7',name:'M. Uribe',position:'MD',rating:82},{id:'col8',name:'W. Barrios',position:'MD',rating:81},{id:'col9',name:'L. Diaz',position:'FW',rating:85},{id:'col10',name:'R. Borre',position:'FW',rating:82},{id:'col11',name:'J. Duran',position:'FW',rating:78}
            ]},
            "Chili": {era:"Modern (2000-2026)",league:"Tim Nasional CONMEBOL",players:[
              {id:'chi1',name:'C. Bravo',position:'GK',rating:80},{id:'chi2',name:'G. Medel',position:'DF',rating:79},{id:'chi3',name:'P. Diaz',position:'DF',rating:79},{id:'chi4',name:'G. Maripan',position:'DF',rating:80},{id:'chi5',name:'M. Isla',position:'DF',rating:78},{id:'chi6',name:'C. Vidal',position:'MD',rating:82},{id:'chi7',name:'A. Sanchez',position:'FW',rating:82},{id:'chi8',name:'D. Valdes',position:'MD',rating:79},{id:'chi9',name:'E. Vargas',position:'FW',rating:80},{id:'chi10',name:'B. Brereton Diaz',position:'FW',rating:79},{id:'chi11',name:'P. Parra',position:'FW',rating:77}
            ]}
          }
        },
        asia: {
          klub: {
            "Kashima Antlers 2018": {era:"Modern (2000-2026)",league:"J1 League",players:[
              {id:'ant1',name:'Kwoun Sun-tae',position:'GK',rating:77},{id:'ant2',name:'Atsuto Uchida',position:'DF',rating:76},{id:'ant3',name:'Gen Shoji',position:'DF',rating:78},{id:'ant4',name:'Daiki Iwamasa',position:'DF',rating:76},{id:'ant5',name:'Leandro',position:'DF',rating:75},{id:'ant6',name:'Leo Silva',position:'MD',rating:78},{id:'ant7',name:'Shoma Doi',position:'MD',rating:77},{id:'ant8',name:'Ryota Nagaki',position:'MD',rating:76},{id:'ant9',name:'Yuma Suzuki',position:'FW',rating:77},{id:'ant10',name:'Hiroki Abe',position:'FW',rating:76},{id:'ant11',name:'Serginho',position:'FW',rating:78}
            ]},
            "Persija Jakarta 2024": {era:"Modern (2000-2026)",league:"Liga 1 Indonesia",players:[
              {id:'psj1',name:'Andritany Ardhiyasa',position:'GK',rating:73},{id:'psj2',name:'Hansamu Yama',position:'DF',rating:72},{id:'psj3',name:'OndÅ™ej KÃºdela',position:'DF',rating:74},{id:'psj4',name:'Rizky Ridho',position:'DF',rating:73},{id:'psj5',name:'Firza Andika',position:'DF',rating:71},{id:'psj6',name:'Resky Fandi',position:'MD',rating:71},{id:'psj7',name:'Syahrian Abimanyu',position:'MD',rating:73},{id:'psj8',name:'Riko Simanjuntak',position:'MD',rating:72},{id:'psj9',name:'Michael KrmenÄÃ­k',position:'FW',rating:74},{id:'psj10',name:'Marko Å imiÄ‡',position:'FW',rating:73},{id:'psj11',name:'Osvaldo Haay',position:'FW',rating:72}
            ]},
            "Al-Hilal 2019": {era:"Modern (2000-2026)",league:"Saudi Pro League",players:[
              {id:'hil1',name:'Abdullah Al-Mayouf',position:'GK',rating:76},{id:'hil2',name:'Mohammed Al-Breik',position:'DF',rating:75},{id:'hil3',name:'Ali Al-Bulaihi',position:'DF',rating:76},{id:'hil4',name:'Osama Hawsawi',position:'DF',rating:77},{id:'hil5',name:'Yasser Al-Shahrani',position:'DF',rating:76},{id:'hil6',name:'Mohamed Kanno',position:'MD',rating:76},{id:'hil7',name:'Salman Al-Faraj',position:'MD',rating:78},{id:'hil8',name:'SebastiÃ¡n Giovinco',position:'MD',rating:84},{id:'hil9',name:'AndrÃ© Carrillo',position:'FW',rating:81},{id:'hil10',name:'BafÃ©timbi Gomis',position:'FW',rating:83},{id:'hil11',name:'Salem Al-Dawsari',position:'FW',rating:80}
            ]},
            "Urawa Red Diamonds 2007": {era:"Modern (2000-2026)",league:"J1 League",players:[
              {id:'ura1',name:'RyÅta Tsuzuki',position:'GK',rating:75},{id:'ura2',name:'Keita Suzuki',position:'DF',rating:76},{id:'ura3',name:'Marcus Tulio Tanaka',position:'DF',rating:79},{id:'ura4',name:'Nene',position:'DF',rating:75},{id:'ura5',name:'Hajime Hosogai',position:'DF',rating:75},{id:'ura6',name:'Mitsuo Ogawa',position:'MD',rating:74},{id:'ura7',name:'YÅ«ki Abe',position:'MD',rating:78},{id:'ura8',name:'Robson Ponte',position:'MD',rating:80},{id:'ura9',name:'Tatsuya Tanaka',position:'FW',rating:76},{id:'ura10',name:'Washington',position:'FW',rating:79},{id:'ura11',name:'Yoshito ÅŒkubo',position:'FW',rating:78}
            ]},
            "Jeonbuk Hyundai Motors 2016": {era:"Modern (2000-2026)",league:"K League 1",players:[
              {id:'jeo1',name:'Kwon Sun-tae',position:'GK',rating:77},{id:'jeo2',name:'Choi Chul-soon',position:'DF',rating:75},{id:'jeo3',name:'Kim Hyung-il',position:'DF',rating:77},{id:'jeo4',name:'Lim Jong-eun',position:'DF',rating:74},{id:'jeo5',name:'Park Won-jae',position:'DF',rating:75},{id:'jeo6',name:'Lee Jae-sung',position:'MD',rating:80},{id:'jeo7',name:'Leonardo',position:'MD',rating:80},{id:'jeo8',name:'Kim Bo-kyung',position:'MD',rating:78},{id:'jeo9',name:'Ricardo Lopes',position:'FW',rating:80},{id:'jeo10',name:'Kim Shin-wook',position:'FW',rating:80},              {id:'jeo11',name:'Han Kyo-won',position:'FW',rating:76}
            ]},
            "Guangzhou 2015": {era:"Modern (2000-2026)",league:"Chinese Super League",players:[
              {id:'gua1',name:'Zeng Cheng',position:'GK',rating:78},{id:'gua2',name:'Zhang Linpeng',position:'DF',rating:79},{id:'gua3',name:'Feng Xiaoting',position:'DF',rating:78},{id:'gua4',name:'Kim Young-gwon',position:'DF',rating:80},{id:'gua5',name:'Li Xuepeng',position:'DF',rating:76},{id:'gua6',name:'Zheng Zhi',position:'MD',rating:80},{id:'gua7',name:'Paulinho',position:'MD',rating:84},{id:'gua8',name:'Huang Bowen',position:'MD',rating:77},{id:'gua9',name:'R. Goulart',position:'FW',rating:83},{id:'gua10',name:'Elkeson',position:'FW',rating:82},{id:'gua11',name:'Gao Lin',position:'FW',rating:79}
            ]},
            "Al-Ittihad 2005": {era:"Modern (2000-2026)",league:"Saudi Pro League",players:[
              {id:'itt1',name:'M. Zaid',position:'GK',rating:78},{id:'itt2',name:'A. Dokhi',position:'DF',rating:76},{id:'itt3',name:'R. Tukar',position:'DF',rating:76},{id:'itt4',name:'S. Kariri',position:'DF',rating:77},{id:'itt5',name:'H. Al-Montashari',position:'DF',rating:77},{id:'itt6',name:'K. Al-Owairan',position:'MD',rating:76},{id:'itt7',name:'M. Amin',position:'MD',rating:78},{id:'itt8',name:'M. Abushgeer',position:'MD',rating:75},{id:'itt9',name:'H. Idris',position:'FW',rating:78},{id:'itt10',name:'Marcio',position:'FW',rating:80},{id:'itt11',name:'S. Ricardo',position:'FW',rating:79}
            ]}
          },
          tim_nasional: {
            "Jepang": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'jpn1',name:'S. Gonda',position:'GK',rating:78},{id:'jpn2',name:'K. Itakura',position:'DF',rating:80},{id:'jpn3',name:'H. Ito',position:'DF',rating:78},{id:'jpn4',name:'T. Tomiyasu',position:'DF',rating:82},{id:'jpn5',name:'Y. Nagatomo',position:'DF',rating:76},{id:'jpn6',name:'W. Endo',position:'MD',rating:80},{id:'jpn7',name:'D. Kamada',position:'MD',rating:83},{id:'jpn8',name:'T. Minamino',position:'MD',rating:81},{id:'jpn9',name:'K. Mitoma',position:'FW',rating:83},{id:'jpn10',name:'R. Doan',position:'FW',rating:80},{id:'jpn11',name:'A. Ueda',position:'FW',rating:78}
            ]},
            "Korea Selatan": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'kor1',name:'Kim Seung-gyu',position:'GK',rating:79},{id:'kor2',name:'Kim Min-jae',position:'DF',rating:83},{id:'kor3',name:'Jung Seung-hyun',position:'DF',rating:77},{id:'kor4',name:'Kim Young-gwon',position:'DF',rating:78},{id:'kor5',name:'Lee Ki-je',position:'DF',rating:76},{id:'kor6',name:'Hwang In-beom',position:'MD',rating:79},{id:'kor7',name:'Lee Jae-sung',position:'MD',rating:80},{id:'kor8',name:'Son Heung-min',position:'FW',rating:86},{id:'kor9',name:'Hwang Hee-chan',position:'FW',rating:81},{id:'kor10',name:'Cho Gue-sung',position:'FW',rating:78},{id:'kor11',name:'Lee Kang-in',position:'MD',rating:81}
            ]},
            "Australia": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'aus1',name:'M. Ryan',position:'GK',rating:80},{id:'aus2',name:'H. Souttar',position:'DF',rating:78},{id:'aus3',name:'K. Rowles',position:'DF',rating:76},{id:'aus4',name:'A. Behich',position:'DF',rating:75},{id:'aus5',name:'N. Atkinson',position:'DF',rating:74},{id:'aus6',name:'A. Irvine',position:'MD',rating:76},{id:'aus7',name:'R. McGree',position:'MD',rating:75},{id:'aus8',name:'C. Goodwin',position:'MD',rating:75},{id:'aus9',name:'M. Duke',position:'FW',rating:75},{id:'aus10',name:'C. Boyle',position:'FW',rating:76},{id:'aus11',name:'G. Kuol',position:'FW',rating:72}
            ]},
            "Arab Saudi": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'sau1',name:'M. Al-Owais',position:'GK',rating:78},{id:'sau2',name:'S. Abdulhamid',position:'DF',rating:77},{id:'sau3',name:'A. Al-Bulaihi',position:'DF',rating:76},{id:'sau4',name:'H. Tambakti',position:'DF',rating:75},{id:'sau5',name:'Y. Al-Shahrani',position:'DF',rating:76},{id:'sau6',name:'M. Kanno',position:'MD',rating:76},{id:'sau7',name:'A. Al-Najei',position:'MD',rating:75},{id:'sau8',name:'S. Al-Faraj',position:'MD',rating:78},{id:'sau9',name:'F. Al-Brikan',position:'FW',rating:77},{id:'sau10',name:'S. Al-Dawsari',position:'FW',rating:80},{id:'sau11',name:'A. Al-Ghamdi',position:'FW',rating:74}
            ]},
            "Iran": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'irn1',name:'A. Beiranvand',position:'GK',rating:79},{id:'irn2',name:'S. Moharrami',position:'DF',rating:76},{id:'irn3',name:'M. Pouraliganji',position:'DF',rating:77},{id:'irn4',name:'S. Khalilzadeh',position:'DF',rating:77},{id:'irn5',name:'M. Hosseini',position:'DF',rating:76},{id:'irn6',name:'S. Ebrahimi',position:'MD',rating:76},{id:'irn7',name:'A. Ghoddos',position:'MD',rating:78},{id:'irn8',name:'M. Taremi',position:'FW',rating:84},{id:'irn9',name:'S. Azmoun',position:'FW',rating:82},{id:'irn10',name:'A. Jahanbakhsh',position:'FW',rating:78},{id:'irn11',name:'M. Mohebi',position:'FW',rating:75}
            ]},
            "Qatar": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'qat1',name:'M. Barsham',position:'GK',rating:76},{id:'qat2',name:'R. RÃ³-RÃ³',position:'DF',rating:75},{id:'qat3',name:'A. Mukhtar',position:'DF',rating:74},{id:'qat4',name:'B. Khoukhi',position:'DF',rating:75},{id:'qat5',name:'H. Ahmed',position:'DF',rating:74},{id:'qat6',name:'A. Madibo',position:'MD',rating:74},{id:'qat7',name:'M. Waad',position:'MD',rating:74},{id:'qat8',name:'A. Afif',position:'FW',rating:80},{id:'qat9',name:'A. Ali',position:'FW',rating:78},{id:'qat10',name:'H. Al-Haydos',position:'FW',rating:77},{id:'qat11',name:'I. Afif',position:'MD',rating:73}
            ]},
            "Irak": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'irq1',name:'J. Hassan',position:'GK',rating:75},{id:'irq2',name:'R. Sulaka',position:'DF',rating:74},{id:'irq3',name:'M. Ali',position:'DF',rating:73},{id:'irq4',name:'H. Yahia',position:'DF',rating:72},{id:'irq5',name:'A. Putros',position:'DF',rating:73},{id:'irq6',name:'A. Al-Attiyah',position:'MD',rating:73},{id:'irq7',name:'O. Rashid',position:'MD',rating:74},{id:'irq8',name:'I. Bayesh',position:'MD',rating:75},{id:'irq9',name:'M. Ali',position:'FW',rating:76},{id:'irq10',name:'A. Hussein',position:'FW',rating:77},              {id:'irq11',name:'H. Abdul-Amir',position:'MD',rating:73}
            ]},
            "Indonesia": {era:"Modern (2000-2026)",league:"Tim Nasional AFC",players:[
              {id:'idn1',name:'Emil Audero',position:'GK',rating:77},{id:'idn2',name:'Maarten Paes',position:'GK',rating:74},{id:'idn3',name:'Jay Idzes',position:'DF',rating:74},{id:'idn4',name:'Calvin Verdonk',position:'DF',rating:73},{id:'idn5',name:'Sandy Walsh',position:'DF',rating:73},{id:'idn6',name:'Justin Hubner',position:'DF',rating:72},{id:'idn7',name:'Thom Haye',position:'MD',rating:74},{id:'idn8',name:'Marselino Ferdinan',position:'MD',rating:74},{id:'idn9',name:'Ivar Jenner',position:'MD',rating:72},{id:'idn10',name:'Ragnar Oratmangoen',position:'FW',rating:71},{id:'idn11',name:'Rafael Struick',position:'FW',rating:70}
            ]}
          }
        },
        afrika: {
          klub: {
            "Wydad Casablanca 2022": {era:"Modern (2000-2026)",league:"Botola Pro",players:[
              {id:'wyd1',name:'Ahmed Reda Tagnaouti',position:'GK',rating:78},{id:'wyd2',name:'Achraf Dari',position:'DF',rating:77},{id:'wyd3',name:'Amine Farhane',position:'DF',rating:75},{id:'wyd4',name:'Ayoub El Amloud',position:'DF',rating:75},{id:'wyd5',name:'Mohamed Nahiri',position:'DF',rating:74},{id:'wyd6',name:'Yahya Jabrane',position:'MD',rating:76},{id:'wyd7',name:'Jalal Daoudi',position:'MD',rating:75},{id:'wyd8',name:'Reda Jaadi',position:'MD',rating:74},{id:'wyd9',name:'Zouhair El Moutaraji',position:'FW',rating:76},{id:'wyd10',name:'Guy Mbenza',position:'FW',rating:75},{id:'wyd11',name:'Badie Aouk',position:'FW',rating:74}
            ]},
            "Al-Ahly 2006": {era:"Modern (2000-2026)",league:"Egyptian Premier League",players:[
              {id:'ahl1',name:'Essam El-Hadary',position:'GK',rating:84},{id:'ahl2',name:'Emad El-Nahhas',position:'DF',rating:77},{id:'ahl3',name:'Wael El-Quabbani',position:'DF',rating:76},{id:'ahl4',name:'Shady Mohamed',position:'DF',rating:76},{id:'ahl5',name:'Ahmad El-Sayed',position:'DF',rating:74},{id:'ahl6',name:'Mohamed Shawky',position:'MD',rating:79},{id:'ahl7',name:'Hassan Mostafa',position:'MD',rating:76},{id:'ahl8',name:'Mohamed Aboutrika',position:'MD',rating:86},{id:'ahl9',name:'Flavio Amado',position:'FW',rating:80},{id:'ahl10',name:'Emad Moteab',position:'FW',rating:80},{id:'ahl11',name:'Osama Hosny',position:'FW',rating:77}
            ]},
            "EspÃ©rance 2019": {era:"Modern (2000-2026)",league:"Tunisian Ligue 1",players:[
              {id:'esp1',name:'Moez Ben Cherifia',position:'GK',rating:76},{id:'esp2',name:'Sameh Derbali',position:'DF',rating:74},{id:'esp3',name:'Chamseddine Dhaouadi',position:'DF',rating:75},{id:'esp4',name:'Mohamed Ali Yaakoubi',position:'DF',rating:75},{id:'esp5',name:'Ayman Ben Mohamed',position:'DF',rating:73},{id:'esp6',name:'Franck Kom',position:'MD',rating:76},{id:'esp7',name:'Fousseny Coulibaly',position:'MD',rating:75},{id:'esp8',name:'Saad Bguir',position:'MD',rating:78},{id:'esp9',name:'Anice Badri',position:'FW',rating:77},{id:'esp10',name:'Youssef Belaili',position:'FW',rating:80},              {id:'esp11',name:'Haythem Jouini',position:'FW',rating:75}
            ]},
            "TP Mazembe 2010": {era:"Modern (2000-2026)",league:"Linafoot",players:[
              {id:'maz1',name:'Kidiaba',position:'GK',rating:76},{id:'maz2',name:'Kimwaki',position:'DF',rating:74},{id:'maz3',name:'Nkulukuta',position:'DF',rating:74},{id:'maz4',name:'Kaluyituka',position:'DF',rating:77},{id:'maz5',name:'Mihayo',position:'DF',rating:75},{id:'maz6',name:'Bedi',position:'MD',rating:75},{id:'maz7',name:'Kasongo',position:'MD',rating:73},{id:'maz8',name:'Kanda',position:'MD',rating:76},{id:'maz9',name:'Kabangu',position:'FW',rating:76},{id:'maz10',name:'Dioko',position:'FW',rating:75},{id:'maz11',name:'Mbayo',position:'FW',rating:74}
            ]},
            "Raja Casablanca 2013": {era:"Modern (2000-2026)",league:"Botola Pro",players:[
              {id:'raj1',name:'Y. El Had',position:'GK',rating:77},{id:'raj2',name:'A. Kerrouchi',position:'DF',rating:75},{id:'raj3',name:'Z. El Hachimi',position:'DF',rating:74},{id:'raj4',name:'I. Benlamaalem',position:'DF',rating:74},{id:'raj5',name:'M. Moutouali',position:'DF',rating:77},{id:'raj6',name:'O. El Kaddouri',position:'MD',rating:76},{id:'raj7',name:'A. Zniti',position:'MD',rating:74},{id:'raj8',name:'K. Oulhaj',position:'MD',rating:75},{id:'raj9',name:'M. Iajour',position:'FW',rating:76},{id:'raj10',name:'A. Hafidi',position:'FW',rating:75},{id:'raj11',name:'Y. Salhi',position:'FW',rating:74}
            ]}
          },
          tim_nasional: {
            "Senegal": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'sen1',name:'E. Mendy',position:'GK',rating:82},{id:'sen2',name:'K. Koulibaly',position:'DF',rating:85},{id:'sen3',name:'A. Diallo',position:'DF',rating:79},{id:'sen4',name:'I. Jakobs',position:'DF',rating:77},{id:'sen5',name:'F. Mendy',position:'DF',rating:83},{id:'sen6',name:'I. Gueye',position:'MD',rating:82},{id:'sen7',name:'P. Gueye',position:'MD',rating:79},{id:'sen8',name:'S. Mane',position:'FW',rating:81},{id:'sen9',name:'I. Sarr',position:'FW',rating:81},{id:'sen10',name:'H. Diallo',position:'FW',rating:79},{id:'sen11',name:'N. Jackson',position:'FW',rating:82}
            ]},
            "Nigeria": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'ngr1',name:'F. Uzoho',position:'GK',rating:75},{id:'ngr2',name:'W. Troost-Ekong',position:'DF',rating:78},{id:'ngr3',name:'C. Bassey',position:'DF',rating:77},{id:'ngr4',name:'K. Omeruo',position:'DF',rating:76},{id:'ngr5',name:'Z. Sanusi',position:'DF',rating:75},{id:'ngr6',name:'W. Ndidi',position:'MD',rating:80},{id:'ngr7',name:'A. Iwobi',position:'MD',rating:79},{id:'ngr8',name:'K. Iheanacho',position:'FW',rating:79},{id:'ngr9',name:'V. Osimhen',position:'FW',rating:85},{id:'ngr10',name:'S. Chukwueze',position:'FW',rating:80},{id:'ngr11',name:'A. Lookman',position:'FW',rating:82}
            ]},
            "Maroko": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'mor1',name:'Y. Bounou',position:'GK',rating:84},{id:'mor2',name:'A. Hakimi',position:'DF',rating:89},{id:'mor3',name:'N. Mazraoui',position:'DF',rating:82},{id:'mor4',name:'R. Saiss',position:'DF',rating:80},{id:'mor5',name:'N. Aguerd',position:'DF',rating:81},{id:'mor6',name:'S. Amrabat',position:'MD',rating:83},{id:'mor7',name:'A. Ounahi',position:'MD',rating:80},{id:'mor8',name:'H. Ziyech',position:'MD',rating:84},{id:'mor9',name:'Y. En-Nesyri',position:'FW',rating:81},{id:'mor10',name:'A. El Kaabi',position:'FW',rating:79},{id:'mor11',name:'S. Ezzalzouli',position:'FW',rating:78}
            ]},
            "Mesir": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'egy1',name:'M. El Shenawy',position:'GK',rating:80},{id:'egy2',name:'M. Hany',position:'DF',rating:77},{id:'egy3',name:'A. Hegazy',position:'DF',rating:79},{id:'egy4',name:'M. Abdelmonem',position:'DF',rating:77},{id:'egy5',name:'A. Fathy',position:'DF',rating:76},{id:'egy6',name:'M. Elneny',position:'MD',rating:78},{id:'egy7',name:'T. Hamed',position:'MD',rating:78},{id:'egy8',name:'A. El Said',position:'MD',rating:78},{id:'egy9',name:'M. Salah',position:'FW',rating:91},{id:'egy10',name:'M. Trezeguet',position:'FW',rating:78},{id:'egy11',name:'O. Marmoush',position:'FW',rating:84}
            ]},
            "Ghana": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'gha1',name:'J. Wollacott',position:'GK',rating:74},{id:'gha2',name:'T. Lamptey',position:'DF',rating:78},{id:'gha3',name:'A. Djiku',position:'DF',rating:78},{id:'gha4',name:'M. Salisu',position:'DF',rating:79},{id:'gha5',name:'G. Mensah',position:'DF',rating:75},{id:'gha6',name:'T. Partey',position:'MD',rating:81},{id:'gha7',name:'I. Abdul',position:'MD',rating:74},{id:'gha8',name:'M. Kudus',position:'MD',rating:85},{id:'gha9',name:'J. Ayew',position:'FW',rating:79},{id:'gha10',name:'I. Williams',position:'FW',rating:78},{id:'gha11',name:'A. Semenyo',position:'FW',rating:78}
            ]},
            "Kamerun": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'cmr1',name:'A. Onana',position:'GK',rating:83},{id:'cmr2',name:'C. Wooh',position:'DF',rating:76},{id:'cmr3',name:'J. Castelletto',position:'DF',rating:76},{id:'cmr4',name:'N. Nkoulou',position:'DF',rating:78},{id:'cmr5',name:'N. Tolo',position:'DF',rating:76},{id:'cmr6',name:'F. Zambo Anguissa',position:'MD',rating:84},{id:'cmr7',name:'P. Kunde',position:'MD',rating:77},{id:'cmr8',name:'K. Toko Ekambi',position:'FW',rating:79},{id:'cmr9',name:'V. Aboubakar',position:'FW',rating:80},{id:'cmr10',name:'B. Mbeumo',position:'FW',rating:85},{id:'cmr11',name:'E. Choupo-Moting',position:'FW',rating:80}
            ]},
            "Pantai Gading": {era:"Modern (2000-2026)",league:"Tim Nasional CAF",players:[
              {id:'civ1',name:'Y. Fofana',position:'GK',rating:80},{id:'civ2',name:'S. Aurier',position:'DF',rating:80},{id:'civ3',name:'E. Bailly',position:'DF',rating:80},{id:'civ4',name:'W. Boly',position:'DF',rating:79},{id:'civ5',name:'G. Konan',position:'DF',rating:76},{id:'civ6',name:'F. Kessie',position:'MD',rating:85},{id:'civ7',name:'I. Sangare',position:'MD',rating:81},{id:'civ8',name:'S. Seri',position:'MD',rating:78},{id:'civ9',name:'N. Pepe',position:'FW',rating:83},{id:'civ10',name:'S. Haller',position:'FW',rating:82},{id:'civ11',name:'J. Boga',position:'FW',rating:80}
            ]}
          }
        },
        amerika_utara: {
          tim_nasional: {
            "Amerika Serikat": {era:"Modern (2000-2026)",league:"Tim Nasional CONCACAF",players:[
              {id:'usa1',name:'M. Turner',position:'GK',rating:80},{id:'usa2',name:'S. Dest',position:'DF',rating:80},{id:'usa3',name:'C. Richards',position:'DF',rating:78},{id:'usa4',name:'T. Ream',position:'DF',rating:78},{id:'usa5',name:'A. Robinson',position:'DF',rating:80},{id:'usa6',name:'T. Adams',position:'MD',rating:80},{id:'usa7',name:'W. McKennie',position:'MD',rating:81},{id:'usa8',name:'G. Reyna',position:'MD',rating:82},{id:'usa9',name:'C. Pulisic',position:'FW',rating:82},{id:'usa10',name:'F. Balogun',position:'FW',rating:80},{id:'usa11',name:'T. Weah',position:'FW',rating:79}
            ]},
            "Meksiko": {era:"Modern (2000-2026)",league:"Tim Nasional CONCACAF",players:[
              {id:'mex1',name:'G. Ochoa',position:'GK',rating:82},{id:'mex2',name:'J. Sanchez',position:'DF',rating:78},{id:'mex3',name:'C. Montes',position:'DF',rating:80},{id:'mex4',name:'J. Araujo',position:'DF',rating:79},{id:'mex5',name:'J. Gallardo',position:'DF',rating:78},{id:'mex6',name:'E. Alvarez',position:'MD',rating:81},{id:'mex7',name:'L. Chavez',position:'MD',rating:80},{id:'mex8',name:'O. Pineda',position:'MD',rating:78},{id:'mex9',name:'H. Lozano',position:'FW',rating:82},{id:'mex10',name:'R. Jimenez',position:'FW',rating:81},{id:'mex11',name:'S. Gimenez',position:'FW',rating:82}
            ]},
            "Kosta Rika": {era:"Modern (2000-2026)",league:"Tim Nasional CONCACAF",players:[
              {id:'crc1',name:'K. Navas',position:'GK',rating:85},{id:'crc2',name:'F. Calvo',position:'DF',rating:76},{id:'crc3',name:'J. Vargas',position:'DF',rating:75},{id:'crc4',name:'O. Duarte',position:'DF',rating:76},{id:'crc5',name:'B. Oviedo',position:'DF',rating:75},{id:'crc6',name:'C. Borges',position:'MD',rating:76},{id:'crc7',name:'Y. Tejeda',position:'MD',rating:75},{id:'crc8',name:'J. Ruiz',position:'MD',rating:76},{id:'crc9',name:'J. Campbell',position:'FW',rating:78},{id:'crc10',name:'A. Contreras',position:'FW',rating:74},{id:'crc11',name:'M. Ugalde',position:'FW',rating:75}
            ]},
            "Kanada": {era:"Modern (2000-2026)",league:"Tim Nasional CONCACAF",players:[
              {id:'can1',name:'M. Crepeau',position:'GK',rating:77},{id:'can2',name:'A. Davies',position:'DF',rating:85},{id:'can3',name:'K. Miller',position:'DF',rating:75},{id:'can4',name:'S. Vitoria',position:'DF',rating:76},{id:'can5',name:'R. Laryea',position:'DF',rating:75},{id:'can6',name:'S. Eustaquio',position:'MD',rating:78},{id:'can7',name:'J. Osorio',position:'MD',rating:76},{id:'can8',name:'I. Kone',position:'MD',rating:76},{id:'can9',name:'J. David',position:'FW',rating:80},{id:'can10',name:'C. Larin',position:'FW',rating:78},{id:'can11',name:'T. Buchanan',position:'FW',rating:77}
            ]},
            "Jamaika": {era:"Modern (2000-2026)",league:"Tim Nasional CONCACAF",players:[
              {id:'jam1',name:'A. Blake',position:'GK',rating:76},{id:'jam2',name:'D. Lowe',position:'DF',rating:74},{id:'jam3',name:'A. Mariappa',position:'DF',rating:75},{id:'jam4',name:'L. Moore',position:'DF',rating:73},{id:'jam5',name:'K. Lawrence',position:'DF',rating:74},{id:'jam6',name:'R. Morrison',position:'MD',rating:74},{id:'jam7',name:'D. Johnson',position:'MD',rating:73},{id:'jam8',name:'B. Reid',position:'MD',rating:74},{id:'jam9',name:'L. Bailey',position:'FW',rating:84},{id:'jam10',name:'M. Antonio',position:'FW',rating:81},{id:'jam11',name:'S. Nicholson',position:'FW',rating:74}
            ]}
          }
        },
        oseania: {
          tim_nasional: {
            "Selandia Baru": {era:"Modern (2000-2026)",league:"Tim Nasional OFC",players:[
              {id:'nzl1',name:'O. Sail',position:'GK',rating:75},{id:'nzl2',name:'W. Reid',position:'DF',rating:77},{id:'nzl3',name:'T. Smith',position:'DF',rating:75},{id:'nzl4',name:'N. Pijnaker',position:'DF',rating:73},{id:'nzl5',name:'D. Hall',position:'DF',rating:73},{id:'nzl6',name:'J. Bell',position:'MD',rating:74},{id:'nzl7',name:'M. Rufer',position:'MD',rating:74},{id:'nzl8',name:'C. Wood',position:'FW',rating:80},{id:'nzl9',name:'E. Waine',position:'FW',rating:73},{id:'nzl10',name:'A. Greive',position:'FW',rating:72},{id:'nzl11',name:'B. Waine',position:'FW',rating:72}
            ]},
            "Tahiti": {era:"Modern (2000-2026)",league:"Tim Nasional OFC",players:[
              {id:'tah1',name:'M. Roche',position:'GK',rating:68},{id:'tah2',name:'J. Vero',position:'DF',rating:67},{id:'tah3',name:'N. Vallar',position:'DF',rating:68},{id:'tah4',name:'S. Tehau',position:'DF',rating:68},{id:'tah5',name:'H. Poroiae',position:'DF',rating:66},{id:'tah6',name:'H. Caroine',position:'MD',rating:66},{id:'tah7',name:'S. Tauotaha',position:'MD',rating:66},{id:'tah8',name:'J. Tehau',position:'MD',rating:67},{id:'tah9',name:'A. Tehau',position:'FW',rating:68},{id:'tah10',name:'T. Tehau',position:'FW',rating:67},{id:'tah11',name:'R. Tiaiho',position:'FW',rating:65}
            ]},
            "Fiji": {era:"Modern (2000-2026)",league:"Tim Nasional OFC",players:[
              {id:'fij1',name:'S. M. Khan',position:'GK',rating:67},{id:'fij2',name:'S. Ralulu',position:'DF',rating:66},{id:'fij3',name:'J. Turagalailai',position:'DF',rating:66},{id:'fij4',name:'R. Savenaca',position:'DF',rating:65},{id:'fij5',name:'S. Kautoga',position:'DF',rating:66},{id:'fij6',name:'T. S. Chand',position:'MD',rating:66},{id:'fij7',name:'N. Vakatawai',position:'MD',rating:65},{id:'fij8',name:'R. Chand',position:'MD',rating:65},{id:'fij9',name:'R. Krishna',position:'FW',rating:68},{id:'fij10',name:'A. Kainihewe',position:'FW',rating:65},{id:'fij11',name:'S. Nabein',position:'FW',rating:64}
            ]}
          }
        }
};

