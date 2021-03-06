Highcharts.chart('druid_feral_patchwerk', 
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
                39448,
                35062,
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
                164642,
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
                20822,
                15659,
                18521,
                15749,
                15205,
                17953,
                17071,
                14150,
                13895,
                14791,
                12197,
                13770,
                13131,
                13787,
                15486,
                14910,
                13549,
                14325,
                15203,
                13930,
                14866,
                12637,
                0,
                16178,
                10851,
                13527,
                10674,
                13670,
                13104,
                10539,
                12268,
                6725,
                14380,
                13376,
                10659,
                9033,
                9023,
                9396,
                14168,
                0,
                8254,
                5921,
                5716,
                5746,
                5047,
                3795,
                4576,
                6731,
                3932,
                3323,
                3891,
                1844,
                3332,
                185
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                15863,
                179064,
                18587,
                12477,
                11570,
                14499,
                15929,
                13450,
                13013,
                12075,
                12487,
                13004,
                12968,
                13861,
                14618,
                12943,
                13248,
                11535,
                12041,
                12863,
                14727,
                12557,
                0,
                12208,
                12302,
                13487,
                13084,
                14537,
                10120,
                10013,
                8782,
                6036,
                10687,
                9907,
                8163,
                10323,
                7829,
                7588,
                12240,
                0,
                7635,
                5991,
                6462,
                4629,
                5190,
                3588,
                3976,
                4772,
                5014,
                4000,
                4278,
                4052,
                3729,
                1463
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                14627,
                0,
                15309,
                14310,
                10085,
                16178,
                11690,
                12432,
                10749,
                11617,
                11479,
                10365,
                10871,
                10539,
                13806,
                12131,
                10492,
                10238,
                9431,
                12187,
                11797,
                10793,
                0,
                11807,
                11687,
                11717,
                11888,
                10017,
                10824,
                10484,
                9431,
                4273,
                11825,
                10925,
                7500,
                9573,
                9771,
                6251,
                10154,
                0,
                6892,
                6421,
                4418,
                4186,
                5524,
                3090,
                4084,
                2794,
                1930,
                1467,
                4713,
                2945,
                2919,
                1907
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                14086,
                0,
                15420,
                10221,
                11259,
                12443,
                14299,
                10973,
                13122,
                10314,
                10254,
                10510,
                11356,
                12013,
                11583,
                9490,
                10941,
                11145,
                12402,
                8595,
                9906,
                8850,
                0,
                10828,
                9526,
                12653,
                8725,
                12259,
                10298,
                9210,
                9464,
                6869,
                10744,
                8582,
                11303,
                6806,
                8033,
                5954,
                9638,
                0,
                6007,
                4002,
                5060,
                7482,
                2153,
                4044,
                3086,
                3537,
                5066,
                3448,
                2255,
                2646,
                2409,
                1247
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                140668,
                0,
                12683,
                10801,
                7638,
                10209,
                11917,
                9854,
                6909,
                8883,
                8875,
                10133,
                9465,
                11637,
                12384,
                10696,
                9095,
                10618,
                9641,
                10260,
                12252,
                11296,
                0,
                10784,
                7368,
                8261,
                8406,
                9255,
                8885,
                9689,
                7235,
                4356,
                9159,
                10191,
                5682,
                5788,
                6143,
                5215,
                9393,
                0,
                4745,
                7801,
                6424,
                3632,
                2863,
                2655,
                5082,
                3264,
                789,
                2639,
                3684,
                2132,
                2646,
                711
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                13159,
                10724,
                10335,
                10859,
                10497,
                9114,
                11582,
                10134,
                10363,
                9800,
                9065,
                7843,
                9471,
                5814,
                8407,
                6378,
                8758,
                9959,
                8455,
                7522,
                0,
                8240,
                9294,
                9673,
                7960,
                8708,
                8130,
                7563,
                7407,
                3970,
                9695,
                7104,
                6362,
                8494,
                5342,
                6079,
                9336,
                6105,
                5675,
                4987,
                3908,
                3153,
                4115,
                2711,
                2155,
                3573,
                3668,
                2406,
                4131,
                3457,
                3588,
                764
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                11072,
                7798,
                6883,
                10980,
                9272,
                9794,
                6920,
                7115,
                7494,
                115567,
                7107,
                8727,
                10441,
                9111,
                6899,
                9822,
                7472,
                6313,
                9428,
                8437,
                0,
                8787,
                6747,
                9493,
                8538,
                7498,
                7843,
                99427,
                7918,
                6371,
                6467,
                6887,
                7847,
                5740,
                8109,
                75872,
                8913,
                8219,
                69916,
                3676,
                2944,
                4531,
                5119,
                3239,
                4213,
                2740,
                3165,
                3135,
                2660,
                2696,
                2487,
                1772
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                115246,
                124936,
                120747,
                99702,
                100175,
                103946,
                107495,
                108360,
                110040,
                0,
                107667,
                102729,
                92720,
                105178,
                104473,
                102822,
                100896,
                101518,
                87545,
                94414,
                0,
                84903,
                94605,
                83223,
                91060,
                83285,
                89944,
                0,
                91723,
                115034,
                80214,
                80908,
                86218,
                87806,
                85270,
                0,
                41044,
                100172,
                0,
                65524,
                63898,
                59080,
                54866,
                61725,
                50630,
                44855,
                48629,
                49985,
                44674,
                44663,
                38739,
                40947
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Druid - Feral - Patchwerk"
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
            "Golganneth's Vitality",
            "Kil'jaeden's Burning Wish",
            "Specter of Betrayal",
            "Eye of Command",
            "Convergence of Fates",
            "Vial of Ceaseless Toxins",
            "Nightblooming Frond",
            "Chaos Talisman",
            "Engine of Eradication",
            "Stat Stick (Crit)",
            "Stat Stick (Versatility)",
            "Seeping Scourgewing",
            "PVP Badge of Conquest",
            "Cradle of Anguish",
            "Six-Feather Fan",
            "Stat Stick (Mastery)",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Bloodthirsty Instinct",
            "Tirathon's Betrayal",
            "Stat Stick (Haste)",
            "Aman'Thul's Vision",
            "Arcanogolem Digit",
            "Gift of Radiance",
            "Void Stalker's Contract",
            "Chrono Shard",
            "Bloodstained Handkerchief",
            "Nightmare Egg Shell",
            "Shadow-Singed Fang",
            "PVP Insignia of Conquest",
            "Unstable Arcanocrystal",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "Infernal Cinders",
            "Umbral Moonglaives",
            "Horn of Valor",
            "Forgefiend's Fabricator",
            "Draught of Souls",
            "Astral Alchemist Stone",
            "Gorshalach's Legacy",
            "The Devilsaur's Bite",
            "Faulty Countermeasure",
            "Spontaneous Appendages",
            "Terrorbound Nexus",
            "Nature's Call",
            "Mark of Dargrul",
            "Toe Knee's Promise",
            "Tiny Oozeling in a Jar",
            "Giant Ornamental Pearl",
            "Spiked Counterweight",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
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
                    text: "mean: 147070",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 147070.05555555556,
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