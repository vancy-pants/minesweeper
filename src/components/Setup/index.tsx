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
  numberOfRows: Yup.number().required("Required"),
  numberOfColumns: Yup.number().required("Required"),
  numberOfBombs: Yup.number().required("Required"),
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
              placeholder="Enter a Number"
            />
            {errors.numberOfRows && touched.numberOfRows ? (
              <div>{errors.numberOfRows}</div>
            ) : null}
          </div>

          <div className="form-item">
            <label htmlFor="numberOfColumns">Number of Rows</label>
            <Field
              id="numberOfColumns"
              name="numberOfColumns"
              placeholder="Enter a Number"
            />
            {errors.numberOfColumns && touched.numberOfColumns ? (
              <div>{errors.numberOfColumns}</div>
            ) : null}
          </div>

          <div className="form-item">
            <label htmlFor="numberOfBombs">Number of Rows</label>
            <Field
              id="numberOfBombs"
              name="numberOfBombs"
              placeholder="Enter a Number"
            />
            {errors.numberOfBombs && touched.numberOfBombs ? (
              <div>{errors.numberOfBombs}</div>
            ) : null}
          </div>

          <button type="submit">Start Game</button>
        </Form>
      )}
    </Formik>
  );
}
