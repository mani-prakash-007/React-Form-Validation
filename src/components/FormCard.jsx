import React from "react";

export const FormCard = () => {
  return (
    <>
      <div>
        <form>
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="border border-black"
          />
          <br />
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            className="border border-black"
          />
          <br />
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="border border-black"
          />
          <br />
          <label htmlFor="DOB" className="font-bold">
            Date of Birth
          </label>
          <br />
          <input
            type="date"
            id="DOB"
            name="DOB"
            className="border border-black"
          />
          <br />
          <label htmlFor="hobbies" className="font-bold">
            Hobbies
          </label>
          <br />
          <input
            type="checkbox"
            id="reading"
            name="hobbies"
            className="border border-black"
          />
          <label htmlFor="reading">Reading</label>
          <br />
          <input
            type="checkbox"
            id="traveling"
            name="hobbies"
            className="border border-black"
          />
          <label htmlFor="traveling">Traveling</label>
          <br />
          <input
            type="checkbox"
            id="cooking"
            name="hobbies"
            className="border border-black"
          />
          <label htmlFor="cooking">Cooking</label>
          <br />
          <input
            type="checkbox"
            id="sports"
            name="hobbies"
            className="border border-black"
          />
          <label htmlFor="sports">Sports</label>
          <br />
          <label htmlFor="gender" className="font-bold">
            Gender
          </label>
          <br />
          <input type="radio" name="gender" id="female" />
          <label htmlFor="female">Female</label>
          <br />
          <input type="radio" name="gender" id="male" />
          <label htmlFor="male">Male</label>
        </form>
        <label htmlFor="nationality" className="font-bold">
          Nationality
        </label>
        <br />
        <select>
          <option value="indian">Indian</option>
          <option value="other">Other</option>
        </select>
        <br />

        <input type="submit" />
      </div>
    </>
  );
};
