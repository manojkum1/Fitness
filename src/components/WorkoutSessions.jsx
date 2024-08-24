import React from "react";

const WorkoutSessions = () => {
  const items = [
    {
      id: 1,
      title: "High-Intensity Interval Training (HIIT)",
      description:
        "HIIT involves short bursts of intense exercise followed by brief periods of rest or lower-intensity exercise. It's known for burning calories efficiently and improving cardiovascular health.",
    },
    {
      id: 2,
      title: "CrossFit",
      description:
        " CrossFit is a fitness regimen that combines elements of weightlifting, cardiovascular exercise, and bodyweight movements. It's structured as a high-intensity workout with varied functional movements performed at a high intensity level.",
    },
    {
      id: 3,
      title: "Strength and Conditioning Bootcamps:",
      description:
        " These bootcamps focus on improving muscular strength, endurance, and overall fitness through a combination of resistance training exercises using bodyweight, dumbbells, kettlebells, and other equipment. They often include circuit-style workouts to target different muscle groups.",
    },
    {
      id: 4,
      title: "Yoga",
      description:
        "Yoga is a holistic practice originating from India, combining physical postures, breathing exercises, and meditation to enhance flexibility, strength, relaxation, and mental clarity",
    },
  ];
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Top workout sessions in the gym include strength training, cardio
          workouts, high-intensity interval training (HIIT), functional
          training, and flexibility exercises.{" "}
        </p>
        <img src="/img5.jpg" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Featured bootcamp" typically refers to a specialized fitness program
          or workout regimen that is highlighted or prominently offered by a gym
          or fitness facility
        </p>
        <div className="bootcamps">
          {items.map((item, id) => (
            <div key={id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
