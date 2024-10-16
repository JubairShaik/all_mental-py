const myApproachConfig = {
    text: "I don't believe that therapists are supposed to be a blank slate. I come to you with years of professional experience in mental health and youth focused social work, but my work as a therapist is also colored by my lived experience and my intersecting identities. In my role as a therapist, I place high value on professional integrity, client self-determination, acceptance, compassion, confidentiality, and commitment. I believe that the therapeutic relationship is a microcosm that provides information about ways of being and patterns of interaction that are ripe for exploration. You may be coming to therapy with feelings of discontentment or anxiety, maybe you have observed patterns in your relationships that you wish to change, perhaps a question about identifying goals in your life. Not knowing can take up a lot of space in your brain and leave you feeling like you can't sense which direction to go. My job as your therapist is to clear the haze of uncertainty and help you develop a clearer map of your life. Much like talking with a trusted friend, my approach is informal and relational. I truly believe that it is unreasonable to expect clients to share in a genuine way if I myself am not modeling vulnerability and hiding behind a one-dimensional persona. You can expect a warm and authentic therapeutic experience, which may include loving confrontation by asking the tough questions and a touch of humor. In our first conversations, we will discuss your motivation for choosing therapy at this time in your life and decide on a goal or two to work on together. If you think my approach may work for you, please see my calendar to schedule a 15 minute phone consultation. And finally, thank you for allowing me to humbly share my humanness with you and for taking the first step in taking care of you.",
};

export const MyApproach = () => {
    return (
        <section className="w-full p-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4  max-w-screen-lg">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            My Approach
                        </h2>
                        <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {myApproachConfig.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
