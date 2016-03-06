var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        angular.module('ticketing', [
            // External
            'ionic',
            'ionic-material',
            'ionMdInput',
            'ngMaterial'
        ]);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech

var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var TicketingService = (function () {
            function TicketingService($q) {
                this.$q = $q;
            }
            TicketingService.prototype.validParameters = function () {
                return this.fromStation &&
                    this.toStation &&
                    this.fromDate &&
                    this.passengers;
            };
            TicketingService.prototype.getJourneysTowards = function () {
                var deferred = this.$q.defer();
                var journeys = [
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 10), "1h30m", "STANDARD", 81.40),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 30), "1h45m", "STANDARD", 203.50),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 50), "2h13m", "STANDARD", 237.50)
                ];
                deferred.resolve(journeys);
                return deferred.promise;
            };
            TicketingService.prototype.getJourneysReturn = function () {
                var deferred = this.$q.defer();
                var journeys = [
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 10), "1h30m", "STANDARD", 81.40),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 30), "1h45m", "STANDARD", 203.50),
                    new Ticketing.Journey(new Date(2016, 3, 5, 18, 50), new Date(2016, 3, 5, 20, 50), "2h13m", "STANDARD", 237.50)
                ];
                deferred.resolve(journeys);
                return deferred.promise;
            };
            TicketingService.$inject = ["$q"];
            return TicketingService;
        }());
        Ticketing.TicketingService = TicketingService;
        angular.module('ticketing')
            .service('TicketingService', TicketingService);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech

"use strict";
var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        angular.module('ticketing')
            .config(function ($stateProvider) {
            $stateProvider
                .state('app.ticketing', {
                url: '/ticketing',
                abstract: true,
                template: "<ion-nav-view>"
            })
                .state('app.ticketing.search', {
                url: '/search',
                templateUrl: 'app/ticketing/search/search.html',
                controller: 'SearchController as $ctrl'
            })
                .state('app.ticketing.results', {
                url: '/results',
                templateUrl: 'app/ticketing/results/results.html',
                controller: 'ResultsController as $ctrl'
            });
        });
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {}));
})(RailTech || (RailTech = {}));



var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var SearchStation = (function () {
            function SearchStation() {
            }
            return SearchStation;
        }());
        Ticketing.SearchStation = SearchStation;
        var Journey = (function () {
            function Journey(departureDate, arrivalDate, lengthStr, type, price) {
                this.departureDate = departureDate;
                this.arrivalDate = arrivalDate;
                this.lengthStr = lengthStr;
                this.type = type;
                this.price = price;
            }
            return Journey;
        }());
        Ticketing.Journey = Journey;
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {}));
})(RailTech || (RailTech = {}));

var RailTech;
(function (RailTech) {
    RailTech.stations = [
        { display: "Abbey Wood", value: "ABW" },
        { display: "Aber", value: "ABE" },
        { display: "Abercynon", value: "ACY" },
        { display: "Aberdare", value: "ABA" },
        { display: "Aberdeen", value: "ABD" },
        { display: "Aberdour", value: "AUR" },
        { display: "Aberdovey", value: "AVY" },
        { display: "Abererch", value: "ABH" },
        { display: "Abergavenny", value: "AGV" },
        { display: "Abergele & Pensarn", value: "AGL" },
        { display: "Aberystwyth", value: "AYW" },
        { display: "Accrington", value: "ACR" },
        { display: "Achanalt", value: "AAT" },
        { display: "Achnasheen", value: "ACN" },
        { display: "Achnashellach", value: "ACH" },
        { display: "Acklington", value: "ACK" },
        { display: "Acle", value: "ACL" },
        { display: "Acocks Green", value: "ACG" },
        { display: "Acton Bridge (Cheshire)", value: "ACB" },
        { display: "Acton Central", value: "ACC" },
        { display: "Acton Main Line", value: "AML" },
        { display: "Adderley Park", value: "ADD" },
        { display: "Addiewell", value: "ADW" },
        { display: "Addlestone", value: "ASN" },
        { display: "Adisham", value: "ADM" },
        { display: "Adlington (Cheshire)", value: "ADC" },
        { display: "Adlington (Lancs)", value: "ADL" },
        { display: "Adwick", value: "AWK" },
        { display: "Aigburth", value: "AIG" },
        { display: "Ainsdale", value: "ANS" },
        { display: "Aintree", value: "AIN" },
        { display: "Airbles", value: "AIR" },
        { display: "Airdrie", value: "ADR" },
        { display: "Albany Park", value: "AYP" },
        { display: "Albrighton", value: "ALB" },
        { display: "Alderley Edge", value: "ALD" },
        { display: "Aldermaston", value: "AMT" },
        { display: "Aldershot", value: "AHT" },
        { display: "Aldrington", value: "AGT" },
        { display: "Alexandra Palace", value: "AAP" },
        { display: "Alexandra Parade", value: "AXP" },
        { display: "Alexandria", value: "ALX" },
        { display: "Alfreton", value: "ALF" },
        { display: "Allens West", value: "ALW" },
        { display: "Alloa", value: "ALO" },
        { display: "Alness", value: "ASS" },
        { display: "Alnmouth", value: "ALM" },
        { display: "Alresford (Essex)", value: "ALR" },
        { display: "Alsager", value: "ASG" },
        { display: "Althorne (Essex)", value: "ALN" },
        { display: "Althorpe", value: "ALP" },
        { display: "Altnabreac", value: "ABC" },
        { display: "Alton", value: "AON" },
        { display: "Altrincham", value: "ALT" },
        { display: "Alvechurch", value: "ALV" },
        { display: "Ambergate", value: "AMB" },
        { display: "Amberley", value: "AMY" },
        { display: "Amersham", value: "AMR" },
        { display: "Ammanford", value: "AMF" },
        { display: "Ancaster", value: "ANC" },
        { display: "Anderston", value: "AND" },
        { display: "Andover", value: "ADV" },
        { display: "Anerley", value: "ANZ" },
        { display: "Angel Road", value: "AGR" },
        { display: "Angmering", value: "ANG" },
        { display: "Annan", value: "ANN" },
        { display: "Anniesland", value: "ANL" },
        { display: "Ansdell & Fairhaven", value: "AFV" },
        { display: "Apperley Bridge", value: "APY" },
        { display: "Appleby", value: "APP" },
        { display: "Appledore (Kent)", value: "APD" },
        { display: "Appleford", value: "APF" },
        { display: "Appley Bridge", value: "APB" },
        { display: "Apsley", value: "APS" },
        { display: "Arbroath", value: "ARB" },
        { display: "Ardgay", value: "ARD" },
        { display: "Ardlui", value: "AUI" },
        { display: "Ardrossan Harbour", value: "ADS" },
        { display: "Ardrossan South Beach", value: "ASB" },
        { display: "Ardrossan Town", value: "ADN" },
        { display: "Ardwick", value: "ADK" },
        { display: "Argyle Street", value: "AGS" },
        { display: "Arisaig", value: "ARG" },
        { display: "Arlesey", value: "ARL" },
        { display: "Armadale (West Lothian)", value: "ARM" },
        { display: "Armathwaite", value: "AWT" },
        { display: "Arnside", value: "ARN" },
        { display: "Arram", value: "ARR" },
        { display: "Arrochar & Tarbet", value: "ART" },
        { display: "Arundel", value: "ARU" },
        { display: "Ascot (Berks)", value: "ACT" },
        { display: "Ascott-under-Wychwood", value: "AUW" },
        { display: "Ash", value: "ASH" },
        { display: "Ash Vale", value: "AHV" },
        { display: "Ashburys", value: "ABY" },
        { display: "Ashchurch for Tewkesbury", value: "ASC" },
        { display: "Ashfield", value: "ASF" },
        { display: "Ashford (Surrey)", value: "AFS" },
        { display: "Ashford International", value: "AFK" },
        { display: "Ashford International (Eurostar)", value: "ASI" },
        { display: "Ashley", value: "ASY" },
        { display: "Ashtead", value: "AHD" },
        { display: "Ashton-under-Lyne", value: "AHN" },
        { display: "Ashurst (Kent)", value: "AHS" },
        { display: "Ashurst New Forest", value: "ANF" },
        { display: "Ashwell & Morden", value: "AWM" },
        { display: "Askam", value: "ASK" },
        { display: "Aslockton", value: "ALK" },
        { display: "Aspatria", value: "ASP" },
        { display: "Aspley Guise", value: "APG" },
        { display: "Aston", value: "AST" },
        { display: "Atherstone", value: "ATH" },
        { display: "Atherton", value: "ATN" },
        { display: "Attadale", value: "ATT" },
        { display: "Attenborough", value: "ATB" },
        { display: "Attleborough", value: "ATL" },
        { display: "Auchinleck", value: "AUK" },
        { display: "Audley End", value: "AUD" },
        { display: "Aughton Park", value: "AUG" },
        { display: "Aviemore", value: "AVM" },
        { display: "Avoncliff", value: "AVF" },
        { display: "Avonmouth", value: "AVN" },
        { display: "Axminster", value: "AXM" },
        { display: "Aylesbury", value: "AYS" },
        { display: "Aylesbury Vale Parkway", value: "AVP" },
        { display: "Aylesford", value: "AYL" },
        { display: "Aylesham", value: "AYH" },
        { display: "Ayr", value: "AYR" },
        { display: "Bache", value: "BAC" },
        { display: "Baglan", value: "BAJ" },
        { display: "Bagshot", value: "BAG" },
        { display: "Baildon", value: "BLD" },
        { display: "Baillieston", value: "BIO" },
        { display: "Balcombe", value: "BAB" },
        { display: "Baldock", value: "BDK" },
        { display: "Balham", value: "BAL" },
        { display: "Balloch", value: "BHC" },
        { display: "Balmossie", value: "BSI" },
        { display: "Bamber Bridge", value: "BMB" },
        { display: "Bamford", value: "BAM" },
        { display: "Banavie", value: "BNV" },
        { display: "Banbury", value: "BAN" },
        { display: "Bangor (Gwynedd)", value: "BNG" },
        { display: "Bank Hall", value: "BAH" },
        { display: "Banstead", value: "BAD" },
        { display: "Barassie", value: "BSS" },
        { display: "Barbican", value: "ZBB" },
        { display: "Bardon Mill", value: "BLL" },
        { display: "Bare Lane", value: "BAR" },
        { display: "Bargeddie", value: "BGI" },
        { display: "Bargoed", value: "BGD" },
        { display: "Barking", value: "BKG" },
        { display: "Barlaston", value: "BRT" },
        { display: "Barming", value: "BMG" },
        { display: "Barmouth", value: "BRM" },
        { display: "Barnehurst", value: "BNH" },
        { display: "Barnes", value: "BNS" },
        { display: "Barnes Bridge", value: "BNI" },
        { display: "Barnetby", value: "BTB" },
        { display: "Barnham", value: "BAA" },
        { display: "Barnhill", value: "BNL" },
        { display: "Barnsley", value: "BNY" },
        { display: "Barnstaple", value: "BNP" },
        { display: "Barnt Green", value: "BTG" },
        { display: "Barrhead", value: "BRR" },
        { display: "Barrhill", value: "BRL" },
        { display: "Barrow Haven", value: "BAV" },
        { display: "Barrow-in-Furness", value: "BIF" },
        { display: "Barrow-Upon-Soar", value: "BWS" },
        { display: "Barry", value: "BRY" },
        { display: "Barry Docks", value: "BYD" },
        { display: "Barry Island", value: "BYI" },
        { display: "Barry Links", value: "BYL" },
        { display: "Barton-on-Humber", value: "BAU" },
        { display: "Basildon", value: "BSO" },
        { display: "Basingstoke", value: "BSK" },
        { display: "Bat & Ball", value: "BBL" },
        { display: "Bath Spa", value: "BTH" },
        { display: "Bathgate", value: "BHG" },
        { display: "Batley", value: "BTL" },
        { display: "Battersby", value: "BTT" },
        { display: "Battersea Park", value: "BAK" },
        { display: "Battle", value: "BAT" },
        { display: "Battlesbridge", value: "BLB" },
        { display: "Bayford", value: "BAY" },
        { display: "Beaconsfield", value: "BCF" },
        { display: "Bearley", value: "BER" },
        { display: "Bearsden", value: "BRN" },
        { display: "Bearsted", value: "BSD" },
        { display: "Beasdale", value: "BSL" },
        { display: "Beaulieu Road", value: "BEU" },
        { display: "Beauly", value: "BEL" },
        { display: "Bebington", value: "BEB" },
        { display: "Beccles", value: "BCC" },
        { display: "Beckenham Hill", value: "BEC" },
        { display: "Beckenham Junction", value: "BKJ" },
        { display: "Bedford", value: "BDM" },
        { display: "Bedford St Johns", value: "BSJ" },
        { display: "Bedhampton", value: "BDH" },
        { display: "Bedminster", value: "BMT" },
        { display: "Bedworth", value: "BEH" },
        { display: "Bedwyn", value: "BDW" },
        { display: "Beeston", value: "BEE" },
        { display: "Bekesbourne", value: "BKS" },
        { display: "Belle Vue", value: "BLV" },
        { display: "Bellgrove", value: "BLG" },
        { display: "Bellingham", value: "BGM" },
        { display: "Bellshill", value: "BLH" },
        { display: "Belmont", value: "BLM" },
        { display: "Belper", value: "BLP" },
        { display: "Beltring", value: "BEG" },
        { display: "Belvedere", value: "BVD" },
        { display: "Bempton", value: "BEM" },
        { display: "Ben Rhydding", value: "BEY" },
        { display: "Benfleet", value: "BEF" },
        { display: "Bentham", value: "BEN" },
        { display: "Bentley (Hants)", value: "BTY" },
        { display: "Bentley (South Yorks)", value: "BYK" },
        { display: "Bere Alston", value: "BAS" },
        { display: "Bere Ferrers", value: "BFE" },
        { display: "Berkhamsted", value: "BKM" },
        { display: "Berkswell", value: "BKW" },
        { display: "Bermuda Park", value: "BEP" },
        { display: "Berney Arms", value: "BYA" },
        { display: "Berry Brow", value: "BBW" },
        { display: "Berrylands", value: "BRS" },
        { display: "Berwick (Sussex)", value: "BRK" },
        { display: "Berwick-upon-Tweed", value: "BWK" },
        { display: "Bescar Lane", value: "BES" },
        { display: "Bescot Stadium", value: "BSC" },
        { display: "Betchworth", value: "BTO" },
        { display: "Bethnal Green", value: "BET" },
        { display: "Betws-y-Coed", value: "BYC" },
        { display: "Beverley", value: "BEV" },
        { display: "Bexhill", value: "BEX" },
        { display: "Bexley", value: "BXY" },
        { display: "Bexleyheath", value: "BXH" },
        { display: "Bicester North", value: "BCS" },
        { display: "Bicester Village", value: "BIT" },
        { display: "Bickley", value: "BKL" },
        { display: "Bidston", value: "BID" },
        { display: "Biggleswade", value: "BIW" },
        { display: "Bilbrook", value: "BBK" },
        { display: "Billericay", value: "BIC" },
        { display: "Billingham (Cleveland)", value: "BIL" },
        { display: "Billingshurst", value: "BIG" },
        { display: "Bingham", value: "BIN" },
        { display: "Bingley", value: "BIY" },
        { display: "Birchgrove", value: "BCG" },
        { display: "Birchington-on-sea", value: "BCH" },
        { display: "Birchwood", value: "BWD" },
        { display: "Birkbeck", value: "BIK" },
        { display: "Birkdale", value: "BDL" },
        { display: "Birkenhead Central", value: "BKC" },
        { display: "Birkenhead Hamilton Square", value: "BKQ" },
        { display: "Birkenhead North", value: "BKN" },
        { display: "Birkenhead Park", value: "BKP" },
        { display: "Birmingham International", value: "BHI" },
        { display: "Birmingham Moor Street", value: "BMO" },
        { display: "Birmingham New Street", value: "BHM" },
        { display: "Birmingham Snow Hill", value: "BSW" },
        { display: "Bishop Auckland", value: "BIA" },
        { display: "Bishopbriggs", value: "BBG" },
        { display: "Bishops Stortford", value: "BIS" },
        { display: "Bishopstone (Sussex)", value: "BIP" },
        { display: "Bishopton (Strathclyde)", value: "BPT" },
        { display: "Bitterne", value: "BTE" },
        { display: "Blackburn", value: "BBN" },
        { display: "Blackheath", value: "BKH" },
        { display: "Blackhorse Road", value: "BHO" },
        { display: "Blackpool North", value: "BPN" },
        { display: "Blackpool Pleasure Beach", value: "BPB" },
        { display: "Blackpool South", value: "BPS" },
        { display: "Blackridge", value: "BKR" },
        { display: "Blackrod", value: "BLK" },
        { display: "Blackwater", value: "BAW" },
        { display: "Blaenau Ffestiniog", value: "BFF" },
        { display: "Blair Atholl", value: "BLA" },
        { display: "Blairhill", value: "BAI" },
        { display: "Blake Street", value: "BKT" },
        { display: "Blakedown", value: "BKD" },
        { display: "Blantyre", value: "BLT" },
        { display: "Blaydon", value: "BLO" },
        { display: "Bleasby", value: "BSB" },
        { display: "Bletchley", value: "BLY" },
        { display: "Bloxwich", value: "BLX" },
        { display: "Bloxwich North", value: "BWN" },
        { display: "Blundellsands & Crosby", value: "BLN" },
        { display: "Blythe Bridge", value: "BYB" },
        { display: "Bodmin Parkway", value: "BOD" },
        { display: "Bodorgan", value: "BOR" },
        { display: "Bognor Regis", value: "BOG" },
        { display: "Bogston", value: "BGS" },
        { display: "Bolton", value: "BON" },
        { display: "Bolton-Upon-Dearne", value: "BTD" },
        { display: "Bookham", value: "BKA" },
        { display: "Bootle (Cumbria)", value: "BOC" },
        { display: "Bootle New Strand", value: "BNW" },
        { display: "Bootle Oriel Road", value: "BOT" },
        { display: "Bordesley", value: "BBS" },
        { display: "Borough Green & Wrotham", value: "BRG" },
        { display: "Borth", value: "BRH" },
        { display: "Bosham", value: "BOH" },
        { display: "Boston", value: "BSN" },
        { display: "Botley", value: "BOE" },
        { display: "Bottesford", value: "BTF" },
        { display: "Bourne End", value: "BNE" },
        { display: "Bournemouth", value: "BMH" },
        { display: "Bournville", value: "BRV" },
        { display: "Bow Brickhill", value: "BWB" },
        { display: "Bowes Park", value: "BOP" },
        { display: "Bowling", value: "BWG" },
        { display: "Box Hill & Westhumble", value: "BXW" },
        { display: "Bracknell", value: "BCE" },
        { display: "Bradford Forster Square", value: "BDQ" },
        { display: "Bradford Interchange", value: "BDI" },
        { display: "Bradford-on-Avon", value: "BOA" },
        { display: "Brading", value: "BDN" },
        { display: "Braintree", value: "BTR" },
        { display: "Braintree Freeport", value: "BTP" },
        { display: "Bramhall", value: "BML" },
        { display: "Bramley (Hants)", value: "BMY" },
        { display: "Bramley (W Yorks)", value: "BLE" },
        { display: "Brampton (Cumbria)", value: "BMP" },
        { display: "Brampton (Suffolk)", value: "BRP" },
        { display: "Branchton", value: "BCN" },
        { display: "Brandon", value: "BND" },
        { display: "Branksome", value: "BSM" },
        { display: "Braystones (Cumbria)", value: "BYS" },
        { display: "Bredbury", value: "BDY" },
        { display: "Breich", value: "BRC" },
        { display: "Brentford", value: "BFD" },
        { display: "Brentwood", value: "BRE" },
        { display: "Bricket Wood", value: "BWO" },
        { display: "Bridge of Allan", value: "BEA" },
        { display: "Bridge of Orchy", value: "BRO" },
        { display: "Bridgend", value: "BGN" },
        { display: "Bridgeton", value: "BDG" },
        { display: "Bridgwater", value: "BWT" },
        { display: "Bridlington", value: "BDT" },
        { display: "Brierfield", value: "BRF" },
        { display: "Brigg", value: "BGG" },
        { display: "Brighouse", value: "BGH" },
        { display: "Brighton (East Sussex)", value: "BTN" },
        { display: "Brimsdown", value: "BMD" },
        { display: "Brinnington", value: "BNT" },
        { display: "Bristol Parkway", value: "BPW" },
        { display: "Bristol Temple Meads", value: "BRI" },
        { display: "Brithdir", value: "BHD" },
        { display: "Briton Ferry", value: "BNF" },
        { display: "Brixton", value: "BRX" },
        { display: "Broad Green", value: "BGE" },
        { display: "Broadbottom", value: "BDB" },
        { display: "Broadstairs", value: "BSR" },
        { display: "Brockenhurst", value: "BCU" },
        { display: "Brockholes", value: "BHS" },
        { display: "Brockley", value: "BCY" },
        { display: "Bromborough", value: "BOM" },
        { display: "Bromborough Rake", value: "BMR" },
        { display: "Bromley Cross (Lancs)", value: "BMC" },
        { display: "Bromley North", value: "BMN" },
        { display: "Bromley South", value: "BMS" },
        { display: "Bromsgrove", value: "BMV" },
        { display: "Brondesbury", value: "BSY" },
        { display: "Brondesbury Park", value: "BSP" },
        { display: "Brookmans Park", value: "BPK" },
        { display: "Brookwood", value: "BKO" },
        { display: "Broome", value: "BME" },
        { display: "Broomfleet", value: "BMF" },
        { display: "Brora", value: "BRA" },
        { display: "Brough", value: "BUH" },
        { display: "Broughty Ferry", value: "BYF" },
        { display: "Broxbourne", value: "BXB" },
        { display: "Bruce Grove", value: "BCV" },
        { display: "Brundall", value: "BDA" },
        { display: "Brundall Gardens", value: "BGA" },
        { display: "Brunstane", value: "BSU" },
        { display: "Brunswick", value: "BRW" },
        { display: "Bruton", value: "BRU" },
        { display: "Bryn", value: "BYN" },
        { display: "Buckenham (Norfolk)", value: "BUC" },
        { display: "Buckley", value: "BCK" },
        { display: "Bucknell", value: "BUK" },
        { display: "Buckshaw Parkway", value: "BSV" },
        { display: "Bugle", value: "BGL" },
        { display: "Builth Road", value: "BHR" },
        { display: "Bulwell", value: "BLW" },
        { display: "Bures", value: "BUE" },
        { display: "Burgess Hill", value: "BUG" },
        { display: "Burley Park", value: "BUY" },
        { display: "Burley-in-Wharfedale", value: "BUW" },
        { display: "Burnage", value: "BNA" },
        { display: "Burneside (Cumbria)", value: "BUD" },
        { display: "Burnham (Bucks)", value: "BNM" },
        { display: "Burnham-on-Crouch", value: "BUU" },
        { display: "Burnley Barracks", value: "BUB" },
        { display: "Burnley Central", value: "BNC" },
        { display: "Burnley Manchester Road", value: "BYM" },
        { display: "Burnside (Strathclyde)", value: "BUI" },
        { display: "Burntisland", value: "BTS" },
        { display: "Burscough Bridge", value: "BCB" },
        { display: "Burscough Junction", value: "BCJ" },
        { display: "Bursledon", value: "BUO" },
        { display: "Burton Joyce", value: "BUJ" },
        { display: "Burton-on-Trent", value: "BUT" },
        { display: "Bury St Edmunds", value: "BSE" },
        { display: "Busby", value: "BUS" },
        { display: "Bush Hill Park", value: "BHK" },
        { display: "Bushey", value: "BSH" },
        { display: "Butlers Lane", value: "BUL" },
        { display: "Buxted", value: "BXD" },
        { display: "Buxton", value: "BUX" },
        { display: "Byfleet & New Haw", value: "BFN" },
        { display: "Bynea", value: "BYE" },
        { display: "Cadoxton", value: "CAD" },
        { display: "Caergwrle", value: "CGW" },
        { display: "Caerphilly", value: "CPH" },
        { display: "Caersws", value: "CWS" },
        { display: "Caldercruix", value: "CAC" },
        { display: "Caldicot", value: "CDT" },
        { display: "Caledonian Rd & Barnsbury", value: "CIR" },
        { display: "Calstock", value: "CSK" },
        { display: "Cam & Dursley", value: "CDU" },
        { display: "Camberley", value: "CAM" },
        { display: "Camborne", value: "CBN" },
        { display: "Cambridge", value: "CBG" },
        { display: "Cambridge Heath", value: "CBH" },
        { display: "Cambuslang", value: "CBL" },
        { display: "Camden Road", value: "CMD" },
        { display: "Camelon", value: "CMO" },
        { display: "Canada Water", value: "ZCW" },
        { display: "Canley", value: "CNL" },
        { display: "Cannock", value: "CAO" },
        { display: "Canonbury", value: "CNN" },
        { display: "Canterbury East", value: "CBE" },
        { display: "Canterbury West", value: "CBW" },
        { display: "Cantley", value: "CNY" },
        { display: "Capenhurst", value: "CPU" },
        { display: "Carbis Bay", value: "CBB" },
        { display: "Cardenden", value: "CDD" },
        { display: "Cardiff Bay", value: "CDB" },
        { display: "Cardiff Central", value: "CDF" },
        { display: "Cardiff Queen Street", value: "CDQ" },
        { display: "Cardonald", value: "CDO" },
        { display: "Cardross", value: "CDR" },
        { display: "Carfin", value: "CRF" },
        { display: "Cark & Cartmel", value: "CAK" },
        { display: "Carlisle", value: "CAR" },
        { display: "Carlton", value: "CTO" },
        { display: "Carluke", value: "CLU" },
        { display: "Carmarthen", value: "CMN" },
        { display: "Carmyle", value: "CML" },
        { display: "Carnforth", value: "CNF" },
        { display: "Carnoustie", value: "CAN" },
        { display: "Carntyne", value: "CAY" },
        { display: "Carpenders Park", value: "CPK" },
        { display: "Carrbridge", value: "CAG" },
        { display: "Carshalton", value: "CSH" },
        { display: "Carshalton Beeches", value: "CSB" },
        { display: "Carstairs", value: "CRS" },
        { display: "Cartsdyke", value: "CDY" },
        { display: "Castle Bar Park", value: "CBP" },
        { display: "Castle Cary", value: "CLC" },
        { display: "Castleford", value: "CFD" },
        { display: "Castleton (Manchester)", value: "CAS" },
        { display: "Castleton Moor", value: "CSM" },
        { display: "Caterham", value: "CAT" },
        { display: "Catford", value: "CTF" },
        { display: "Catford Bridge", value: "CFB" },
        { display: "Cathays", value: "CYS" },
        { display: "Cathcart", value: "CCT" },
        { display: "Cattal", value: "CTL" },
        { display: "Causeland", value: "CAU" },
        { display: "Cefn-y-Bedd", value: "CYB" },
        { display: "Chadwell Heath", value: "CTH" },
        { display: "Chafford Hundred Lakeside", value: "CFH" },
        { display: "Chalfont & Latimer", value: "CFO" },
        { display: "Chalkwell", value: "CHW" },
        { display: "Chandlers Ford", value: "CFR" },
        { display: "Chapel-en-le-Frith", value: "CEF" },
        { display: "Chapelton (Devon)", value: "CPN" },
        { display: "Chapeltown (South Yorks)", value: "CLN" },
        { display: "Chappel & Wakes Colne", value: "CWC" },
        { display: "Charing (Kent)", value: "CHG" },
        { display: "Charing Cross (Glasgow)", value: "CHC" },
        { display: "Charlbury", value: "CBY" },
        { display: "Charlton", value: "CTN" },
        { display: "Chartham", value: "CRT" },
        { display: "Chassen Road", value: "CSR" },
        { display: "Chatelherault", value: "CTE" },
        { display: "Chatham", value: "CTM" },
        { display: "Chathill", value: "CHT" },
        { display: "Cheadle Hulme", value: "CHU" },
        { display: "Cheam", value: "CHE" },
        { display: "Cheddington", value: "CED" },
        { display: "Chelford (Cheshire)", value: "CEL" },
        { display: "Chelmsford", value: "CHM" },
        { display: "Chelsfield", value: "CLD" },
        { display: "Cheltenham Spa", value: "CNM" },
        { display: "Chepstow", value: "CPW" },
        { display: "Cherry Tree", value: "CYT" },
        { display: "Chertsey", value: "CHY" },
        { display: "Cheshunt", value: "CHN" },
        { display: "Chessington North", value: "CSN" },
        { display: "Chessington South", value: "CSS" },
        { display: "Chester", value: "CTR" },
        { display: "Chester Road", value: "CRD" },
        { display: "Chesterfield", value: "CHD" },
        { display: "Chester-le-Street", value: "CLS" },
        { display: "Chestfield & Swalecliffe", value: "CSW" },
        { display: "Chetnole", value: "CNO" },
        { display: "Chichester", value: "CCH" },
        { display: "Chilham", value: "CIL" },
        { display: "Chilworth", value: "CHL" },
        { display: "Chingford", value: "CHI" },
        { display: "Chinley", value: "CLY" },
        { display: "Chippenham", value: "CPM" },
        { display: "Chipstead", value: "CHP" },
        { display: "Chirk", value: "CRK" },
        { display: "Chislehurst", value: "CIT" },
        { display: "Chiswick", value: "CHK" },
        { display: "Cholsey", value: "CHO" },
        { display: "Chorley", value: "CRL" },
        { display: "Chorleywood", value: "CLW" },
        { display: "Christchurch", value: "CHR" },
        { display: "Christs Hospital", value: "CHH" },
        { display: "Church & Oswaldtwistle", value: "CTW" },
        { display: "Church Fenton", value: "CHF" },
        { display: "Church Stretton", value: "CTT" },
        { display: "Cilmeri", value: "CIM" },
        { display: "City Thameslink", value: "CTK" },
        { display: "Clacton-on-Sea", value: "CLT" },
        { display: "Clandon", value: "CLA" },
        { display: "Clapham (North Yorkshire)", value: "CPY" },
        { display: "Clapham High Street", value: "CLP" },
        { display: "Clapham Junction", value: "CLJ" },
        { display: "Clapton", value: "CPT" },
        { display: "Clarbeston Road", value: "CLR" },
        { display: "Clarkston", value: "CKS" },
        { display: "Claverdon", value: "CLV" },
        { display: "Claygate", value: "CLG" },
        { display: "Cleethorpes", value: "CLE" },
        { display: "Cleland", value: "CEA" },
        { display: "Clifton (Manchester)", value: "CLI" },
        { display: "Clifton Down", value: "CFN" },
        { display: "Clitheroe", value: "CLH" },
        { display: "Clock House", value: "CLK" },
        { display: "Clunderwen", value: "CUW" },
        { display: "Clydebank", value: "CYK" },
        { display: "Coatbridge Central", value: "CBC" },
        { display: "Coatbridge Sunnyside", value: "CBS" },
        { display: "Coatdyke", value: "COA" },
        { display: "Cobham & Stoke d'Abernon", value: "CSD" },
        { display: "Codsall", value: "CSL" },
        { display: "Cogan", value: "CGN" },
        { display: "Colchester", value: "COL" },
        { display: "Colchester Town", value: "CET" },
        { display: "Coleshill Parkway", value: "CEH" },
        { display: "Collingham", value: "CLM" },
        { display: "Collington", value: "CLL" },
        { display: "Colne", value: "CNE" },
        { display: "Colwall", value: "CWL" },
        { display: "Colwyn Bay", value: "CWB" },
        { display: "Combe (Oxon)", value: "CME" },
        { display: "Commondale", value: "COM" },
        { display: "Congleton", value: "CNG" },
        { display: "Conisbrough", value: "CNS" },
        { display: "Connel Ferry", value: "CON" },
        { display: "Conon Bridge", value: "CBD" },
        { display: "Cononley", value: "CEY" },
        { display: "Conway Park", value: "CNP" },
        { display: "Conwy", value: "CNW" },
        { display: "Cooden Beach", value: "COB" },
        { display: "Cookham", value: "COO" },
        { display: "Cooksbridge", value: "CBR" },
        { display: "Coombe Junction Halt", value: "COE" },
        { display: "Copplestone", value: "COP" },
        { display: "Corbridge", value: "CRB" },
        { display: "Corby", value: "COR" },
        { display: "Corkerhill", value: "CKH" },
        { display: "Corkickle", value: "CKL" },
        { display: "Corpach", value: "CPA" },
        { display: "Corrour", value: "CRR" },
        { display: "Coryton", value: "COY" },
        { display: "Coseley", value: "CSY" },
        { display: "Cosford", value: "COS" },
        { display: "Cosham", value: "CSA" },
        { display: "Cottingham", value: "CGM" },
        { display: "Cottingley", value: "COT" },
        { display: "Coulsdon South", value: "CDS" },
        { display: "Coulsdon Town", value: "CDN" },
        { display: "Coventry", value: "COV" },
        { display: "Coventry Arena", value: "CAA" },
        { display: "Cowden (Kent)", value: "CWN" },
        { display: "Cowdenbeath", value: "COW" },
        { display: "Cradley Heath", value: "CRA" },
        { display: "Craigendoran", value: "CGD" },
        { display: "Cramlington", value: "CRM" },
        { display: "Cranbrook (Devon)", value: "CBK" },
        { display: "Craven Arms", value: "CRV" },
        { display: "Crawley", value: "CRW" },
        { display: "Crayford", value: "CRY" },
        { display: "Crediton", value: "CDI" },
        { display: "Cressing (Essex)", value: "CES" },
        { display: "Cressington", value: "CSG" },
        { display: "Creswell", value: "CWD" },
        { display: "Crewe", value: "CRE" },
        { display: "Crewkerne", value: "CKN" },
        { display: "Crews Hill", value: "CWH" },
        { display: "Crianlarich", value: "CNR" },
        { display: "Criccieth", value: "CCC" },
        { display: "Cricklewood", value: "CRI" },
        { display: "Croftfoot", value: "CFF" },
        { display: "Crofton Park", value: "CFT" },
        { display: "Cromer", value: "CMR" },
        { display: "Cromford", value: "CMF" },
        { display: "Crookston", value: "CKT" },
        { display: "Cross Gates", value: "CRG" },
        { display: "Crossflatts", value: "CFL" },
        { display: "Crosshill", value: "COI" },
        { display: "Crosskeys", value: "CKY" },
        { display: "Crossmyloof", value: "CMY" },
        { display: "Croston", value: "CSO" },
        { display: "Crouch Hill", value: "CRH" },
        { display: "Crowborough", value: "COH" },
        { display: "Crowhurst", value: "CWU" },
        { display: "Crowle", value: "CWE" },
        { display: "Crowthorne", value: "CRN" },
        { display: "Croy", value: "CRO" },
        { display: "Crystal Palace", value: "CYP" },
        { display: "Cuddington", value: "CUD" },
        { display: "Cuffley", value: "CUF" },
        { display: "Culham", value: "CUM" },
        { display: "Culrain", value: "CUA" },
        { display: "Cumbernauld", value: "CUB" },
        { display: "Cupar", value: "CUP" },
        { display: "Curriehill", value: "CUH" },
        { display: "Cuxton", value: "CUX" },
        { display: "Cwmbach", value: "CMH" },
        { display: "Cwmbran", value: "CWM" },
        { display: "Cynghordy", value: "CYN" },
        { display: "Dagenham Dock", value: "DDK" },
        { display: "Daisy Hill", value: "DSY" },
        { display: "Dalgety Bay", value: "DAG" },
        { display: "Dalmally", value: "DAL" },
        { display: "Dalmarnock", value: "DAK" },
        { display: "Dalmeny", value: "DAM" },
        { display: "Dalmuir", value: "DMR" },
        { display: "Dalreoch", value: "DLR" },
        { display: "Dalry", value: "DLY" },
        { display: "Dalston (Cumbria)", value: "DLS" },
        { display: "Dalston Junction", value: "DLJ" },
        { display: "Dalston Kingsland", value: "DLK" },
        { display: "Dalton (Cumbria)", value: "DLT" },
        { display: "Dalwhinnie", value: "DLW" },
        { display: "Danby", value: "DNY" },
        { display: "Danescourt", value: "DCT" },
        { display: "Danzey", value: "DZY" },
        { display: "Darlington", value: "DAR" },
        { display: "Darnall", value: "DAN" },
        { display: "Darsham", value: "DSM" },
        { display: "Dartford", value: "DFD" },
        { display: "Darton", value: "DRT" },
        { display: "Darwen", value: "DWN" },
        { display: "Datchet", value: "DAT" },
        { display: "Davenport", value: "DVN" },
        { display: "Dawlish", value: "DWL" },
        { display: "Dawlish Warren", value: "DWW" },
        { display: "Deal", value: "DEA" },
        { display: "Dean (Wilts)", value: "DEN" },
        { display: "Deansgate", value: "DGT" },
        { display: "Deganwy", value: "DGY" },
        { display: "Deighton", value: "DHN" },
        { display: "Delamere", value: "DLM" },
        { display: "Denby Dale", value: "DBD" },
        { display: "Denham", value: "DNM" },
        { display: "Denham Golf Club", value: "DGC" },
        { display: "Denmark Hill", value: "DMK" },
        { display: "Dent", value: "DNT" },
        { display: "Denton", value: "DTN" },
        { display: "Deptford", value: "DEP" },
        { display: "Derby", value: "DBY" },
        { display: "Derby Road (Ipswich)", value: "DBR" },
        { display: "Devonport (Devon)", value: "DPT" },
        { display: "Devonport Dockyard", value: "DOC" },
        { display: "Dewsbury", value: "DEW" },
        { display: "Didcot Parkway", value: "DID" },
        { display: "Digby & Sowton", value: "DIG" },
        { display: "Dilton Marsh", value: "DMH" },
        { display: "Dinas (Rhondda)", value: "DMG" },
        { display: "Dinas Powys", value: "DNS" },
        { display: "Dingle Road", value: "DGL" },
        { display: "Dingwall", value: "DIN" },
        { display: "Dinsdale", value: "DND" },
        { display: "Dinting", value: "DTG" },
        { display: "Disley", value: "DSL" },
        { display: "Diss", value: "DIS" },
        { display: "Dodworth", value: "DOD" },
        { display: "Dolau", value: "DOL" },
        { display: "Doleham", value: "DLH" },
        { display: "Dolgarrog", value: "DLG" },
        { display: "Dolwyddelan", value: "DWD" },
        { display: "Doncaster", value: "DON" },
        { display: "Dorchester South", value: "DCH" },
        { display: "Dorchester West", value: "DCW" },
        { display: "Dore & Totley", value: "DOR" },
        { display: "Dorking (Main)", value: "DKG" },
        { display: "Dorking Deepdene", value: "DPD" },
        { display: "Dorking West", value: "DKT" },
        { display: "Dormans", value: "DMS" },
        { display: "Dorridge", value: "DDG" },
        { display: "Dove Holes", value: "DVH" },
        { display: "Dover Priory", value: "DVP" },
        { display: "Dovercourt", value: "DVC" },
        { display: "Dovey Junction", value: "DVY" },
        { display: "Downham Market", value: "DOW" },
        { display: "Drayton Green", value: "DRG" },
        { display: "Drayton Park", value: "DYP" },
        { display: "Drem", value: "DRM" },
        { display: "Driffield", value: "DRF" },
        { display: "Drigg", value: "DRI" },
        { display: "Droitwich Spa", value: "DTW" },
        { display: "Dronfield", value: "DRO" },
        { display: "Drumchapel", value: "DMC" },
        { display: "Drumfrochar", value: "DFR" },
        { display: "Drumgelloch", value: "DRU" },
        { display: "Drumry", value: "DMY" },
        { display: "Dublin Ferryport", value: "DFP" },
        { display: "Dublin Port - Stena", value: "DPS" },
        { display: "Duddeston", value: "DUD" },
        { display: "Dudley Port", value: "DDP" },
        { display: "Duffield", value: "DFI" },
        { display: "Duirinish", value: "DRN" },
        { display: "Duke Street", value: "DST" },
        { display: "Dullingham", value: "DUL" },
        { display: "Dumbarton Central", value: "DBC" },
        { display: "Dumbarton East", value: "DBE" },
        { display: "Dumbreck", value: "DUM" },
        { display: "Dumfries", value: "DMF" },
        { display: "Dumpton Park", value: "DMP" },
        { display: "Dunbar", value: "DUN" },
        { display: "Dunblane", value: "DBL" },
        { display: "Duncraig", value: "DCG" },
        { display: "Dundee", value: "DEE" },
        { display: "Dunfermline Queen Margaret", value: "DFL" },
        { display: "Dunfermline Town", value: "DFE" },
        { display: "Dunkeld & Birnam", value: "DKD" },
        { display: "Dunlop", value: "DNL" },
        { display: "Dunrobin Castle", value: "DNO" },
        { display: "Dunston", value: "DOT" },
        { display: "Dunton Green", value: "DNG" },
        { display: "Durham", value: "DHM" },
        { display: "Durrington-on-Sea", value: "DUR" },
        { display: "Dyce", value: "DYC" },
        { display: "Dyffryn Ardudwy", value: "DYF" },
        { display: "Eaglescliffe", value: "EAG" },
        { display: "Ealing Broadway", value: "EAL" },
        { display: "Earlestown", value: "ERL" },
        { display: "Earley", value: "EAR" },
        { display: "Earlsfield", value: "EAD" },
        { display: "Earlswood (Surrey)", value: "ELD" },
        { display: "Earlswood (West Midlands)", value: "EWD" },
        { display: "East Croydon", value: "ECR" },
        { display: "East Didsbury", value: "EDY" },
        { display: "East Dulwich", value: "EDW" },
        { display: "East Farleigh", value: "EFL" },
        { display: "East Garforth", value: "EGF" },
        { display: "East Grinstead", value: "EGR" },
        { display: "East Kilbride", value: "EKL" },
        { display: "East Malling", value: "EML" },
        { display: "East Midlands Parkway", value: "EMD" },
        { display: "East Tilbury", value: "ETL" },
        { display: "East Worthing", value: "EWR" },
        { display: "Eastbourne", value: "EBN" },
        { display: "Eastbrook", value: "EBK" },
        { display: "Easterhouse", value: "EST" },
        { display: "Eastham Rake", value: "ERA" },
        { display: "Eastleigh", value: "ESL" },
        { display: "Eastrington", value: "EGN" },
        { display: "Ebbsfleet International", value: "EBD" },
        { display: "Ebbw Vale Parkway", value: "EBV" },
        { display: "Ebbw Vale Town", value: "EBB" },
        { display: "Eccles (Manchester)", value: "ECC" },
        { display: "Eccles Road", value: "ECS" },
        { display: "Eccleston Park", value: "ECL" },
        { display: "Edale", value: "EDL" },
        { display: "Eden Park", value: "EDN" },
        { display: "Edenbridge", value: "EBR" },
        { display: "Edenbridge Town", value: "EBT" },
        { display: "Edge Hill", value: "EDG" },
        { display: "Edinburgh", value: "EDB" },
        { display: "Edinburgh Park", value: "EDP" },
        { display: "Edmonton Green", value: "EDR" },
        { display: "Effingham Junction", value: "EFF" },
        { display: "Eggesford", value: "EGG" },
        { display: "Egham", value: "EGH" },
        { display: "Egton", value: "EGT" },
        { display: "Elephant & Castle", value: "EPH" },
        { display: "Elephant & Castle (Underground)", value: "ZEL" },
        { display: "Elgin", value: "ELG" },
        { display: "Ellesmere Port", value: "ELP" },
        { display: "Elmers End", value: "ELE" },
        { display: "Elmstead Woods", value: "ESD" },
        { display: "Elmswell", value: "ESW" },
        { display: "Elsecar", value: "ELR" },
        { display: "Elsenham (Essex)", value: "ESM" },
        { display: "Elstree & Borehamwood", value: "ELS" },
        { display: "Eltham", value: "ELW" },
        { display: "Elton & Orston", value: "ELO" },
        { display: "Ely", value: "ELY" },
        { display: "Emerson Park", value: "EMP" },
        { display: "Emsworth", value: "EMS" },
        { display: "Energlyn & Churchill Park", value: "ECP" },
        { display: "Enfield Chase", value: "ENC" },
        { display: "Enfield Lock", value: "ENL" },
        { display: "Enfield Town", value: "ENF" },
        { display: "Entwistle", value: "ENT" },
        { display: "Epsom (Surrey)", value: "EPS" },
        { display: "Epsom Downs", value: "EPD" },
        { display: "Erdington", value: "ERD" },
        { display: "Eridge", value: "ERI" },
        { display: "Erith", value: "ERH" },
        { display: "Esher", value: "ESH" },
        { display: "Eskbank", value: "EKB" },
        { display: "Essex Road", value: "EXR" },
        { display: "Etchingham", value: "ETC" },
        { display: "Euxton Balshaw Lane", value: "EBA" },
        { display: "Evesham", value: "EVE" },
        { display: "Ewell East", value: "EWE" },
        { display: "Ewell West", value: "EWW" },
        { display: "Exeter Central", value: "EXC" },
        { display: "Exeter St David's", value: "EXD" },
        { display: "Exeter St Thomas", value: "EXT" },
        { display: "Exhibition Centre (Glasgow)", value: "EXG" },
        { display: "Exmouth", value: "EXM" },
        { display: "Exton", value: "EXN" },
        { display: "Eynsford", value: "EYN" },
        { display: "Fairbourne", value: "FRB" },
        { display: "Fairfield", value: "FRF" },
        { display: "Fairlie", value: "FRL" },
        { display: "Fairwater", value: "FRW" },
        { display: "Falconwood", value: "FCN" },
        { display: "Falkirk Grahamston", value: "FKG" },
        { display: "Falkirk High", value: "FKK" },
        { display: "Falls of Cruachan", value: "FOC" },
        { display: "Falmer", value: "FMR" },
        { display: "Falmouth Docks", value: "FAL" },
        { display: "Falmouth Town", value: "FMT" },
        { display: "Fareham", value: "FRM" },
        { display: "Farnborough (Main)", value: "FNB" },
        { display: "Farnborough North", value: "FNN" },
        { display: "Farncombe", value: "FNC" },
        { display: "Farnham", value: "FNH" },
        { display: "Farningham Road", value: "FNR" },
        { display: "Farnworth", value: "FNW" },
        { display: "Farringdon", value: "ZFD" },
        { display: "Fauldhouse", value: "FLD" },
        { display: "Faversham", value: "FAV" },
        { display: "Faygate", value: "FGT" },
        { display: "Fazakerley", value: "FAZ" },
        { display: "Fearn", value: "FRN" },
        { display: "Featherstone", value: "FEA" },
        { display: "Felixstowe", value: "FLX" },
        { display: "Feltham", value: "FEL" },
        { display: "Feniton", value: "FNT" },
        { display: "Fenny Stratford", value: "FEN" },
        { display: "Fernhill", value: "FER" },
        { display: "Ferriby", value: "FRY" },
        { display: "Ferryside", value: "FYS" },
        { display: "Ffairfach", value: "FFA" },
        { display: "Filey", value: "FIL" },
        { display: "Filton Abbey Wood", value: "FIT" },
        { display: "Finchley Road & Frognal", value: "FNY" },
        { display: "Finsbury Park", value: "FPK" },
        { display: "Finstock", value: "FIN" },
        { display: "Fishbourne (Sussex)", value: "FSB" },
        { display: "Fishersgate", value: "FSG" },
        { display: "Fishguard & Goodwick", value: "FGW" },
        { display: "Fishguard Harbour", value: "FGH" },
        { display: "Fiskerton", value: "FSK" },
        { display: "Fitzwilliam", value: "FZW" },
        { display: "Five Ways", value: "FWY" },
        { display: "Fleet", value: "FLE" },
        { display: "Flimby", value: "FLM" },
        { display: "Flint", value: "FLN" },
        { display: "Flitwick", value: "FLT" },
        { display: "Flixton", value: "FLI" },
        { display: "Flowery Field", value: "FLF" },
        { display: "Folkestone Central", value: "FKC" },
        { display: "Folkestone West", value: "FKW" },
        { display: "Ford", value: "FOD" },
        { display: "Forest Gate", value: "FOG" },
        { display: "Forest Hill", value: "FOH" },
        { display: "Formby", value: "FBY" },
        { display: "Forres", value: "FOR" },
        { display: "Forsinard", value: "FRS" },
        { display: "Fort Matilda", value: "FTM" },
        { display: "Fort William", value: "FTW" },
        { display: "Four Oaks", value: "FOK" },
        { display: "Foxfield", value: "FOX" },
        { display: "Foxton", value: "FXN" },
        { display: "Frant", value: "FRT" },
        { display: "Fratton", value: "FTN" },
        { display: "Freshfield", value: "FRE" },
        { display: "Freshford", value: "FFD" },
        { display: "Frimley", value: "FML" },
        { display: "Frinton-on-Sea", value: "FRI" },
        { display: "Frizinghall", value: "FZH" },
        { display: "Frodsham", value: "FRD" },
        { display: "Frome", value: "FRO" },
        { display: "Fulwell", value: "FLW" },
        { display: "Furness Vale", value: "FNV" },
        { display: "Furze Platt", value: "FZP" },
        { display: "Gainsborough Central", value: "GNB" },
        { display: "Gainsborough Lea Road", value: "GBL" },
        { display: "Galashiels", value: "GAL" },
        { display: "Garelochhead", value: "GCH" },
        { display: "Garforth", value: "GRF" },
        { display: "Gargrave", value: "GGV" },
        { display: "Garrowhill", value: "GAR" },
        { display: "Garscadden", value: "GRS" },
        { display: "Garsdale", value: "GSD" },
        { display: "Garston (Hertfordshire)", value: "GSN" },
        { display: "Garswood", value: "GSW" },
        { display: "Gartcosh", value: "GRH" },
        { display: "Garth (Mid Glamorgan)", value: "GMG" },
        { display: "Garth (Powys)", value: "GTH" },
        { display: "Garve", value: "GVE" },
        { display: "Gathurst", value: "GST" },
        { display: "Gatley", value: "GTY" },
        { display: "Gatwick Airport", value: "GTW" },
        { display: "Georgemas Junction", value: "GGJ" },
        { display: "Gerrards Cross", value: "GER" },
        { display: "Gidea Park", value: "GDP" },
        { display: "Giffnock", value: "GFN" },
        { display: "Giggleswick", value: "GIG" },
        { display: "Gilberdyke", value: "GBD" },
        { display: "Gilfach Fargoed", value: "GFF" },
        { display: "Gillingham (Dorset)", value: "GIL" },
        { display: "Gillingham (Kent)", value: "GLM" },
        { display: "Gilshochill", value: "GSC" },
        { display: "Gipsy Hill", value: "GIP" },
        { display: "Girvan", value: "GIR" },
        { display: "Glaisdale", value: "GLS" },
        { display: "Glan Conwy", value: "GCW" },
        { display: "Glasgow Central", value: "GLC" },
        { display: "Glasgow Queen Street", value: "GLQ" },
        { display: "Glasshoughton", value: "GLH" },
        { display: "Glazebrook", value: "GLZ" },
        { display: "Gleneagles", value: "GLE" },
        { display: "Glenfinnan", value: "GLF" },
        { display: "Glengarnock", value: "GLG" },
        { display: "Glenrothes with Thornton", value: "GLT" },
        { display: "Glossop", value: "GLO" },
        { display: "Gloucester", value: "GCR" },
        { display: "Glynde", value: "GLY" },
        { display: "Gobowen", value: "GOB" },
        { display: "Godalming", value: "GOD" },
        { display: "Godley", value: "GDL" },
        { display: "Godstone", value: "GDN" },
        { display: "Goldthorpe", value: "GOE" },
        { display: "Golf Street", value: "GOF" },
        { display: "Golspie", value: "GOL" },
        { display: "Gomshall", value: "GOM" },
        { display: "Goodmayes", value: "GMY" },
        { display: "Goole", value: "GOO" },
        { display: "Goostrey", value: "GTR" },
        { display: "Gordon Hill", value: "GDH" },
        { display: "Gorebridge", value: "GBG" },
        { display: "Goring & Streatley", value: "GOR" },
        { display: "Goring-by-Sea", value: "GBS" },
        { display: "Gorton", value: "GTO" },
        { display: "Gospel Oak", value: "GPO" },
        { display: "Gourock", value: "GRK" },
        { display: "Gowerton", value: "GWN" },
        { display: "Goxhill", value: "GOX" },
        { display: "Grange Park", value: "GPK" },
        { display: "Grange-Over-Sands", value: "GOS" },
        { display: "Grangetown (Cardiff)", value: "GTN" },
        { display: "Grantham", value: "GRA" },
        { display: "Grateley", value: "GRT" },
        { display: "Gravelly Hill", value: "GVH" },
        { display: "Gravesend", value: "GRV" },
        { display: "Grays", value: "GRY" },
        { display: "Great Ayton", value: "GTA" },
        { display: "Great Bentley", value: "GRB" },
        { display: "Great Chesterford", value: "GRC" },
        { display: "Great Coates", value: "GCT" },
        { display: "Great Malvern", value: "GMV" },
        { display: "Great Missenden", value: "GMN" },
        { display: "Great Yarmouth", value: "GYM" },
        { display: "Green Lane", value: "GNL" },
        { display: "Green Road", value: "GNR" },
        { display: "Greenbank", value: "GBK" },
        { display: "Greenfaulds", value: "GRL" },
        { display: "Greenfield", value: "GNF" },
        { display: "Greenford", value: "GFD" },
        { display: "Greenhithe", value: "GNH" },
        { display: "Greenock Central", value: "GKC" },
        { display: "Greenock West", value: "GKW" },
        { display: "Greenwich", value: "GNW" },
        { display: "Gretna Green", value: "GEA" },
        { display: "Grimsby Docks", value: "GMD" },
        { display: "Grimsby Town", value: "GMB" },
        { display: "Grindleford", value: "GRN" },
        { display: "Grosmont", value: "GMT" },
        { display: "Grove Park", value: "GRP" },
        { display: "Guide Bridge", value: "GUI" },
        { display: "Guildford", value: "GLD" },
        { display: "Guiseley", value: "GSY" },
        { display: "Gunnersbury", value: "GUN" },
        { display: "Gunnislake", value: "GSL" },
        { display: "Gunton", value: "GNT" },
        { display: "Gwersyllt", value: "GWE" },
        { display: "Gypsy Lane", value: "GYP" },
        { display: "Habrough", value: "HAB" },
        { display: "Hackbridge", value: "HCB" },
        { display: "Hackney Central", value: "HKC" },
        { display: "Hackney Downs", value: "HAC" },
        { display: "Hackney Wick", value: "HKW" },
        { display: "Haddenham & Thame Parkway", value: "HDM" },
        { display: "Haddiscoe", value: "HAD" },
        { display: "Hadfield", value: "HDF" },
        { display: "Hadley Wood", value: "HDW" },
        { display: "Hag Fold", value: "HGF" },
        { display: "Haggerston", value: "HGG" },
        { display: "Hagley", value: "HAG" },
        { display: "Hairmyres", value: "HMY" },
        { display: "Hale (Manchester)", value: "HAL" },
        { display: "Halesworth", value: "HAS" },
        { display: "Halewood", value: "HED" },
        { display: "Halifax", value: "HFX" },
        { display: "Hall Green", value: "HLG" },
        { display: "Hall Road", value: "HLR" },
        { display: "Halling", value: "HAI" },
        { display: "Hall-i'-th'-Wood", value: "HID" },
        { display: "Haltwhistle", value: "HWH" },
        { display: "Ham Street", value: "HMT" },
        { display: "Hamble", value: "HME" },
        { display: "Hamilton Central", value: "HNC" },
        { display: "Hamilton West", value: "HNW" },
        { display: "Hammerton", value: "HMM" },
        { display: "Hampden Park (Sussex)", value: "HMD" },
        { display: "Hampstead Heath", value: "HDH" },
        { display: "Hampton (London)", value: "HMP" },
        { display: "Hampton Court", value: "HMC" },
        { display: "Hampton Wick", value: "HMW" },
        { display: "Hampton-in-Arden", value: "HIA" },
        { display: "Hamstead (Birmingham)", value: "HSD" },
        { display: "Hamworthy", value: "HAM" },
        { display: "Hanborough", value: "HND" },
        { display: "Handforth", value: "HTH" },
        { display: "Hanwell", value: "HAN" },
        { display: "Hapton", value: "HPN" },
        { display: "Harlech", value: "HRL" },
        { display: "Harlesden", value: "HDN" },
        { display: "Harling Road", value: "HRD" },
        { display: "Harlington (Beds)", value: "HLN" },
        { display: "Harlow Mill", value: "HWM" },
        { display: "Harlow Town", value: "HWN" },
        { display: "Harold Wood", value: "HRO" },
        { display: "Harpenden", value: "HPD" },
        { display: "Harrietsham", value: "HRM" },
        { display: "Harringay", value: "HGY" },
        { display: "Harringay Green Lanes", value: "HRY" },
        { display: "Harrington", value: "HRR" },
        { display: "Harrogate", value: "HGT" },
        { display: "Harrow & Wealdstone", value: "HRW" },
        { display: "Harrow-on-the-Hill", value: "HOH" },
        { display: "Hartford (Cheshire)", value: "HTF" },
        { display: "Hartlebury", value: "HBY" },
        { display: "Hartlepool", value: "HPL" },
        { display: "Hartwood", value: "HTW" },
        { display: "Harwich International", value: "HPQ" },
        { display: "Harwich Town", value: "HWC" },
        { display: "Haslemere", value: "HSL" },
        { display: "Hassocks", value: "HSK" },
        { display: "Hastings", value: "HGS" },
        { display: "Hatch End", value: "HTE" },
        { display: "Hatfield & Stainforth", value: "HFS" },
        { display: "Hatfield (Herts)", value: "HAT" },
        { display: "Hatfield Peverel", value: "HAP" },
        { display: "Hathersage", value: "HSG" },
        { display: "Hattersley", value: "HTY" },
        { display: "Hatton", value: "HTN" },
        { display: "Havant", value: "HAV" },
        { display: "Havenhouse", value: "HVN" },
        { display: "Haverfordwest", value: "HVF" },
        { display: "Hawarden", value: "HWD" },
        { display: "Hawarden Bridge", value: "HWB" },
        { display: "Hawkhead", value: "HKH" },
        { display: "Haydon Bridge", value: "HDB" },
        { display: "Haydons Road", value: "HYR" },
        { display: "Hayes & Harlington", value: "HAY" },
        { display: "Hayes (Kent)", value: "HYS" },
        { display: "Hayle", value: "HYL" },
        { display: "Haymarket", value: "HYM" },
        { display: "Haywards Heath", value: "HHE" },
        { display: "Hazel Grove", value: "HAZ" },
        { display: "Headcorn", value: "HCN" },
        { display: "Headingley", value: "HDY" },
        { display: "Headstone Lane", value: "HDL" },
        { display: "Heald Green", value: "HDG" },
        { display: "Healing", value: "HLI" },
        { display: "Heath High Level", value: "HHL" },
        { display: "Heath Low Level", value: "HLL" },
        { display: "Heathrow Airport Terminal 4", value: "HAF" },
        { display: "Heathrow Airport Terminal 5", value: "HWV" },
        { display: "Heathrow Airport Terminals 1, 2 and 3", value: "HXX" },
        { display: "Heaton Chapel", value: "HTC" },
        { display: "Hebden Bridge", value: "HBD" },
        { display: "Heckington", value: "HEC" },
        { display: "Hedge End", value: "HDE" },
        { display: "Hednesford", value: "HNF" },
        { display: "Heighington", value: "HEI" },
        { display: "Helensburgh Central", value: "HLC" },
        { display: "Helensburgh Upper", value: "HLU" },
        { display: "Hellifield", value: "HLD" },
        { display: "Helmsdale", value: "HMS" },
        { display: "Helsby", value: "HSB" },
        { display: "Hemel Hempstead", value: "HML" },
        { display: "Hendon", value: "HEN" },
        { display: "Hengoed", value: "HNG" },
        { display: "Henley-in-Arden", value: "HNL" },
        { display: "Henley-on-Thames", value: "HOT" },
        { display: "Hensall", value: "HEL" },
        { display: "Hereford", value: "HFD" },
        { display: "Herne Bay", value: "HNB" },
        { display: "Herne Hill", value: "HNH" },
        { display: "Hersham", value: "HER" },
        { display: "Hertford East", value: "HFE" },
        { display: "Hertford North", value: "HFN" },
        { display: "Hessle", value: "HES" },
        { display: "Heswall", value: "HSW" },
        { display: "Hever", value: "HEV" },
        { display: "Heworth", value: "HEW" },
        { display: "Hexham", value: "HEX" },
        { display: "Heyford", value: "HYD" },
        { display: "Heysham Port", value: "HHB" },
        { display: "High Brooms", value: "HIB" },
        { display: "High Street (Glasgow)", value: "HST" },
        { display: "High Street Kensington Underground", value: "ZHS" },
        { display: "High Wycombe", value: "HWY" },
        { display: "Higham (Kent)", value: "HGM" },
        { display: "Highams Park", value: "HIP" },
        { display: "Highbridge & Burnham", value: "HIG" },
        { display: "Highbury & Islington", value: "HHY" },
        { display: "Hightown", value: "HTO" },
        { display: "Hildenborough", value: "HLB" },
        { display: "Hillfoot", value: "HLF" },
        { display: "Hillington East", value: "HLE" },
        { display: "Hillington West", value: "HLW" },
        { display: "Hillside", value: "HIL" },
        { display: "Hilsea", value: "HLS" },
        { display: "Hinchley Wood", value: "HYW" },
        { display: "Hinckley (Leics)", value: "HNK" },
        { display: "Hindley", value: "HIN" },
        { display: "Hinton Admiral", value: "HNA" },
        { display: "Hitchin", value: "HIT" },
        { display: "Hither Green", value: "HGR" },
        { display: "Hockley", value: "HOC" },
        { display: "Hollingbourne", value: "HBN" },
        { display: "Holmes Chapel", value: "HCH" },
        { display: "Holmwood", value: "HLM" },
        { display: "Holton Heath", value: "HOL" },
        { display: "Holyhead", value: "HHD" },
        { display: "Holytown", value: "HLY" },
        { display: "Homerton", value: "HMN" },
        { display: "Honeybourne", value: "HYB" },
        { display: "Honiton", value: "HON" },
        { display: "Honley", value: "HOY" },
        { display: "Honor Oak Park", value: "HPA" },
        { display: "Hook", value: "HOK" },
        { display: "Hooton", value: "HOO" },
        { display: "Hope (Derbyshire)", value: "HOP" },
        { display: "Hope (Flintshire)", value: "HPE" },
        { display: "Hopton Heath", value: "HPT" },
        { display: "Horley", value: "HOR" },
        { display: "Hornbeam Park", value: "HBP" },
        { display: "Hornsey", value: "HRN" },
        { display: "Horsforth", value: "HRS" },
        { display: "Horsham", value: "HRH" },
        { display: "Horsley", value: "HSY" },
        { display: "Horton-in-Ribblesdale", value: "HIR" },
        { display: "Horwich Parkway", value: "HWI" },
        { display: "Hoscar", value: "HSC" },
        { display: "Hough Green", value: "HGN" },
        { display: "Hounslow", value: "HOU" },
        { display: "Hove", value: "HOV" },
        { display: "Hoveton & Wroxham", value: "HXM" },
        { display: "How Wood (Herts)", value: "HWW" },
        { display: "Howden", value: "HOW" },
        { display: "Howwood (Renfrewshire)", value: "HOZ" },
        { display: "Hoxton", value: "HOX" },
        { display: "Hoylake", value: "HYK" },
        { display: "Hubberts Bridge", value: "HBB" },
        { display: "Hucknall", value: "HKN" },
        { display: "Huddersfield", value: "HUD" },
        { display: "Hull", value: "HUL" },
        { display: "Humphrey Park", value: "HUP" },
        { display: "Huncoat", value: "HCT" },
        { display: "Hungerford", value: "HGD" },
        { display: "Hunmanby", value: "HUB" },
        { display: "Huntingdon", value: "HUN" },
        { display: "Huntly", value: "HNT" },
        { display: "Hunts Cross", value: "HNX" },
        { display: "Hurst Green", value: "HUR" },
        { display: "Hutton Cranswick", value: "HUT" },
        { display: "Huyton", value: "HUY" },
        { display: "Hyde Central", value: "HYC" },
        { display: "Hyde North", value: "HYT" },
        { display: "Hykeham", value: "HKM" },
        { display: "Hyndland", value: "HYN" },
        { display: "Hythe (Essex)", value: "HYH" },
        { display: "IBM Halt", value: "IBM" },
        { display: "Ifield", value: "IFI" },
        { display: "Ilford", value: "IFD" },
        { display: "Ilkley", value: "ILK" },
        { display: "Imperial Wharf", value: "IMW" },
        { display: "Ince & Elton", value: "INE" },
        { display: "Ince (Manchester)", value: "INC" },
        { display: "Ingatestone", value: "INT" },
        { display: "Insch", value: "INS" },
        { display: "Invergordon", value: "IGD" },
        { display: "Invergowrie", value: "ING" },
        { display: "Inverkeithing", value: "INK" },
        { display: "Inverkip", value: "INP" },
        { display: "Inverness", value: "INV" },
        { display: "Invershin", value: "INH" },
        { display: "Inverurie", value: "INR" },
        { display: "Ipswich", value: "IPS" },
        { display: "Irlam", value: "IRL" },
        { display: "Irvine", value: "IRV" },
        { display: "Isleworth", value: "ISL" },
        { display: "Islip", value: "ISP" },
        { display: "Iver", value: "IVR" },
        { display: "Ivybridge", value: "IVY" },
        { display: "James Cook", value: "JCH" },
        { display: "Jewellery Quarter", value: "JEQ" },
        { display: "Johnston (Pembs)", value: "JOH" },
        { display: "Johnstone (Strathclyde)", value: "JHN" },
        { display: "Jordanhill", value: "JOR" },
        { display: "Kearsley (Manchester)", value: "KSL" },
        { display: "Kearsney (Kent)", value: "KSN" },
        { display: "Keighley", value: "KEI" },
        { display: "Keith", value: "KEH" },
        { display: "Kelvedon", value: "KEL" },
        { display: "Kelvindale", value: "KVD" },
        { display: "Kemble", value: "KEM" },
        { display: "Kempston Hardwick", value: "KMH" },
        { display: "Kempton Park Racecourse", value: "KMP" },
        { display: "Kemsing", value: "KMS" },
        { display: "Kemsley", value: "KML" },
        { display: "Kendal", value: "KEN" },
        { display: "Kenley", value: "KLY" },
        { display: "Kennett", value: "KNE" },
        { display: "Kennishead", value: "KNS" },
        { display: "Kensal Green", value: "KNL" },
        { display: "Kensal Rise", value: "KNR" },
        { display: "Kensington Olympia", value: "KPA" },
        { display: "Kent House", value: "KTH" },
        { display: "Kentish Town", value: "KTN" },
        { display: "Kentish Town West", value: "KTW" },
        { display: "Kenton", value: "KNT" },
        { display: "Kents Bank", value: "KBK" },
        { display: "Kettering", value: "KET" },
        { display: "Kew Bridge", value: "KWB" },
        { display: "Kew Gardens", value: "KWG" },
        { display: "Keyham", value: "KEY" },
        { display: "Keynsham", value: "KYN" },
        { display: "Kidbrooke", value: "KDB" },
        { display: "Kidderminster", value: "KID" },
        { display: "Kidsgrove", value: "KDG" },
        { display: "Kidwelly", value: "KWL" },
        { display: "Kilburn High Road", value: "KBN" },
        { display: "Kildale", value: "KLD" },
        { display: "Kildonan", value: "KIL" },
        { display: "Kilgetty", value: "KGT" },
        { display: "Kilmarnock", value: "KMK" },
        { display: "Kilmaurs", value: "KLM" },
        { display: "Kilpatrick", value: "KPT" },
        { display: "Kilwinning", value: "KWN" },
        { display: "Kinbrace", value: "KBC" },
        { display: "Kingham", value: "KGM" },
        { display: "Kinghorn", value: "KGH" },
        { display: "Kings Langley", value: "KGL" },
        { display: "Kings Lynn", value: "KLN" },
        { display: "Kings Norton", value: "KNN" },
        { display: "Kings Nympton", value: "KGN" },
        { display: "Kings Park", value: "KGP" },
        { display: "Kings Sutton", value: "KGS" },
        { display: "Kingsknowe", value: "KGE" },
        { display: "Kingston", value: "KNG" },
        { display: "Kingswood", value: "KND" },
        { display: "Kingussie", value: "KIN" },
        { display: "Kintbury", value: "KIT" },
        { display: "Kirby Cross", value: "KBX" },
        { display: "Kirk Sandall", value: "KKS" },
        { display: "Kirkby (Merseyside)", value: "KIR" },
        { display: "Kirkby Stephen", value: "KSW" },
        { display: "Kirkby-in-Ashfield", value: "KKB" },
        { display: "Kirkby-in-Furness", value: "KBF" },
        { display: "Kirkcaldy", value: "KDY" },
        { display: "Kirkconnel", value: "KRK" },
        { display: "Kirkdale", value: "KKD" },
        { display: "Kirkham & Wesham", value: "KKM" },
        { display: "Kirkhill", value: "KKH" },
        { display: "Kirknewton", value: "KKN" },
        { display: "Kirkwood", value: "KWD" },
        { display: "Kirton Lindsey", value: "KTL" },
        { display: "Kiveton Bridge", value: "KIV" },
        { display: "Kiveton Park", value: "KVP" },
        { display: "Knaresborough", value: "KNA" },
        { display: "Knebworth", value: "KBW" },
        { display: "Knighton", value: "KNI" },
        { display: "Knockholt", value: "KCK" },
        { display: "Knottingley", value: "KNO" },
        { display: "Knucklas", value: "KNU" },
        { display: "Knutsford", value: "KNF" },
        { display: "Kyle of Lochalsh", value: "KYL" },
        { display: "Ladybank", value: "LDY" },
        { display: "Ladywell", value: "LAD" },
        { display: "Laindon", value: "LAI" },
        { display: "Lairg", value: "LRG" },
        { display: "Lake", value: "LKE" },
        { display: "Lakenheath", value: "LAK" },
        { display: "Lamphey", value: "LAM" },
        { display: "Lanark", value: "LNK" },
        { display: "Lancaster", value: "LAN" },
        { display: "Lancing", value: "LAC" },
        { display: "Landywood", value: "LAW" },
        { display: "Langbank", value: "LGB" },
        { display: "Langho", value: "LHO" },
        { display: "Langley (Berks)", value: "LNY" },
        { display: "Langley Green", value: "LGG" },
        { display: "Langley Mill", value: "LGM" },
        { display: "Langside", value: "LGS" },
        { display: "Langwathby", value: "LGW" },
        { display: "Langwith-Whaley Thorns", value: "LAG" },
        { display: "Lapford", value: "LAP" },
        { display: "Lapworth", value: "LPW" },
        { display: "Larbert", value: "LBT" },
        { display: "Largs", value: "LAR" },
        { display: "Larkhall", value: "LRH" },
        { display: "Laurencekirk", value: "LAU" },
        { display: "Lawrence Hill", value: "LWH" },
        { display: "Layton (Lancs)", value: "LAY" },
        { display: "Lazonby & Kirkoswald", value: "LZB" },
        { display: "Lea Bridge", value: "LEB" },
        { display: "Lea Green", value: "LEG" },
        { display: "Lea Hall", value: "LEH" },
        { display: "Leagrave", value: "LEA" },
        { display: "Lealholm", value: "LHM" },
        { display: "Leamington Spa", value: "LMS" },
        { display: "Leasowe", value: "LSW" },
        { display: "Leatherhead", value: "LHD" },
        { display: "Ledbury", value: "LED" },
        { display: "Lee (London)", value: "LEE" },
        { display: "Leeds", value: "LDS" },
        { display: "Leicester", value: "LEI" },
        { display: "Leigh (Kent)", value: "LIH" },
        { display: "Leigh-on-Sea", value: "LES" },
        { display: "Leighton Buzzard", value: "LBZ" },
        { display: "Lelant", value: "LEL" },
        { display: "Lelant Saltings", value: "LTS" },
        { display: "Lenham", value: "LEN" },
        { display: "Lenzie", value: "LNZ" },
        { display: "Leominster", value: "LEO" },
        { display: "Letchworth Garden City", value: "LET" },
        { display: "Leuchars (for St. Andrews)", value: "LEU" },
        { display: "Levenshulme", value: "LVM" },
        { display: "Lewes", value: "LWS" },
        { display: "Lewisham", value: "LEW" },
        { display: "Leyland", value: "LEY" },
        { display: "Leyton Midland Road", value: "LEM" },
        { display: "Leytonstone High Road", value: "LER" },
        { display: "Lichfield City", value: "LIC" },
        { display: "Lichfield Trent Valley", value: "LTV" },
        { display: "Lidlington", value: "LID" },
        { display: "Limehouse", value: "LHS" },
        { display: "Lincoln Central", value: "LCN" },
        { display: "Lingfield", value: "LFD" },
        { display: "Lingwood", value: "LGD" },
        { display: "Linlithgow", value: "LIN" },
        { display: "Liphook", value: "LIP" },
        { display: "Liskeard", value: "LSK" },
        { display: "Liss", value: "LIS" },
        { display: "Lisvane & Thornhill", value: "LVT" },
        { display: "Little Kimble", value: "LTK" },
        { display: "Little Sutton", value: "LTT" },
        { display: "Littleborough", value: "LTL" },
        { display: "Littlehampton", value: "LIT" },
        { display: "Littlehaven", value: "LVN" },
        { display: "Littleport", value: "LTP" },
        { display: "Liverpool Central", value: "LVC" },
        { display: "Liverpool James Street", value: "LVJ" },
        { display: "Liverpool Lime Street", value: "LIV" },
        { display: "Liverpool South Parkway", value: "LPY" },
        { display: "Livingston North", value: "LSN" },
        { display: "Livingston South", value: "LVG" },
        { display: "Llanaber", value: "LLA" },
        { display: "Llanbedr", value: "LBR" },
        { display: "Llanbister Road", value: "LLT" },
        { display: "Llanbradach", value: "LNB" },
        { display: "Llandaf", value: "LLN" },
        { display: "Llandanwg", value: "LDN" },
        { display: "Llandecwyn", value: "LLC" },
        { display: "Llandeilo", value: "LLL" },
        { display: "Llandovery", value: "LLV" },
        { display: "Llandrindod", value: "LLO" },
        { display: "Llandudno", value: "LLD" },
        { display: "Llandudno Junction", value: "LLJ" },
        { display: "Llandybie", value: "LLI" },
        { display: "Llanelli", value: "LLE" },
        { display: "Llanfairfechan", value: "LLF" },
        { display: "Llanfairpwll", value: "LPG" },
        { display: "Llangadog", value: "LLG" },
        { display: "Llangammarch", value: "LLM" },
        { display: "Llangennech", value: "LLH" },
        { display: "Llangynllo", value: "LGO" },
        { display: "Llanharan", value: "LLR" },
        { display: "Llanhilleth", value: "LTH" },
        { display: "Llanishen", value: "LLS" },
        { display: "Llanrwst", value: "LWR" },
        { display: "Llansamlet", value: "LAS" },
        { display: "Llantwit Major", value: "LWM" },
        { display: "Llanwrda", value: "LNR" },
        { display: "Llanwrtyd", value: "LNW" },
        { display: "Llwyngwril", value: "LLW" },
        { display: "Llwynypia", value: "LLY" },
        { display: "Loch Awe", value: "LHA" },
        { display: "Loch Eil Outward Bound", value: "LHE" },
        { display: "Lochailort", value: "LCL" },
        { display: "Locheilside", value: "LCS" },
        { display: "Lochgelly", value: "LCG" },
        { display: "Lochluichart", value: "LCC" },
        { display: "Lochwinnoch", value: "LHW" },
        { display: "Lockerbie", value: "LOC" },
        { display: "Lockwood", value: "LCK" },
        { display: "London Blackfriars", value: "BFR" },
        { display: "London Bridge", value: "LBG" },
        { display: "London Cannon Street", value: "CST" },
        { display: "London Charing Cross", value: "CHX" },
        { display: "London Euston", value: "EUS" },
        { display: "London Fenchurch Street", value: "FST" },
        { display: "London Fields", value: "LOF" },
        { display: "London Kings Cross", value: "KGX" },
        { display: "London Liverpool Street", value: "LST" },
        { display: "London Marylebone", value: "MYB" },
        { display: "London Paddington", value: "PAD" },
        { display: "London Road (Brighton)", value: "LRB" },
        { display: "London Road (Guildford)", value: "LRD" },
        { display: "London St Pancras (Intl)", value: "SPX" },
        { display: "London St Pancras International", value: "STP" },
        { display: "London Victoria", value: "VIC" },
        { display: "London Waterloo", value: "WAT" },
        { display: "London Waterloo East", value: "WAE" },
        { display: "Long Buckby", value: "LBK" },
        { display: "Long Eaton", value: "LGE" },
        { display: "Long Preston", value: "LPR" },
        { display: "Longbeck", value: "LGK" },
        { display: "Longbridge", value: "LOB" },
        { display: "Longcross", value: "LNG" },
        { display: "Longfield", value: "LGF" },
        { display: "Longniddry", value: "LND" },
        { display: "Longport", value: "LPT" },
        { display: "Longton", value: "LGN" },
        { display: "Looe", value: "LOO" },
        { display: "Lostock", value: "LOT" },
        { display: "Lostock Gralam", value: "LTG" },
        { display: "Lostock Hall", value: "LOH" },
        { display: "Lostwithiel", value: "LOS" },
        { display: "Loughborough", value: "LBO" },
        { display: "Loughborough Junction", value: "LGJ" },
        { display: "Lowdham", value: "LOW" },
        { display: "Lower Sydenham", value: "LSY" },
        { display: "Lowestoft", value: "LWT" },
        { display: "Ludlow", value: "LUD" },
        { display: "Luton", value: "LUT" },
        { display: "Luton Airport Parkway", value: "LTN" },
        { display: "Luxulyan", value: "LUX" },
        { display: "Lydney", value: "LYD" },
        { display: "Lye (West Midlands)", value: "LYE" },
        { display: "Lymington Pier", value: "LYP" },
        { display: "Lymington Town", value: "LYT" },
        { display: "Lympstone Commando", value: "LYC" },
        { display: "Lympstone Village", value: "LYM" },
        { display: "Lytham", value: "LTM" },
        { display: "Macclesfield", value: "MAC" },
        { display: "Machynlleth", value: "MCN" },
        { display: "Maesteg", value: "MST" },
        { display: "Maesteg (Ewenny Road)", value: "MEW" },
        { display: "Maghull", value: "MAG" },
        { display: "Maiden Newton", value: "MDN" },
        { display: "Maidenhead", value: "MAI" },
        { display: "Maidstone Barracks", value: "MDB" },
        { display: "Maidstone East", value: "MDE" },
        { display: "Maidstone West", value: "MDW" },
        { display: "Malden Manor", value: "MAL" },
        { display: "Mallaig", value: "MLG" },
        { display: "Malton", value: "MLT" },
        { display: "Malvern Link", value: "MVL" },
        { display: "Manchester Airport", value: "MIA" },
        { display: "Manchester Oxford Road", value: "MCO" },
        { display: "Manchester Piccadilly", value: "MAN" },
        { display: "Manchester United Football Ground", value: "MUF" },
        { display: "Manchester Victoria", value: "MCV" },
        { display: "Manea", value: "MNE" },
        { display: "Manningtree", value: "MNG" },
        { display: "Manor Park", value: "MNP" },
        { display: "Manor Road", value: "MNR" },
        { display: "Manorbier", value: "MRB" },
        { display: "Manors", value: "MAS" },
        { display: "Mansfield", value: "MFT" },
        { display: "Mansfield Woodhouse", value: "MSW" },
        { display: "March", value: "MCH" },
        { display: "Marden (Kent)", value: "MRN" },
        { display: "Margate", value: "MAR" },
        { display: "Market Harborough", value: "MHR" },
        { display: "Market Rasen", value: "MKR" },
        { display: "Markinch", value: "MNC" },
        { display: "Marks Tey", value: "MKT" },
        { display: "Marlow", value: "MLW" },
        { display: "Marple", value: "MPL" },
        { display: "Marsden (Yorks)", value: "MSN" },
        { display: "Marske", value: "MSK" },
        { display: "Marston Green", value: "MGN" },
        { display: "Martin Mill", value: "MTM" },
        { display: "Martins Heron", value: "MAO" },
        { display: "Marton", value: "MTO" },
        { display: "Maryhill", value: "MYH" },
        { display: "Maryland", value: "MYL" },
        { display: "Maryport", value: "MRY" },
        { display: "Matlock", value: "MAT" },
        { display: "Matlock Bath", value: "MTB" },
        { display: "Mauldeth Road", value: "MAU" },
        { display: "Maxwell Park", value: "MAX" },
        { display: "Maybole", value: "MAY" },
        { display: "Maze Hill", value: "MZH" },
        { display: "Meadowhall", value: "MHS" },
        { display: "Meldreth", value: "MEL" },
        { display: "Melksham", value: "MKM" },
        { display: "Melton (Suffolk)", value: "MES" },
        { display: "Melton Mowbray", value: "MMO" },
        { display: "Menheniot", value: "MEN" },
        { display: "Menston", value: "MNN" },
        { display: "Meols", value: "MEO" },
        { display: "Meols Cop", value: "MEC" },
        { display: "Meopham", value: "MEP" },
        { display: "Merryton", value: "MEY" },
        { display: "Merstham", value: "MHM" },
        { display: "Merthyr Tydfil", value: "MER" },
        { display: "Merthyr Vale", value: "MEV" },
        { display: "Metheringham", value: "MGM" },
        { display: "MetroCentre", value: "MCE" },
        { display: "Mexborough", value: "MEX" },
        { display: "Micheldever", value: "MIC" },
        { display: "Micklefield", value: "MIK" },
        { display: "Middlesbrough", value: "MBR" },
        { display: "Middlewood", value: "MDL" },
        { display: "Midgham", value: "MDG" },
        { display: "Milford (Surrey)", value: "MLF" },
        { display: "Milford Haven", value: "MFH" },
        { display: "Mill Hill (Lancs)", value: "MLH" },
        { display: "Mill Hill Broadway", value: "MIL" },
        { display: "Millbrook (Beds)", value: "MLB" },
        { display: "Millbrook (Hants)", value: "MBK" },
        { display: "Milliken Park", value: "MIN" },
        { display: "Millom", value: "MLM" },
        { display: "Mills Hill (Manchester)", value: "MIH" },
        { display: "Milngavie", value: "MLN" },
        { display: "Milton Keynes Central", value: "MKC" },
        { display: "Minffordd", value: "MFF" },
        { display: "Minster", value: "MSR" },
        { display: "Mirfield", value: "MIR" },
        { display: "Mistley", value: "MIS" },
        { display: "Mitcham Eastfields", value: "MTC" },
        { display: "Mitcham Junction", value: "MIJ" },
        { display: "Mobberley", value: "MOB" },
        { display: "Monifieth", value: "MON" },
        { display: "Monks Risborough", value: "MRS" },
        { display: "Montpelier", value: "MTP" },
        { display: "Montrose", value: "MTS" },
        { display: "Moorfields", value: "MRF" },
        { display: "Moorgate", value: "MOG" },
        { display: "Moorside", value: "MSD" },
        { display: "Moorthorpe", value: "MRP" },
        { display: "Morar", value: "MRR" },
        { display: "Morchard Road", value: "MRD" },
        { display: "Morden South", value: "MDS" },
        { display: "Morecambe", value: "MCM" },
        { display: "Moreton (Dorset)", value: "MTN" },
        { display: "Moreton (Merseyside)", value: "MRT" },
        { display: "Moreton-in-Marsh", value: "MIM" },
        { display: "Morfa Mawddach", value: "MFA" },
        { display: "Morley", value: "MLY" },
        { display: "Morpeth", value: "MPT" },
        { display: "Mortimer", value: "MOR" },
        { display: "Mortlake", value: "MTL" },
        { display: "Moses Gate", value: "MSS" },
        { display: "Moss Side", value: "MOS" },
        { display: "Mossley (Manchester)", value: "MSL" },
        { display: "Mossley Hill", value: "MSH" },
        { display: "Mosspark", value: "MPK" },
        { display: "Moston", value: "MSO" },
        { display: "Motherwell", value: "MTH" },
        { display: "Motspur Park", value: "MOT" },
        { display: "Mottingham", value: "MTG" },
        { display: "Mottisfont & Dunbridge", value: "DBG" },
        { display: "Mouldsworth", value: "MLD" },
        { display: "Moulsecoomb", value: "MCB" },
        { display: "Mount Florida", value: "MFL" },
        { display: "Mount Vernon", value: "MTV" },
        { display: "Mountain Ash", value: "MTA" },
        { display: "Muir of Ord", value: "MOO" },
        { display: "Muirend", value: "MUI" },
        { display: "Musselburgh", value: "MUB" },
        { display: "Mytholmroyd", value: "MYT" },
        { display: "Nafferton", value: "NFN" },
        { display: "Nailsea & Backwell", value: "NLS" },
        { display: "Nairn", value: "NRN" },
        { display: "Nantwich", value: "NAN" },
        { display: "Narberth", value: "NAR" },
        { display: "Narborough", value: "NBR" },
        { display: "Navigation Road", value: "NVR" },
        { display: "Neath", value: "NTH" },
        { display: "Needham Market", value: "NMT" },
        { display: "Neilston", value: "NEI" },
        { display: "Nelson", value: "NEL" },
        { display: "Neston", value: "NES" },
        { display: "Netherfield", value: "NET" },
        { display: "Nethertown", value: "NRT" },
        { display: "Netley", value: "NTL" },
        { display: "New Barnet", value: "NBA" },
        { display: "New Beckenham", value: "NBC" },
        { display: "New Brighton", value: "NBN" },
        { display: "New Clee", value: "NCE" },
        { display: "New Cross", value: "NWX" },
        { display: "New Cross Gate", value: "NXG" },
        { display: "New Cumnock", value: "NCK" },
        { display: "New Eltham", value: "NEH" },
        { display: "New Holland", value: "NHL" },
        { display: "New Hythe", value: "NHE" },
        { display: "New Lane", value: "NLN" },
        { display: "New Malden", value: "NEM" },
        { display: "New Mills Central", value: "NMC" },
        { display: "New Mills Newtown", value: "NMN" },
        { display: "New Milton", value: "NWM" },
        { display: "New Pudsey", value: "NPD" },
        { display: "New Southgate", value: "NSG" },
        { display: "Newark Castle", value: "NCT" },
        { display: "Newark North Gate", value: "NNG" },
        { display: "Newbridge", value: "NBE" },
        { display: "Newbury", value: "NBY" },
        { display: "Newbury Racecourse", value: "NRC" },
        { display: "Newcastle", value: "NCL" },
        { display: "Newcourt", value: "NCO" },
        { display: "Newcraighall", value: "NEW" },
        { display: "Newhaven Harbour", value: "NVH" },
        { display: "Newhaven Town", value: "NVN" },
        { display: "Newington", value: "NGT" },
        { display: "Newmarket", value: "NMK" },
        { display: "Newport (Essex)", value: "NWE" },
        { display: "Newport (South Wales)", value: "NWP" },
        { display: "Newquay", value: "NQY" },
        { display: "Newstead", value: "NSD" },
        { display: "Newton (Lanark)", value: "NTN" },
        { display: "Newton Abbot", value: "NTA" },
        { display: "Newton Aycliffe", value: "NAY" },
        { display: "Newton for Hyde", value: "NWN" },
        { display: "Newton St Cyres", value: "NTC" },
        { display: "Newtongrange", value: "NEG" },
        { display: "Newton-le-Willows", value: "NLW" },
        { display: "Newtonmore", value: "NWR" },
        { display: "Newton-on-Ayr", value: "NOA" },
        { display: "Newtown (Powys)", value: "NWT" },
        { display: "Ninian Park", value: "NNP" },
        { display: "Nitshill", value: "NIT" },
        { display: "Norbiton", value: "NBT" },
        { display: "Norbury", value: "NRB" },
        { display: "Normans Bay", value: "NSB" },
        { display: "Normanton", value: "NOR" },
        { display: "North Berwick", value: "NBW" },
        { display: "North Camp", value: "NCM" },
        { display: "North Dulwich", value: "NDL" },
        { display: "North Fambridge", value: "NFA" },
        { display: "North Llanrwst", value: "NLR" },
        { display: "North Queensferry", value: "NQU" },
        { display: "North Road (Darlington)", value: "NRD" },
        { display: "North Sheen", value: "NSH" },
        { display: "North Walsham", value: "NWA" },
        { display: "North Wembley", value: "NWB" },
        { display: "Northallerton", value: "NTR" },
        { display: "Northampton", value: "NMP" },
        { display: "Northfield", value: "NFD" },
        { display: "Northfleet", value: "NFL" },
        { display: "Northolt Park", value: "NLT" },
        { display: "Northumberland Park", value: "NUM" },
        { display: "Northwich", value: "NWI" },
        { display: "Norton Bridge", value: "NTB" },
        { display: "Norwich", value: "NRW" },
        { display: "Norwood Junction", value: "NWD" },
        { display: "Nottingham", value: "NOT" },
        { display: "Nuneaton", value: "NUN" },
        { display: "Nunhead", value: "NHD" },
        { display: "Nunthorpe", value: "NNT" },
        { display: "Nutbourne", value: "NUT" },
        { display: "Nutfield", value: "NUF" },
        { display: "Oakengates", value: "OKN" },
        { display: "Oakham", value: "OKM" },
        { display: "Oakleigh Park", value: "OKL" },
        { display: "Oban", value: "OBN" },
        { display: "Ockendon", value: "OCK" },
        { display: "Ockley", value: "OLY" },
        { display: "Okehampton", value: "OKE" },
        { display: "Old Hill", value: "OHL" },
        { display: "Old Roan", value: "ORN" },
        { display: "Old Street", value: "OLD" },
        { display: "Oldfield Park", value: "OLF" },
        { display: "Olton", value: "OLT" },
        { display: "Ore", value: "ORE" },
        { display: "Ormskirk", value: "OMS" },
        { display: "Orpington", value: "ORP" },
        { display: "Orrell", value: "ORR" },
        { display: "Orrell Park", value: "OPK" },
        { display: "Otford", value: "OTF" },
        { display: "Oulton Broad North", value: "OUN" },
        { display: "Oulton Broad South", value: "OUS" },
        { display: "Outwood", value: "OUT" },
        { display: "Overpool", value: "OVE" },
        { display: "Overton", value: "OVR" },
        { display: "Oxenholme Lake District", value: "OXN" },
        { display: "Oxford", value: "OXF" },
        { display: "Oxford Parkway", value: "OXP" },
        { display: "Oxshott", value: "OXS" },
        { display: "Oxted", value: "OXT" },
        { display: "Paddock Wood", value: "PDW" },
        { display: "Padgate", value: "PDG" },
        { display: "Paignton", value: "PGN" },
        { display: "Paisley Canal", value: "PCN" },
        { display: "Paisley Gilmour Street", value: "PYG" },
        { display: "Paisley St James", value: "PYJ" },
        { display: "Palmers Green", value: "PAL" },
        { display: "Pangbourne", value: "PAN" },
        { display: "Pannal", value: "PNL" },
        { display: "Pantyffynnon", value: "PTF" },
        { display: "Par", value: "PAR" },
        { display: "Parbold", value: "PBL" },
        { display: "Park Street", value: "PKT" },
        { display: "Parkstone (Dorset)", value: "PKS" },
        { display: "Parson Street", value: "PSN" },
        { display: "Partick", value: "PTK" },
        { display: "Parton", value: "PRN" },
        { display: "Patchway", value: "PWY" },
        { display: "Patricroft", value: "PAT" },
        { display: "Patterton", value: "PTT" },
        { display: "Peartree", value: "PEA" },
        { display: "Peckham Rye", value: "PMR" },
        { display: "Pegswood", value: "PEG" },
        { display: "Pemberton", value: "PEM" },
        { display: "Pembrey & Burry Port", value: "PBY" },
        { display: "Pembroke", value: "PMB" },
        { display: "Pembroke Dock", value: "PMD" },
        { display: "Penally", value: "PNA" },
        { display: "Penarth", value: "PEN" },
        { display: "Pencoed", value: "PCD" },
        { display: "Pengam", value: "PGM" },
        { display: "Penge East", value: "PNE" },
        { display: "Penge West", value: "PNW" },
        { display: "Penhelig", value: "PHG" },
        { display: "Penistone", value: "PNS" },
        { display: "Penkridge", value: "PKG" },
        { display: "Penmaenmawr", value: "PMW" },
        { display: "Penmere", value: "PNM" },
        { display: "Penrhiwceiber", value: "PER" },
        { display: "Penrhyndeudraeth", value: "PRH" },
        { display: "Penrith (North Lakes)", value: "PNR" },
        { display: "Penryn (Cornwall)", value: "PYN" },
        { display: "Pensarn (Gwynedd)", value: "PES" },
        { display: "Penshurst", value: "PHR" },
        { display: "Pentre-Bach", value: "PTB" },
        { display: "Pen-y-Bont", value: "PNY" },
        { display: "Penychain", value: "PNC" },
        { display: "Penyffordd", value: "PNF" },
        { display: "Penzance", value: "PNZ" },
        { display: "Perranwell", value: "PRW" },
        { display: "Perry Barr", value: "PRY" },
        { display: "Pershore", value: "PSH" },
        { display: "Perth", value: "PTH" },
        { display: "Peterborough", value: "PBO" },
        { display: "Petersfield", value: "PTR" },
        { display: "Petts Wood", value: "PET" },
        { display: "Pevensey & Westham", value: "PEV" },
        { display: "Pevensey Bay", value: "PEB" },
        { display: "Pewsey", value: "PEW" },
        { display: "Pilning", value: "PIL" },
        { display: "Pinhoe", value: "PIN" },
        { display: "Pitlochry", value: "PIT" },
        { display: "Pitsea", value: "PSE" },
        { display: "Pleasington", value: "PLS" },
        { display: "Plockton", value: "PLK" },
        { display: "Pluckley", value: "PLC" },
        { display: "Plumley", value: "PLM" },
        { display: "Plumpton", value: "PMP" },
        { display: "Plumstead", value: "PLU" },
        { display: "Plymouth", value: "PLY" },
        { display: "Pokesdown", value: "POK" },
        { display: "Polegate", value: "PLG" },
        { display: "Polesworth", value: "PSW" },
        { display: "Pollokshaws East", value: "PWE" },
        { display: "Pollokshaws West", value: "PWW" },
        { display: "Pollokshields East", value: "PLE" },
        { display: "Pollokshields West", value: "PLW" },
        { display: "Polmont", value: "PMT" },
        { display: "Polsloe Bridge", value: "POL" },
        { display: "Ponders End", value: "PON" },
        { display: "Pontarddulais", value: "PTD" },
        { display: "Pontefract Baghill", value: "PFR" },
        { display: "Pontefract Monkhill", value: "PFM" },
        { display: "Pontefract Tanshelf", value: "POT" },
        { display: "Pontlottyn", value: "PLT" },
        { display: "Pontyclun", value: "PYC" },
        { display: "Pont-y-Pant", value: "PYP" },
        { display: "Pontypool & New Inn", value: "PPL" },
        { display: "Pontypridd", value: "PPD" },
        { display: "Poole", value: "POO" },
        { display: "Poppleton", value: "POP" },
        { display: "Port Glasgow", value: "PTG" },
        { display: "Port Sunlight", value: "PSL" },
        { display: "Port Talbot Parkway", value: "PTA" },
        { display: "Portchester", value: "PTC" },
        { display: "Porth", value: "POR" },
        { display: "Porthmadog", value: "PTM" },
        { display: "Portlethen", value: "PLN" },
        { display: "Portslade", value: "PLD" },
        { display: "Portsmouth & Southsea", value: "PMS" },
        { display: "Portsmouth Arms", value: "PMA" },
        { display: "Portsmouth Harbour", value: "PMH" },
        { display: "Possilpark & Parkhouse", value: "PPK" },
        { display: "Potters Bar", value: "PBR" },
        { display: "Poulton-le-Fylde", value: "PFY" },
        { display: "Poynton", value: "PYT" },
        { display: "Prees", value: "PRS" },
        { display: "Prescot", value: "PSC" },
        { display: "Prestatyn", value: "PRT" },
        { display: "Prestbury", value: "PRB" },
        { display: "Preston (Lancs)", value: "PRE" },
        { display: "Preston Park", value: "PRP" },
        { display: "Prestonpans", value: "PST" },
        { display: "Prestwick International Airport", value: "PRA" },
        { display: "Prestwick Town", value: "PTW" },
        { display: "Priesthill & Darnley", value: "PTL" },
        { display: "Princes Risborough", value: "PRR" },
        { display: "Prittlewell", value: "PRL" },
        { display: "Prudhoe", value: "PRU" },
        { display: "Pulborough", value: "PUL" },
        { display: "Purfleet", value: "PFL" },
        { display: "Purley", value: "PUR" },
        { display: "Purley Oaks", value: "PUO" },
        { display: "Putney", value: "PUT" },
        { display: "Pwllheli", value: "PWL" },
        { display: "Pye Corner", value: "PYE" },
        { display: "Pyle", value: "PYL" },
        { display: "Quakers Yard", value: "QYD" },
        { display: "Queenborough", value: "QBR" },
        { display: "Queens Park (Glasgow)", value: "QPK" },
        { display: "Queens Park (London)", value: "QPW" },
        { display: "Queens Road (Peckham)", value: "QRP" },
        { display: "Queenstown Road (Battersea)", value: "QRB" },
        { display: "Quintrell Downs", value: "QUI" },
        { display: "Radcliffe-on-Trent", value: "RDF" },
        { display: "Radlett", value: "RDT" },
        { display: "Radley", value: "RAD" },
        { display: "Radyr", value: "RDR" },
        { display: "Rainford", value: "RNF" },
        { display: "Rainham (Essex)", value: "RNM" },
        { display: "Rainham (Kent)", value: "RAI" },
        { display: "Rainhill", value: "RNH" },
        { display: "Ramsgate", value: "RAM" },
        { display: "Ramsgreave & Wilpshire", value: "RGW" },
        { display: "Rannoch", value: "RAN" },
        { display: "Rauceby", value: "RAU" },
        { display: "Ravenglass for Eskdale", value: "RAV" },
        { display: "Ravensbourne", value: "RVB" },
        { display: "Ravensthorpe", value: "RVN" },
        { display: "Rawcliffe", value: "RWC" },
        { display: "Rayleigh", value: "RLG" },
        { display: "Raynes Park", value: "RAY" },
        { display: "Reading", value: "RDG" },
        { display: "Reading West", value: "RDW" },
        { display: "Rectory Road", value: "REC" },
        { display: "Redbridge", value: "RDB" },
        { display: "Redcar British Steel", value: "RBS" },
        { display: "Redcar Central", value: "RCC" },
        { display: "Redcar East", value: "RCE" },
        { display: "Reddish North", value: "RDN" },
        { display: "Reddish South", value: "RDS" },
        { display: "Redditch", value: "RDC" },
        { display: "Redhill", value: "RDH" },
        { display: "Redland", value: "RDA" },
        { display: "Redruth", value: "RED" },
        { display: "Reedham (Norfolk)", value: "REE" },
        { display: "Reedham (Surrey)", value: "RHM" },
        { display: "Reigate", value: "REI" },
        { display: "Renton", value: "RTN" },
        { display: "Retford", value: "RET" },
        { display: "Rhiwbina", value: "RHI" },
        { display: "Rhoose Cardiff International Airport", value: "RIA" },
        { display: "Rhosneigr", value: "RHO" },
        { display: "Rhyl", value: "RHL" },
        { display: "Rhymney", value: "RHY" },
        { display: "Ribblehead", value: "RHD" },
        { display: "Rice Lane", value: "RIL" },
        { display: "Richmond (London)", value: "RMD" },
        { display: "Rickmansworth", value: "RIC" },
        { display: "Riddlesdown", value: "RDD" },
        { display: "Ridgmont", value: "RID" },
        { display: "Riding Mill", value: "RDM" },
        { display: "Risca & Pontymister", value: "RCA" },
        { display: "Rishton", value: "RIS" },
        { display: "Robertsbridge", value: "RBR" },
        { display: "Roby", value: "ROB" },
        { display: "Rochdale", value: "RCD" },
        { display: "Roche", value: "ROC" },
        { display: "Rochester", value: "RTR" },
        { display: "Rochford", value: "RFD" },
        { display: "Rock Ferry", value: "RFY" },
        { display: "Rogart", value: "ROG" },
        { display: "Rogerstone", value: "ROR" },
        { display: "Rolleston", value: "ROL" },
        { display: "Roman Bridge", value: "RMB" },
        { display: "Romford", value: "RMF" },
        { display: "Romiley", value: "RML" },
        { display: "Romsey", value: "ROM" },
        { display: "Roose", value: "ROO" },
        { display: "Rose Grove", value: "RSG" },
        { display: "Rose Hill Marple", value: "RSH" },
        { display: "Rosyth", value: "ROS" },
        { display: "Rotherham Central", value: "RMC" },
        { display: "Rotherhithe", value: "ROE" },
        { display: "Roughton Road", value: "RNR" },
        { display: "Rowlands Castle", value: "RLN" },
        { display: "Rowley Regis", value: "ROW" },
        { display: "Roy Bridge", value: "RYB" },
        { display: "Roydon", value: "RYN" },
        { display: "Royston", value: "RYS" },
        { display: "Ruabon", value: "RUA" },
        { display: "Rufford", value: "RUF" },
        { display: "Rugby", value: "RUG" },
        { display: "Rugeley Town", value: "RGT" },
        { display: "Rugeley Trent Valley", value: "RGL" },
        { display: "Runcorn", value: "RUN" },
        { display: "Runcorn East", value: "RUE" },
        { display: "Ruskington", value: "RKT" },
        { display: "Ruswarp", value: "RUS" },
        { display: "Rutherglen", value: "RUT" },
        { display: "Ryde Esplanade", value: "RYD" },
        { display: "Ryde Pier Head", value: "RYP" },
        { display: "Ryde St Johns Road", value: "RYR" },
        { display: "Ryder Brow", value: "RRB" },
        { display: "Rye (Sussex)", value: "RYE" },
        { display: "Rye House", value: "RYH" },
        { display: "Salford Central", value: "SFD" },
        { display: "Salford Crescent", value: "SLD" },
        { display: "Salfords (Surrey)", value: "SAF" },
        { display: "Salhouse", value: "SAH" },
        { display: "Salisbury", value: "SAL" },
        { display: "Saltaire", value: "SAE" },
        { display: "Saltash", value: "STS" },
        { display: "Saltburn", value: "SLB" },
        { display: "Saltcoats", value: "SLT" },
        { display: "Saltmarshe", value: "SAM" },
        { display: "Salwick", value: "SLW" },
        { display: "Sampford Courtenay", value: "SMC" },
        { display: "Sandal & Agbrigg", value: "SNA" },
        { display: "Sandbach", value: "SDB" },
        { display: "Sanderstead", value: "SNR" },
        { display: "Sandhills", value: "SDL" },
        { display: "Sandhurst (Berks)", value: "SND" },
        { display: "Sandling", value: "SDG" },
        { display: "Sandown", value: "SAN" },
        { display: "Sandplace", value: "SDP" },
        { display: "Sandwell & Dudley", value: "SAD" },
        { display: "Sandwich", value: "SDW" },
        { display: "Sandy", value: "SDY" },
        { display: "Sankey for Penketh", value: "SNK" },
        { display: "Sanquhar", value: "SQH" },
        { display: "Sarn", value: "SRR" },
        { display: "Saundersfoot", value: "SDF" },
        { display: "Saunderton", value: "SDR" },
        { display: "Sawbridgeworth", value: "SAW" },
        { display: "Saxilby", value: "SXY" },
        { display: "Saxmundham", value: "SAX" },
        { display: "Scarborough", value: "SCA" },
        { display: "Scotscalder", value: "SCT" },
        { display: "Scotstounhill", value: "SCH" },
        { display: "Scunthorpe", value: "SCU" },
        { display: "Sea Mills", value: "SML" },
        { display: "Seaford (Sussex)", value: "SEF" },
        { display: "Seaforth & Litherland", value: "SFL" },
        { display: "Seaham", value: "SEA" },
        { display: "Seamer", value: "SEM" },
        { display: "Seascale", value: "SSC" },
        { display: "Seaton Carew", value: "SEC" },
        { display: "Seer Green & Jordans", value: "SRG" },
        { display: "Selby", value: "SBY" },
        { display: "Selhurst", value: "SRS" },
        { display: "Sellafield", value: "SEL" },
        { display: "Selling", value: "SEG" },
        { display: "Selly Oak", value: "SLY" },
        { display: "Settle", value: "SET" },
        { display: "Seven Kings", value: "SVK" },
        { display: "Seven Sisters", value: "SVS" },
        { display: "Sevenoaks", value: "SEV" },
        { display: "Severn Beach", value: "SVB" },
        { display: "Severn Tunnel Junction", value: "STJ" },
        { display: "Shadwell", value: "SDE" },
        { display: "Shalford (Surrey)", value: "SFR" },
        { display: "Shanklin", value: "SHN" },
        { display: "Shawfair", value: "SFI" },
        { display: "Shawford", value: "SHW" },
        { display: "Shawlands", value: "SHL" },
        { display: "Sheerness-on-Sea", value: "SSS" },
        { display: "Sheffield", value: "SHF" },
        { display: "Shelford (Cambs)", value: "SED" },
        { display: "Shenfield", value: "SNF" },
        { display: "Shenstone", value: "SEN" },
        { display: "Shepherd's Bush", value: "SPB" },
        { display: "Shepherds Well", value: "SPH" },
        { display: "Shepley", value: "SPY" },
        { display: "Shepperton", value: "SHP" },
        { display: "Shepreth", value: "STH" },
        { display: "Sherborne", value: "SHE" },
        { display: "Sherburn-in-Elmet", value: "SIE" },
        { display: "Sheringham", value: "SHM" },
        { display: "Shettleston", value: "SLS" },
        { display: "Shieldmuir", value: "SDM" },
        { display: "Shifnal", value: "SFN" },
        { display: "Shildon", value: "SHD" },
        { display: "Shiplake", value: "SHI" },
        { display: "Shipley (Yorks)", value: "SHY" },
        { display: "Shippea Hill", value: "SPP" },
        { display: "Shipton", value: "SIP" },
        { display: "Shirebrook", value: "SHB" },
        { display: "Shirehampton", value: "SHH" },
        { display: "Shireoaks", value: "SRO" },
        { display: "Shirley", value: "SRL" },
        { display: "Shoeburyness", value: "SRY" },
        { display: "Sholing", value: "SHO" },
        { display: "Shoreditch High Street", value: "SDC" },
        { display: "Shoreham (Kent)", value: "SEH" },
        { display: "Shoreham-by-Sea", value: "SSE" },
        { display: "Shortlands", value: "SRT" },
        { display: "Shotton", value: "SHT" },
        { display: "Shotts", value: "SHS" },
        { display: "Shrewsbury", value: "SHR" },
        { display: "Sidcup", value: "SID" },
        { display: "Sileby", value: "SIL" },
        { display: "Silecroft", value: "SIC" },
        { display: "Silkstone Common", value: "SLK" },
        { display: "Silver Street", value: "SLV" },
        { display: "Silverdale", value: "SVR" },
        { display: "Singer", value: "SIN" },
        { display: "Sittingbourne", value: "SIT" },
        { display: "Skegness", value: "SKG" },
        { display: "Skewen", value: "SKE" },
        { display: "Skipton", value: "SKI" },
        { display: "Slade Green", value: "SGR" },
        { display: "Slaithwaite", value: "SWT" },
        { display: "Slateford", value: "SLA" },
        { display: "Sleaford", value: "SLR" },
        { display: "Sleights", value: "SLH" },
        { display: "Slough", value: "SLO" },
        { display: "Small Heath", value: "SMA" },
        { display: "Smallbrook Junction", value: "SAB" },
        { display: "Smethwick Galton Bridge", value: "SGB" },
        { display: "Smethwick Rolfe Street", value: "SMR" },
        { display: "Smithy Bridge", value: "SMB" },
        { display: "Snaith", value: "SNI" },
        { display: "Snodland", value: "SDA" },
        { display: "Snowdown", value: "SWO" },
        { display: "Sole Street", value: "SOR" },
        { display: "Solihull", value: "SOL" },
        { display: "Somerleyton", value: "SYT" },
        { display: "South Acton", value: "SAT" },
        { display: "South Bank", value: "SBK" },
        { display: "South Bermondsey", value: "SBM" },
        { display: "South Croydon", value: "SCY" },
        { display: "South Elmsall", value: "SES" },
        { display: "South Greenford", value: "SGN" },
        { display: "South Gyle", value: "SGL" },
        { display: "South Hampstead", value: "SOH" },
        { display: "South Kenton", value: "SOK" },
        { display: "South Merton", value: "SMO" },
        { display: "South Milford", value: "SOM" },
        { display: "South Ruislip", value: "SRU" },
        { display: "South Tottenham", value: "STO" },
        { display: "South Wigston", value: "SWS" },
        { display: "South Woodham Ferrers", value: "SOF" },
        { display: "Southall", value: "STL" },
        { display: "Southampton Airport Parkway", value: "SOA" },
        { display: "Southampton Central", value: "SOU" },
        { display: "Southbourne", value: "SOB" },
        { display: "Southbury", value: "SBU" },
        { display: "Southease", value: "SEE" },
        { display: "Southend Airport", value: "SIA" },
        { display: "Southend Central", value: "SOC" },
        { display: "Southend East", value: "SOE" },
        { display: "Southend Victoria", value: "SOV" },
        { display: "Southminster", value: "SMN" },
        { display: "Southport", value: "SOP" },
        { display: "Southwick", value: "SWK" },
        { display: "Sowerby Bridge", value: "SOW" },
        { display: "Spalding", value: "SPA" },
        { display: "Spean Bridge", value: "SBR" },
        { display: "Spital", value: "SPI" },
        { display: "Spondon", value: "SPO" },
        { display: "Spooner Row", value: "SPN" },
        { display: "Spring Road", value: "SRI" },
        { display: "Springburn", value: "SPR" },
        { display: "Springfield", value: "SPF" },
        { display: "Squires Gate", value: "SQU" },
        { display: "St Albans Abbey", value: "SAA" },
        { display: "St Albans City", value: "SAC" },
        { display: "St Andrews Road", value: "SAR" },
        { display: "St Annes-on-Sea", value: "SAS" },
        { display: "St Austell", value: "SAU" },
        { display: "St Bees", value: "SBS" },
        { display: "St Budeaux Ferry Road", value: "SBF" },
        { display: "St Budeaux Victoria Road", value: "SBV" },
        { display: "St Columb Road", value: "SCR" },
        { display: "St Denys", value: "SDN" },
        { display: "St Erth", value: "SER" },
        { display: "St Germans", value: "SGM" },
        { display: "St Helens Central", value: "SNH" },
        { display: "St Helens Junction", value: "SHJ" },
        { display: "St Helier (Surrey)", value: "SIH" },
        { display: "St Ives (Cornwall)", value: "SIV" },
        { display: "St James Park (Exeter)", value: "SJP" },
        { display: "St James Street (Walthamstow)", value: "SJS" },
        { display: "St Johns (London)", value: "SAJ" },
        { display: "St Keyne Wishing Well Halt", value: "SKN" },
        { display: "St Leonards Warrior Square", value: "SLQ" },
        { display: "St Margarets (Herts)", value: "SMT" },
        { display: "St Margarets (London)", value: "SMG" },
        { display: "St Mary Cray", value: "SMY" },
        { display: "St Michaels", value: "STM" },
        { display: "St Neots", value: "SNO" },
        { display: "Stafford", value: "STA" },
        { display: "Staines", value: "SNS" },
        { display: "Stallingborough", value: "SLL" },
        { display: "Stalybridge", value: "SYB" },
        { display: "Stamford (Lincs)", value: "SMD" },
        { display: "Stamford Hill", value: "SMH" },
        { display: "Stanford-le-Hope", value: "SFO" },
        { display: "Stanlow & Thornton", value: "SNT" },
        { display: "Stansted Airport", value: "SSD" },
        { display: "Stansted Mountfitchet", value: "SST" },
        { display: "Staplehurst", value: "SPU" },
        { display: "Stapleton Road", value: "SRD" },
        { display: "Starbeck", value: "SBE" },
        { display: "Starcross", value: "SCS" },
        { display: "Staveley (Cumbria)", value: "SVL" },
        { display: "Stechford", value: "SCF" },
        { display: "Steeton & Silsden", value: "SON" },
        { display: "Stepps", value: "SPS" },
        { display: "Stevenage", value: "SVG" },
        { display: "Stevenston", value: "STV" },
        { display: "Stewartby", value: "SWR" },
        { display: "Stewarton", value: "STT" },
        { display: "Stirling", value: "STG" },
        { display: "Stockport", value: "SPT" },
        { display: "Stocksfield", value: "SKS" },
        { display: "Stocksmoor", value: "SSM" },
        { display: "Stockton", value: "STK" },
        { display: "Stoke Mandeville", value: "SKM" },
        { display: "Stoke Newington", value: "SKW" },
        { display: "Stoke-on-Trent", value: "SOT" },
        { display: "Stone (Staffs)", value: "SNE" },
        { display: "Stone Crossing", value: "SCG" },
        { display: "Stonebridge Park", value: "SBP" },
        { display: "Stonegate", value: "SOG" },
        { display: "Stonehaven", value: "STN" },
        { display: "Stonehouse", value: "SHU" },
        { display: "Stoneleigh", value: "SNL" },
        { display: "Stourbridge Junction", value: "SBJ" },
        { display: "Stourbridge Town", value: "SBT" },
        { display: "Stow", value: "SOI" },
        { display: "Stowmarket", value: "SMK" },
        { display: "Stranraer", value: "STR" },
        { display: "Stratford (London)", value: "SRA" },
        { display: "Stratford International", value: "SFA" },
        { display: "Stratford-upon-Avon", value: "SAV" },
        { display: "Stratford-upon-Avon Parkway", value: "STY" },
        { display: "Strathcarron", value: "STC" },
        { display: "Strawberry Hill", value: "STW" },
        { display: "Streatham (Greater London)", value: "STE" },
        { display: "Streatham Common", value: "SRC" },
        { display: "Streatham Hill", value: "SRH" },
        { display: "Streethouse", value: "SHC" },
        { display: "Strines", value: "SRN" },
        { display: "Stromeferry", value: "STF" },
        { display: "Strood (Kent)", value: "SOO" },
        { display: "Stroud (Gloucs)", value: "STD" },
        { display: "Sturry", value: "STU" },
        { display: "Styal", value: "SYA" },
        { display: "Sudbury & Harrow Road", value: "SUD" },
        { display: "Sudbury (Suffolk)", value: "SUY" },
        { display: "Sudbury Hill Harrow", value: "SDH" },
        { display: "Sugar Loaf", value: "SUG" },
        { display: "Summerston", value: "SUM" },
        { display: "Sunbury", value: "SUU" },
        { display: "Sunderland", value: "SUN" },
        { display: "Sundridge Park", value: "SUP" },
        { display: "Sunningdale", value: "SNG" },
        { display: "Sunnymeads", value: "SNY" },
        { display: "Surbiton", value: "SUR" },
        { display: "Surrey Quays", value: "SQE" },
        { display: "Sutton (Surrey)", value: "SUO" },
        { display: "Sutton Coldfield", value: "SUT" },
        { display: "Sutton Common", value: "SUC" },
        { display: "Sutton Parkway", value: "SPK" },
        { display: "Swale", value: "SWL" },
        { display: "Swanley", value: "SAY" },
        { display: "Swanscombe", value: "SWM" },
        { display: "Swansea", value: "SWA" },
        { display: "Swanwick", value: "SNW" },
        { display: "Sway", value: "SWY" },
        { display: "Swaythling", value: "SWG" },
        { display: "Swinderby", value: "SWD" },
        { display: "Swindon (Wilts)", value: "SWI" },
        { display: "Swineshead", value: "SWE" },
        { display: "Swinton (Manchester)", value: "SNN" },
        { display: "Swinton (South Yorks)", value: "SWN" },
        { display: "Sydenham (London)", value: "SYD" },
        { display: "Sydenham Hill", value: "SYH" },
        { display: "Syon Lane", value: "SYL" },
        { display: "Syston", value: "SYS" },
        { display: "Tackley", value: "TAC" },
        { display: "Tadworth", value: "TAD" },
        { display: "Taffs Well", value: "TAF" },
        { display: "Tain", value: "TAI" },
        { display: "Talsarnau", value: "TAL" },
        { display: "Talybont", value: "TLB" },
        { display: "Tal-y-Cafn", value: "TLC" },
        { display: "Tame Bridge Parkway", value: "TAB" },
        { display: "Tamworth", value: "TAM" },
        { display: "Taplow", value: "TAP" },
        { display: "Tattenham Corner", value: "TAT" },
        { display: "Taunton", value: "TAU" },
        { display: "Taynuilt", value: "TAY" },
        { display: "Teddington", value: "TED" },
        { display: "Tees-side Airport", value: "TEA" },
        { display: "Teignmouth", value: "TGM" },
        { display: "Telford Central", value: "TFC" },
        { display: "Templecombe", value: "TMC" },
        { display: "Tenby", value: "TEN" },
        { display: "Teynham", value: "TEY" },
        { display: "Thames Ditton", value: "THD" },
        { display: "Thatcham", value: "THA" },
        { display: "Thatto Heath", value: "THH" },
        { display: "The Hawthorns", value: "THW" },
        { display: "The Lakes (Warks)", value: "TLK" },
        { display: "Theale", value: "THE" },
        { display: "Theobalds Grove", value: "TEO" },
        { display: "Thetford", value: "TTF" },
        { display: "Thirsk", value: "THI" },
        { display: "Thornaby", value: "TBY" },
        { display: "Thorne North", value: "TNN" },
        { display: "Thorne South", value: "TNS" },
        { display: "Thornford", value: "THO" },
        { display: "Thornliebank", value: "THB" },
        { display: "Thornton Abbey", value: "TNA" },
        { display: "Thornton Heath", value: "TTH" },
        { display: "Thorntonhall", value: "THT" },
        { display: "Thorpe Bay", value: "TPB" },
        { display: "Thorpe Culvert", value: "TPC" },
        { display: "Thorpe-le-Soken", value: "TLS" },
        { display: "Three Bridges", value: "TBD" },
        { display: "Three Oaks", value: "TOK" },
        { display: "Thurgarton", value: "THU" },
        { display: "Thurnscoe", value: "THC" },
        { display: "Thurso", value: "THS" },
        { display: "Thurston", value: "TRS" },
        { display: "Tilbury Town", value: "TIL" },
        { display: "Tile Hill", value: "THL" },
        { display: "Tilehurst", value: "TLH" },
        { display: "Tipton", value: "TIP" },
        { display: "Tir-Phil", value: "TIR" },
        { display: "Tisbury", value: "TIS" },
        { display: "Tiverton Parkway", value: "TVP" },
        { display: "Todmorden", value: "TOD" },
        { display: "Tolworth", value: "TOL" },
        { display: "Ton Pentre", value: "TPN" },
        { display: "Tonbridge", value: "TON" },
        { display: "Tondu", value: "TDU" },
        { display: "Tonfanau", value: "TNF" },
        { display: "Tonypandy", value: "TNP" },
        { display: "Tooting", value: "TOO" },
        { display: "Topsham", value: "TOP" },
        { display: "Torquay", value: "TQY" },
        { display: "Torre", value: "TRR" },
        { display: "Totnes", value: "TOT" },
        { display: "Tottenham Hale", value: "TOM" },
        { display: "Totton", value: "TTN" },
        { display: "Town Green", value: "TWN" },
        { display: "Trafford Park", value: "TRA" },
        { display: "Trefforest", value: "TRF" },
        { display: "Trefforest Estate", value: "TRE" },
        { display: "Trehafod", value: "TRH" },
        { display: "Treherbert", value: "TRB" },
        { display: "Treorchy", value: "TRY" },
        { display: "Trimley", value: "TRM" },
        { display: "Tring", value: "TRI" },
        { display: "Troed-y-rhiw", value: "TRD" },
        { display: "Troon", value: "TRN" },
        { display: "Trowbridge", value: "TRO" },
        { display: "Truro", value: "TRU" },
        { display: "Tulloch", value: "TUL" },
        { display: "Tulse Hill", value: "TUH" },
        { display: "Tunbridge Wells", value: "TBW" },
        { display: "Turkey Street", value: "TUR" },
        { display: "Tutbury & Hatton", value: "TUT" },
        { display: "Tweedbank", value: "TWB" },
        { display: "Twickenham", value: "TWI" },
        { display: "Twyford", value: "TWY" },
        { display: "Ty Croes", value: "TYC" },
        { display: "Ty Glas", value: "TGS" },
        { display: "Tygwyn", value: "TYG" },
        { display: "Tyndrum Lower", value: "TYL" },
        { display: "Tyseley", value: "TYS" },
        { display: "Tywyn", value: "TYW" },
        { display: "Uckfield", value: "UCK" },
        { display: "Uddingston", value: "UDD" },
        { display: "Ulceby", value: "ULC" },
        { display: "Ulleskelf", value: "ULL" },
        { display: "Ulverston", value: "ULV" },
        { display: "Umberleigh", value: "UMB" },
        { display: "University (Birmingham)", value: "UNI" },
        { display: "Uphall", value: "UHA" },
        { display: "Upholland", value: "UPL" },
        { display: "Upminster", value: "UPM" },
        { display: "Upper Halliford", value: "UPH" },
        { display: "Upper Holloway", value: "UHL" },
        { display: "Upper Tyndrum", value: "UTY" },
        { display: "Upper Warlingham", value: "UWL" },
        { display: "Upton (Merseyside)", value: "UPT" },
        { display: "Upwey", value: "UPW" },
        { display: "Urmston", value: "URM" },
        { display: "Uttoxeter", value: "UTT" },
        { display: "Valley", value: "VAL" },
        { display: "Vauxhall", value: "VXH" },
        { display: "Virginia Water", value: "VIR" },
        { display: "Waddon", value: "WDO" },
        { display: "Wadhurst", value: "WAD" },
        { display: "Wainfleet", value: "WFL" },
        { display: "Wakefield Kirkgate", value: "WKK" },
        { display: "Wakefield Westgate", value: "WKF" },
        { display: "Walkden", value: "WKD" },
        { display: "Wallasey Grove Road", value: "WLG" },
        { display: "Wallasey Village", value: "WLV" },
        { display: "Wallington", value: "WLT" },
        { display: "Wallyford", value: "WAF" },
        { display: "Walmer", value: "WAM" },
        { display: "Walsall", value: "WSL" },
        { display: "Walsden", value: "WDN" },
        { display: "Waltham Cross", value: "WLC" },
        { display: "Walthamstow Central", value: "WHC" },
        { display: "Walthamstow Queen's Road", value: "WMW" },
        { display: "Walton (Merseyside)", value: "WAO" },
        { display: "Walton-on-Thames", value: "WAL" },
        { display: "Walton-on-the-Naze", value: "WON" },
        { display: "Wanborough", value: "WAN" },
        { display: "Wandsworth Common", value: "WSW" },
        { display: "Wandsworth Road", value: "WWR" },
        { display: "Wandsworth Town", value: "WNT" },
        { display: "Wanstead Park", value: "WNP" },
        { display: "Wapping", value: "WPE" },
        { display: "Warblington", value: "WBL" },
        { display: "Ware (Herts)", value: "WAR" },
        { display: "Wareham (Dorset)", value: "WRM" },
        { display: "Wargrave", value: "WGV" },
        { display: "Warminster", value: "WMN" },
        { display: "Warnham", value: "WNH" },
        { display: "Warrington Bank Quay", value: "WBQ" },
        { display: "Warrington Central", value: "WAC" },
        { display: "Warwick", value: "WRW" },
        { display: "Warwick Parkway", value: "WRP" },
        { display: "Water Orton", value: "WTO" },
        { display: "Waterbeach", value: "WBC" },
        { display: "Wateringbury", value: "WTR" },
        { display: "Waterloo (Merseyside)", value: "WLO" },
        { display: "Watford High Street", value: "WFH" },
        { display: "Watford Junction", value: "WFJ" },
        { display: "Watford North", value: "WFN" },
        { display: "Watlington", value: "WTG" },
        { display: "Watton-at-Stone", value: "WAS" },
        { display: "Waun-Gron Park", value: "WNG" },
        { display: "Wavertree Technology Park", value: "WAV" },
        { display: "Wedgwood", value: "WED" },
        { display: "Weeley", value: "WEE" },
        { display: "Weeton", value: "WET" },
        { display: "Welham Green", value: "WMG" },
        { display: "Welling", value: "WLI" },
        { display: "Wellingborough", value: "WEL" },
        { display: "Wellington (Shropshire)", value: "WLN" },
        { display: "Welshpool", value: "WLP" },
        { display: "Welwyn Garden City", value: "WGC" },
        { display: "Welwyn North", value: "WLW" },
        { display: "Wem", value: "WEM" },
        { display: "Wembley Central", value: "WMB" },
        { display: "Wembley Stadium", value: "WCX" },
        { display: "Wemyss Bay", value: "WMS" },
        { display: "Wendover", value: "WND" },
        { display: "Wennington", value: "WNN" },
        { display: "West Allerton", value: "WSA" },
        { display: "West Brompton", value: "WBP" },
        { display: "West Byfleet", value: "WBY" },
        { display: "West Calder", value: "WCL" },
        { display: "West Croydon", value: "WCY" },
        { display: "West Drayton", value: "WDT" },
        { display: "West Dulwich", value: "WDU" },
        { display: "West Ealing", value: "WEA" },
        { display: "West Ham", value: "WEH" },
        { display: "West Hampstead", value: "WHD" },
        { display: "West Hampstead Thameslink", value: "WHP" },
        { display: "West Horndon", value: "WHR" },
        { display: "West Kilbride", value: "WKB" },
        { display: "West Kirby", value: "WKI" },
        { display: "West Malling", value: "WMA" },
        { display: "West Norwood", value: "WNW" },
        { display: "West Ruislip", value: "WRU" },
        { display: "West Runton", value: "WRN" },
        { display: "West St Leonards", value: "WLD" },
        { display: "West Sutton", value: "WSU" },
        { display: "West Wickham", value: "WWI" },
        { display: "West Worthing", value: "WWO" },
        { display: "Westbury (Wilts)", value: "WSB" },
        { display: "Westcliff", value: "WCF" },
        { display: "Westcombe Park", value: "WCB" },
        { display: "Westenhanger", value: "WHA" },
        { display: "Wester Hailes", value: "WTA" },
        { display: "Westerfield", value: "WFI" },
        { display: "Westerton", value: "WES" },
        { display: "Westgate-on-Sea", value: "WGA" },
        { display: "Westhoughton", value: "WHG" },
        { display: "Weston Milton", value: "WNM" },
        { display: "Weston-super-Mare", value: "WSM" },
        { display: "Wetheral", value: "WRL" },
        { display: "Weybridge", value: "WYB" },
        { display: "Weymouth", value: "WEY" },
        { display: "Whaley Bridge", value: "WBR" },
        { display: "Whalley (Lancs)", value: "WHE" },
        { display: "Whatstandwell", value: "WTS" },
        { display: "Whifflet", value: "WFF" },
        { display: "Whimple", value: "WHM" },
        { display: "Whinhill", value: "WNL" },
        { display: "Whiston", value: "WHN" },
        { display: "Whitby", value: "WTB" },
        { display: "Whitchurch (Cardiff)", value: "WHT" },
        { display: "Whitchurch (Hants)", value: "WCH" },
        { display: "Whitchurch (Shropshire)", value: "WTC" },
        { display: "White Hart Lane", value: "WHL" },
        { display: "White Notley", value: "WNY" },
        { display: "Whitechapel", value: "ZLW" },
        { display: "Whitecraigs", value: "WCR" },
        { display: "Whitehaven", value: "WTH" },
        { display: "Whitland", value: "WTL" },
        { display: "Whitley Bridge", value: "WBD" },
        { display: "Whitlocks End", value: "WTE" },
        { display: "Whitstable", value: "WHI" },
        { display: "Whittlesea", value: "WLE" },
        { display: "Whittlesford Parkway", value: "WLF" },
        { display: "Whitton (London)", value: "WTN" },
        { display: "Whitwell (Derbyshire)", value: "WWL" },
        { display: "Whyteleafe", value: "WHY" },
        { display: "Whyteleafe South", value: "WHS" },
        { display: "Wick", value: "WCK" },
        { display: "Wickford", value: "WIC" },
        { display: "Wickham Market", value: "WCM" },
        { display: "Widdrington", value: "WDD" },
        { display: "Widnes", value: "WID" },
        { display: "Widney Manor", value: "WMR" },
        { display: "Wigan North Western", value: "WGN" },
        { display: "Wigan Wallgate", value: "WGW" },
        { display: "Wigton", value: "WGT" },
        { display: "Wildmill", value: "WMI" },
        { display: "Willesden Junction", value: "WIJ" },
        { display: "Williamwood", value: "WLM" },
        { display: "Willington", value: "WIL" },
        { display: "Wilmcote", value: "WMC" },
        { display: "Wilmslow", value: "WML" },
        { display: "Wilnecote (Staffs)", value: "WNE" },
        { display: "Wimbledon", value: "WIM" },
        { display: "Wimbledon Chase", value: "WBO" },
        { display: "Winchelsea", value: "WSE" },
        { display: "Winchester", value: "WIN" },
        { display: "Winchfield", value: "WNF" },
        { display: "Winchmore Hill", value: "WIH" },
        { display: "Windermere", value: "WDM" },
        { display: "Windsor & Eton Central", value: "WNC" },
        { display: "Windsor & Eton Riverside", value: "WNR" },
        { display: "Winnersh", value: "WNS" },
        { display: "Winnersh Triangle", value: "WTI" },
        { display: "Winsford", value: "WSF" },
        { display: "Wishaw", value: "WSH" },
        { display: "Witham", value: "WTM" },
        { display: "Witley", value: "WTY" },
        { display: "Witton (West Midlands)", value: "WTT" },
        { display: "Wivelsfield", value: "WVF" },
        { display: "Wivenhoe", value: "WIV" },
        { display: "Woburn Sands", value: "WOB" },
        { display: "Woking", value: "WOK" },
        { display: "Wokingham", value: "WKM" },
        { display: "Woldingham", value: "WOH" },
        { display: "Wolverhampton", value: "WVH" },
        { display: "Wolverton", value: "WOL" },
        { display: "Wombwell", value: "WOM" },
        { display: "Wood End", value: "WDE" },
        { display: "Wood Street", value: "WST" },
        { display: "Woodbridge", value: "WDB" },
        { display: "Woodgrange Park", value: "WGR" },
        { display: "Woodhall", value: "WDL" },
        { display: "Woodhouse", value: "WDH" },
        { display: "Woodlesford", value: "WDS" },
        { display: "Woodley", value: "WLY" },
        { display: "Woodmansterne", value: "WME" },
        { display: "Woodsmoor", value: "WSR" },
        { display: "Wool", value: "WOO" },
        { display: "Woolston", value: "WLS" },
        { display: "Woolwich Arsenal", value: "WWA" },
        { display: "Woolwich Dockyard", value: "WWD" },
        { display: "Wootton Wawen", value: "WWW" },
        { display: "Worcester Foregate Street", value: "WOF" },
        { display: "Worcester Park", value: "WCP" },
        { display: "Worcester Shrub Hill", value: "WOS" },
        { display: "Workington", value: "WKG" },
        { display: "Worksop", value: "WRK" },
        { display: "Worle", value: "WOR" },
        { display: "Worplesdon", value: "WPL" },
        { display: "Worstead", value: "WRT" },
        { display: "Worthing", value: "WRH" },
        { display: "Wrabness", value: "WRB" },
        { display: "Wraysbury", value: "WRY" },
        { display: "Wrenbury", value: "WRE" },
        { display: "Wressle", value: "WRS" },
        { display: "Wrexham Central", value: "WXC" },
        { display: "Wrexham General", value: "WRX" },
        { display: "Wye", value: "WYE" },
        { display: "Wylam", value: "WYM" },
        { display: "Wylde Green", value: "WYL" },
        { display: "Wymondham", value: "WMD" },
        { display: "Wythall", value: "WYT" },
        { display: "Yalding", value: "YAL" },
        { display: "Yardley Wood", value: "YRD" },
        { display: "Yarm", value: "YRM" },
        { display: "Yate", value: "YAE" },
        { display: "Yatton", value: "YAT" },
        { display: "Yeoford", value: "YEO" },
        { display: "Yeovil Junction", value: "YVJ" },
        { display: "Yeovil Pen Mill", value: "YVP" },
        { display: "Yetminster", value: "YET" },
        { display: "Ynyswen", value: "YNW" },
        { display: "Yoker", value: "YOK" },
        { display: "York", value: "YRK" },
        { display: "Yorton", value: "YRT" },
        { display: "Ystrad Mynach", value: "YSM" },
        { display: "Ystrad Rhondda", value: "YSR" }
    ];
})(RailTech || (RailTech = {}));

'use strict';
var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var SearchController = (function () {
            function SearchController($state, ticketingService, $scope, $ionicPopup, $timeout) {
                this.$state = $state;
                this.ticketingService = ticketingService;
                this.$scope = $scope;
                this.$ionicPopup = $ionicPopup;
                this.$timeout = $timeout;
                $scope.$parent.showHeader();
                $scope.$parent.setExpanded(true);
            }
            SearchController.prototype.fromQuerySearch = function (query) {
                var results = query ?
                    RailTech.stations.filter(this.createFilterFor(query)) :
                    RailTech.stations;
                return results;
            };
            SearchController.prototype.findResults = function () {
                this.ticketingService.fromStation = this.fromStation ? this.fromStation.display : null;
                this.ticketingService.toStation = this.toStation ? this.toStation.display : null;
                this.ticketingService.fromDate = this.fromDate;
                this.ticketingService.returnDate = this.returnDate;
                this.ticketingService.passengers = this.passengerNumber;
                if (!this.ticketingService.validParameters()) {
                    this.showErrorPopup();
                    return;
                }
                this.$state.go('app.ticketing.results');
            };
            SearchController.prototype.showErrorPopup = function () {
                var myPopup = this.$ionicPopup.show({
                    template: 'The data you entered is not fully valid, please check your input and try again.',
                    title: 'Wrong fields',
                    scope: this.$scope,
                    buttons: [
                        {
                            text: '<b>Ok</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                myPopup.close();
                            }
                        }]
                });
                this.$timeout(function () {
                    myPopup.close(); //close the popup after 3 seconds for some reason
                }, 3000);
            };
            SearchController.prototype.createFilterFor = function (query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(state) {
                    var lowercaseDisplay = angular.lowercase(state.display);
                    return (lowercaseDisplay.search(lowercaseQuery) >= 0);
                };
            };
            SearchController.$inject = [
                '$state',
                'TicketingService',
                '$scope',
                '$ionicPopup',
                '$timeout'];
            return SearchController;
        }());
        Ticketing.SearchController = SearchController;
        angular.module('ticketing')
            .controller('SearchController', SearchController);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech

'use strict';
var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var ResultsController = (function () {
            function ResultsController($scope, ticketingService, ionicMaterialMotion, ionicMaterialInk) {
                var _this = this;
                this.ticketingService = ticketingService;
                this.ionicMaterialMotion = ionicMaterialMotion;
                ionicMaterialMotion.fadeSlideInRight();
                ionicMaterialInk.displayEffect();
                this.fromStation = ticketingService.fromStation;
                this.toStation = ticketingService.toStation;
                console.log(this.fromStation, ticketingService.fromStation, this.toStation, ticketingService.toStation);
                ticketingService.getJourneysTowards().then(function (journeys) {
                    _this.journeysTowards = journeys;
                    _this.ionicMaterialMotion.fadeSlideInRight();
                    console.log(journeys);
                });
                this.isReturnTrip = ticketingService.returnDate !== undefined && ticketingService.returnDate !== null;
                if (this.isReturnTrip) {
                    ticketingService.getJourneysReturn().then(function (journeys) {
                        _this.journeysReturn = journeys;
                        _this.ionicMaterialMotion.fadeSlideInRight();
                    });
                }
            }
            ResultsController.$inject = [
                '$scope',
                'TicketingService',
                'ionicMaterialMotion',
                'ionicMaterialInk'];
            return ResultsController;
        }());
        Ticketing.ResultsController = ResultsController;
        angular.module('ticketing')
            .controller('ResultsController', ResultsController);
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {})); // Ticketing
})(RailTech || (RailTech = {})); // RailTech

var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        angular.module('events', [
            // External
            'ionic',
            'ionic-material',
            'ionMdInput',
            'ngMaterial'
        ]);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech

var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var EventsService = (function () {
            function EventsService($q, $timeout) {
                this.$q = $q;
                this.$timeout = $timeout;
                this.stations = [{
                        city: "London",
                        cover: "http://i.dailymail.co.uk/i/pix/2013/02/06/article-2274355-02DADEA00000044D-633_634x405.jpg",
                        eventNumber: 4,
                        events: []
                    },
                    {
                        city: "Manchester",
                        cover: "http://static1.squarespace.com/static/534f9765e4b02e8e0e0e54aa/53583b20e4b07ec2da390417/53583b29e4b01c3d34566403/1398291255971/manchesterimage6.jpg",
                        eventNumber: 5
                    },
                    {
                        city: "Birmingham",
                        cover: "http://www.lancaster.ac.uk/colleges/graduate/wp-content/uploads/2016/01/Birmingham-AP68276_3152879b.jpg",
                        eventNumber: 2
                    },
                    {
                        city: "Southampton",
                        cover: "https://www.propertycashbuyers.com/wp-content/uploads/2015/09/Southampton-city-skyline-of-commercial-property.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Bristol",
                        cover: "https://www.crosscountrytrains.co.uk/media/22701/trains_to_bristol.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Edinburgh",
                        cover: "http://www.flybe.com/cheap-flights/edinburgh/edinburgh-events-16x9.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Glasgow",
                        cover: "http://www.lastminute.com/c/content/dam/site_gb/CityBreaks/destinationPages/glasgow-1155x510.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Sheffield",
                        cover: "http://i.dailymail.co.uk/i/pix/2013/07/29/article-2333778-1B0D9D33000005DC-944_634x424.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Cardiff",
                        cover: "https://upload.wikimedia.org/wikipedia/commons/0/03/Cardiff_Bay_at_night.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Nottingham",
                        cover: "http://www.theexchange.uk.net/media/5616/Market-Square-Nottingham.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Newcastle",
                        cover: "http://www.pitcherandpiano.com/media/images/PP-Newcastle-087_big.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "York",
                        cover: "https://upload.wikimedia.org/wikipedia/commons/3/3d/York_City_Walls_-_geograph.org.uk_-_589000.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Cambridge",
                        cover: "https://www.whiteandcompany.co.uk/wp-content/uploads/2015/03/moving-home-to-cambridge.jpg.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Oxford",
                        cover: "http://www.connectedoxford.com/Customer/CO/images/OxfordImage.jpg",
                        eventNumber: 4
                    },
                    {
                        city: "Brighton",
                        cover: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Brighton_Pier_at_dusk.jpg",
                        eventNumber: 4
                    }];
            }
            EventsService.prototype.getStationsList = function () {
                var _this = this;
                var deferred = this.$q.defer();
                // simulating hitting server
                this.$timeout(function () {
                    deferred.resolve(_this.stations);
                }, 2000);
                return deferred.promise;
            };
            EventsService.prototype.getStationDetail = function (query) {
                var _this = this;
                var deferred = this.$q.defer();
                this.$timeout(function () {
                    for (var i = 0; i < _this.stations.length; i++) {
                        if (angular.lowercase(_this.stations[i].city) == angular.lowercase(query)) {
                            deferred.resolve(_this.stations[i]);
                            return;
                        }
                    }
                    deferred.reject();
                }, 2000);
                return deferred.promise;
            };
            EventsService.$inject = [
                "$q",
                "$timeout"];
            return EventsService;
        }());
        Events.EventsService = EventsService;
        angular.module('events')
            .service('EventsService', EventsService);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech

'use strict';
var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var OverviewController = (function () {
            function OverviewController($scope, $ionicLoading, eventsService) {
                var _this = this;
                this.$scope = $scope;
                this.$ionicLoading = $ionicLoading;
                $scope.$parent.showHeader();
                $scope.$parent.setExpanded(false);
                this.$ionicLoading.show({
                    template: 'Loading cities...'
                });
                eventsService.getStationsList()
                    .then(function (found) {
                    _this.stations = found;
                    _this.$ionicLoading.hide();
                    console.log(_this.stations);
                });
            }
            OverviewController.prototype.stationQuerySearch = function (query) {
                var results = query ?
                    this.stations.filter(this.createFilterFor(query)) :
                    this.stations;
                return results;
            };
            OverviewController.prototype.createFilterFor = function (query) {
                var lowercaseQuery = angular.lowercase(query);
                return function filterFn(state) {
                    var lowercaseDisplay = angular.lowercase(state.city);
                    return (lowercaseDisplay.search(lowercaseQuery) >= 0);
                };
            };
            OverviewController.$inject = [
                '$scope',
                '$ionicLoading',
                'EventsService'];
            return OverviewController;
        }());
        Events.OverviewController = OverviewController;
        angular.module('events')
            .controller('OverviewController', OverviewController);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech

'use strict';
var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        var DetailController = (function () {
            function DetailController($scope, $ionicLoading, $timeout, $stateParams, ionicMaterialMotion, ionicMaterialInk, eventsService) {
                var _this = this;
                this.$scope = $scope;
                this.$ionicLoading = $ionicLoading;
                this.$timeout = $timeout;
                $scope.$parent.showHeader();
                $scope.$parent.setExpanded(false);
                var city = $stateParams.cityName;
                this.$ionicLoading.show({
                    template: 'Loading ' + city + '...'
                });
                eventsService.getStationDetail(city)
                    .then(function (found) {
                    _this.eventCity = found;
                    _this.$ionicLoading.hide();
                    ionicMaterialMotion.slideUp({
                        selector: '.slide-up'
                    });
                    $timeout(function () {
                        ionicMaterialMotion.fadeSlideInRight({
                            startVelocity: 3000
                        });
                    }, 700);
                });
                // Set Ink
                ionicMaterialInk.displayEffect();
            }
            DetailController.$inject = [
                '$scope',
                '$ionicLoading',
                '$timeout',
                '$stateParams',
                'ionicMaterialMotion',
                'ionicMaterialInk',
                'EventsService'];
            return DetailController;
        }());
        Events.DetailController = DetailController;
        angular.module('events')
            .controller('DetailController', DetailController);
    })(Events = RailTech.Events || (RailTech.Events = {})); // Events
})(RailTech || (RailTech = {})); // RailTech

"use strict";
var RailTech;
(function (RailTech) {
    var Events;
    (function (Events) {
        angular.module('ticketing')
            .config(function ($stateProvider) {
            $stateProvider
                .state('app.events', {
                url: '/events',
                abstract: true,
                template: "<ion-nav-view>"
            })
                .state('app.events.overview', {
                url: '/overview',
                templateUrl: 'app/events/overview/overview.html',
                controller: 'OverviewController as $ctrl'
            })
                .state('app.events.detail', {
                url: '/detail/:cityName',
                templateUrl: 'app/events/detail/detail.html',
                controller: 'DetailController as $ctrl'
            });
        });
    })(Events = RailTech.Events || (RailTech.Events = {}));
})(RailTech || (RailTech = {}));



var RailTech;
(function (RailTech) {
    var Ticketing;
    (function (Ticketing) {
        var EventCityList = (function () {
            function EventCityList() {
            }
            return EventCityList;
        }());
        Ticketing.EventCityList = EventCityList;
        var EventCity = (function () {
            function EventCity() {
            }
            return EventCity;
        }());
        Ticketing.EventCity = EventCity;
        var Event = (function () {
            function Event() {
            }
            return Event;
        }());
        Ticketing.Event = Event;
    })(Ticketing = RailTech.Ticketing || (RailTech.Ticketing = {}));
})(RailTech || (RailTech = {}));

/* global angular, document, window */
'use strict';
var RailTech;
(function (RailTech) {
    angular.module('railtech.controllers', [])
        .controller('ModulesCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab(false);
        // Activate ink for controller
        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    })
        .controller('TicketingCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab(false);
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                var lowercaseDisplay = angular.lowercase(state.display);
                return (lowercaseDisplay.search(lowercaseQuery) >= 0);
            };
        }
        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
        $scope.fromQuerySearch = function (query) {
            var results = query ?
                RailTech.stations.filter(createFilterFor(query)) :
                RailTech.stations;
            return results;
        };
    })
        .controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.isExpanded = false;
        $scope.hasHeaderFabLeft = false;
        $scope.hasHeaderFabRight = false;
        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        }
        ////////////////////////////////////////
        // Layout Methods
        ////////////////////////////////////////
        $scope.hideNavBar = function () {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
        };
        $scope.showNavBar = function () {
            document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
        };
        $scope.noHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }
        };
        $scope.setExpanded = function (bool) {
            $scope.isExpanded = bool;
        };
        $scope.setHeaderFab = function (location) {
            var hasHeaderFabLeft = false;
            var hasHeaderFabRight = false;
            switch (location) {
                case 'left':
                    hasHeaderFabLeft = true;
                    break;
                case 'right':
                    hasHeaderFabRight = true;
                    break;
            }
            $scope.hasHeaderFabLeft = hasHeaderFabLeft;
            $scope.hasHeaderFabRight = hasHeaderFabRight;
        };
        $scope.hasHeader = function () {
            var content = document.getElementsByTagName('ion-content');
            for (var i = 0; i < content.length; i++) {
                if (!content[i].classList.contains('has-header')) {
                    content[i].classList.toggle('has-header');
                }
            }
        };
        $scope.hideHeader = function () {
            $scope.hideNavBar();
            $scope.noHeader();
        };
        $scope.showHeader = function () {
            $scope.showNavBar();
            $scope.hasHeader();
        };
        $scope.clearFabs = function () {
            var fabs = document.getElementsByClassName('button-fab');
            if (fabs.length && fabs.length > 1) {
                fabs[0].remove();
            }
        };
    })
        .controller('LoginCtrl', function ($scope, $timeout, $stateParams, ionicMaterialInk) {
        $scope.$parent.clearFabs();
        $timeout(function () {
            $scope.$parent.hideHeader();
        }, 0);
        ionicMaterialInk.displayEffect();
    })
        .controller('FriendsCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.$parent.setHeaderFab('left');
        // Delay expansion
        $timeout(function () {
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
        }, 300);
        // Set Motion
        ionicMaterialMotion.fadeSlideInRight();
        // Set Ink
        ionicMaterialInk.displayEffect();
    })
        .controller('ProfileCtrl', function ($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
        // Set Header
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = false;
        $scope.$parent.setExpanded(false);
        $scope.$parent.setHeaderFab(false);
        // Set Motion
        $timeout(function () {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);
        $timeout(function () {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);
        // Set Ink
        ionicMaterialInk.displayEffect();
    })
        .controller('ActivityCtrl', function ($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab('right');
        $timeout(function () {
            ionicMaterialMotion.fadeSlideIn({
                selector: '.animate-fade-slide-in .item'
            });
        }, 200);
        // Activate ink for controller
        ionicMaterialInk.displayEffect();
    })
        .controller('GalleryCtrl', function ($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab(false);
        // Activate ink for controller
        ionicMaterialInk.displayEffect();
        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    });
})(RailTech || (RailTech = {}));

var RailTech;
(function (RailTech) {
    angular.module('railtech', [
        // External
        'ionic',
        'ionic-material',
        'ionMdInput',
        'ngMaterial',
        // Internal
        'ticketing',
        'events',
        'railtech.controllers'])
        .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                window.StatusBar.styleDefault();
            }
        });
    });
})(RailTech || (RailTech = {}));

var RailTech;
(function (RailTech) {
    angular.module('railtech')
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        // Turn off caching for demo simplicity's sake
        $ionicConfigProvider.views.maxCache(0);
        /*
        // Turn off back button text
        $ionicConfigProvider.backButton.previousTitleText(false);
        */
        $stateProvider.state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'app/core/railtech.html',
            controller: 'AppCtrl'
        })
            .state('app.modules', {
            url: '/modules',
            templateUrl: 'app/core/launcher/launcher.html',
            controller: 'ModulesCtrl'
        })
            .state('app.activity', {
            url: '/activity',
            templateUrl: 'templates/activity.html',
            controller: 'ActivityCtrl'
        })
            .state('app.friends', {
            url: '/friends',
            templateUrl: 'templates/friends.html',
            controller: 'FriendsCtrl'
        })
            .state('app.gallery', {
            url: '/gallery',
            templateUrl: 'templates/gallery.html',
            controller: 'GalleryCtrl'
        })
            .state('app.login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginCtrl'
        })
            .state('app.profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html',
            controller: 'ProfileCtrl'
        });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    });
})(RailTech || (RailTech = {}));

var RailTech;
(function (RailTech) {
    angular.module('railtech')
        .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                window.StatusBar.styleDefault();
            }
        });
    })
        .config(function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            // Allow same origin rSearchControlleresource loads.
            'self',
            // Allow loading from our assets domain.  Notice the difference between * and **.
            'http://virgintrains.co.uk/**']);
    });
})(RailTech || (RailTech = {}));


