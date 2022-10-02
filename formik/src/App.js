import { useFormik } from "formik";
import "./App.css";

function App() {

  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstName: "Ahmed",
          lastName: "Karaçor",
          email: "ahmedkaracor@gmail.com",
          gender: "male",
          hobies: [],
          country: "Türkiye",
    },
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>

          <form onSubmit={handleSubmit}>

            <label htmlFor="lastName">Soyisim</label>
            <input
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <br />
            <br />

            <label htmlFor="firstName">İsim</label>
            <input
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <br />
            <br />

            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />
            <br />
            <br />

            <span>Kız</span>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />

            
            <span>Erkek</span>
            <input
              type="radio"
              name="gender"
              onChange={handleChange}
              value="male"
              checked={values.gender === "male"}
            />


            <div>
              Fotball
              <input
                type="checkbox"
                name="hobies"
                value="Fotball"
                onChange={handleChange}
              />
            </div>
            <div>
              Swimming
              <input
                type="checkbox"
                name="hobies"
                value="Swimming"
                onChange={handleChange}
              />
            </div>
            <div>
              Reading
              <input
                type="checkbox"
                name="hobies"
                value="Reading"
                onChange={handleChange}
              />
            </div>
            <br />
            <br />

            <select
              name="country"
              value={values.country}
              onChange={handleChange}
            >
              <option value="turkiye">Türkiye</option>
              <option value="ingiltere">İngiltere</option>
              <option value="usa">USA</option>
            </select>
            <br />
            <br />

            <button type="submit">Onayla</button>

            <br />
            <br />
            <code>{JSON.stringify(values)}</code>
          </form>
    </div>
  );
}

export default App;
