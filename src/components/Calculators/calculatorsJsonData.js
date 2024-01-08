import sipImage from '@/assets/images/calculators/sip.png';
import lumpsumImage from '@/assets/images/calculators/lumpsum.png'
import fdImage from '@/assets/images/calculators/fd.png'
import compundImage from '@/assets/images/calculators/compound_interest.png'
import mutualFundImage from '@/assets/images/calculators/mutual_fund.png'
import ppfImage from '@/assets/images/calculators/ppf.png'


const calcData = [
    {
        title: 'SIP',
        name: 'SIP<br/>caclulator',
        desc: 'Optimize your investment<br/>strategy accurately',
        icon: sipImage,
        bgColor: '#F4C1B6',
        sliderColor: '#953723',
        chartType: 'PRO',
        amortization: false,
        param1: 500,
        param2: 6,
        param3: 10,
        totalValueFormula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`,
        outputs: [
            {
                name: 'Invested Amount',
                formula: `(param1 * (param3 * 12))`
            },
            {
                name: 'Estimated Return',
                formula: ' (param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))) - (param1 * (param3 * 12))',
            },
            {
                name: 'Total Value',
                formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
            }
        ],
        option: {
            slider1: {
                name: 'Monthly investment',
                min: 500,
                max: 1000000,
                type: 'number',
                step: 500
            },
            slider2: {
                name: 'Expected return rate (p.a.)',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Time period',
                min: 1,
                max: 40,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'Lumpsum',
        name: 'Lumpsum<br/>caclulator',
        desc: 'Precise estimates for<br/>one-time payments',
        icon: lumpsumImage,
        bgColor: '#F4C1B6',
        sliderColor: '#953723',
        chartType: 'PRO',
        amortization: false,
        param1: 500,
        param2: 6,
        param3: 10,
        totalValueFormula: ` param1 * (Math.pow((1+param2/100), param3 )) `,
        outputs: [
            {
                name: 'Total Investment',
                formula: `(param1)`
            },
            {
                name: 'Estimated Return',
                formula: ' (param1 * (Math.pow((1+param2/100), param3 ))) - param1 ',
            },
            {
                name: 'Total Value',
                formula: `param1 * (Math.pow((1+param2/100), param3 ))`
            }
        ],
        option: {
            slider1: {
                name: 'Total Investment',
                min: 500,
                max: 1000000,
                type: 'number',
                step: 500
            },
            slider2: {
                name: 'Expected return rate (p.a.)',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Time period',
                min: 1,
                max: 40,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is Lumpsum?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is Lumpsum?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'FD',
        name: 'FD<br/>caclulator',
        desc: 'Accurate insights into<br/>FD returns',
        icon: fdImage,
        bgColor: '#FEEBB9',
        sliderColor: '#957529',
        chartType: 'Elite',
        amortization: false,
        param1: 5000,
        param2: 1,
        param3: 1,
        totalValueFormula: `param1 + param1 * ((Math.pow((1+param2/100),param3))-1)`,
        outputs: [
            {
                name: 'Total Investment',
                formula: `param1`
            },
            {
                name: 'Estimated Return',
                formula: '(param1 + param1 * ((Math.pow((1+param2/100),param3))-1)) - param1',
            },
            {
                name: 'Total Value',
                formula: `param1 + param1 * ((Math.pow((1+param2/100),param3))-1)`
            }
        ],
        option: {
            slider1: {
                name: 'Total Investment',
                min: 5000,
                max: 1000000,
                type: 'number',
                step: 5000
            },
            slider2: {
                name: 'Expected return rate (p.a.)',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Time period',
                min: 1,
                max: 40,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is FD?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is FD?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'Compound interest',
        name: 'Compound<br/>interest caclulator',
        desc: 'Understand how interest<br/>grows exponentially',
        icon: compundImage,
        bgColor: '#F6DDFF',
        sliderColor: '#6C1D87',
        chartType: 'PRO',
        amortization: false,
        param1: 1000,
        param2: 1,
        param3: 1,
        // param5: 456,
        // param6: 789,
        totalValueFormula: `param1*(Math.pow((1+(param2/100)),param3))`,
        outputs: [
            {
                name: 'Principal Amount',
                formula: `param1`
            },
            {
                name: 'Interest Earned',
                formula: '(param1*(Math.pow((1+(param2/100)),param3))) - param1',
            },
            {
                name: 'Total Value',
                formula: `param1*(Math.pow((1+(param2/100)),param3))`
            }
        ],
        option: {
            slider1: {
                name: 'Amount Invested',
                min: 500,
                max: 1000000,
                type: 'number',
                step: 500
            },
            slider2: {
                name: 'Rate of interest (p.a)',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Time period',
                min: 1,
                max: 40,
                type: 'duration',
                step: 1
            },
            slider4: {
                name: 'Compounding frequency',
                min: 100,
                max: 400,
                type: 'number',
                step: 10
            },
            // slider5: {
            //     name: 'Param 5',
            //     min: 100,
            //     max: 500,
            //     type: 'duration',
            //     step: 10
            // }
            // , slider6: {
            //     name: 'Param 6',
            //     min: 100,
            //     max: 600,
            //     type: 'duration',
            //     step: 10
            // },
        },
        extraDetails: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'PPF',
        name: 'PPF<br/>caclulator',
        desc: 'Accurate insights into<br/>FD returns',
        icon: ppfImage,
        bgColor: '#FEEBB9',
        sliderColor: '#957529',
        chartType: 'Elite',
        amortization: false,
        param1: 1000,
        param2: 10,
        param3: 3,
        totalValueFormula: `param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`,
        outputs: [
            {
                name: 'Invested Amount',
                formula: `(param1 * (param3 * 12))`
            },
            {
                name: 'Estimated Return',
                formula: ' (param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))) - (param1 * (param3 * 12))',
            },
            {
                name: 'Total Value',
                formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
            }
        ],
        option: {
            slider1: {
                name: 'Monthly investment',
                min: 500,
                max: 1000000,
                type: 'number',
                step: 500
            },
            slider2: {
                name: 'Expected return rate (p.a.)',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Time period',
                min: 1,
                max: 40,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is PPF?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is PPF?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'Mutual Fund',
        name: 'Mutual<br/>Fund caclulator',
        desc: 'Accurate insights into<br/>FD returns',
        icon: mutualFundImage,
        bgColor: '#FEEBB9',
        sliderColor: '#957529',
        chartType: 'Elite',
        amortization: false,
        param1: 500,
        param2: 1,
        param3: 1,
        totalValueFormula: `param1*(Math.pow((1+(param2/100)),param3))`,
        outputs: [
            {
                name: 'Principal Amount',
                formula: `param1`
            },
            {
                name: 'Interest Earned',
                formula: '(param1*(Math.pow((1+(param2/100)),param3))) - param1',
            },
            {
                name: 'Total Value',
                formula: `param1*(Math.pow((1+(param2/100)),param3))`
            }
        ],
        option: {
            slider1: {
                name: 'Total Investment',
                min: 500,
                max: 1000000,
                type: 'number',
                step: 500
            },
            slider2: {
                name: 'Expected Rate of Return Per annum',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Time Period ',
                min: 1,
                max: 40,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is Mutual Fund?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is Mutual Fund?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'NPS',
        name: 'NPS<br/>caclulator',
        desc: 'Accurate insights into<br/>FD returns',
        icon: fdImage,
        bgColor: '#FEEBB9',
        sliderColor: '#957529',
        chartType: 'Elite',
        amortization: false,
        param1: 500,
        param2: 8,
        param3: 18,
        totalValueFormula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`,
        outputs: [
            {
                name: 'Total Investment ',
                formula: `(param1 * (param3 * 12))`
            },
            {
                name: 'Interest Earned',
                formula: ' (param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))) - (param1 * (param3 * 12))',
            },
            {
                name: 'Maturity Amount',
                formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
            },
            {
                name: 'Min. Annuity Investment',
                formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
            }
        ],
        option: {
            slider1: {
                name: 'Investment Per Month',
                min: 500,
                max: 1000000,
                type: 'number',
                step: 500
            },
            slider2: {
                name: 'Expected Return Per Annum',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Your age',
                min: 18,
                max: 40,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is NPS?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is NPS?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
    {
        title: 'Home Loan',
        name: 'Home Loan<br/>EMI caclulator',
        desc: 'Accurate insights into<br/>FD returns',
        icon: fdImage,
        bgColor: '#FEEBB9',
        sliderColor: '#957529',
        chartType: 'Elite',
        amortization: true,
        param1: 100000,
        param2: 1,
        param3: 1,
        totalValueFormula: `param1+param2`,
        outputs: [
            {
                name: 'Principal Amount',
                formula: `(param1 * (param3 * 12))`
            },
            {
                name: 'Total Interest',
                formula: 'param1',
            },
            {
                name: 'Total Amount',
                formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
            },
            {
                name: 'Monthly EMI',
                formula: ` param1 * ((Math.pow((1 + ((param2 / 12) / 100)), (param3 * 12)) - 1) / ((param2 / 12) / 100)) * (1 + ((param2 / 12) / 100))`
            }
        ],
        option: {
            slider1: {
                name: 'Loan Amount',
                min: 100000,
                max: 10000000,
                type: 'number',
                step: 10000
            },
            slider2: {
                name: 'Rate of Interest per annum( PA)',
                min: 1,
                max: 30,
                type: 'percentage',
                step: 0.1
            },
            slider3: {
                name: 'Loan Tenure',
                min: 1,
                max: 30,
                type: 'duration',
                step: 1
            }
        },
        extraDetails: [
            {
                question: "What is Home Loan?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ],
        faqs: [
            {
                question: "What is Home Loan?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            }
        ]
    },
]

export default calcData