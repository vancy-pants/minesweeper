import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./styles.css";

interface SetupProps {
  onStartGame: (
    numberOfRows: number,
    numberOfColumns: number,
    numberOfBombs: number
  ) => void;
}

interface InitialSetupValues {
  numberOfRows: number;
  numberOfColumns: number;
  numberOfBombs: number;
}

const initialValues: InitialSetupValues = {
  numberOfRows: 3,
  numberOfColumns: 3,
  numberOfBombs: 1,
};

const SetupSchema = Yup.object().shape({
  numberOfRows: Yup.number()
    .min(1, "Must be greater than 0")
    .max(10, "Must be less than 11")
    .required("Required"),
  numberOfColumns: Yup.number()
    .min(1, "Must be greater than 0")
    .max(10, "Must be less than 11")
    .required("Required"),
  numberOfBombs: Yup.number()
    .min(1, "Must be greater than 0")
    .max(10, "Must be less than 11")
    .required("Required"),
});

export default function Setup({ onStartGame }: SetupProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SetupSchema}
      onSubmit={(values) => {
        const { numberOfRows, numberOfColumns, numberOfBombs } = values;
        onStartGame(numberOfRows, numberOfColumns, numberOfBombs);
      }}
    >
      {({ errors, touched }) => (
        <Form className="setup-wrapper">
          <div className="form-item">
            <label htmlFor="numberOfRows">Number of Rows</label>
            <Field
              id="numberOfRows"
              name="numberOfRows"
              type="number"
              placeholder="Enter a Number"
            />
            {errors.numberOfRows && touched.numberOfRows ? (
              <div className="error">{errors.numberOfRows}</div>
            ) : null}
          </div>

          <div className="form-item">
            <label htmlFor="numberOfColumns">Number of Columns</label>
            <Field
              id="numberOfColumns"
              name="numberOfColumns"
              type="number"
              placeholder="Enter a Number"
            />
            {errors.numberOfColumns && touched.numberOfColumns ? (
              <div className="error">{errors.numberOfColumns}</div>
            ) : null}
          </div>

          <div className="form-item">
            <label htmlFor="numberOfBombs">Number of Bombs</label>
            <Field
              id="numberOfBombs"
              name="numberOfBombs"
              type="number"
              placeholder="Enter a Number"
            />
            {errors.numberOfBombs && touched.numberOfBombs ? (
              <div className="error">{errors.numberOfBombs}</div>
            ) : null}
          </div>

          <button type="submit">Start Game</button>
        </Form>
      )}
    </Formik>
  );
}
