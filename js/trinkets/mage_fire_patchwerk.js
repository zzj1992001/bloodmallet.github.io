Highcharts.chart('mage_fire_patchwerk', 
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
                242824,
                0,
                29352,
                0,
                0,
                23770,
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
                0,
                12964,
                14720,
                6716,
                18080,
                13933,
                16593,
                12558,
                15256,
                12382,
                11692,
                12080,
                12439,
                11944,
                13746,
                9217,
                13718,
                9079,
                10974,
                8572,
                11379,
                12724,
                10160,
                10011,
                12071,
                10852,
                8883,
                11627,
                9846,
                8095,
                10203,
                14544,
                8300,
                10643,
                13456,
                8717,
                9228,
                10089,
                7481,
                10235,
                13415,
                6706,
                8080,
                9800,
                9323,
                6251,
                8034,
                6951,
                5757,
                0,
                7247,
                4680,
                3629,
                2305,
                4850
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                0,
                12771,
                182378,
                6571,
                13759,
                10006,
                9445,
                11508,
                12055,
                11198,
                13553,
                10871,
                14024,
                11506,
                9920,
                10748,
                15715,
                10583,
                11396,
                12090,
                10309,
                9285,
                11313,
                10078,
                11277,
                10144,
                11209,
                7125,
                8455,
                9489,
                13517,
                12317,
                8520,
                5602,
                9359,
                8991,
                5901,
                9472,
                10068,
                10318,
                9923,
                6250,
                7801,
                10242,
                11532,
                8649,
                8072,
                3339,
                6778,
                0,
                5022,
                6346,
                5715,
                835,
                1618
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                0,
                11020,
                0,
                8009,
                15384,
                9857,
                11858,
                10724,
                9704,
                9910,
                6313,
                9150,
                11732,
                9769,
                10340,
                11578,
                11366,
                9356,
                11639,
                8298,
                10088,
                10079,
                8533,
                9117,
                9530,
                11076,
                9102,
                6590,
                9391,
                5586,
                9744,
                8975,
                7860,
                7666,
                11054,
                6929,
                7495,
                6840,
                5763,
                5535,
                9888,
                4718,
                5912,
                12250,
                11580,
                5021,
                6175,
                6838,
                5576,
                0,
                2492,
                4486,
                5641,
                3334,
                2928
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                0,
                13579,
                0,
                9011,
                11341,
                9216,
                11853,
                10478,
                12562,
                9620,
                9006,
                9442,
                10547,
                7784,
                9365,
                8171,
                8373,
                9453,
                5903,
                9404,
                9174,
                7714,
                8177,
                6461,
                8135,
                7197,
                7381,
                7818,
                4085,
                9119,
                9508,
                9384,
                7133,
                7764,
                9737,
                8816,
                4669,
                6517,
                7848,
                7490,
                7549,
                5565,
                4156,
                5280,
                4325,
                5840,
                5317,
                4663,
                4706,
                0,
                5082,
                2712,
                3267,
                4715,
                2798
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                0,
                9983,
                0,
                8159,
                12570,
                126608,
                8921,
                10230,
                9464,
                10933,
                8354,
                10859,
                11773,
                9936,
                7930,
                7413,
                14216,
                7786,
                11414,
                7198,
                10722,
                9832,
                9128,
                8551,
                7677,
                7720,
                9380,
                7822,
                5872,
                6604,
                8657,
                7940,
                6702,
                4156,
                6460,
                6712,
                7394,
                9102,
                5897,
                4920,
                6999,
                8375,
                6785,
                9571,
                8409,
                6379,
                5932,
                5406,
                4650,
                0,
                3941,
                5527,
                4294,
                3648,
                1635
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                7239,
                0,
                7746,
                12603,
                0,
                8624,
                8006,
                8440,
                8164,
                7395,
                6161,
                7520,
                6992,
                7105,
                6857,
                11248,
                6070,
                6976,
                8090,
                4099,
                5486,
                8287,
                8422,
                7145,
                7319,
                4917,
                6360,
                6968,
                4673,
                6691,
                8192,
                7870,
                7460,
                8489,
                5457,
                4865,
                3682,
                3605,
                6821,
                8449,
                4735,
                6059,
                6758,
                6787,
                4784,
                3323,
                4833,
                3653,
                4825,
                4641,
                4317,
                4016,
                2238,
                224
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                160445,
                0,
                2896,
                8816,
                0,
                8640,
                7264,
                121446,
                124065,
                9622,
                6977,
                7254,
                7453,
                9461,
                8105,
                96172,
                10838,
                110745,
                3219,
                9637,
                9586,
                4009,
                7961,
                7197,
                7717,
                8868,
                6788,
                5934,
                7574,
                7101,
                8020,
                4451,
                5046,
                7733,
                5233,
                6734,
                5751,
                5619,
                5771,
                6708,
                2685,
                4144,
                5319,
                6721,
                3874,
                4814,
                4846,
                6759,
                5301,
                1625,
                2880,
                3199,
                2630,
                2430
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                174794,
                129944,
                0,
                116979,
                118202,
                0,
                0,
                110024,
                108054,
                97408,
                107197,
                104405,
                109713,
                0,
                106785,
                0,
                111926,
                99273,
                97242,
                101797,
                97721,
                95147,
                91438,
                90665,
                88000,
                91228,
                86827,
                72495,
                67694,
                86157,
                88576,
                69314,
                84304,
                88832,
                83403,
                87906,
                80080,
                65640,
                88524,
                82840,
                64766,
                64643,
                80573,
                77039,
                80603,
                73402,
                91474,
                71004,
                64792,
                65722,
                65130,
                54805
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Mage - Fire - Patchwerk"
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
            "Aman'Thul's Vision",
            "Acrid Catalyst Injector",
            "Kil'jaeden's Burning Wish",
            "Unstable Arcanocrystal",
            "Tarnished Sentinel Medallion",
            "Norgannon's Prowess",
            "Terror From Below",
            "Obelisk of the Void",
            "Vitality Resonator",
            "Prototype Personnel Decimator",
            "Padawsen's Unlucky Charm",
            "PVP Badge of Dominance",
            "Tome of Unraveling Sanity",
            "Dreadstone of Endless Shadows",
            "Stat Stick (Crit)",
            "Erratic Metronome",
            "Sheath of Asara",
            "Charm of the Rising Tide",
            "Terminus Signaling Beacon",
            "Stat Stick (Haste)",
            "Infernal Writ",
            "Stat Stick (Mastery)",
            "Eyasu's Mulligan",
            "Chrono Shard",
            "Stat Stick (Versatility)",
            "Whispers in the Dark",
            "Stormsinger Fulmination Charge",
            "Fury of the Burning Sky",
            "Devilsaur Shock-Baton",
            "Naraxas' Spiked Tongue",
            "Star Gate",
            "Reality Breacher",
            "Spectral Thurible",
            "Swarming Plaguehive",
            "Portable Manacracker",
            "PVP Insignia of Dominance",
            "Toe Knee's Promise",
            "Horn of Valor",
            "Icon of Rot",
            "Oakheart's Gnarled Root",
            "Deteriorated Construct Core",
            "Moonlit Prism",
            "Wriggling Sinew",
            "Twisting Wind",
            "Bough of Corruption",
            "Mrrgria's Favor",
            "Aran's Relaxing Ruby",
            "Pharameres Forbidden Grimoire",
            "Eye of Skovald",
            "Astral Alchemist Stone",
            "Elementium Bomb Squirrel Generator",
            "Corrupted Starlight",
            "Caged Horror",
            "Unstable Horrorslime",
            "Figurehead of the Naglfar"
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
                    text: "mean: 151726",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 151726.54545454544,
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