import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { getProfileByAccount } from "../../redux/action/Profile";

const Item = ({ item }) => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  console.log(profile);
  console.log(item);

  const providerId = item.account_id;

  useEffect(() => {
    dispatch(getProfileByAccount(providerId));
  }, [dispatch, providerId]);

  const viewItem = (e) => {
    e.preventDefault();
    navigate(`/service/${item.id}`);
  };

  return (
    <div className="item--container">
      <div className="item--card__photo">
        <img src={item.photo} alt="service" className="img" />
      </div>
      <div className="item--card__content">
        <div className="item--card__view">
          <p className="item--card__name">{item.name}</p>
          <button onClick={viewItem}>View Service</button>
        </div>
        <p className="item--card__description">{item.description}</p>
        <div className="item--consumer__details">
          <p>Consumer count: {item.consumer_count}</p>
          <p>Delivery Point: {item.delivery_point}</p>
        </div>
        <div className="item--service__details">
          <p>Service duration: {item.service_duration}</p>
          <p>Service readiness: {item.service_readiness}</p>
        </div>
        <div className="item--support__details">
          <p>Support language: {item.support_language}</p>
          <p>Support team: {item.support_team}</p>
        </div>
        <div className="item--contact__details">
          <p>Price: {item.price}</p>
          <button>Request Service</button>
          <>
            <button onClick={handleShow}>Contact Provider</button>
            {profile.map((profile) => {
              const { account_id, about, email } = profile;
              return (
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contact Provider</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {account_id === item.account_id ? (
                      <div>
                        <p>{about}</p>
                        <p>{email}</p>
                      </div>
                    ) : (
                      <p>No profile found</p>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Item;
