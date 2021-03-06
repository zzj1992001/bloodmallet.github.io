Highcharts.chart('warrior_fury_beastlord', 
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
                0,
                0,
                0,
                0,
                45412,
                0,
                0,
                0,
                304859,
                0,
                49236,
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
                26208,
                32027,
                24836,
                17865,
                34277,
                23070,
                22289,
                33798,
                26855,
                0,
                5328,
                14193,
                12062,
                17227,
                23988,
                24167,
                19365,
                13288,
                12544,
                9417,
                16762,
                6975,
                14535,
                11244,
                20626,
                24349,
                14364,
                19856,
                14084,
                11705,
                7003,
                17591,
                13895,
                11671,
                13113,
                17186,
                10432,
                14360,
                14316,
                21168,
                15773,
                18347,
                14686,
                8624,
                12787,
                0,
                8048,
                0,
                16283
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                35076,
                22363,
                29703,
                7412,
                16226,
                273572,
                20784,
                15470,
                24891,
                0,
                17733,
                18597,
                20307,
                14815,
                11794,
                11932,
                17549,
                10733,
                22566,
                16255,
                16798,
                15725,
                10831,
                12099,
                10597,
                12897,
                6396,
                11061,
                16675,
                12392,
                23154,
                9325,
                12596,
                6468,
                13342,
                7465,
                17944,
                18108,
                5789,
                17444,
                9938,
                10291,
                6565,
                10605,
                8057,
                0,
                9491,
                4790,
                20903
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                21239,
                34733,
                19819,
                17603,
                23569,
                0,
                22018,
                24505,
                24406,
                0,
                3892,
                18664,
                15377,
                15504,
                16585,
                18751,
                24764,
                15253,
                3513,
                9390,
                8603,
                11950,
                11766,
                18181,
                16542,
                7469,
                17954,
                11025,
                7850,
                10024,
                4227,
                15585,
                15887,
                18724,
                12186,
                12364,
                14769,
                8079,
                15499,
                4522,
                16484,
                17667,
                11330,
                4729,
                10016,
                0,
                9035,
                9920,
                14887
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                21878,
                20619,
                22165,
                9484,
                27225,
                0,
                20575,
                9503,
                21990,
                0,
                15664,
                15278,
                11557,
                5614,
                11888,
                14721,
                12713,
                12214,
                20845,
                23866,
                12770,
                10468,
                18772,
                10598,
                7612,
                12772,
                16141,
                9430,
                10822,
                2896,
                9051,
                9567,
                8850,
                8714,
                14479,
                9921,
                9744,
                5082,
                5470,
                15633,
                6679,
                11902,
                5408,
                10879,
                14400,
                0,
                8102,
                3457,
                13748
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                26363,
                17048,
                15225,
                2013,
                16093,
                0,
                25329,
                23650,
                13800,
                0,
                2112,
                150509,
                19260,
                8618,
                10483,
                15142,
                14284,
                14977,
                2982,
                5534,
                14522,
                9193,
                9718,
                2886,
                13602,
                12592,
                8123,
                10226,
                10531,
                9045,
                18597,
                4695,
                9614,
                12156,
                0,
                8868,
                12336,
                10586,
                7894,
                11104,
                14693,
                8156,
                6213,
                17824,
                0,
                0,
                0,
                4480,
                11992
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                12604,
                18048,
                23463,
                5071,
                13946,
                0,
                15932,
                17148,
                27196,
                0,
                9552,
                0,
                5670,
                18697,
                15291,
                13692,
                5478,
                7227,
                10203,
                8086,
                8777,
                14338,
                8717,
                11041,
                9005,
                349,
                10089,
                9014,
                10473,
                5321,
                7780,
                12599,
                13133,
                2702,
                15825,
                8165,
                2969,
                2199,
                9495,
                9366,
                10614,
                7447,
                10955,
                0,
                10160,
                6644,
                9197,
                0,
                20042
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                19890,
                238379,
                8397,
                16851,
                23868,
                0,
                209765,
                9948,
                4401,
                0,
                248,
                0,
                9702,
                6119,
                9535,
                7757,
                18190,
                7685,
                6667,
                8182,
                10007,
                8635,
                6835,
                9043,
                6686,
                16598,
                8053,
                12692,
                12252,
                8131,
                8481,
                3377,
                359,
                16112,
                7274,
                123721,
                12180,
                21356,
                3953,
                5291,
                6075,
                9629,
                7412,
                9663,
                3093,
                11956,
                8956,
                11944,
                14718
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                223442,
                0,
                218136,
                283961,
                199222,
                0,
                0,
                181951,
                167949,
                0,
                229471,
                0,
                148221,
                151510,
                138048,
                125097,
                118507,
                146943,
                146570,
                142990,
                135431,
                141930,
                135111,
                139379,
                128663,
                126044,
                130213,
                127942,
                127078,
                149922,
                124894,
                129359,
                121945,
                119621,
                119133,
                0,
                104209,
                101456,
                112968,
                89893,
                87579,
                84350,
                100948,
                109060,
                105113,
                118612,
                84128,
                102161,
                -2281
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Warrior - Fury - Beastlord"
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
            "Tiny Oozeling in a Jar",
            "Forgefiend's Fabricator",
            "Toe Knee's Promise",
            "Convergence of Fates",
            "Umbral Moonglaives",
            "Kil'jaeden's Burning Wish",
            "Gorshalach's Legacy",
            "Terrorbound Nexus",
            "Void Stalker's Contract",
            "Aman'Thul's Vision",
            "Unstable Arcanocrystal",
            "Khaz'goroths Courage",
            "Cradle of Anguish",
            "Chaos Talisman",
            "Mark of Dargrul",
            "Claw of the Crystalline Scorpid",
            "Specter of Betrayal",
            "Eye of Command",
            "Ettin Fingernail",
            "Stat Stick (Haste)",
            "Fel-Oiled Infernal Machine",
            "Ravaged Seed Pod",
            "Windscar Whetstone",
            "Impact Tremor",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Entwined Elemental Foci",
            "Nature's Call",
            "Stat Stick (Mastery)",
            "Stat Stick (Versatility)",
            "PVP Badge of Victory",
            "Gift of Radiance",
            "Stat Stick (Crit)",
            "Seeping Scourgewing",
            "Ursoc's Rending Paw",
            "Horn of Valor",
            "PVP Insignia of Victory",
            "Bloodstained Handkerchief",
            "Vial of Ceaseless Toxins",
            "Might of Krosus",
            "Faulty Countermeasure",
            "Infernal Cinders",
            "Spontaneous Appendages",
            "Astral Alchemist Stone",
            "Giant Ornamental Pearl",
            "Spiked Counterweight",
            "Draught of Souls"
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
                    text: "mean: 229444",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 229444.2857142857,
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