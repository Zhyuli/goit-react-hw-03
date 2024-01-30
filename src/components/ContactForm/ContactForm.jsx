import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
// import * as Yup from 'yup';

export const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd({ id: nanoid(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="numberFieldId">Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>

    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="username" />
    //   <button type="submit">Add user</button>
    // </form>
  );
};
