import { useState } from "react";
function Main() {
  const initialForm = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: [],
  };
  
  type Feature = string;
  type Consistency= number;

  // State for the challenge #3
  let  [open, setOpen] = useState(false);
  let [form, setForm] = useState(initialForm);
  let [bestFeatures, setBestFeatures] = useState<Feature[]>([]);
  let [worstFeatures, setWorstFeatures] = useState<Feature[]>([]);
  let [consistency, setConsistency] = useState<Consistency>(0);
  let [colour,setColour] = useState(0)
  let [logo, setLogo] = useState(0);
  let [timeSpent,setTimeSpent] = useState<string[]>([])
  let [review,setReview] = useState("")
  let [email,setEmail] = useState("")
  let [username,setUsername] = useState("")

  



  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <h3>{username} Answers</h3>
        <ul>
          <li>
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            {username} said that the best features of his rubber duck are:
            {bestFeatures.length > 0 ? `${bestFeatures} ` : null}
          </li>
          <li>
            <h3>
              What would you say that are the worst bits of your rubber duck?
            </h3>
            {username} said that the worst bits of the rubber duck are:{" "}
            {worstFeatures.length > 0 ? `${worstFeatures} ` : null}
          </li>
          <li>
            <h3>How do you rate your rubber duck consistency?</h3>
            {consistency}
          </li>
          <li>
            <h3>How do you rate your rubber duck color?</h3>
            {colour}
          </li>

          <li>
            <h3>How do you rate your rubber duck logo?</h3>
            {logo}
          </li>

          <li>
            <h3>How do you spend your time with the rubber duck?</h3>
            {timeSpent.length > 0 ? `${timeSpent} ` : null}
          </li>

          <li>
            <h3>Any review?</h3>
            {review}
          </li>
        </ul>
      </section>

      <section className="main__form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const bestFeatures = [
              ...document.querySelectorAll('input[name="features"]:checked'),
            ].map((input) => input.value);
            setBestFeatures(bestFeatures);
            console.log(bestFeatures);

            const worstFeatures = [
              ...document.querySelectorAll(
                'input[name="worstFeature"]:checked'
              ),
            ].map((feature) => feature.value);
            setWorstFeatures(worstFeatures);
            console.log(worstFeatures);

            const consistency = document.querySelector(
              'input[name="radio"]:checked'
            ).value;
            setConsistency(consistency);
            console.log(consistency);

            const colour = document.querySelector(
              'input[name="colour"]:checked'
            ).value;
            setColour(colour);
            console.log(colour);

            const logo = document.querySelector(
              'input[name="logo"]:checked'
            ).value;
            setLogo(parseInt(logo));
            console.log(logo);

            const timeSpent = [
              ...document.querySelectorAll('input[name="timeSpent]:checked'),
            ].map((time) => time.value);
            setTimeSpent(timeSpent);
            console.log(timeSpent);

            const review = document.querySelector("textarea").value;
            setReview(review);

            const email = document.querySelector('input[type="email"]').value;
            setEmail(email);

            const username = document.querySelector('input[type="text"]').value;
            setUsername(username);
            console.log(username);
          }}
          className="form"
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          <ul className="checkbox-list ">
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            <li className="">
              <label htmlFor="Yellow">
                <input
                  value="Yellow"
                  name="features"
                  type="checkbox"
                  id="yellow"
                />
                Yellow
              </label>
            </li>

            <li className="">
              <label htmlFor="squeaks">
                <input
                  value="It Squeaks"
                  name="features"
                  type="checkbox"
                  id="squeaks"
                />
                It squeaks
              </label>
            </li>

            <li className="">
              <label htmlFor="logo">
                <input
                  value="It has a logo"
                  name="features"
                  type="checkbox"
                  id="logo"
                />
                It has a logo
              </label>
            </li>

            <li className="">
              <label htmlFor="big">
                <input
                  value="It is big"
                  name="features"
                  type="checkbox"
                  id="big"
                />
                It is big
              </label>
            </li>
          </ul>

          <ul className="form__group ">
            <h3>
              What would you say that are the worst bits of your rubber duck?
            </h3>
            <li>
              <label htmlFor="Yellow">
                <input
                  name="worstFeature"
                  type="checkbox"
                  id="yellow"
                  value="Yellow"
                />
                Yellow
              </label>
            </li>

            <li className="">
              <label htmlFor="squeaks">
                <input
                  name="worstFeature"
                  type="checkbox"
                  id="squeaks"
                  value="It squeaks"
                />
                It squeaks
              </label>
            </li>

            <li className="answer__line">
              <label htmlFor="logo">
                <input
                  name="worstFeature"
                  type="checkbox"
                  id="logo"
                  value="It has a logo"
                />
                It has a logo
              </label>
            </li>

            <li className="">
              <label htmlFor="big">
                <input
                  name="worstFeature"
                  type="checkbox"
                  id="big"
                  value="It is big"
                />
                It is big
              </label>
            </li>
          </ul>

          <ul className="form__group.radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input type="radio" id="consistency1" name="radio" value="1" />1
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input type="radio" id="consistency1" name="radio" value="2" />2
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input type="radio" id="consistency1" name="radio" value="3" />3
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input type="radio" id="consistency1" name="radio" value="4" />4
              </label>
            </li>
          </ul>

          <ul className="form__group.radio">
            <h3>How do you rate your rubber duck colour</h3>
            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input type="radio" id="colour1" name="colour" value="1" />1
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input type="radio" id="colour1" name="colour" value="2" />2
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input type="radio" id="colour1" name="colour" value="3" />3
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input type="radio" id="colour1" name="colour" value="4" />4
              </label>
            </li>
          </ul>

          <ul className="form__group.radio">
            <h3>How do you rate your rubber duck logo</h3>
            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input value="1" type="radio" id="logo1" name="logo" />1
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input value="2" type="radio" id="logo1" name="logo" />2
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input value="3" type="radio" id="logo1" name="logo" />3
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input value="4" type="radio" id="logo1" name="logo" />4
              </label>
            </li>
          </ul>

          <ul className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <li className="form__list">
              <label htmlFor="Swimming">
                <input
                  name="timeSpent"
                  value="Swimming"
                  type="checkbox"
                  id="time1"
                />
                Swimming
              </label>
            </li>

            <li className="">
              <label htmlFor="Bathing">
                <input
                  name="timeSpent"
                  value="Bathing"
                  type="checkbox"
                  id="time2"
                />
                Bathing
              </label>
            </li>

            <li className="">
              <label htmlFor="Chatting">
                <input
                  name="timeSpent"
                  value="Chatting"
                  type="checkbox"
                  id="time3"
                />
                Chatting
              </label>
            </li>

            <li className="">
              <label htmlFor="Spend">
                <input
                  name="timeSpent"
                  value="I don`t spend time with it"
                  type="checkbox"
                  id="time4"
                />
                I don`t spend time with it
              </label>
            </li>
          </ul>

          <div className="form__group">
            <h3>What else have you got to say about your rubber duck?</h3>
            <textarea required></textarea>
          </div>

          <div className="form__group">
            <h3>Put your name here(if you feel like it):</h3>
            <input type="text" required />
          </div>

          <div className="form__group">
            <h3>Leave your email pretty please</h3>
            <input type="email" required />
          </div>

          <div className="">
            <button className="form__submit">Submit Survey!</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
