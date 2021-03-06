Highcharts.chart('hunter_survival_patchwerk', 
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
                38396,
                33663,
                212953,
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
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#e600e3",
            data: [
                20217,
                15684,
                0,
                16287,
                11983,
                10384,
                16413,
                14606,
                11935,
                8619,
                15821,
                13501,
                14892,
                12000,
                15437,
                13862,
                15141,
                14640,
                14843,
                12528,
                14384,
                11997,
                13512,
                14778,
                12694,
                15234,
                13282,
                13761,
                13912,
                10671,
                13485,
                11314,
                11761,
                13306,
                9702,
                9491,
                7700,
                7923,
                6729,
                0,
                9734,
                11569,
                7277,
                5265,
                4872,
                4570,
                7399,
                5878,
                5395,
                2841,
                5789,
                4407,
                3477,
                3829
            ],
            name: "980"
        },
        {
            color: "#00e676",
            data: [
                13531,
                179997,
                0,
                12057,
                13630,
                12804,
                15879,
                11230,
                13063,
                5580,
                12358,
                11418,
                12696,
                12131,
                11497,
                11989,
                16690,
                13288,
                9982,
                11709,
                10424,
                10220,
                12100,
                15047,
                10068,
                12460,
                11341,
                10932,
                12716,
                10575,
                12844,
                13348,
                11515,
                12357,
                8525,
                11979,
                7985,
                4384,
                9963,
                0,
                8430,
                9650,
                3509,
                6234,
                3669,
                5238,
                3389,
                2788,
                5288,
                4922,
                4328,
                0,
                4481,
                3387
            ],
            name: "970"
        },
        {
            color: "#db843d",
            data: [
                15112,
                0,
                0,
                12591,
                13313,
                10309,
                15820,
                11620,
                10157,
                8187,
                8860,
                11643,
                8619,
                9887,
                9295,
                11631,
                11759,
                9501,
                12130,
                10082,
                10626,
                13146,
                9223,
                10896,
                9869,
                12586,
                8482,
                15655,
                12426,
                8850,
                11118,
                7763,
                12414,
                9061,
                11367,
                7624,
                8452,
                10125,
                7254,
                0,
                6745,
                9967,
                5669,
                6548,
                4102,
                3350,
                3182,
                4156,
                3329,
                1961,
                1631,
                2646,
                2179,
                2167
            ],
            name: "960"
        },
        {
            color: "#4198af",
            data: [
                13795,
                0,
                0,
                20963,
                10029,
                7386,
                11862,
                20179,
                12472,
                6759,
                15154,
                18732,
                11196,
                11727,
                12036,
                10416,
                13043,
                8338,
                11645,
                10750,
                10519,
                10309,
                11238,
                12070,
                9355,
                9328,
                7882,
                8974,
                9788,
                8888,
                11357,
                8064,
                10883,
                12538,
                6700,
                10610,
                5783,
                14226,
                5225,
                0,
                3475,
                15052,
                5471,
                4853,
                3098,
                15115,
                14603,
                5597,
                1851,
                13226,
                4126,
                12488,
                4325,
                1847
            ],
            name: "950"
        },
        {
            color: "#71588f",
            data: [
                133001,
                0,
                0,
                2744,
                12270,
                10701,
                11937,
                3275,
                9253,
                3957,
                9469,
                3937,
                9656,
                8133,
                8257,
                7181,
                9582,
                12410,
                6895,
                9491,
                8500,
                7726,
                9242,
                9699,
                10148,
                9174,
                10863,
                10249,
                9922,
                8322,
                10245,
                9209,
                9686,
                8251,
                6739,
                6259,
                6408,
                0,
                5254,
                0,
                7128,
                3640,
                4752,
                2848,
                3130,
                0,
                0,
                4949,
                2995,
                0,
                647,
                0,
                2205,
                3583
            ],
            name: "940"
        },
        {
            color: "#89a54e",
            data: [
                0,
                0,
                0,
                12510,
                8961,
                6422,
                13654,
                11515,
                8405,
                8439,
                8723,
                8788,
                9663,
                11072,
                11512,
                9100,
                10082,
                7457,
                10534,
                8145,
                6686,
                7305,
                8296,
                12095,
                5995,
                9355,
                6695,
                5668,
                9341,
                8779,
                6487,
                6850,
                8512,
                9677,
                6629,
                8658,
                5704,
                6053,
                5358,
                9829,
                3529,
                6871,
                3517,
                8151,
                4799,
                4657,
                4126,
                2291,
                6269,
                3500,
                4924,
                1467,
                5057,
                2616
            ],
            name: "930"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                0,
                7225,
                5800,
                5384,
                9569,
                6698,
                11232,
                6674,
                122175,
                7770,
                5815,
                5508,
                7422,
                10476,
                8031,
                5944,
                5139,
                7456,
                10035,
                8775,
                8204,
                7120,
                6493,
                8801,
                8689,
                9073,
                6130,
                4681,
                7893,
                97695,
                8242,
                5748,
                6520,
                6125,
                4096,
                87140,
                81673,
                6823,
                6231,
                7023,
                4568,
                1400,
                3381,
                2466,
                5378,
                4221,
                1733,
                3214,
                2350,
                2310,
                1758,
                2034
            ],
            name: "920"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                0,
                117949,
                124880,
                134063,
                101323,
                115800,
                118301,
                145611,
                0,
                111147,
                111852,
                109720,
                103951,
                104216,
                94479,
                106462,
                106032,
                106881,
                105483,
                104493,
                101014,
                90011,
                98946,
                82767,
                92278,
                82432,
                82320,
                95609,
                82082,
                0,
                79253,
                76712,
                89133,
                75613,
                83593,
                0,
                0,
                104729,
                74022,
                39840,
                67576,
                67002,
                74917,
                65466,
                60983,
                60385,
                56023,
                55275,
                55368,
                60639,
                53325,
                48602
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2017-11-23 01:40 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/83184853fbe2695894ec9cc2b135d309f2eb2f09\" target=\"blank\">8318485</a>"
    },
    title: {
        text: "Hunter - Survival - Patchwerk"
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
            "Aman'Thul's Vision",
            "Cradle of Anguish",
            "Bloodthirsty Instinct",
            "Convergence of Fates",
            "Specter of Betrayal",
            "Chaos Talisman",
            "Eye of Command",
            "Unstable Arcanocrystal",
            "Seeping Scourgewing",
            "Stat Stick (Haste)",
            "Stat Stick (Versatility)",
            "PVP Badge of Conquest",
            "Memento of Angerboda",
            "Engine of Eradication",
            "Vial of Ceaseless Toxins",
            "Thrice-Accursed Compass",
            "Stat Stick (Crit)",
            "Entwined Elemental Foci",
            "Chrono Shard",
            "Stat Stick (Mastery)",
            "Nightmare Egg Shell",
            "Six-Feather Fan",
            "Horn of Valor",
            "Nightblooming Frond",
            "Gift of Radiance",
            "Tempered Egg of Serpentrix",
            "Tirathon's Betrayal",
            "PVP Insignia of Conquest",
            "Arcanogolem Digit",
            "Shadow-Singed Fang",
            "Bloodstained Handkerchief",
            "Void Stalker's Contract",
            "Infernal Cinders",
            "Splinters of Agronax",
            "Umbral Moonglaives",
            "Gorshalach's Legacy",
            "Forgefiend's Fabricator",
            "Astral Alchemist Stone",
            "The Devilsaur's Bite",
            "Draught of Souls",
            "Spontaneous Appendages",
            "Faulty Countermeasure",
            "Nature's Call",
            "Spiked Counterweight",
            "Toe Knee's Promise",
            "Terrorbound Nexus",
            "Mark of Dargrul",
            "Ravaged Seed Pod",
            "Giant Ornamental Pearl",
            "Ley Spark",
            "Tiny Oozeling in a Jar",
            "Windscar Whetstone"
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
                    text: "mean: 151686",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 151686.0,
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