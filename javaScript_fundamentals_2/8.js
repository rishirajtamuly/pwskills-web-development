/* Let’s say you are working for an event management company. As a web developer, you need to build a
countdown timer for an upcoming event. You need to build a function that calculates the number of days
between the current date and the event's start date. */




function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);
    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysRemaining;
}

const eventDate = '2023-12-31';
console.log(`Number of day's remaining for the event is ${calculateRemainingDays(eventDate)}`);
