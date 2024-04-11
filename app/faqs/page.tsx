"use client";



import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const Safe = () => {

    return (
        <div className="  bg-black text-white
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden  sm:mt-[110px]
        overflow-y-auto">
            <div className="container ml-auto py-6 h-fit  ">
                <div className="   font-bold ">
                    <h1 className="text-xl mt-4 flex justify-center sm:text-5xl">Frequently Asked Questions </h1>
                    <Accordion className="mt-4" type="single" collapsible>
                        <AccordionItem value="item-1" >
                            <AccordionTrigger className="px-2 text-xl sm:text-4xl">Where is Core Fitness Gym?</AccordionTrigger>
                            <AccordionContent className="px-2">
                            Please visit our <a href="/find-gym" className="text-blue-500 cursor-pointer">Find a Gym</a>  page to find details of our  locations.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="mt-4" value="item-2" >
                            <AccordionTrigger className="px-2 text-xl sm:text-4xl">How do I provide feedback about my membership experience?</AccordionTrigger>
                            <AccordionContent className="px-2">
                               To give feedback, please <a href="/feedback" className="text-blue-500 cursor-pointer">click here.</a>  Completing this form ensures that both your local Core Fitness gym and our corporate customer service team get your message.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="mt-4" value="item-3" >
                            <AccordionTrigger className="px-2 text-xl sm:text-4xl">How much does it cost for a membership?</AccordionTrigger>
                            <AccordionContent className="px-2">
                            Rates vary based  Because there are often offers, discounts, promotions and programs that are happening that may affect your membership price, for the most accurate information, please contact . We&apos;re looking forward to meeting you!
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="mt-4" value="item-4" >
                            <AccordionTrigger className="px-2 text-xl sm:text-4xl">Where can I learn about membership specials, class schedules, gym amenities, and other local info?</AccordionTrigger>
                            <AccordionContent className="px-2">
                            Please contact your trainer for those vital details. You can look them up on our <a href="/find-gym" className="text-blue-500 cursor-pointer">Find a Gym</a> page.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>


        </div>
    );
};

export default Safe;