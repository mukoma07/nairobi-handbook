import { useState } from "react";

function Tools() {
  const [rent, setRent] = useState(20000);
  const [food, setFood] = useState(12000);
  const [transport, setTransport] = useState(6000);
  const [internet, setInternet] = useState(3000);
  const [entertainment, setEntertainment] = useState(4000);

  const total =
    rent +
    food +
    transport +
    internet +
    entertainment;

  return (
    <section className="tools-section" id="tools">
      <div className="tools-container">

        <div className="tools-heading">
          <p className="section-label">NAIROBI TOOLS</p>

          <h2>
            Make better decisions with numbers.
          </h2>

          <p>
            Simple tools designed around the real costs of living,
            working and moving around Nairobi.
          </p>
        </div>

        <div className="tools-grid">

          {/* COST OF LIVING */}

          <div className="calculator-card">
            <div className="calculator-header">
              <span className="tool-icon">🧮</span>

              <span className="tool-status">
                WORKING
              </span>
            </div>

            <h3>Nairobi Cost of Living</h3>

            <p>
              Estimate how much you could spend every month
              based on your lifestyle.
            </p>

            <div className="calculator-fields">

              <label>
                Rent
                <div className="input-wrapper">
                  <span>KSh</span>

                  <input
                    type="number"
                    value={rent}
                    onChange={(event) =>
                      setRent(Number(event.target.value))
                    }
                  />
                </div>
              </label>

              <label>
                Food
                <div className="input-wrapper">
                  <span>KSh</span>

                  <input
                    type="number"
                    value={food}
                    onChange={(event) =>
                      setFood(Number(event.target.value))
                    }
                  />
                </div>
              </label>

              <label>
                Transport
                <div className="input-wrapper">
                  <span>KSh</span>

                  <input
                    type="number"
                    value={transport}
                    onChange={(event) =>
                      setTransport(Number(event.target.value))
                    }
                  />
                </div>
              </label>

              <label>
                Internet
                <div className="input-wrapper">
                  <span>KSh</span>

                  <input
                    type="number"
                    value={internet}
                    onChange={(event) =>
                      setInternet(Number(event.target.value))
                    }
                  />
                </div>
              </label>

              <label>
                Entertainment
                <div className="input-wrapper">
                  <span>KSh</span>

                  <input
                    type="number"
                    value={entertainment}
                    onChange={(event) =>
                      setEntertainment(Number(event.target.value))
                    }
                  />
                </div>
              </label>

            </div>

            <div className="calculator-result">
              <span>Estimated monthly cost</span>

              <strong>
                KSh {total.toLocaleString()}
              </strong>
            </div>
          </div>

          {/* RENT CALCULATOR */}

          <div className="tool-card">
            <span className="tool-icon">🏠</span>

            <h3>Rent Affordability</h3>

            <p>
              Find out how much rent you can reasonably afford
              based on your income.
            </p>

            <button>
              Coming soon →
            </button>
          </div>

          {/* SALARY CALCULATOR */}

          <div className="tool-card">
            <span className="tool-icon">💰</span>

            <h3>Salary Calculator</h3>

            <p>
              Estimate your take-home pay after common Kenyan
              deductions.
            </p>

            <button>
              Coming soon →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Tools;