import React from 'react'

export default function About() {
    return (
        <>
            <br />
            <h3>What type of service do I need?</h3>
            Car servicing can be tricky to keep track of when you also have to schedule your annual MOT. Though servicing isn't a legal requirement like your MOT, there's no denying the huge safety benefits.

            Your mechanic will look out for any issues with your brake pads and handbrake, and top up and change those all important fluid levels like engine oil, coolant and brake fluid.

            Since most car owners aren't necessarily handy with oil changes, replacing oil filters, checking shock absorbers or spark plugs, the smooth running of your car often depends on these regular maintenance checks.

            Varying from the recommended service schedule can impact both your warranty and resale value, and can even lead to corrosion of parts that needed repaired or replaced, it's extra important to choose the right kind of service.

            <br />
            <br />
            <div class="accordion d" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <h6>Interim Service</h6>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>Interim Services are usually recommended for high mileage drivers. Driving more miles puts extra strain on the car, so it’s especially important to get that brake check. As you're going to see more wear and tear reflected in the various aspects of your car, you may even need replacement parts sooner than expected.</strong>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <h6>Full Service</h6>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>If you drive an average number of miles, or recently had a Major Service on your car, you’re likely best with a Full Service.

                                In addition to everything assessed in the Interim Service, they’ll also look over the condition of your radiator, and carry out an air filter change. You can check your V5C logbook for your full service history to determine if this is the best option.</strong>


                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h6>Major Service</h6>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>If you’ve had a Full Service for the last couple of years, it’s likely about time that you booked in for a Major Service.

                                As the most substantial type of service, there’s little a mechanic won’t check with a Major Service. They’ll replace most fluids and filters, carry out comprehensive safety checks, change your brake fluid, and even complete a cabin filter replacement.

                                They’re carried out every 2 years, or after 24,000 miles if this comes first. But if you suspect there’s greater issues going on with your car, there’s no harm in booking a Major Service over a Full Service.

                                .</strong>
                        </div>
                    </div>
                </div>
            </div>


            <br />

            <h3>What is the difference between an interim and full service?</h3>
            There are a number of aspects that differentiate an interim and full service.  The first is most obvious when considering how often you should service your car, as interim services are carried out every 6 months, while a full service is annual. They both check over different aspects of your car, so for a detailed guide, check the difference between an interim and full service.


            <h3>What type of car service will I need for my lease car?</h3>
            Generally, a car lease contract lasts 3 years. In this time, you’ll likely need a couple of interim services, 2 full services, and 1 major service.

            You should check the manufacturer guidelines for your specific model and ensure you follow the right schedule for servicing your lease car to avoid lease car return charges at the end of your contract. If you take out a car lease maintenance package, you often get the car service costs included.

            Keep in mind that if you have a high mileage lease, you may need more servicing carried out than a standard mileage car.

            <h3>Conclusion</h3>
            Working out which type of car service you need for your car depends on a bunch of things like your mileage so far, how old your car is, the make and model, and what the last type of car service you had done.
            <br />
        </>
    )
}
