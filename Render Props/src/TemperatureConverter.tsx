// Pass JSX elements to components through props

import React from 'react';

/*
  Tradeoffs (+ Cons) (- Pros) of Render Props pattern:
  (+) Separation of concerns: Using the Render Props pattern allows us to keep logic that we want to re-use all in one place. This reduces the risk of accidentally spreading bugs throughout the application by duplicating code over and over, potentially introducing new bugs each time
  (+) Reusability: The Render Props pattern allows us to re-use logic in multiple places throughout our application. This is especially useful when we have logic that we want to use in multiple components that are not related to each other
  (+) Solution to HOC problems: The Render Props pattern solves the problems that the HOC pattern has with prop drilling, naming collisions, and inflexibility
  (-) Over-engineering: If you have a small app, using the Render Props pattern can be overkill.
  (-) Not necessary: Hooks changed the way we can add reusability and data sharing to components, which can replace the render props pattern in many cases.
  */
export function Kelvin({ value }) {
  return (
    <div className="temp-card">
      The temperature in Kelvin is: <span className="temp">{value}K</span>
    </div>
  );
}

export function Fahrenheit({ value }) {
  return (
    <div className="temp-card">
      The temperature in Fahrenheit is:
      <span className="temp">{value}°F</span>
    </div>
  );
}

export function TemperatureConverter(props) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="card">
      <input
        type="number"
        placeholder="Degrees Celsius"
        onChange={(e) => setValue(parseInt(e.target.value) || 0)} // If parseInt(e.target.value) is NaN (the input is empty), then use 0
      />
      {/* {props.renderKelvin ? props.renderKelvin(Math.floor(value + 273.15)): null} */}
      {/* {props.renderFahrenheit ? props.renderFahrenheit(Math.floor((value * 9) / 5 + 32)): null} */}
      {/* if renderKelvin or renderFahrenheit not passed then don't render there components  */}
      {props.renderKelvin?.call(this, Math.floor(value + 273.15))}
      {props.renderFahrenheit?.call(this, Math.floor((value * 9) / 5 + 32))}
    </div>
  );
}

export default function TemperatureConverterWithRenderProps() {
  return (
    <div className="container">
      <TemperatureConverter 
        renderKelvin={(value) => <Kelvin value={value} />}
        renderFahrenheit={(value) => <Fahrenheit value={value} />}
      />
    </div>
  );
}
