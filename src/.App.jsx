import { useState } from "react";
// import { exec } from "child_process";


export default function App() {
  const [inputs, setInputs] = useState({ A1: 0, A2: 0, A3:0, A4: 0, A5: 0, A6: 0, A7: 0, A8: 0, A9: 0, A10: 0 });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/run-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="main container d-flex flex-column justify-content-center align-items-center bg-light">
 <h1 className="text-primary fw-bold mb-4">        
  Opti-Chain AI Prediction
      </h1>

      <form
        onSubmit={handleSubmit}
         className="p-4 w-100"
      >
        <label className="form-label fw-semibold">A1</label>
        <input
          type="number"
          name="A1"
          value={inputs.A1}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter cost"
          required
        />

        <label className="form-label fw-semibold">A2</label>
        <input
          type="number"
          name="A2"
          value={inputs.A2}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />

        
        <label className="form-label fw-semibold">A3</label>
        <input
          type="number"
          name="A3"
          value={inputs.A3}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />


        
        <label className="form-label fw-semibold">A4</label>
        <input
          type="number"
          name="A4"
          value={inputs.A4}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />

        
        <label className="form-label fw-semibold">A5</label>
        <input
          type="number"
          name="A5"
          value={inputs.A5}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />

        
        <label className="form-label fw-semibold">A6</label>
        <input
          type="number"
          name="A6"
          value={inputs.A6}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />

        
        <label className="form-label fw-semibold">A7</label>
        <input
          type="number"
          name="A7"
          value={inputs.A7}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />

        
        <label className="form-label fw-semibold">A8</label>
        <input
          type="number"
          name="A8"
          value={inputs.A8}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />

        
        <label className="form-label fw-semibold">A9</label>
        <input
          type="number"
          name="A9"
          value={inputs.A9}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />


        <label className="form-label fw-semibold">A10</label>
        <input
          type="number"
          name="A10"
          value={inputs.A10}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter time"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary w-100 fw-bold"
        >
          Predict
        </button>
      </form>

      {result && (
        <div className="alert alert-success mt-4 text-center w-75 w-md-50">
          <p className="font-semibold">Predicted Performance: {result}</p>
        </div>
      )}
    </div>
  );
}
