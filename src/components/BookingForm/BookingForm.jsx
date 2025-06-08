import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import styles from "./BookingForm.module.css";

const BookingForm = ({ camperName }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.bookingDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(`Booking for ${camperName} has been submitted successfully!`);

    setFormData({
      name: "",
      email: "",
      bookingDate: "",
      comment: "",
    });
  };

  return (
    <div className={styles.bookingForm}>
      <div className={styles.header}>
        <h3 className={styles.title}>Book your campervan now</h3>
        <p className={styles.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.field}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.field}>
            <div className={styles.dateWrapper}>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                placeholder="Booking date*"
                className={styles.input}
                required
              />
              <Icon
                name="icon-calendar"
                size={20}
                className={styles.calendarIcon}
              />
            </div>
          </div>

          <div className={styles.field}>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              rows={4}
              className={styles.textarea}
            />
          </div>
        </div>

        <Button type="submit" variant="primary" size="large">
          Send
        </Button>
      </form>
    </div>
  );
};

BookingForm.propTypes = {
  camperName: PropTypes.string.isRequired,
};

export default BookingForm;
