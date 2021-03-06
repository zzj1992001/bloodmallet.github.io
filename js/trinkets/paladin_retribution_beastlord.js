Highcharts.chart('paladin_retribution_beastlord', 
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
                69328,
                406561,
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
                53603,
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
                49126,
                19027,
                0,
                19169,
                18376,
                20394,
                30839,
                21413,
                25710,
                21153,
                26942,
                36899,
                35753,
                20514,
                24178,
                28039,
                26605,
                17572,
                27416,
                22315,
                36671,
                21869,
                20296,
                22667,
                17040,
                16596,
                21492,
                33185,
                23116,
                25644,
                23892,
                34812,
                24665,
                19455,
                19901,
                0,
                7674,
                18968,
                9462,
                15730,
                3307,
                1615,
                1611,
                5383,
                8000,
                0,
                3248,
                15279,
                13767
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                25458,
                350042,
                0,
                33976,
                10810,
                30159,
                19647,
                23487,
                13224,
                26149,
                15254,
                15000,
                10473,
                36706,
                25334,
                14373,
                11068,
                18396,
                15629,
                19131,
                11592,
                12580,
                18256,
                13509,
                19282,
                22207,
                27077,
                8603,
                12886,
                19975,
                7441,
                16035,
                18492,
                22505,
                17493,
                0,
                5205,
                13082,
                10670,
                2136,
                11325,
                19223,
                7262,
                7149,
                10941,
                7709,
                6972,
                0,
                4937
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                30360,
                0,
                0,
                25499,
                23173,
                18691,
                22090,
                16379,
                35013,
                24656,
                27981,
                23288,
                20816,
                13105,
                9684,
                19127,
                18244,
                29097,
                13288,
                29625,
                16007,
                22773,
                19787,
                24698,
                27280,
                17470,
                10307,
                24107,
                18856,
                21493,
                18846,
                11613,
                13736,
                8225,
                11251,
                0,
                12682,
                10951,
                17821,
                10138,
                8334,
                550,
                9822,
                18375,
                9774,
                9296,
                1418,
                6252,
                9371
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                36486,
                0,
                0,
                27619,
                7854,
                30665,
                29070,
                23187,
                15951,
                20943,
                24183,
                10619,
                24500,
                8888,
                31146,
                19547,
                29709,
                19856,
                30284,
                13017,
                16482,
                22053,
                17834,
                14231,
                12996,
                12821,
                32287,
                13615,
                24442,
                23111,
                12661,
                12879,
                17387,
                25870,
                10204,
                0,
                0,
                0,
                2318,
                17516,
                10149,
                11699,
                10843,
                0,
                10318,
                0,
                13322,
                0,
                14602
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                18288,
                0,
                0,
                16956,
                16086,
                16804,
                8052,
                6837,
                29050,
                11179,
                16529,
                32318,
                14341,
                22816,
                17172,
                18999,
                22610,
                7371,
                17313,
                197821,
                21829,
                11500,
                25885,
                20285,
                10885,
                15840,
                8662,
                22510,
                24753,
                13026,
                6118,
                20452,
                14114,
                11805,
                13579,
                0,
                5770,
                6337,
                7059,
                452,
                7078,
                2799,
                5826,
                8119,
                2043,
                1925,
                3878,
                3978,
                13162
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                28863,
                0,
                0,
                33014,
                6957,
                10368,
                18245,
                19945,
                11384,
                21887,
                4927,
                15472,
                12768,
                23942,
                14244,
                22349,
                3827,
                17649,
                2142,
                0,
                11804,
                16694,
                9312,
                20467,
                23546,
                22559,
                13318,
                14356,
                9741,
                15544,
                20550,
                21346,
                13977,
                7609,
                0,
                22730,
                6090,
                22712,
                16140,
                11872,
                0,
                17859,
                3423,
                16311,
                4483,
                10443,
                0,
                12520,
                12817
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                26994,
                0,
                0,
                246953,
                4270,
                26070,
                15705,
                13956,
                17515,
                9761,
                27920,
                16587,
                21017,
                13875,
                14248,
                3723,
                17139,
                19817,
                234417,
                0,
                21054,
                26938,
                20443,
                0,
                237,
                14808,
                16678,
                13428,
                22129,
                11166,
                0,
                13271,
                8218,
                21537,
                166534,
                15863,
                9099,
                293,
                3936,
                9856,
                13636,
                0,
                9622,
                1684,
                4349,
                17133,
                14035,
                1607,
                167
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                301395,
                0,
                0,
                0,
                295780,
                220522,
                229169,
                247292,
                216948,
                223625,
                214955,
                208219,
                214160,
                209803,
                208879,
                217956,
                214847,
                211075,
                0,
                0,
                196518,
                187774,
                183648,
                199225,
                193500,
                181760,
                165333,
                165089,
                145220,
                148441,
                186600,
                136650,
                140775,
                127263,
                0,
                193557,
                172461,
                132806,
                136038,
                132673,
                138053,
                122907,
                119145,
                107752,
                112601,
                114457,
                104377,
                99863,
                32999
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Paladin - Retribution - Beastlord"
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
            "Umbral Moonglaives",
            "Kil'jaeden's Burning Wish",
            "Aman'Thul's Vision",
            "Gorshalach's Legacy",
            "Unstable Arcanocrystal",
            "Cradle of Anguish",
            "Eye of Command",
            "Convergence of Fates",
            "Chaos Talisman",
            "Horn of Valor",
            "Engine of Eradication",
            "Fel-Oiled Infernal Machine",
            "Entwined Elemental Foci",
            "Memento of Angerboda",
            "Stat Stick (Versatility)",
            "Stat Stick (Haste)",
            "Stat Stick (Mastery)",
            "Ettin Fingernail",
            "Forgefiend's Fabricator",
            "Khaz'goroths Courage",
            "Nightmare Egg Shell",
            "Stat Stick (Crit)",
            "PVP Badge of Victory",
            "Chrono Shard",
            "PVP Insignia of Victory",
            "Gift of Radiance",
            "Claw of the Crystalline Scorpid",
            "Specter of Betrayal",
            "Vial of Ceaseless Toxins",
            "Void Stalker's Contract",
            "Terrorbound Nexus",
            "Bloodstained Handkerchief",
            "Might of Krosus",
            "Ursoc's Rending Paw",
            "Seeping Scourgewing",
            "Astral Alchemist Stone",
            "Nature's Call",
            "Mark of Dargrul",
            "Impact Tremor",
            "Infernal Cinders",
            "Tiny Oozeling in a Jar",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "Spiked Counterweight",
            "Toe Knee's Promise",
            "Windscar Whetstone",
            "Ravaged Seed Pod",
            "Giant Ornamental Pearl",
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
                    text: "mean: 290278",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 290278.32653061225,
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