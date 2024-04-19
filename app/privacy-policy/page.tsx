"use client";



import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Privacy = () => {

    return (
        <div className="   text-black
        rounded-lg 
        h-fit 
        w-full 
        overflow-hidden  sm:mt-[300px]
        overflow-y-auto">
            <div className="container ml-auto py-6 h-fit  ">
                <div className="  ">
                    <h1 className={`text-3xl flex justify-center sm:text-5xl`}>Privacy Policy </h1>
                    <p className="  italic  px-8 text-sm text-bold text-start   sm:text-xl  mt-6  sm:text-center ">Core Fitness Gym India,
                        respects the importance of privacy of your personal information. This Privacy Policy outlines our current policy on personal information concerning
                        club members, consumers,  and covers the operations of our fitness clubs, business development,
                        and use of our web sites under CorefitnessGym.in (the “Sites”), and mobile software applications, including our Core Fitness® application and
                        may cover some information pulled from affiliated applications, like Google Fit™, FitBit®, HealthKit™ and MapMyFitness®, to the extent that
                        information is included in the Core Fitness® application (“Apps”).</p>
                    <p className="  italic  px-8 text-sm text-bold text-start   sm:text-xl  mt-6  sm:text-center ">By using Core Fitness® services,
                        Sites, Apps, products, features, tools or resources, Whether directly or through our representatives, affiliates, or franchisees, you agree to the
                        terms of this Privacy Policy and our Terms of Use. You may refuse or withdraw your consent at any time; however, we may not then be able to provide
                        you with our full range of products and services. You may not use the Sites, Apps, or our products or services if you do not agree to the Privacy
                        Policy.</p>
                    <p className="  italic  px-8 text-sm text-bold text-start   sm:text-xl  mt-6  sm:text-center ">This policy may change
                        from time to time. Your continued use after we make changes is deemed to be acceptance of those changes, so please check the policy
                        periodically for updates.</p>
                    <p className="  italic  px-8 text-sm text-bold text-start   sm:text-xl  mt-6   " >In the following Privacy Policy, we provide you with information regarding: </p>

                    <ol type="1" className="italic  mt-2">
                        <li>1. Personal Information We Collect through the Sites and Apps</li>
                        <li>2. How We Use and Share Your Personal Information</li>
                        <li>3. Our Use of Your “Cookie” Information on the Sites and Apps</li>
                        <li>4. Our Relationship with other Websites</li>
                        <li>5. Access and Correction of your Personal Information</li>
                        <li>6. Security of Your Personal Information</li>
                        <li>7. Retention of your Personal Information</li>
                        <li>8. Changes to this Privacy Policy</li>
                        <li>9. How to Contact Us</li>
                    </ol>
                    <p className="  italic  px-8 text-sm text-bold text-start   sm:text-xl  mt-6  sm:text-center " >We
                        encourage you to read this whenever you visit our fitness clubs or Sites, since we may change this policy from time to time.
                        A copy of the current policy is always posted at policy section. </p>
                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>Territories</h1>
                    <p className="italic  px-8 text-sm text-bold text-start sm:text-xl mt-6 ">
                        This Privacy Policy covers our activities in India. We host the Sites currently on servers located within India but the locations of our servers may change from time-to-time, and your personal information may be stored on servers located within India or in another country. Further, our franchisees may maintain individual websites in the country or territory they service.
                    </p>

                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>Consent</h1>
                    <p className="italic  px-8 text-sm text-bold text-start sm:text-xl mt-6 ">
                        BY SUBMITTING YOUR PERSONAL INFORMATION TO US, YOU ARE CONSENTING TO THE PROCESSING OF YOUR PERSONAL INFORMATION IN India OR IN ANY OTHER COUNTRY IN THE WORLD AND TO OUR USE OF YOUR PERSONAL INFORMATION AS SET FORTH IN THIS PRIVACY POLICY. IF YOU ARE SUBMITTING PERSONAL INFORMATION OF THIRD PARTIES TO US, YOU WARRANT AND REPRESENT THAT YOU HAVE THEIR CONSENT TO PROVIDE THEIR PERSONAL INFORMATION TO US AND WILL HOLD US HARMLESS FROM AND AGAINST CLAIMS BY SUCH INDIVIDUALS RELATING TO OUR PROCESSING AND USE OF SUCH PERSONAL INFORMATION WITHIN THE TERMS OF THIS PRIVACY POLICY.
                    </p>

                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>1. Personal Information We Collect through the Sites and Apps</h1>
                    <p className="italic  px-8 text-sm text-bold text-start sm:text-xl mt-6 ">
                        In general, you can browse the non-password protected portions of our Sites without telling us who you are or revealing any personal information about yourself, except for our collection of “cookies” as described in Section 3.

                        We may collect personal information from you on our Sites and Apps or through any other digital or personal communication with you. Information collected by us is voluntarily provided by you and may be integrated with other information you have provided to our franchisees upon signing up for a membership at an Core Fitness® club.

                        If you are an Core Fitness® member, you may choose to integrate information from your membership account with the Sites and our Apps, but you will have the opportunity to opt-in to that integration of information across different platforms. Our Sites and the Apps may also collect general information about your technology interface or preferences (such as the type of browser used or the files requested). Certain information described below is mandatory and if not entered, you will not be able to utilize or participate in our online services or features.

                        The information we may collect through your use of the Sites may include, but is not limited to:</p>

                    <ul className="list-disc text-start mt-4 mb-4">
                        <li>Where the account registration feature is available, your contact information to create an Core Fitness® account, such as your first name, last name, phone number and email address;</li>
                        <li>Where the account registration feature is available, your profile username and password to enter the password-protected portion of the Site;</li>
                        <li>Your transaction history relating to the use of our clubs, purchase of certain products or other information you wish to share with us and integrate with the Site;</li>
                        <li>If integration with your membership is available to you, membership-related information, such as your home address, Core Fitness® location, key FOB number, and membership number;</li>
                        <li>Fitness-related information provided in the membership process, such as your height, weight, general fitness-related goals or other information helpful to achieving your fitness goal;</li>
                        <li>Information regarding training sessions, classes, or other information regarding your utilization of services at the club-level;</li>
                        <li>Where the account registration feature is available, correspondence with your personal training or Core Fitness® club regarding your activity;</li>
                        <li>Information provided by you when you participate in a survey or communication to you regarding your use of the Site, or utilizing Core Fitness® services;</li>
                        <li>Information provided by you to participate in advertising contests or sweepstakes;</li>
                        <li>Various account information related to your Core Fitness® membership to allow you to process payments and/or update credit card, bank account, other payment information, or any other information regarding your profile;</li>
                        <li>If you are a prospective franchisee, we may collect detailed information such as your first name, last name, email address, phone number, address, and general financial information such as liquidity and assets, to evaluate your qualifications for an Core Fitness® franchise;</li>
                        <li>If we offer alternative sign ins, we may collect certain sign in information you have provided to third parties, such as Facebook or Twitter, when you sign in to use our Sites or Apps through these third parties;</li>
                        <li>Computer data or files, often called “cookies,” which may be sent by your web browser and stored on an individual computer to allow our server to “recognize” you through the navigation of the Site and for us to credit your account for various online transactions;</li>
                        <li>Computer data files, often called “web beacons” that are collected from emails or links on third-party sites that allow our server to evaluate the popularity of those links or the information contained in emails or on third-party sites; and</li>
                        <li>Your IP address to measure our website traffic and to help provide a more personalized experience.</li>
                    </ul>

                    <p>

                        The use of information received from Apple’s HealthKit will adhere to the Developer and User Data Policy. The use of information received from Google Fit APIs will adhere to the Google Fit Developer and User Data Policy, including the Limited Use requirements.
                        <br className=""></br>
                        To fully utilize the products and services available through our Apps, you may choose to download separate applications, MapMyFitness and MyFitnessPal, owned and operated by Under Armour, Inc., and may opt to have the information entered into those applications automatically integrate with the Core Fitness® App. Information entered and retained on MapMyFitness and MyFitnessPal is governed by Under Armour’s Privacy Policy. We may also integrate the App with other applications or platforms, such as a wearable device tracking application like FitBit® or HealthKit through the Apple® Watch, or additional applications that are useful to integrate your fitness goals and activity. If you choose to integrate information collected by a separate application or entity, once integrated with our Apps, we will also have the right to access and control such data provided to your Core Fitness® profile. Like MapMyFitness or MyFitnessPal, any of these third party applications will have their own privacy policies and terms regarding the collection, use and maintenance of data entered through that third party application.
                        <br className=""></br>
                        The information we may collect through your use of the Apps may depend on the version of the Apps or the country you are in, but this information may include, but is not limited to:
                        <br className=""></br>
                        Information to register for your App account, such as first name, last name, email address and other Core Fitness® membership information, as well as a username and password to access the App;
                        Your activity history regarding your use of the App, such your visits to clubs, participation in training activities, classes or utilization of other Core Fitness® products or services;
                        Membership-related information, such as your home address, Core Fitness® location, key FOB number, and membership number;
                        Fitness-related information provided in the membership process, such as your height, weight, general fitness-related goals or other information helpful to achieving your fitness goals and other data through integrations with HealthKit and/or Google Fit, to allow us to personalize your app experience and to allow our coaches to measure your progress, ;
                        Anonymized and aggregated fitness and health-related information to formulate health scores / metrics by location, country or region;
                        Certain location or geolocation information pulled directly from your mobile device, your wireless carrier or certain third party providers, to allow tracking of your activity. This collection and tracking may occur even when the Apps or other related applications are not actively open and running;
                        Information regarding personal training sessions and communication with your personal trainer or other Core Fitness® staff;
                        Records of copies of your correspondence, if you contact us;
                        Information provided by you when you participate in a survey or communication to you regarding your use of the App, or utilizing Core Fitness® services;
                        Various account information related to your Core Fitness® membership to allow you to update credit card, bank account, other payment information, or any other information regarding your profile;
                        If we offer alternative sign ins, we may collect certain sign in information you have provided to third parties, such as Facebook or Twitter, when you sign in to use our Apps through these third parties; and
                        Computer data or files, often called “cookies,” which may be sent by your mobile device to allow our server to “recognize” you through the navigation of the Apps and for us to link your activity on the Apps with your membership.
                        Information obtained from your Social Media Accounts<br className=""></br>

                        You may choose to log into your Core Fitness® account on the Sites or through our Apps via certain social media networking services, such as Facebook and Twitter (“Social Media Accounts”). By integrating these Social Media Accounts into your account, we are able to offer you more personalized services, but may also collect certain personal information provided in your Social Media Accounts, such as your profile information, email address, profile picture and friend list. If you do not want us to have access to this information, do not utilize the Social Media Account sign-in feature.
                        <br className=""></br>
                        A Note to Parents
                        <br className=""></br>
                        Our Sites and Apps are not designed for children and we do not knowingly collect information from any person we know is under the age of 13. If we learn that we have received or collected personal information from a child under the age of 13, we will delete that information.
                    </p>
                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>2. How We Use and Share Your Personal Information</h1>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">We will use your personal information to provide the services we offer on the Site and through our Apps, including:</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Processing and updating your membership information, including personal information you provide, credit card information or other electronic payment processing;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Processing your billing information, which may be contracted to our third party payment processing vendor;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Contacting you regarding services you have engaged in or with, including personal training or collection efforts;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Providing you with information regarding club locations nearest to you or certain information regarding your club;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Conducting marketing and research, through direct surveys to you, but also through our or our franchisees communication with you;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Providing you with information you have requested from us, our franchisees or trainers you have engaged with;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Developing and displaying content and advertising tailored to your interests and preferences;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Processing your franchise application and contacting you regarding franchise opportunities;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Conducting contests and sweepstakes;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Sending you electronic communications you have requested, such as text messages, push notifications, notifications through our Apps or through your mobile device;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Providing you with updates and content based on your geo-location information you have provided to us;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Providing assistance with your fitness goals, such as encouragement on workouts, training schedules, recommended dietary changes, and other information to help you reach your fitness goals; and</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Contact you regarding updates to the Sites, Apps, or provide administrative notices to you.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">We strive to offer you an integrated, comprehensive way to manage your lifestyle, fitness goals and activity. In order to operate the Sites and Apps as one seamless experience, however, we must share your personal information with our parent company, subsidiaries, and affiliates to provide you with the integrated services offered through the Sites and Apps. We may also share such information with our franchisees, or other business partners with whom we collaborate or work with to provide specific services to you or if we think the products or services they offer would be of interest to you. We may provide user information to third-party service providers or vendors for purposes of, including without limitation, initiating direct marketing programs on our behalf, data tracking, maintenance or development of our Sites or Apps, development of online products and services, customer service or new product development, or other contracted promotional opportunities provided to our users. We, as well as our franchisees, vendors, or other business partners may use this information for marketing and solicitation purposes.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Your fitness club visit data (for all Core Fitness® clubs that you visit), App data, and personal information may be made available to those clubs’ franchisees, management and employees, or other contracted service providers whom you have engaged to provide services to you. Each of those parties is obligated to maintain the confidentiality of your personal information and is permitted to access and use your personal information solely for the purpose of providing or enhancing services you use through the Core Fitness® club system or Apps. Additionally, you may choose to share personal information from the Site or App with personal trainers or other Core Fitness® members to assist you in evaluating your activities and goals.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">While we try to be selective in working with third parties, we are not responsible for their use of your personal information. Where payments are involved, we must release your credit/debit card information to credit/debit card authorization service providers and associated banks to process your payment for purchases, returns or refunds. We may transfer to our online service providers, personal information you provide to us so that these parties may store and process your personal information.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">We may share aggregate information with vendors, potential advertisers, business partners, or other third parties. Aggregate information does not include personal information.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Except as described in this section, we will not give or sell your personal information to any other party for its use in marketing or solicitation.</p>

                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>Additional Disclosures</h1>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">We may also disclose personal information in any of the following circumstances: (1) in response to a subpoena, search warrant, court order, or other legal process or request, or as may otherwise be required by applicable law or regulation; (2) to protect and defend our rights or property or those of its franchisees, suppliers, related entities, affiliates, business partners, or others; or (3) as we, in our sole discretion, believe is appropriate under exigent circumstances in response to a perceived threat to the personal Privacyty, property, or rights of any other person or organization.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">In addition, since member information on our Sites and in our Apps is a business asset, in the event we are reorganized or sold to or merged with another company, we may sell, assign, or transfer your personal information to a purchaser of all or substantially all of our business assets, or to an affiliate, as applicable.</p>

                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>Our Use of Your “Cookie” Information on the Sites and Apps</h1>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">A “cookie” is a small data file stored on your web browser or on your mobile device that allows us to recognize your computer or mobile device when you visit the Sites or Apps by associating identification numbers with other user information you have provided to us. Some cookies will remain on the hard drive of your computer or mobile device for the duration of your browser or user session, while others will remain until deleted by you. You may also be able to configure your computer or mobile device to limit the collection of these “cookies,” but that limitation may also limit our ability to provide all the services or functionality of the Sites or Apps. Some third party service providers may use “flash cookies,” which are saved on your computer, but cannot be rejected, disabled, turned off, opted out of, or deleted in the same way as regular cookies.To learn how to manage your flash cookie settings, visit the Flash player settings page on Adobe’s website.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">In collecting and maintaining cookie-based information or other information collected directly from your mobile device, such as your geolocation, we are able to:</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Provide you with access to your user preferences, and sign-in on approved devices;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Provide the basic functionality of the Apps, such as displaying your live location and movement;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Installing and monitoring elements of the Apps for security purposes;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Help diagnose problems with the Sites or Apps, administer and improve the Sites or Apps, and measure the use of the Sites or Apps;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Identify your internet provider, page views and other information regarding utilization of the Sites;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Gather other web analytics information related to your and other users use and navigation of the Sites and Apps;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Provide you with relevant content, including advertisements and other offers from third parties;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Aggregate cookie data across all users to track overall visitor traffic patterns and provide this aggregated information to vendors, potential advisors, business partners, new agencies, or other parties to identify interests or plan for technical infrastructure requirements;</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Conduct advertising based on your use of the Site or Apps, as described below; and</p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Otherwise provide improvements and enhancements to the Site.</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">We may also use third-party vendors, such as Google Analytics, to advertise to our users online. These third-party vendors may display Core Fitness® product advertisements on other websites based on your internet usage. More specifically, these vendors use first-party cookies (such as the Google Analytic cookie) and third-party cookies (such as the DoubleClick cookie) together to inform, optimize, and serve ads based on your past visits to the Site or other sites affiliated with Core Fitness® products or services. Any information that these third parties collect via cookies is not linked to any personally identifiable information (name, address, email address, or phone number) we collect or you provide on the website. You can opt-out of Google Analytics for Display Advertising by using Googles Ads Settings.</p>

                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>Our Relationship with the Websites</h1>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">In addition to the integration with certain mobile applications as described in this Privacy Policy, the Sites and Apps may contain links to other web sites or other mobile applications. Additionally, other web sites may contain links to the Sites. We do not review or monitor the web sites linked to the Sites and are not responsible for the contents or privacy policies related to any other web sites. If you visit one of these other web sites, you may want to review the privacy policy on that web site. Where the Sites contains a link to another web site owned and/or operated by us, such website’s use may be subject to different and additional terms of service and privacy policy terms and conditions.</p>

                    <h1 className={`text-xl mt-8 flex justify-center sm:text-5xl`}>Access and Correction of your Personal Information</h1>

                    <p className=" px-8 text-sm text-start sm:text-xl mt-6 ">We strive to maintain the accuracy and integrity of the personal information in our databases and to keep that information up-to-date. We encourage you to promptly update your personal information if it changes. You may edit or deactivate your account information or account at any time by signing into your account on the Sites or the Apps and navigating through your settings. You may request a copy of the personal information we have about you. You may send a request by email to: Core Fitness, Attention: Member Experience Manager at corefit18@gmail.com</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">Methods for Submitting Privacy Requests to Us</p>

                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 ">To submit a verifiable data privacy request to us, please complete the online Data Privacy Request form located here
                    </p>
                    <p className="  px-8 text-sm font-bold text-start sm:text-md mt-6 ">E-mail Us  at:  <a href="mailto: corefit18@gmail.com" className="text-xlunderline text-teal-600"> corefit18@gmail.com </a>
                    </p>
                    <p className="italic  px-8 text-sm font-bold text-start sm:text-xl mt-6 "> We will attempt to respond to and resolve those complaints to your satisfaction.
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Privacy;