import React from 'react'

export default function About() {
    return (
        <div id ='about'>
            <div className ='about-text'>
            <br></br>       
            <br></br>
            <br></br>
            <h1> <a href="https://users.encs.concordia.ca/~eceweb/capstone/projectshow.php?id=537">Description</a></h1>
            <p> 	A fundamental problem in logistics is the Last Mile Delivery Problem: "The last mile problem is, while customers want shipping that is free and fast, it also happens to be the most expensive and time-consuming part of the delivery process—up to 53% of the total shipping cost". The estimated market size in 2018 was 31.25 Billion USD, and continues to grow. We plan to use an Nvidia Jetson board to perform the real-time computation involved. Simulations to test and develop this project will be done using tools like ROS, CoppeliaSim, and any other tools that we may find useful. Our test run will be delivering McDonald s near Concordia to hungry Engineering students studying late at night. When a company like McDonald s uses this product, the user can place an order for a meal and indicate a pick up location at the EV building, and McDonald s workers will prepare the meal and load the vehicle, then send it to the pickup location. The robot will navigate its way from the restaurant to the pick up location by following the sidewalks through it’s path finding, avoid obstacles through a combination of Q-learning, proximity sensors, and computer vision to complete the drop off, finally then returning to its start point back at the restaurant to move on to another delivery. This concept can be expanded to deliver groceries or any other goods from a nearby store to a client’s home, effectively solving the last mile delivery problem. With our existing knowledge on machine learning, AI, microcontrollers, and control systems, as well as a strong drive to solve problems, we feel strongly that this project idea is both feasible and sufficiently challenging to build for Capstone. To resolve this issue, our group is proposing to build an autonomous carrier robot whose purpose will be to resolve the "last mile delivery problem". Our carrier robot will do food deliveries by determining what is the most efficient path to reach its destination. This robot will obey street laws such as stop lights, avoid obstacles such as people, vehicles, stationary objects, etc with an acceptable level of safety.</p>
            <h1> <a href="https://github.com/DeliveryRobot2022">Our Vision</a></h1>
            </div>

            
        </div>
    )
}
