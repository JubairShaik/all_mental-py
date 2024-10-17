// import components
import Link from "next/link";
import Header from "../Header/Header";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box } from "@mui/material";

const Hero = () => {
    return (
        <section className="hero">
            <div className="relative h-screen">
                <video 
                    playsInline
                    autoPlay 
                    muted 
                    loop
                    className="absolute top-0 left-0 h-screen w-full object-cover z-[-1]">
                    <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
                </video>
                
                <div className="hero-content h-full flex flex-col justify-between p-8">
                    <Header />

                    <div className="hero-wrapper h-4/6 flex flex-col justify-center items-center gap-14 md:h-full md:justify-evenly">
                        <Link href="/">
                            <img
                                className="hover:opacity-60 duration-500"
                                src="/assets/logos/logo.png"
                                alt="koru logo" />
                        </Link>

                        <div className="hero-cta flex flex-row justify-center gap-4">
                            <Link href="/register">
                                <p className="hero-btn--gray">
                                    Register
                                </p>
                            </Link>

                            <Link href="/about">
                                <p className="hero-btn--brown">
                                    Learn More
                                </p>
                            </Link>
                        </div>
                    </div>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        padding={2}
                    >
                        <Link href="#main">
                            <ArrowDownwardIcon 
                                className="wiggle"
                                sx={{fontSize: 30, color: "#FFFFFF"}} />
                        </Link>
                    </Box>
                </div>
            </div>
        </section>
    );
};

export default Hero;