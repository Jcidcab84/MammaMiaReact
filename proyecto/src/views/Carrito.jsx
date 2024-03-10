import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const { setCar, car } = useContext(Context);

  const navigate = useNavigate();
  const navigate1 = useNavigate();

  const pizzas = new Set();

  const render = [];

  car.forEach((i) => {
    const { name } = i;
    if (!pizzas.has(name)) {
      pizzas.add(name);
      render.push(i);
      i.sum = car.filter((i) => i.name === name).length;
    }
  });

  const add = (bolean, name, object) => {
    if (bolean) setCar((currentObj) => [...currentObj, object]);
    else
      setCar((currentObj) => {
        let deleted = false;
        return currentObj.filter((i) => {
          if (!deleted && i.name === name) {
            deleted = true;
            return false;
          }
          return true;
        });
      });
  };

  const GoToPizza = (name) => {
    console.log(name);
    navigate(`/Pizza/${name}`);
  };

  const GoToHome = () => {
    navigate1(`/`);
  };

  const Total = () => {
    let sum = 0;
    for (const i of car) sum = sum + i.price;

    return sum.toLocaleString("de-DE");
  };

  return (
    <>
      {car.length == 0 ? (
        <div className="car0">
          <p>
            ¡Ops! Esto parece estar vacío{" "}
            <p className="tohome" onClick={() => GoToHome()}>
              Ir a añadir
            </p>
          </p>
        </div>
      ) : (
        <section>
          <p className="detalle_del_pedido">Detalle del pedido:</p>
          {render.map((i, x) => (
            <div className="carrito-pizza" key={i.name}>
              <div className="carrito-pizza-left">
                <img src={i.img} alt={i.name} />
                <p
                  onClick={() => {
                    GoToPizza(i.name);
                  }}
                  id="first-letter"
                >
                  {i.name}
                </p>
              </div>
              <div className="carrito-pizza-right">
                <p>${(i.sum * i.price).toLocaleString("de-DE")}</p>
                <div className="carrito-pizza-right-int">
                  <button
                    onClick={() => add(false, i.name, i)}
                    className="button-carrito-1"
                  >
                    -
                  </button>
                  <h5>{i.sum}</h5>
                  <button
                    onClick={() => add(true, i.name, i)}
                    className="button-carrito-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <p className="p-total">Total: ${Total()}</p>
          <button className="button-pagar">Ir a pagar</button>
        </section>
      )}
    </>
  );
};
export default Carrito;
