import sipImage from '@/assets/Images/calculators/sip.png';

const calcData = [
    {
        title: 'SIP',
        name: 'SIP<br/>caclulator',
        desc: 'Optimize your investment<br/>strategy accurately',
        icon: sipImage,
        color: '#F4C1B6',
        totalValueOptions: {
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
            },
        ],
        faqs: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            },
        ]
    },
    {
        title: 'Lumpsum',
        name: 'Lumpsum<br/>caclulator',
        desc: 'Precise estimates for<br/>one-time payments',
        icon: sipImage,
        color: '#F4C1B6',
        totalValueOptions: {
            slider1: {
                name: 'Total investment',
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
            },
        ],
        faqs: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            },
        ]
    },
    {
        title: 'FD',
        name: 'FD<br/>caclulator',
        desc: 'Accurate insights into<br/>FD returns',
        icon: sipImage,
        color: '#F4C1B6',
        totalValueOptions: {
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
            },
        ],
        faqs: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            },
        ]
    },
    {
        title: 'Compound interest',
        name: 'Compound<br/>interest caclulator',
        desc: 'Understand how<br/>interest grows exponentially',
        icon: sipImage,
        color: '#F4C1B6',
        totalValueOptions: {
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
            },
        ],
        faqs: [
            {
                question: "What is SIP?",
                answer: "Investors may see SIPs and mutual funds as identical. However, SIPs are more about how you invest in mutual funds, unlike lump-sum investments. A SIP calculator helps forecast potential returns when putting money into these investment tools. SIP, short for Systematic Investment Plan, involves regularly investing a fixed amount in mutual funds. You can typically invest weekly, quarterly, or monthly through SIPs.",
            },
            {
                question: "question",
                answer: "ans",
            },
        ]
    }
]

export default calcData