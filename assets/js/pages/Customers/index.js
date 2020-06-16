import React, { useEffect, useState } from "react";
import axios from "axios";
const Customers = (props) => {
  const [customers, setCustomers] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    axios
      .get("/api/customers?pagination=true")
      .then((response) => {
        setTotalItems(response.data["hydra:totalItems"]),
          setCustomers(response.data["hydra:member"]);
      })
      .catch((error) => console.log(error.response));
  }, []);

  const itemsPerPage = 20;
  const pageCount = Math.ceil(customers.length / itemsPerPage);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div className="container-fluid" style={{ paddingTop: 50 }}>
      <h3>Liste des clients</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Prenom</th>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Société</th>
            <th scope="col">Factures</th>
            <th scope="col">Montant total</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <th scope="row">{customer.id}</th>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.company ? customer.company : "non renseigné"}</td>
                <td>{customer.invoices.length}</td>
                <td>{customer.totalAmount.toLocaleString()} €</td>
                <td>
                  <button className="btn btn-sm btn-primary">Editer</button>
                </td>
                <td>
                  <button className="btn btn-sm btn-warning">Supprimer</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Précédent</span>
          </li>
          {pages.map((page, index) => (
            <li key={page} className="page-item">
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a className="page-link" href="#">
              Suivant
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Customers;
