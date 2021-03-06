Highcharts.chart('warrior_fury_patchwerk', 
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
                254842,
                45926,
                0,
                30505,
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
                10051,
                0,
                17871,
                6907,
                13540,
                18248,
                12136,
                13821,
                12881,
                13569,
                13259,
                17079,
                11777,
                14443,
                14819,
                13517,
                9687,
                12243,
                12854,
                9229,
                15793,
                10844,
                9938,
                17345,
                10962,
                10444,
                11654,
                13776,
                9943,
                7686,
                12221,
                10896,
                13205,
                15398,
                12402,
                7838,
                12541,
                8928,
                10606,
                10864,
                4388,
                8781,
                24774,
                3181,
                7009,
                0,
                5713,
                3375,
                6139
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                11323,
                0,
                16732,
                8545,
                184800,
                14953,
                16621,
                11452,
                11349,
                9447,
                14380,
                12619,
                13307,
                11483,
                10526,
                9584,
                11014,
                12438,
                9228,
                12213,
                12531,
                11535,
                10744,
                12556,
                13847,
                10777,
                10149,
                12839,
                9387,
                10170,
                9186,
                8539,
                11707,
                8878,
                9628,
                8878,
                6426,
                6495,
                6747,
                15055,
                8457,
                5536,
                22248,
                7514,
                4375,
                0,
                2868,
                5273,
                3489
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                7763,
                0,
                14355,
                11905,
                0,
                16888,
                8997,
                12892,
                11601,
                11224,
                7215,
                14779,
                11023,
                12529,
                8439,
                10922,
                11821,
                9820,
                7089,
                9731,
                11985,
                8628,
                10727,
                12136,
                8419,
                10750,
                7837,
                8548,
                8572,
                8765,
                8775,
                8339,
                13591,
                11999,
                5415,
                9680,
                9354,
                7609,
                9512,
                8837,
                4721,
                8204,
                18888,
                6820,
                6502,
                0,
                6630,
                7614,
                2858
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                7822,
                0,
                14115,
                9011,
                0,
                14641,
                14583,
                7272,
                11071,
                9186,
                10252,
                13128,
                8669,
                7838,
                10445,
                11959,
                5904,
                9532,
                11357,
                8098,
                13411,
                10369,
                8456,
                10952,
                9916,
                8038,
                9842,
                8645,
                9202,
                8445,
                7437,
                7420,
                5849,
                10149,
                9306,
                7526,
                5713,
                5705,
                6785,
                9717,
                4280,
                4762,
                18706,
                1961,
                2612,
                0,
                3276,
                2123,
                4508
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                6153,
                0,
                141968,
                5840,
                0,
                13319,
                8451,
                8684,
                6547,
                9911,
                12925,
                9880,
                9247,
                11893,
                9542,
                6570,
                9189,
                9054,
                9999,
                8491,
                10081,
                9933,
                9959,
                10354,
                8354,
                8855,
                6072,
                6584,
                7506,
                5977,
                9018,
                8726,
                13695,
                11757,
                6508,
                10389,
                8481,
                6204,
                5085,
                7568,
                4368,
                6126,
                18179,
                6195,
                4615,
                0,
                4157,
                5610,
                2768
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                10267,
                0,
                0,
                10085,
                0,
                11660,
                10314,
                6471,
                6775,
                8528,
                8684,
                10214,
                6604,
                6538,
                8389,
                11342,
                5072,
                6751,
                6231,
                7979,
                11025,
                7336,
                9226,
                10873,
                7328,
                8791,
                6457,
                7815,
                8588,
                4866,
                7796,
                5655,
                6754,
                5282,
                7814,
                3893,
                5972,
                6182,
                5814,
                9415,
                4105,
                1954,
                15769,
                3501,
                3947,
                9305,
                4090,
                7129,
                3825
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                3021,
                0,
                0,
                6157,
                0,
                12076,
                129994,
                9020,
                11005,
                8084,
                6000,
                9796,
                6875,
                5788,
                7797,
                7129,
                8562,
                7975,
                6943,
                8994,
                9219,
                8644,
                7933,
                8012,
                6292,
                3788,
                111870,
                7175,
                5604,
                5216,
                4634,
                7343,
                7035,
                6762,
                4700,
                7308,
                7358,
                103750,
                9271,
                5794,
                4908,
                5368,
                14122,
                2183,
                5854,
                5311,
                5108,
                1763,
                2990
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                224140,
                0,
                0,
                177594,
                0,
                107135,
                0,
                123137,
                121236,
                118020,
                111834,
                95572,
                113300,
                108661,
                109136,
                107769,
                116350,
                109275,
                110828,
                109156,
                89752,
                104605,
                104751,
                87422,
                103320,
                105301,
                0,
                98253,
                102630,
                110266,
                96617,
                96439,
                80308,
                80001,
                93849,
                92693,
                91222,
                0,
                89378,
                72405,
                102772,
                82397,
                -10572,
                86619,
                80722,
                100671,
                79243,
                70294,
                62729
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warrior - Fury - Patchwerk"
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
            "Convergence of Fates",
            "Aman'Thul's Vision",
            "Khaz'goroths Courage",
            "Unstable Arcanocrystal",
            "Kil'jaeden's Burning Wish",
            "Specter of Betrayal",
            "Seeping Scourgewing",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Eye of Command",
            "Fel-Oiled Infernal Machine",
            "Void Stalker's Contract",
            "Engine of Eradication",
            "Gift of Radiance",
            "Entwined Elemental Foci",
            "Chrono Shard",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Ettin Fingernail",
            "Memento of Angerboda",
            "Ursoc's Rending Paw",
            "Stat Stick (Versatility)",
            "Nightmare Egg Shell",
            "Vial of Ceaseless Toxins",
            "PVP Badge of Victory",
            "Umbral Moonglaives",
            "Forgefiend's Fabricator",
            "Stat Stick (Crit)",
            "Tiny Oozeling in a Jar",
            "Toe Knee's Promise",
            "Infernal Cinders",
            "Spontaneous Appendages",
            "Bloodstained Handkerchief",
            "Might of Krosus",
            "PVP Insignia of Victory",
            "Faulty Countermeasure",
            "Horn of Valor",
            "Gorshalach's Legacy",
            "Terrorbound Nexus",
            "Claw of the Crystalline Scorpid",
            "Nature's Call",
            "Windscar Whetstone",
            "Draught of Souls",
            "Ravaged Seed Pod",
            "Spiked Counterweight",
            "Astral Alchemist Stone",
            "Impact Tremor",
            "Mark of Dargrul",
            "Giant Ornamental Pearl"
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
                    text: "mean: 167660",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 167660.3469387755,
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