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

  // State for the challenge #3
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  

  const bestFeatures = [
    ...document.querySelectorAll('input[name="features"]:checked'),
  ].map((input) => input.value);
  console.log(bestFeatures);
  

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>

      <section className="main__form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            
          }}
        className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
          <ul className="form__group">
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            <li className="form__list">
              <label className="answer" htmlFor="Yellow">
                <input className="form__input" value="Yellow" name='features' type="checkbox" id="yellow" />
                Yellow
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="squeaks">
                <input className="form__input" value="It Squeaks" name='features' type="checkbox" id="squeaks" />
                It squeaks
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="logo">
                <input className="form__input" value="It has a logo" name='features' type="checkbox" id="logo" />
                It has a logo
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="big">
                <input className="form__input" value ="It is big" name='features' type="checkbox" id="big" />
                It is big
              </label>
            </li>
          </ul>

          <ul className="form__group">
            <h3>
              What would you say that are the worst bits of your rubber duck?
            </h3>
            <li className="form__list">
              <label className="answer" htmlFor="Yellow">
                <input className="form__input" type="checkbox" id="yellow" />
                Yellow
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="squeaks">
                <input className="form__input" type="checkbox" id="squeaks" />
                It squeaks
              </label>
            </li>

            <li className="answer__line">
              <label className="answer" htmlFor="logo">
                <input className="form__input" type="checkbox" id="logo" />
                It has a logo
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="big">
                <input className="form__input" type="checkbox" id="big" />
                It is big
              </label>
            </li>
          </ul>

          <ul className="form__group.radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input
                  className="form__input"
                  type="radio"
                  id="consistency1"
                  name="radio"
                />
                1
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input
                  className="form__input"
                  type="radio"
                  id="consistency1"
                  name="radio"
                />
                2
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input
                  className="form__input"
                  type="radio"
                  id="consistency1"
                  name="radio"
                />
                3
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="consistency1">
                <input
                  className="form__input"
                  type="radio"
                  id="consistency1"
                  name="radio"
                />
                4
              </label>
            </li>
          </ul>

          <ul className="form__group.radio">
            <h3>How do you rate your rubber duck colour</h3>
            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input
                  className="form__input"
                  type="radio"
                  id="colour1"
                  name="colour"
                />
                1
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input
                  className="form__input"
                  type="radio"
                  id="colour1"
                  name="colour"
                />
                2
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input
                  className="form__input"
                  type="radio"
                  id="colour1"
                  name="colour"
                />
                3
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="colour1">
                <input
                  className="form__input"
                  type="radio"
                  id="colour1"
                  name="colour"
                />
                4
              </label>
            </li>
          </ul>

          <ul className="form__group.radio">
            <h3>How do you rate your rubber duck logo</h3>
            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input
                  className="form__input"
                  type="radio"
                  id="logo1"
                  name="logo"
                />
                1
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input
                  className="form__input"
                  type="radio"
                  id="logo1"
                  name="logo"
                />
                2
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input
                  className="form__input"
                  type="radio"
                  id="logo1"
                  name="logo"
                />
                3
              </label>
            </li>

            <li className="form__list">
              <label className="consistency1" htmlFor="logo1">
                <input
                  className="form__input"
                  type="radio"
                  id="logo1"
                  name="logo"
                />
                4
              </label>
            </li>
          </ul>

          <ul className="form__group">
            <h3>How do you like to spend time with your rubber duck?</h3>
            <li className="form__list">
              <label className="answer" htmlFor="Swimming">
                <input className="form__input" type="checkbox" id="Swimming" />
                Swimming
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="Bathing">
                <input className="form__input" type="checkbox" id="Bathing" />
                Bathing
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="Chatting">
                <input className="form__input" type="checkbox" id="Chatting" />
                Chatting
              </label>
            </li>

            <li className="">
              <label className="answer" htmlFor="Spend">
                <input className="form__input" type="checkbox" id="Spend" />I
                don`t spend time with it
              </label>
            </li>
          </ul>

          <div className="form__group">
            <h3>What else have you got to say about your rubber duck?</h3>
            <textarea></textarea>
          </div>

          <div className="form__group">
            <h3>Put your name here(if you feel like it):</h3>
            <input className="form__input" type="text" />
          </div>

          <div className="form__group">
            <h3>Leave your email pretty please</h3>
            <input className="form__input" type="email" />
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
