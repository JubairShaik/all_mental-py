type GratitudeBenefit = {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string
};

export const gratitudeBenefits: GratitudeBenefit[] = [
    {
        id: 1,
        title: "Improved Mental Health",
        description: "Practicing gratitude can reduce symptoms of depression and anxiety, promoting a more positive mindset.",
        image: "/assets/images/benefits-1.png",
        alt: "Woman smiling while holding a bouqet of flowers"
    },
    {
        id: 2,
        title: "Enhanced Relationships",
        description: "Expressing gratitude strengthens relationships by fostering connection and appreciation between individuals.",
        image: "/assets/images/benefits-2.png",
        alt: "Two happy looking people leaning against a fence"
    },
    {
        id: 3,
        title: "Better Physical Health",
        description: "Grateful individuals often experience fewer health issues, as gratitude can lead to improved sleep, reduced pain, and healthier lifestyles.",
        image: "/assets/images/benefits-3.png",
        alt: "A woman, outside, listening to music with her earbuds"
    },
    {
        id: 4,
        title: "Increased Resilience",
        description: "Gratitude helps people cope better with stress and adversity, enhancing their ability to bounce back from challenges.",
        image: "/assets/images/benefits-4.png",
        alt: "A man in a wheelchair with his arms spread out"
    },
    {
        id: 5,
        title: "Greater Life Satisfaction",
        description: "Regularly acknowledging what you’re thankful for can boost overall happiness and contentment, leading to a more fulfilling life.",
        image: "/assets/images/benefits-5.png",
        alt: "A group of older adults in a circle, smiling and embracing eachother"
    }
];