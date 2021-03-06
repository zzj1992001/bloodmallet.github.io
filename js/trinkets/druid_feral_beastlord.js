Highcharts.chart('druid_feral_beastlord', 
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + this.stackY,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#ffeb3b",
            data: [
                0,
                48227,
                0,
                43839,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                176723,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#e600e3",
            data: [
                21584,
                24457,
                22911,
                13179,
                18112,
                13366,
                16848,
                16623,
                18583,
                15164,
                16642,
                17493,
                15609,
                16679,
                14462,
                15040,
                17754,
                17039,
                11290,
                0,
                15046,
                11110,
                9653,
                8038,
                15407,
                10835,
                18308,
                19541,
                5623,
                14319,
                11760,
                6997,
                12783,
                15249,
                15698,
                12138,
                14220,
                18085,
                5528,
                14450,
                12838,
                6591,
                9138,
                7378,
                7861,
                3780,
                0,
                19583,
                0,
                2037,
                1215,
                4096,
                7922,
                0
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                27707,
                225053,
                15884,
                14972,
                20365,
                16265,
                14548,
                20124,
                14281,
                14358,
                15105,
                10625,
                14874,
                10730,
                8481,
                11066,
                9763,
                12030,
                15955,
                0,
                16775,
                13144,
                11994,
                13236,
                13529,
                19100,
                7406,
                12444,
                2386,
                9754,
                11248,
                13708,
                7695,
                8034,
                10882,
                16072,
                5474,
                11415,
                13821,
                6396,
                8329,
                15415,
                1591,
                4303,
                7626,
                10507,
                0,
                10596,
                2687,
                10282,
                6341,
                6207,
                248,
                3981
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                23102,
                0,
                20563,
                13556,
                15860,
                10706,
                7918,
                13293,
                7815,
                9597,
                11702,
                10966,
                7308,
                17131,
                13290,
                9930,
                11687,
                7724,
                14092,
                0,
                4617,
                14603,
                15111,
                12856,
                11705,
                2325,
                11616,
                7532,
                7761,
                15225,
                15317,
                11390,
                10207,
                11392,
                5269,
                11600,
                12263,
                10121,
                7472,
                10296,
                12675,
                4207,
                8839,
                6585,
                8070,
                5797,
                0,
                13720,
                9770,
                0,
                6066,
                10155,
                6164,
                0
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                15228,
                0,
                15162,
                14753,
                16384,
                10219,
                14646,
                12388,
                11230,
                12502,
                9305,
                7056,
                12675,
                10784,
                5495,
                12383,
                6934,
                13095,
                9416,
                0,
                11930,
                10331,
                11069,
                13425,
                9332,
                13006,
                7559,
                7724,
                5570,
                5699,
                6725,
                12951,
                7772,
                2477,
                7514,
                6581,
                4325,
                8108,
                12331,
                9836,
                7328,
                9749,
                7841,
                9192,
                2733,
                7925,
                0,
                7105,
                7285,
                3411,
                4575,
                1400,
                1421,
                0
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                17995,
                0,
                15950,
                130219,
                14220,
                8052,
                12436,
                9430,
                11745,
                13296,
                11319,
                13264,
                7195,
                10966,
                9836,
                11274,
                11713,
                12330,
                10527,
                0,
                9908,
                3279,
                6805,
                6031,
                16247,
                6022,
                8361,
                8875,
                6644,
                11929,
                5320,
                11270,
                9659,
                6301,
                6110,
                12288,
                11310,
                7699,
                8782,
                1139,
                9721,
                8623,
                4532,
                0,
                3606,
                4896,
                0,
                10782,
                3948,
                12012,
                6314,
                4407,
                1077,
                3903
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                20453,
                0,
                10337,
                0,
                6596,
                8380,
                10600,
                14204,
                11819,
                10392,
                5553,
                9923,
                11939,
                8362,
                7318,
                5453,
                10242,
                7036,
                4290,
                0,
                7827,
                11435,
                8288,
                14109,
                10752,
                11979,
                13702,
                8734,
                5818,
                8776,
                11230,
                11122,
                10250,
                10554,
                12017,
                6643,
                8813,
                9660,
                1343,
                10041,
                4111,
                4571,
                6989,
                8970,
                11013,
                3318,
                8879,
                5105,
                4411,
                805,
                2211,
                2982,
                8623,
                1883
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                183225,
                0,
                13294,
                0,
                11124,
                12449,
                123918,
                9241,
                7372,
                4586,
                8909,
                8340,
                6779,
                8618,
                11026,
                10640,
                7031,
                5022,
                10369,
                0,
                7838,
                9282,
                6540,
                0,
                1317,
                4053,
                2729,
                4999,
                394,
                5357,
                7918,
                2137,
                97352,
                100765,
                8856,
                8419,
                3627,
                6307,
                10001,
                10490,
                8018,
                3028,
                3051,
                1697,
                4014,
                5633,
                7247,
                11172,
                6631,
                2849,
                3943,
                5498,
                0,
                0
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                125485,
                0,
                112309,
                127176,
                0,
                105048,
                109779,
                109752,
                105439,
                106253,
                106786,
                97087,
                109454,
                102669,
                103056,
                103627,
                101324,
                0,
                102456,
                102561,
                106084,
                105363,
                93483,
                97183,
                94550,
                93805,
                126136,
                87211,
                87446,
                86701,
                0,
                0,
                88152,
                79905,
                89619,
                77827,
                85854,
                79792,
                77556,
                88000,
                77931,
                80989,
                71393,
                69698,
                93907,
                22547,
                64170,
                63552,
                60865,
                54453,
                51388,
                48620
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Druid - Feral - Beastlord"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Gorshalach's Legacy",
            "Kil'jaeden's Burning Wish",
            "Arcanogolem Digit",
            "Golganneth's Vitality",
            "Specter of Betrayal",
            "Eye of Command",
            "Forgefiend's Fabricator",
            "Void Stalker's Contract",
            "Terrorbound Nexus",
            "Umbral Moonglaives",
            "Chaos Talisman",
            "Engine of Eradication",
            "Stat Stick (Crit)",
            "Nightblooming Frond",
            "Convergence of Fates",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Bloodthirsty Instinct",
            "PVP Badge of Conquest",
            "Aman'Thul's Vision",
            "Thrice-Accursed Compass",
            "Cradle of Anguish",
            "Memento of Angerboda",
            "Stat Stick (Versatility)",
            "Six-Feather Fan",
            "Stat Stick (Haste)",
            "Gift of Radiance",
            "Chrono Shard",
            "Unstable Arcanocrystal",
            "Vial of Ceaseless Toxins",
            "Nightmare Egg Shell",
            "Tirathon's Betrayal",
            "Seeping Scourgewing",
            "Shadow-Singed Fang",
            "Mark of Dargrul",
            "Bloodstained Handkerchief",
            "Infernal Cinders",
            "Tempered Egg of Serpentrix",
            "PVP Insignia of Conquest",
            "Horn of Valor",
            "Splinters of Agronax",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone",
            "Nature's Call",
            "Giant Ornamental Pearl",
            "The Devilsaur's Bite",
            "Astral Alchemist Stone",
            "Draught of Souls",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Toe Knee's Promise",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Ley Spark"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: "mean: 161834",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 161834.66666666666,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});