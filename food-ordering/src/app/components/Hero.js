import Image from "next/image";
import Pizza from "../assets/pizza..webp";

export default function Hero() {

    return (
        <div className="md:flex md:py-10 items-center justify-between px-6">
            <div className="info py-5 w-full space-y-5">
                <div className="heading">
                    <p className=" font-extrabold text-xl md:text-3xl pb-2 text-red-500">
                        Craving Pizza? We've Got You Covered!
                    </p>

                    <p className="font-semibold md:text-lg text-sm">
                        Fast, Fresh, and Delicious – Delivered to Your Doorstep
                    </p>
                </div>

                <div className="img md:hidden">
                    <Image src={Pizza} className="h-44 object-contain" />
                </div>
                
                <div className="description font-medium text-sm text-gray-600">
                    <p>Discover a world of mouthwatering pizzas with Foody! Whether you’re in the mood for a classic Margherita or an adventurous BBQ Chicken, we deliver hot and fresh pizzas right to your door. Enjoy a seamless ordering experience, real-time tracking, and unbeatable deals. Satisfy your pizza cravings with just a few taps!</p>
                </div>

                <div className="btn flex justify-center md:justify-start">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="img hidden md:flex">
                <Image src={Pizza} className=" h-96 object-contain" />
            </div>
        </div>  
    );
}